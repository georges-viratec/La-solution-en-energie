import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const nom = formData.get("nom") as string
    const prenom = formData.get("prenom") as string
    const email = formData.get("email") as string
    const numero = formData.get("numero") as string
    const cvFile = formData.get("cv") as File | null

    // Validate required fields
    if (!nom || !prenom || !email || !numero) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailHtml = `
      <h2>Nouvelle candidature de partenariat</h2>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Prénom:</strong> ${prenom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Numéro:</strong> ${numero}</p>
      <p><strong>CV inclus:</strong> ${cvFile ? "Oui" : "Non"}</p>
    `

    // Prepare attachments if CV is provided
    const attachments = []
    if (cvFile) {
      const bytes = await cvFile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      attachments.push({
        filename: cvFile.name,
        content: buffer
      })
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: "La Solution en Énergie <onboarding@resend.dev>", // Pour les tests - Change to your verified domain en production
      to: ["contact@courtier-energie-pro.fr"],
      subject: `Nouvelle candidature: ${prenom} ${nom}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du formulaire" },
      { status: 500 }
    )
  }
}
