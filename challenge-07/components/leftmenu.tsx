import Link from "next/link";
import { useRouter } from "next/router";

export default function leftmenu() {
  const dashboardleftmenu = (
    <nav className="flex flex-col lg:w-full w-0 text-lg overflow-hidden bg-white">
      <h6 className="p-6 text-xl font-bold text-gray-400">DASHBOARD</h6>
      <hr />
      <Link href={"/Dashboard"}>
        <a className={`px-7 py-3 hover:bg-primaryGrey`}>Dashboard</a>
      </Link>
    </nav>
  );

  const carsleftmenu = (
    <nav className="flex flex-col lg:w-full w-0 text-lg overflow-hidden bg-white">
      <h6 className="p-6 text-xl font-bold text-gray-400">CARS</h6>
      <hr />
      <Link href={"/admin-cars"}>
        <a className={`px-7 py-3 hover:bg-primaryGrey`}>Cars</a>
      </Link>
    </nav>
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentRoute = useRouter().pathname;
  if (currentRoute === "/Dashboard") {
    return dashboardleftmenu;
  } else {
    return carsleftmenu;
  }
}
