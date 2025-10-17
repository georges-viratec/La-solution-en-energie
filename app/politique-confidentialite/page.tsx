import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PolitiqueConfidentialitePage() {
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
          Politique de Confidentialité
        </h1>

        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <div className="text-foreground/80 space-y-4">
              <p>
                Vous êtes sur le site www.lasolutionenenergie.fr. Nous attachons une grande importance au respect de votre vie privée.
                Dans le cadre du Règlement Général sur la Protection des Données (RGPD), notre société a mis en œuvre tous les moyens
                nécessaires pour vous assurer la protection de vos données personnelles lors de votre navigation sur les pages de notre site Internet.
              </p>
              <p>
                Pour toute question en lien avec notre politique de confidentialité, vous pouvez contacter La solution en énergie :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Par téléphone au 01 89 70 56 32</li>
                <li>Par mail à contact@lasolutionenenergie.fr</li>
              </ul>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable du traitement des données</h2>
            <div className="text-foreground/80 space-y-2">
              <p><strong>Raison sociale :</strong> LA SOLUTION EN ENERGIE</p>
              <p><strong>Forme juridique :</strong> SAS, société par actions simplifiée</p>
              <p><strong>Siège social :</strong> 17 rue Louise Michel, 92300 Levallois-Perret</p>
              <p><strong>SIREN :</strong> 951 327 253</p>
              <p><strong>RCS :</strong> 951 327 253 R.C.S. Nanterre</p>
              <p><strong>Email :</strong> contact@lasolutionenenergie.fr</p>
              <p><strong>Téléphone :</strong> 01 89 70 56 32</p>
            </div>
          </section>

          {/* Données collectées */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Données personnelles collectées</h2>
            <div className="text-foreground/80 space-y-4">
              <p>Nous collectons les données personnelles suivantes :</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Via le formulaire de contact / candidature</h3>
              <p>Les informations collectées le sont car elles sont nécessaires à la réalisation de nos Services. Ce sont celles que tout Client ou Utilisateur de nos services a volontairement transmis notamment par l'intermédiaire d'un formulaire de contact. Ces données consistent essentiellement en :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Des informations relatives à l'état civil (Nom, prénom)</li>
                <li>Vos coordonnées (numéro de téléphone, adresse email)</li>
              </ul>
              <p className="mt-4">
                Les données obligatoires collectées via les formulaires de contact sont signalées par un astérisque « * ».
                En l'absence de réponse ou en cas d'informations erronées, nous ne serons pas en mesure de traiter votre demande
                et vous ne pourrez en conséquence avoir accès à nos services.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Données de navigation</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Durée de la visite</li>
                <li>Cookies (voir notre <Link href="/cookies" className="text-primary hover:underline">Politique de cookies</Link>)</li>
              </ul>
            </div>
          </section>

          {/* Finalités */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalités du traitement</h2>
            <div className="text-foreground/80 space-y-4">
              <p>Les données personnelles communiquées sont utilisées soit pour répondre aux demandes formulées par vos soins, soit pour vous permettre d'accéder à nos Services. Nous pourrons également utiliser vos données afin de vous communiquer toute offre promotionnelle, invitations à des événements ou toute autre initiative.</p>
              <p className="mt-4">Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Traitement de vos demandes de contact pour devenir partenaire/apporteur d'affaires</li>
                <li>Réponse à vos questions et demandes d'information</li>
                <li>Gestion de votre candidature pour rejoindre notre réseau</li>
                <li>Amélioration de nos services</li>
                <li>Analyse statistique de la fréquentation du site</li>
                <li>Envoi d'informations commerciales concernant nos opportunités de partenariat (avec votre consentement préalable)</li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Base légale du traitement</h2>
            <div className="text-foreground/80 space-y-4">
              <p>Le traitement de vos données personnelles repose sur :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Votre consentement</strong> pour l'envoi de communications marketing</li>
                <li><strong>L'exécution de mesures précontractuelles</strong> pour le traitement de vos demandes</li>
                <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services et l'analyse statistique</li>
                <li><strong>Nos obligations légales</strong> en matière de conservation de documents</li>
              </ul>
            </div>
          </section>

          {/* Destinataires */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Destinataires des données</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Les données personnelles que nous collectons sont à destination de LA SOLUTION EN ENERGIE à des fins de prospection commerciale.
                Toutefois, elles pourront également être communiquées à nos services d'hébergement ainsi qu'à d'éventuels autres sous-traitants
                (fournisseurs de systèmes informatiques et logiciels…).
              </p>
              <p>
                Étant ici précisé que ces sous-traitants sont soumis au respect du RGPD et se situent à l'intérieur de l'Union Européenne
                et de l'Espace Economique Européen. Aucune de vos données à caractère personnel n'est transférée en dehors de l'Union Européenne
                et de l'Espace Economique Européen dans le cadre de notre traitement.
              </p>
              <p>
                Elles pourront être communiquées à des tiers autres que ceux listés ci-dessus, sous réserve d'avoir obtenu votre consentement préalable.
              </p>
              <p className="mt-4">
                Aucune information personnelle de l'utilisateur du site www.lasolutionenenergie.fr n'est publiée à l'insu de l'utilisateur,
                échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.
              </p>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Durée de conservation</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Les données personnelles que nous collectons sont conservées durant toute notre relation commerciale.
                Cette durée tient compte des obligations légales propres à chaque donnée personnelle.
              </p>
              <p className="mt-4">
                À défaut de relation commerciale établie, les données sont conservées pendant une durée de 2 ans à compter de leur obtention.
              </p>
              <p className="mt-4">Vos données personnelles sont conservées pendant :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Demandes de contact :</strong> 2 ans à compter du dernier contact</li>
                <li><strong>Candidatures pour devenir partenaire :</strong> 2 ans à compter de la réception</li>
                <li><strong>Cookies :</strong> Maximum 13 mois (voir notre <Link href="/cookies" className="text-primary hover:underline">Politique de cookies</Link>)</li>
              </ul>
            </div>
          </section>

          {/* Sécurité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Sécurité des données</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                contre la destruction accidentelle ou illicite, la perte, l'altération, la divulgation ou l'accès non autorisés :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement des données en transit (HTTPS/SSL)</li>
                <li>Hébergement sécurisé chez des prestataires certifiés</li>
                <li>Accès limité aux données par des personnes habilitées</li>
                <li>Sauvegarde régulière des données</li>
                <li>Mesures de protection contre les cyberattaques</li>
              </ul>
            </div>
          </section>

          {/* Droits des utilisateurs */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Vos droits</h2>
            <div className="text-foreground/80 space-y-4">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>

              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong>Droit d'accès :</strong> Vous pouvez obtenir confirmation que des données vous concernant sont traitées
                  et en obtenir une copie
                </li>
                <li>
                  <strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données dans certains cas
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement de vos données
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données pour des raisons
                  tenant à votre situation particulière
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> Vous pouvez recevoir vos données dans un format structuré et couramment utilisé
                </li>
                <li>
                  <strong>Droit de retirer votre consentement :</strong> Pour les traitements basés sur votre consentement
                </li>
                <li>
                  <strong>Droit de définir des directives post-mortem :</strong> Vous pouvez définir des directives relatives
                  au sort de vos données après votre décès
                </li>
              </ul>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Comment exercer vos droits ?</h3>
                <p>
                  Pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Par email : contact@lasolutionenenergie.fr</li>
                  <li>Par téléphone : 01 89 70 56 32</li>
                  <li>Par courrier : LA SOLUTION EN ENERGIE, 17 rue Louise Michel, 92300 Levallois-Perret</li>
                </ul>
                <p className="mt-3 text-sm">
                  Nous nous engageons à vous répondre dans un délai d'un mois maximum.
                  Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
                </p>
              </div>
            </div>
          </section>

          {/* Réclamation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Droit de réclamation</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation de la réglementation,
                vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <div className="mt-4 ml-4">
                <p><strong>CNIL</strong></p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p>Téléphone : 01 53 73 22 22</p>
                <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></p>
              </div>
            </div>
          </section>

          {/* Transferts internationaux */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Transferts de données hors UE</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne.
                Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place conformément au RGPD
                (clauses contractuelles types, certification Privacy Shield, etc.).
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Mise à jour de notre Politique</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                La présente Politique est un document évolutif. Elle fait partie intégrante des conditions générales de vente
                et d'utilisation de nos différents Services et est donc susceptible de faire l'objet de modifications.
              </p>
              <p className="mt-4">
                Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>
          </section>

          {/* Violation des données */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Violation de vos données à caractère personnel</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                En cas de violation de vos données à caractère personnel constituant un risque à l'égard de votre vie personnelle
                (perte d'intégrité, de disponibilité, de confidentialité), une notification à la CNIL sera transmise dans les meilleurs délais,
                et ce, conformément à l'article 33 du RGPD.
              </p>
            </div>
          </section>

          {/* Contact DPO */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles,
                vous pouvez nous contacter :
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
