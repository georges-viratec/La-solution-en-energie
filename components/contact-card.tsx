type ContactCardProps = {
  type: "phone" | "email" | "chat"
  title: string
  value: string
  href: string
  subtitle: string
  iconColor: "green" | "amber"
}

const iconColorMap = {
  green: "bg-green-500/10 text-green-600",
  amber: "bg-amber-500/10 text-amber-600"
}

const iconMap = {
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  chat: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  )
}

export function ContactCard({ type, title, value, href, subtitle, iconColor }: ContactCardProps) {
  return (
    <a
      href={href}
      className="bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300 block hover:border-primary/30 cursor-pointer"
    >
      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${iconColorMap[iconColor]} flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
        {iconMap[type]}
      </div>
      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2">{title}</h4>
      <p className="text-foreground font-semibold text-xs sm:text-sm mb-1 break-words">{value}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </a>
  )
}
