import { Link } from "react-router-dom";

export const CardCar = ({ id, name, category, price, image }) => {
  return (
    <div
      className="bg-white mb-5 p-5 max-w-xs border-2 border-bgGrey rounded-lg"
      key={id}
    >
      <img className="pt-5 px-1 mb-10 w-72 h-48" src={image} alt="Car" />

      <p className="mb-2 font-medium">
        {name} / {category}
      </p>
      <p className="mb-3 text-lg">
        <b>Rp. {price} / Hari</b>
      </p>
      <p className="mb-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="mb-3 flex text-sm">
        <img className="mr-2" src="/images/icons/fi_users.svg" alt="user" />
        4
        Orang
      </p>
      <p className="mb-3 flex text-sm">
        <img
          className="mr-2"
          src="/images/icons/fi_settings.svg"
          alt="type"
        />
        Manual
      </p>
      <p className="mb-3 flex text-sm">
        <img
          className="mr-2"
          src="/images/icons/fi_calendar.svg"
          alt="date"
        />
        Tahun 2020
      </p>

      <Link
        to={`/car-detail/${id}`}
        className="mt-5 flex justify-center text-xs bg-green-500 text-white rounded-sm py-4"
      >
        <b>Pilih Mobil</b>
      </Link>
    </div>
  );
};
