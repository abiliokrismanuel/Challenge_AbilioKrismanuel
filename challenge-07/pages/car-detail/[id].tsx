/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import Modalimage from "react-modal-image";
import Image from "next/image";

export default function cardetail() {
  const { id } = useRouter().query;
  const [car, setCar] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    image: "",
  });

  async function GetCar(id) {
    try {
      const response = await fetch(
        `https://rent-cars-api.herokuapp.com/admin/car/${id}`
      );
      const data = await response.json();
      setCar(data);
      console.log(data);
    } catch (error) {
      console.log(`Error`);
    }
  }
  useEffect(() => {
    GetCar(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="bg-bgGrey h-40"></div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-start lg:w-9/12 mx-7 lg:mx-auto mt-10">
        <div className="flex flex-col mb-7 mr-7 w-full">
          <section className="p-6 border-2 border-bgGrey rounded-lg flex-1 mb-7">
            <div>
              <h4 className="text-lg font-bold mb-4">Tentang Paket</h4>

              <p>Include</p>
              <ul className="ml-7 list-disc my-3 text-gray-500">
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>

              <p>Exclude</p>
              <ul className="ml-7 list-disc my-3 text-gray-500">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between mt-7">
                <h4 className="text-lg font-bold">
                  Refund, Reschedule, Overtime
                </h4>
                <Image
                  src="/images/icon/arrow_up.svg"
                  alt="arrow_up"
                  width={5}
                  height={5}
                />
              </div>

              <ul className="ml-7 list-disc my-3 text-gray-500">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </section>

          <div className="ml-auto">
            <Link href="pembayaran">
              <button className="h-10 py-2 px-3 text-white bg-green-500 rounded-sm">
                <b>Lanjutkan Pembayaran</b>
              </button>
            </Link>
          </div>
        </div>

        <aside className="p-6 border-2 border-bgGrey rounded-lg h-auto lg:w-1/2">
          {/* <img className="mx-auto" src={car.image} alt="Car" /> */}
          {/* <Modalimage
            small = {`https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1653195266917-dan-gold-N7RiDzfF2iw-unsplash.jpg?alt=media`}
            large={`https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1653195266917-dan-gold-N7RiDzfF2iw-unsplash.jpg?alt=media`}
            alt="Car"
          /> */}
          <Modalimage small={car.image} large={car.image} alt="Car" />
          <h4 className="font-bold mb-2 mt-12">
            {car.name} / {car.category}
          </h4>
          <div className="flex flex-wrap mb-12 text-gray-500">
            <p className="flex flex-nowarp mr-4">
              <Image
                src="/images/icon/fi_users.svg"
                alt="user"
                width={20}
                height={20}
              />
              4-Orang
            </p>
            <p className="flex flex-nowarp mr-4">
              <Image
                src="/images/icon/fi_settings.svg"
                alt="car_type"
                width={20}
                height={20}
              />
              Manual
            </p>
            <p className="flex flex-nowarp mr-4">
              <Image
                src="/images/icon/fi_calendar.svg"
                alt="date"
                width={20}
                height={20}
              />
              Tahun-2020
            </p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p className="text-lg font-bold">Rp. {car.price}</p>
          </div>
          <Link href="pembayaran">
            <button className="mt-5 flex justify-center bg-green-500 text-white rounded-sm py-">
              <b>Lanjutkan Pembayaran</b>
            </button>
          </Link>
        </aside>
      </div>
    </>
  );
}
