import SideBar from "./components/SideBar";
import TabHeader from "./components/TabHeader";

export default function App() {
  return (
    <div className="flex h-screen">
      <div>
        <SideBar />
      </div>
      <div>
        <div>
          <TabHeader />
        </div>
        <div></div>
      </div>
    </div>
  );
}
