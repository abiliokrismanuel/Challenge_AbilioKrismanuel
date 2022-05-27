import Link from "next/link";
import Image from "next/image";

type CarcardType = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
};

export default function cardcar(props: CarcardType) {
  return (
    <div
      className="bg-white mb-5 p-5 max-w-xs border-2 border-bgGrey rounded-lg"
      key={props.id}
    >
      <img className="pt-5 px-1 mb-10 w-72 h-48" src={props.image} alt="Car" />

      {/* <Image 
            src={props.image}
            alt="Car"
            width={72}
            height={48}
        /> */}

      <p className="mb-2 font-medium">
        {props.name} / {props.category}
      </p>
      <p className="mb-3 text-lg">
        <b>Rp. {props.price} / Hari</b>
      </p>
      <p className="mb-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="mb-3 flex text-sm">
        {/* <img className="mr-2" src="/images/icon/fi_users.svg" alt="user" /> */}
        <Image
          src="/images/icon/fi_users.svg"
          alt="user"
          width={15}
          height={15}
        />
        4 Orang
      </p>
      <p className="mb-3 flex text-sm">
        {/* <img
            className="mr-2"
            src="/images/icons/fi_settings.svg"
            alt="type"
          /> */}
        <Image
          src="/images/icon/fi_settings.svg"
          alt="type"
          width={15}
          height={15}
        />
        Manual
      </p>
      <p className="mb-3 flex text-sm">
        {/* <img
            className="mr-2"
            src="/images/icons/fi_calendar.svg"
            alt="date"
          /> */}
        <Image
          src="/images/icon/fi_calendar.svg"
          alt="date"
          width={15}
          height={15}
        />
        Tahun 2020
      </p>

      <Link href={`/car-detail/${props.id}`}>
        <a className={`p-2.5 text-white font-semibold bg-green-500 rounded-sm flex justify-center`}>Pilih Mobil</a>
      </Link>
    </div>
  );
}
