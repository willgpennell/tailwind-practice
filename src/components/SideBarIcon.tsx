interface IconProps {
  icon: React.ReactNode;
  text: string;
}

export default function SideBarIcon({ icon, text }: IconProps) {
  return (
    <>
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </>
  );
}
