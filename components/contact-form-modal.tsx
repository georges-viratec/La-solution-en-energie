"use client"

import { useState } from "react"
import { X, Upload, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    numero: ""
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("nom", formData.nom)
      formDataToSend.append("prenom", formData.prenom)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("numero", formData.numero)
      if (cvFile) {
        formDataToSend.append("cv", cvFile)
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend
      })

      if (response.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          onClose()
          setFormData({ nom: "", prenom: "", email: "", numero: "" })
          setCvFile(null)
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      // Limit to 5MB
      if (file.size > 5 * 1024 * 1024) {
        alert("Le fichier est trop volumineux. Maximum 5MB.")
        return
      }
      setCvFile(file)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Nous rejoindre</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Remplissez le formulaire pour devenir partenaire
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nom"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Votre nom"
            />
          </div>

          {/* Prénom */}
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-foreground mb-2">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="prenom"
              required
              value={formData.prenom}
              onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Votre prénom"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="votre@email.com"
            />
          </div>

          {/* Numéro */}
          <div>
            <label htmlFor="numero" className="block text-sm font-medium text-foreground mb-2">
              Numéro <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="numero"
              required
              value={formData.numero}
              onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="06 12 34 56 78"
            />
          </div>

          {/* CV Upload */}
          <div>
            <label htmlFor="cv" className="block text-sm font-medium text-foreground mb-2">
              CV (optionnel)
            </label>
            <div className="relative">
              <input
                type="file"
                id="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="cv"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg border-2 border-dashed border-border bg-muted/30 hover:bg-muted/50 text-foreground cursor-pointer transition-all"
              >
                <Upload className="w-4 h-4" />
                <span className="text-sm">
                  {cvFile ? cvFile.name : "Télécharger votre CV (PDF, DOC)"}
                </span>
              </label>
              {cvFile && (
                <button
                  type="button"
                  onClick={() => setCvFile(null)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Maximum 5MB</p>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-sm">
              ✓ Votre demande a été envoyée avec succès!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-sm">
              ✗ Une erreur est survenue. Veuillez réessayer.
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-600 text-foreground font-semibold py-3 rounded-lg transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer ma candidature"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
