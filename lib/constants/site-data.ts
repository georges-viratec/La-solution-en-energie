export const STATS = [
  {
    value: 1000,
    prefix: "+",
    label: "professionnels accompagnés"
  },
  {
    value: 1,
    suffix: "M€",
    label: "de commissions distribuées"
  },
  {
    value: 50,
    suffix: "+",
    label: "partenaires en France"
  }
] as const

export const PILLARS = [
  {
    id: 1,
    title: "Revenus Illimités",
    description: "Rejoindre notre réseau, c'est choisir une liberté totale : vous développez votre portefeuille à votre rythme, sans plafond de rémunération. Chaque dossier signé vous rapporte une commission directe, et vos clients fidèles génèrent des revenus récurrents.",
    icon: "trending-up",
    color: "primary",
    features: [
      "Commissions immédiates et récurrentes",
      "Liberté totale d'organisation",
      "Aucun plafond de gains"
    ]
  },
  {
    id: 2,
    title: "Outils Professionnels & Leads Qualifiés",
    description: "Accédez à notre écosystème digital complet : comparateur intelligent d'offres, plateforme de suivi client, espace personnel pour gérer vos contrats et vos commissions. Nous mettons également à votre disposition des leads qualifiés issus de nos campagnes marketing et partenariats.",
    icon: "settings",
    color: "blue",
    features: [
      "Accès à un comparateur d'offres exclusif",
      "Plateforme de gestion simple et intuitive",
      "Leads fournis et ciblés selon votre profil"
    ]
  },
  {
    id: 3,
    title: "Formation & Coaching Continu",
    description: "Aucune expérience requise : nous vous formons à toutes les étapes du métier. De la découverte du marché énergétique à la négociation client, vous bénéficiez d'un programme de formation accélérée et d'un accompagnement individuel par nos managers et experts.",
    icon: "graduation-cap",
    color: "accent",
    features: [
      "Formation complète et gratuite",
      "Coaching personnalisé par nos experts",
      "Progression rapide et valorisante"
    ]
  },
  {
    id: 4,
    title: "Un Marché en Pleine Explosion",
    description: "Le marché de l'énergie connaît une croissance historique : la majorité des entreprises cherchent aujourd'hui à réduire leurs coûts et à comprendre leurs contrats. Devenez leur interlocuteur privilégié et profitez d'un secteur en pleine mutation, porteur, durable et lucratif.",
    icon: "chart",
    color: "primary",
    features: [
      "Secteur en forte demande",
      "Opportunités durables et croissantes",
      "Activité utile, rentable et moderne"
    ]
  }
] as const

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Récupération des Documents",
    description: "Collecte des factures d'énergie et des contrats existants du client. Ces éléments permettent d'analyser sa situation actuelle et de définir les meilleures opportunités du marché.",
    badge: "Durée moyenne : 24 à 48h",
    badgeIcon: "clock"
  },
  {
    number: "02",
    title: "Mise en Concurrence des Fournisseurs",
    description: "Grâce à notre plateforme interne, nous comparons en temps réel les offres des fournisseurs d'électricité et de gaz. Chaque proposition est évaluée selon le profil de consommation, la durée et les conditions tarifaires.",
    badge: "Process automatisé et rapide",
    badgeIcon: "chart"
  },
  {
    number: "03",
    title: "Présentation des Offres & Closing Client",
    description: "Tu présentes au client les meilleures offres négociées, de manière claire et transparente. Un manager ou closer peut t'accompagner pour finaliser la signature et sécuriser le contrat.",
    badge: "Accompagnement commercial personnalisé",
    badgeIcon: "users"
  },
  {
    number: "04",
    title: "Rémunération & Récurrence",
    description: "Une fois le contrat signé, ta commission est validée et versée rapidement. Tu continues de percevoir une rémunération récurrente sur les renouvellements et suivis clients.",
    badge: "Revenus durables et évolutifs",
    badgeIcon: "trending-up",
    highlighted: true
  }
] as const

export const TESTIMONIALS = [
  {
    name: "Sophie Martin",
    role: "Directrice, Restaurant Le Gourmet",
    content: "Grâce à La Solution en Énergie, nous avons réduit nos factures d'électricité de 30%. Un service professionnel et efficace.",
    rating: 5,
    isGoogle: true
  },
  {
    name: "Thomas Dubois",
    role: "Partenaire Commercial",
    content: "En 6 mois, j'ai généré plus de 15 000€ de commissions. La formation et les outils fournis sont exceptionnels.",
    rating: 5
  },
  {
    name: "Marie Lefebvre",
    role: "Gérante, Boulangerie Artisanale",
    content: "Un accompagnement personnalisé et des économies réelles. Je recommande vivement leurs services.",
    rating: 5,
    isGoogle: true
  },
  {
    name: "Alexandre Petit",
    role: "Partenaire Commercial",
    content: "La liberté de travailler à mon rythme tout en ayant un revenu récurrent. C'est exactement ce que je cherchais.",
    rating: 5
  },
  {
    name: "Jean-Pierre Moreau",
    role: "Directeur, Garage Auto Plus",
    content: "Des économies substantielles sur nos contrats gaz et électricité. Service rapide et transparent.",
    rating: 5,
    isGoogle: true
  },
  {
    name: "Camille Bernard",
    role: "Partenaire Commercial",
    content: "Les leads fournis sont de qualité et le support commercial est toujours disponible. Une vraie opportunité.",
    rating: 5
  }
] as const

export const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "1. Qu'est-ce que le métier de courtier en énergie ?",
    answer: "Le courtier en énergie accompagne les entreprises dans la réduction de leurs coûts d'électricité et de gaz.\n\nGrâce à nos outils et à notre expertise, nous mettons en concurrence nos fournisseurs partenaires afin d'obtenir les meilleures conditions pour chaque client.\n\nC'est un métier moderne, utile et en pleine croissance, au cœur des enjeux économiques et écologiques actuels."
  },
  {
    value: "item-2",
    question: "2. Quel est le rôle d'un apporteur d'affaires ?",
    answer: "L'apporteur d'affaires a un rôle simple : il met en relation des entreprises avec La Solution en Énergie.\n\nVous identifiez des professionnels susceptibles d'être intéressés par une optimisation de leurs contrats énergétiques, puis nos équipes s'occupent de tout (analyse, négociation, signature).\n\nÀ chaque contrat signé grâce à vous, vous touchez une commission immédiate ainsi qu'une rémunération récurrente."
  },
  {
    value: "item-3",
    question: "3. Faut-il avoir de l'expérience dans le domaine ?",
    answer: "Non, aucune expérience n'est nécessaire.\n\nNous proposons une formation en ligne complète et gratuite qui vous apprend :\n• Les bases du marché de l'énergie\n• Comment présenter notre service simplement\n• Comment générer des contacts qualifiés efficacement\n\nEn quelques heures, vous êtes prêt à démarrer avec toutes les clés du succès."
  },
  {
    value: "item-4",
    question: "4. Quels outils mettez-vous à disposition ?",
    answer: "Nous mettons à votre disposition un écosystème digital complet :\n• Une plateforme intuitive pour suivre vos contrats et vos commissions\n• Un comparateur d'offres fournisseurs partenaires\n• Un espace personnel pour gérer vos clients et documents\n• Des leads qualifiés issus de nos campagnes marketing\n\nTout est conçu pour vous permettre de performer facilement et rapidement."
  },
  {
    value: "item-5",
    question: "5. Combien puis-je gagner ?",
    answer: "Votre rémunération est 100% libre et sans plafond.\n\nChaque contrat signé vous rapporte une commission directe, et vos clients actifs génèrent des revenus mensuels récurrents.\n\nNos apporteurs gagnent en moyenne entre 1 000€ et 5 000–7 000€ par mois, selon leur implication et leur régularité."
  },
  {
    value: "item-6",
    question: "6. Puis-je cumuler cette activité avec un autre emploi ?",
    answer: "Oui, absolument. Vous travaillez en toute liberté, à votre rythme, sans horaires imposés ni objectifs obligatoires.\n\nC'est une activité flexible et accessible à tous."
  },
  {
    value: "item-7",
    question: "7. Qui peut devenir apporteur d'affaires ?",
    answer: "Toute personne motivée souhaitant développer un complément de revenu durable.\n\nAucune contrainte, aucun statut spécifique nécessaire : il suffit d'avoir envie de partager nos services et d'aider les entreprises à économiser sur leurs factures."
  },
  {
    value: "item-8",
    question: "8. Pourquoi rejoindre La Solution en Énergie ?",
    answer: "• Une société reconnue dans le courtage en énergie\n• Des partenariats solides avec des fournisseurs fiables\n• Une formation digitale gratuite et accessible 24h/24\n• Des revenus illimités et transparents\n• Un accompagnement individuel et un réseau actif de plus de 100 partenaires"
  },
  {
    value: "item-9",
    question: "9. Comment démarrer ?",
    answer: "1. Remplissez le formulaire d'inscription sur notre site\n2. Suivez la formation en ligne à votre rythme\n3. Commencez à recommander nos services et à toucher vos premières commissions"
  }
] as const

export const CONTACT_METHODS = [
  {
    type: "phone",
    title: "Téléphone",
    value: "01 84 88 32 45",
    href: "tel:0184883245",
    subtitle: "Lun-Ven 9h-18h",
    iconColor: "green"
  },
  {
    type: "email",
    title: "Email",
    value: "contact@courtier-energie-pro.fr",
    href: "mailto:contact@courtier-energie-pro.fr",
    subtitle: "Réponse sous 4h",
    iconColor: "amber"
  },
  {
    type: "chat",
    title: "Chat en ligne",
    value: "Support instantané",
    href: "mailto:contact@courtier-energie-pro.fr?subject=Support%20Chat%20en%20ligne",
    subtitle: "Disponible maintenant",
    iconColor: "green"
  }
] as const

export const FOOTER_LINKS = {
  quick: [
    { label: "Accueil", href: "#" },
    { label: "À propos", href: "#" },
    { label: "Comment ça marche", href: "#" },
    { label: "Témoignages", href: "#" },
    { label: "FAQ", href: "#" }
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" }
  ]
} as const
