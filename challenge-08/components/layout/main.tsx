import Head from "next/head";
import Sidebar from "../sidebar";
import Navbaradm from "../navbaradm";
import LeftMenu from "../leftmenu";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="grow">
          <Navbaradm />
          <div className="grid grid-cols-6">
            <LeftMenu />
            <section className="bg-backgroundGrey p-10 min-h-screen col-span-5">
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
