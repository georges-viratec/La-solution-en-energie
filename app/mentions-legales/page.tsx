import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          Mentions Légales
        </h1>

        <div className="prose prose-slate max-w-none">
          {/* Éditeur du site */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
            <div className="text-foreground/80 space-y-2">
              <p><strong>Raison sociale :</strong> La Solution en Énergie</p>
              <p><strong>Forme juridique :</strong> [À COMPLÉTER - ex: SAS, SARL, etc.]</p>
              <p><strong>Capital social :</strong> [À COMPLÉTER]</p>
              <p><strong>Siège social :</strong> 17 rue Louise Michel, 92300 Levallois-Perret</p>
              <p><strong>SIRET :</strong> 951 327 253</p>
              <p><strong>RCS :</strong> [À COMPLÉTER]</p>
              <p><strong>Numéro TVA intracommunautaire :</strong> [À COMPLÉTER]</p>
              <p><strong>Téléphone :</strong> 01 89 70 56 32</p>
              <p><strong>Email :</strong> recrutement@lasolutionenenergie.fr</p>
              <p><strong>Directeur de la publication :</strong> [À COMPLÉTER - Nom et Prénom]</p>
            </div>
          </section>

          {/* Hébergeur */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Hébergement</h2>
            <div className="text-foreground/80 space-y-2">
              <p>Le site est hébergé par :</p>
              <p><strong>Vercel Inc.</strong></p>
              <p>340 S Lemon Ave #4133</p>
              <p>Walnut, CA 91789, USA</p>
              <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriété intellectuelle</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est formellement interdite
                sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                Les marques et logos figurant sur le site sont des marques déposées.
                Toute reproduction totale ou partielle de ces marques ou de ces logos effectués à partir des éléments du site
                sans l'autorisation expresse de La Solution en Énergie est prohibée.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Protection des données personnelles</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter par email à : contact@courtier-energie-pro.fr
              </p>
              <p>
                Pour plus d'informations, consultez notre <Link href="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</Link>.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
              </p>
              <p>
                Pour en savoir plus, consultez notre <Link href="/cookies" className="text-primary hover:underline">Politique de cookies</Link>.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation de responsabilité</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                La Solution en Énergie s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour
                des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
              </p>
              <p>
                Toutefois, La Solution en Énergie ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                mises à disposition sur ce site.
              </p>
              <p>
                En conséquence, La Solution en Énergie décline toute responsabilité pour toute imprécision, inexactitude ou omission
                portant sur des informations disponibles sur le site.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Liens hypertextes</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet.
                Les liens vers ces autres ressources vous font quitter le site.
              </p>
              <p>
                La Solution en Énergie ne saurait être responsable du contenu de ces sites et des éventuels dommages
                pouvant résulter de l'utilisation de ces sites.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Droit applicable et juridiction compétente</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p>
                En cas de litige et à défaut d'accord amiable, le tribunal compétent sera celui du ressort du siège social de La Solution en Énergie.
              </p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <section className="mb-8">
            <p className="text-sm text-muted-foreground italic">
              Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
