import Link from "next/link";
import Image from "next/image";

const sidebar = () => {
  return (
    <>
      {/* sidebar */}
      <div className="w-20 bg-darkblue">
        <nav className="fixed h-screen z-50 flex flex-col gap-3 items-center text-lg w-20 bg-darkblue">
          <Link href={"/Dashboard"}>
            <a className="py-3">
              <Image
                src="/images/icon/logo-biru.png"
                alt="logo1"
                width={30}
                height={30}
              />
            </a>
          </Link>
          <Link href={"/Dashboard"}>
            <a className="w-full p-1 text-center text-white hover:bg-blue-700">
              <Image
                src="/images/icon/home.svg"
                alt="Dashboard"
                width={30}
                height={30}
              />
              <span>
                <small>
                  <b>Dashboard</b>
                </small>
              </span>
            </a>
          </Link>
          <Link href={"/admin-cars"}>
            <a className="w-full p-1 text-center text-white hover:bg-blue-700">
              <Image
                className="mx-auto"
                src="/images/icon/fi_truck.svg"
                alt="Cars"
                width={50}
                height={30}
              />
              <span>
                <small>
                  <b>Cars</b>
                </small>
              </span>
            </a>
          </Link>
        </nav>
        <div className="w-20 bg-darkblue"></div>
      </div>
    </>
  );
};

export default sidebar;
