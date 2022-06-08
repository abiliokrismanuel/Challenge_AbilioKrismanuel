import Navbar from "../../components/navbar";
import Head from "next/head";
import Pdf from "../../components/reactpdf";
import Image from "next/image";

export default function pembayaran() {
  return (
    <>
      <Head>
        <title>Pembayaran</title>
      </Head>
      <Navbar />
      <div className="text-center w-fit my-12 mx-auto">
        <Image
          src="/images/icon/green_success.svg"
          alt="Success"
          width={100}
          height={100}
        />
        <h1 className="font-bold text-xl my-5">Pembayaran Berhasil!</h1>
        <p className="text-gray-500">
          Tunjukkan invoice ini ke petugas BCR di titik temu.
        </p>
      </div>
      <Pdf />
    </>
  );
}
