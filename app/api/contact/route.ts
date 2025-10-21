import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const nom = formData.get("nom") as string
    const prenom = formData.get("prenom") as string
    const email = formData.get("email") as string
    const numero = formData.get("numero") as string
    const cvFile = formData.get("cv") as File | null

    if (!nom || !prenom || !email || !numero) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      )
    }

    // Création du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true si port 465, false si 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const emailHtml = `
      <h2>Nouvelle candidature de partenariat</h2>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Prénom:</strong> ${prenom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Numéro:</strong> ${numero}</p>
      <p><strong>CV inclus:</strong> ${cvFile ? "Oui" : "Non"}</p>
    `

    const attachments = []

    if (cvFile) {
      const bytes = await cvFile.arrayBuffer()
      const buffer = Buffer.from(bytes)

      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type
      })
    }

    const info = await transporter.sendMail({
      from: `"La Solution en Énergie" <${process.env.SMTP_FROM}>`,
      to: ["contact@courtier-energie-pro.fr", "contact@lasolutionenenergie.fr"],
      //to: ["dev@viratec.fr"],
      subject: `Nouvelle candidature: ${prenom} ${nom}`,
      html: emailHtml,
      attachments: attachments
    })

    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (error) {
    console.error("Erreur d'envoi SMTP:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du formulaire" },
      { status: 500 }
    )
  }
}
