import { Link} from "react-router-dom";
import GreenButton from "../components/printilan/GreenButton";

export default function SearchMenu() {
  return (
    <section className="flex gap-3 flex-col lg:flex-row justify-around lg:items-end relative z-50 bg-white -mt-12 lg:w-9/12 lg:mx-auto mx-7 rounded-lg shadow-lg p-6">
      <div className="flex-1">
        <p className="mb-2 text-sm">Tipe Driver</p>
        <select
          className="py-1.5 px-2 border border-gray-300 w-full rounded"
          name="TipeDriver"
        >
          <option value="1">Dengan Sopir</option>
          <option value="2">Tanpa Sopir(Lepas Kunci)</option>
        </select>
      </div>
      <div className="flex-1">
        <p className="mb-2 text-sm">Tanggal</p>
        <input
          className="py-1.5 px-2 border border-gray-300 w-full rounded"
          type="date"
          name="Tanggal"
          id="Tanggal"
        />
      </div>
      <div className="flex-1">
        <p className="mb-2 text-sm">Waktu Jemput/Ambil</p>
        <input
          className="py-1.5 px-2 border border-gray-300 w-full rounded"
          type="time"
          name="WaktuJemputAmbil"
        />
      </div>
      <div className="flex-1">
        <p className="mb-2 text-sm">Jumlah Penumpang (Opsional)</p>
        <input
          className="py-1.5 px-2 border border-gray-300 w-full rounded"
          type="number"
          name="JumlahPenumpang"
          placeholder="Jumlah Penumpang"
        />
      </div>
      <Link to="/search-result">
        <GreenButton text="Search Mobil" />
      </Link>
    </section>
  );
  }

