import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CguPage() {
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
          Conditions Générales d'Utilisation
        </h1>

        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <div className="text-foreground/80 space-y-4">
              <p>
                Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent l'accès et l'utilisation
                du site web de La Solution en Énergie accessible à l'adresse [À COMPLÉTER - URL du site].
              </p>
              <p>
                En accédant et en utilisant ce site, vous acceptez sans réserve les présentes CGU.
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </div>
          </section>

          {/* Mentions légales */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Mentions légales</h2>
            <div className="text-foreground/80 space-y-2">
              <p><strong>Éditeur du site :</strong> La Solution en Énergie</p>
              <p><strong>Forme juridique :</strong> [À COMPLÉTER]</p>
              <p><strong>Siège social :</strong> [À COMPLÉTER - Adresse complète]</p>
              <p><strong>SIRET :</strong> [À COMPLÉTER]</p>
              <p><strong>Email :</strong> contact@courtier-energie-pro.fr</p>
              <p><strong>Téléphone :</strong> 01 84 88 32 45</p>
              <p className="mt-4">
                Pour plus d'informations, consultez nos <Link href="/mentions-legales" className="text-primary hover:underline">Mentions légales</Link>.
              </p>
            </div>
          </section>

          {/* Accès au site */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Accès au site</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.)
                sont à sa charge.
              </p>
              <p>
                L'éditeur met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au site,
                mais n'est tenu à aucune obligation d'y parvenir.
              </p>
              <p>
                L'éditeur se réserve le droit d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès
                à tout ou partie du site, afin d'en assurer la maintenance, ou pour toute autre raison, sans que l'interruption
                n'ouvre droit à aucune obligation ni indemnisation.
              </p>
            </div>
          </section>

          {/* Utilisation du site */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Utilisation du site</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                L'utilisateur s'engage à utiliser le site conformément aux lois et règlements en vigueur et aux présentes CGU.
              </p>
              <p><strong>Il est strictement interdit :</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>D'utiliser le site à des fins illégales ou non autorisées</li>
                <li>De porter atteinte aux droits de propriété intellectuelle de l'éditeur ou de tiers</li>
                <li>De diffuser des contenus illicites, diffamatoires, injurieux ou contraires à l'ordre public</li>
                <li>De perturber ou d'interrompre le fonctionnement du site</li>
                <li>De collecter ou d'utiliser des informations sur d'autres utilisateurs sans leur consentement</li>
                <li>De tenter d'accéder de manière non autorisée au site ou à ses systèmes</li>
                <li>D'utiliser des robots, spiders ou autres dispositifs automatisés pour accéder au site</li>
              </ul>
            </div>
          </section>

          {/* Services proposés */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Services proposés</h2>
            <div className="text-foreground/80 space-y-4">
              <p>Le site a pour objet de fournir des informations concernant :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les services de courtage en énergie proposés par La Solution en Énergie</li>
                <li>Les opportunités de partenariat</li>
                <li>La possibilité de soumettre une candidature ou une demande de contact</li>
              </ul>
              <p className="mt-4">
                L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable
                des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers
                partenaires qui lui fournissent ces informations.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Propriété intellectuelle</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                L'ensemble du contenu du site (structure, textes, logos, images, vidéos, graphismes, icônes, sons, logiciels, etc.)
                est la propriété exclusive de La Solution en Énergie ou de ses partenaires et est protégé par les lois françaises
                et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site,
                quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'éditeur.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive
                d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Données personnelles</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Les données personnelles collectées sur le site sont traitées conformément à notre
                <Link href="/politique-confidentialite" className="text-primary hover:underline"> Politique de confidentialité</Link>.
              </p>
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification,
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, contactez-nous à : contact@courtier-energie-pro.fr
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
              </p>
              <p>
                Pour en savoir plus sur notre utilisation des cookies et vos options, consultez notre
                <Link href="/cookies" className="text-primary hover:underline"> Politique de cookies</Link>.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Liens hypertextes</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites internet. L'éditeur n'exerce aucun contrôle
                sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de confidentialité.
              </p>
              <p>
                La mise en place de liens hypertextes vers le site est soumise à l'autorisation préalable de l'éditeur.
                Toute demande doit être adressée à : contact@courtier-energie-pro.fr
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation de responsabilité</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site,
                mais ne peut garantir l'exactitude, la précision ou l'exhaustivité de ces informations.
              </p>
              <p>
                En conséquence, l'éditeur décline toute responsabilité pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les inexactitudes, erreurs ou omissions portant sur les informations disponibles sur le site</li>
                <li>Les dommages résultant de l'utilisation du site ou de l'impossibilité d'y accéder</li>
                <li>Les dommages résultant de l'intrusion d'un tiers ayant entraîné une modification des informations</li>
                <li>Les virus, bugs ou tout problème technique lié à l'utilisation du site</li>
                <li>Les dommages indirects (perte de marché, perte de données, etc.)</li>
              </ul>
              <p className="mt-4">
                L'utilisateur est seul responsable de l'utilisation qu'il fait du site et des informations qu'il y consulte.
              </p>
            </div>
          </section>

          {/* Force majeure */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Force majeure</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                L'éditeur ne pourra être tenu responsable de tout retard ou inexécution de ses obligations résultant
                d'un cas de force majeure tel que défini par la jurisprudence française.
              </p>
            </div>
          </section>

          {/* Modifications des CGU */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Modification des CGU</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                L'éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les nouvelles conditions
                seront portées à la connaissance des utilisateurs par leur publication sur cette page.
              </p>
              <p>
                Il est conseillé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                L'utilisation du site après modification des CGU vaut acceptation des nouvelles conditions.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Droit applicable et juridiction</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Les présentes CGU sont régies par le droit français.
              </p>
              <p>
                En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, et à défaut d'accord amiable,
                les tribunaux français seront seuls compétents. La juridiction compétente sera celle du ressort du siège social
                de La Solution en Énergie.
              </p>
            </div>
          </section>

          {/* Médiation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Médiation de la consommation</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Conformément à l'article L.616-1 du Code de la consommation, en cas de litige, vous avez le droit de recourir
                gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige.
              </p>
              <p>
                [À COMPLÉTER - Coordonnées du médiateur de la consommation compétent]
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
              </p>
              <div className="mt-4 ml-4">
                <p><strong>La Solution en Énergie</strong></p>
                <p>Email : contact@courtier-energie-pro.fr</p>
                <p>Téléphone : 01 84 88 32 45</p>
                <p>Adresse : [À COMPLÉTER - Adresse complète]</p>
              </div>
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
