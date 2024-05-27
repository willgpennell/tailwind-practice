import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { HiDocumentSearch } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import SideBarIcon from "./SideBarIcon";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col border-black border-2 border-t-0 border-b-0 border-l-0">
      <SideBarIcon
        icon={<TbLayoutDashboardFilled size="40" />}
        text="Dashboard"
      />
      <SideBarIcon icon={<MdPeopleAlt size="40" />} text="Clients" />
      <SideBarIcon icon={<FaDatabase size="36" />} text="Data" />
      <SideBarIcon icon={<HiDocumentSearch size="48" />} text="Documents" />
      <SideBarIcon icon={<IoIosSettings size="48" />} text="Settings" />
    </div>
  );
}
