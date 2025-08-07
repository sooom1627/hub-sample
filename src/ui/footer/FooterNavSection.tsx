interface NavLink {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

const navSections: NavSection[] = [
  {
    title: "コミュニティ",
    links: [
      { label: "わがしのわ", href: "/communities/wagashi" },
      { label: "Le tour du chocolat", href: "/communities/chocolate" },
      { label: "外国展コミュニティ", href: "/communities/foreign-exhibitions" },
      { label: "Parfun", href: "/communities/perfume" },
      { label: "My Apothecary", href: "/communities/beauty" },
    ]
  },
  {
    title: "サポート",
    links: [
      { label: "ヘルプ", href: "#" },
      { label: "お問い合わせ", href: "#" },
      { label: "プライバシー", href: "#" }
    ]
  }
];

export function FooterNavSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      {navSections.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold mb-4 text-gray-900 text-base">
            {section.title}
          </h4>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}