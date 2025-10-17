import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiesPage() {
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
          Politique de Cookies
        </h1>

        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <div className="text-foreground/80 space-y-4">
              <p>
                Cette politique de cookies explique ce que sont les cookies, comment nous les utilisons sur notre site web,
                et comment vous pouvez gérer vos préférences en matière de cookies.
              </p>
              <p>
                En utilisant notre site, vous acceptez l'utilisation de cookies conformément à cette politique.
              </p>
            </div>
          </section>

          {/* Qu'est-ce qu'un cookie */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web.
                Les cookies permettent au site de mémoriser vos actions et préférences (comme l'identifiant de connexion, la langue,
                la taille de police et autres préférences d'affichage) pendant une période donnée.
              </p>
              <p>
                Ainsi, vous n'avez pas besoin de les saisir à chaque fois que vous revenez sur le site ou naviguez d'une page à l'autre.
              </p>
            </div>
          </section>

          {/* Types de cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Types de cookies que nous utilisons</h2>
            <div className="text-foreground/80 space-y-6">

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies strictement nécessaires</h3>
                <p className="mb-2">
                  Ces cookies sont essentiels pour vous permettre de naviguer sur le site et d'utiliser ses fonctionnalités.
                  Sans ces cookies, les services que vous demandez ne peuvent pas être fournis.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Ces cookies ne nécessitent pas votre consentement.
                </p>
                <div className="mt-3">
                  <p className="font-medium text-foreground mb-2">Exemples :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Cookies de session pour maintenir votre connexion</li>
                    <li>Cookies de sécurité pour prévenir la fraude</li>
                    <li>Cookies de préférence de cookies (pour mémoriser votre choix)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies de performance et d'analyse</h3>
                <p className="mb-2">
                  Ces cookies collectent des informations sur la façon dont les visiteurs utilisent notre site,
                  par exemple les pages les plus visitées et les messages d'erreur éventuels.
                  Ces cookies ne collectent pas d'informations permettant d'identifier directement un visiteur.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Ces cookies nécessitent votre consentement.
                </p>
                <div className="mt-3">
                  <p className="font-medium text-foreground mb-2">Exemples :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Google Analytics (analyse du trafic)</li>
                    <li>Cookies de mesure d'audience</li>
                    <li>Cookies de performance du site</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies de fonctionnalité</h3>
                <p className="mb-2">
                  Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre nom d'utilisateur,
                  votre langue ou la région où vous vous trouvez) et de fournir des fonctionnalités améliorées et plus personnelles.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Ces cookies nécessitent votre consentement.
                </p>
                <div className="mt-3">
                  <p className="font-medium text-foreground mb-2">Exemples :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Préférences de langue</li>
                    <li>Préférences d'affichage (mode sombre/clair)</li>
                    <li>Lecteur vidéo (mémoriser le volume)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies publicitaires et de ciblage</h3>
                <p className="mb-2">
                  Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos centres d'intérêt.
                  Ils peuvent également être utilisés pour limiter le nombre de fois où vous voyez une publicité
                  et mesurer l'efficacité d'une campagne publicitaire.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Ces cookies nécessitent votre consentement.
                </p>
                <div className="mt-3">
                  <p className="font-medium text-foreground mb-2">Note :</p>
                  <p className="text-sm">
                    [À COMPLÉTER - Si vous utilisez des cookies publicitaires, précisez lesquels.
                    Sinon, supprimez cette section ou indiquez que vous n'en utilisez pas]
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Cookies tiers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies tiers</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                En plus de nos propres cookies, nous pouvons également utiliser des cookies tiers pour signaler
                des statistiques d'utilisation du site et diffuser des publicités sur et via le site.
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Services tiers utilisés :</h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-medium text-foreground">Google Analytics</p>
                    <p className="text-sm mt-1">
                      Nous utilisons Google Analytics pour analyser l'utilisation de notre site.
                      Google Analytics génère des statistiques et autres informations sur le site au moyen de cookies
                      stockés sur les ordinateurs des utilisateurs.
                    </p>
                    <p className="text-sm mt-2">
                      Pour en savoir plus :{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Politique de confidentialité de Google
                      </a>
                    </p>
                    <p className="text-sm mt-1">
                      Pour désactiver Google Analytics :{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Module de désactivation Google Analytics
                      </a>
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-medium text-foreground">Vercel Analytics</p>
                    <p className="text-sm mt-1">
                      Notre site est hébergé sur Vercel qui peut collecter des données analytiques de base.
                    </p>
                    <p className="text-sm mt-2">
                      Pour en savoir plus :{" "}
                      <a
                        href="https://vercel.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Politique de confidentialité de Vercel
                      </a>
                    </p>
                  </div>

                  <div className="bg-muted/30 border border-border rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Note :</strong> [À COMPLÉTER - Listez tous les services tiers que vous utilisez
                      et qui déposent des cookies (ex: Facebook Pixel, LinkedIn Insight, Hotjar, etc.)]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Durée de conservation des cookies</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                La durée de conservation des cookies sur votre appareil varie selon leur type :
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border mt-4">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                        Type de cookie
                      </th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                        Durée de conservation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2">Cookies de session</td>
                      <td className="border border-border px-4 py-2">Jusqu'à la fermeture du navigateur</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border px-4 py-2">Cookies persistants</td>
                      <td className="border border-border px-4 py-2">Jusqu'à 13 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Google Analytics</td>
                      <td className="border border-border px-4 py-2">2 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm">
                Conformément aux recommandations de la CNIL, la durée de conservation des cookies non essentiels
                ne peut excéder 13 mois.
              </p>
            </div>
          </section>

          {/* Gestion des cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Comment gérer vos cookies ?</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Vous disposez de plusieurs moyens pour gérer les cookies. Toute modification que vous apportez
                aux paramètres des cookies peut altérer votre navigation sur Internet et vos conditions d'accès à certains services.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-5 mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Via votre navigateur</h3>
                <p className="mb-3">
                  La plupart des navigateurs vous permettent de gérer vos préférences en matière de cookies.
                  Vous pouvez configurer votre navigateur pour qu'il accepte ou refuse les cookies.
                </p>

                <div className="space-y-2">
                  <p className="font-medium text-foreground">Liens vers les paramètres de gestion des cookies :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Safari (macOS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/fr-fr/HT201265"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Safari (iOS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-lg p-5 mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Via notre bannière de cookies</h3>
                <p className="mb-2">
                  Lors de votre première visite sur notre site, une bannière vous permet de choisir
                  les catégories de cookies que vous souhaitez accepter ou refuser.
                </p>
                <p className="text-sm">
                  Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien
                  "Gérer les cookies" disponible en bas de page.
                </p>
              </div>

              <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-sm">
                  <strong>⚠️ Attention :</strong> Le refus de certains cookies peut empêcher l'accès
                  à certaines fonctionnalités du site ou affecter votre expérience de navigation.
                </p>
              </div>
            </div>
          </section>

          {/* Outils de désactivation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Outils de désactivation supplémentaires</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Vous pouvez également utiliser des outils tiers pour désactiver certains cookies :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a
                    href="https://www.youronlinechoices.com/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Your Online Choices
                  </a>{" "}
                  - Plateforme européenne de gestion des cookies publicitaires
                </li>
                <li>
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Network Advertising Initiative
                  </a>{" "}
                  - Désactivation des cookies publicitaires
                </li>
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Module de désactivation Google Analytics
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies et données personnelles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies et données personnelles</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Les informations collectées via les cookies constituent des données personnelles au sens du RGPD
                lorsqu'elles permettent de vous identifier directement ou indirectement.
              </p>
              <p>
                Pour en savoir plus sur la façon dont nous traitons vos données personnelles, consultez notre
                <Link href="/politique-confidentialite" className="text-primary hover:underline"> Politique de confidentialité</Link>.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications de la politique de cookies</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Nous nous réservons le droit de modifier cette politique de cookies à tout moment.
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
              <p>
                Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance
                des éventuelles modifications.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Pour toute question concernant notre politique de cookies, vous pouvez nous contacter :
              </p>
              <div className="mt-4 ml-4">
                <p><strong>LA SOLUTION EN ENERGIE</strong></p>
                <p>Email : contact@lasolutionenenergie.fr</p>
                <p>Téléphone : 01 89 70 56 32</p>
                <p>Adresse : 17 rue Louise Michel, 92300 Levallois-Perret</p>
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
