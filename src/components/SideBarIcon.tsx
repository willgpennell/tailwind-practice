interface IconProps {
  icon: React.ReactNode;
}

export default function SideBarIcon({ icon }: IconProps) {
  return <div className="sidebar-icon">{icon}</div>;
}
