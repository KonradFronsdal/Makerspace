// Strict types for navigation items.
interface NavItem {
  label: string;
  href: string;
}

// Navigation items.
const navItems: NavItem[] = [
  { label: 'Åpningstider', href: '#apningstider' },
  { label: 'Utstyr', href: '#utstyr' },
  { label: 'Elevarbeid', href: '#elevarbeid' },
  { label: 'Om Oss', href: '#om-oss' },
  { label: 'Wiki', href: 'https://wiki.example.com' },
]

function Navbar() {
  return (
    <nav>
      {navItems.map((item) => (
        <a
	  key={item.label}
	  href={item.href}
	>
	  {item.label}
	</a>
      ))}
    </nav>
  )
}

export default Navbar
