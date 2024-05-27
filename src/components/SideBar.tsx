import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 shadow-2xl">
      <SideBarIcon icon={<BsPlus size="28" />} />
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<BsGearFill size="28" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
    </div>
  );
}
