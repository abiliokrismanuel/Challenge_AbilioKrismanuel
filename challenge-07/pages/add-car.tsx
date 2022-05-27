/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import Main from "../components/layout/main";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function addnewcar() {
  const form: any = useRef();
  const router = useRouter();

  async function insertcar(e: any) {
    e.preventDefault();
    router.push("/admin-cars/?isAdd=true");
  }

  return (
    <Main>
      <ol
        className="flex items-center mb-7 space-x-1 md:space-x-3"
        aria-label="Breadcrumb"
      >
        <li>
          <Link href="/admin-cars">
            <a>
              <b>Cars</b>
            </a>
          </Link>
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link href="/admin-cars">
            <a className="ml-1 md:ml-2">
              <b>List Cars</b>
            </a>
          </Link>
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="ml-1 md:ml-2">Add New Car</p>
        </li>
      </ol>

      {/* <!-- TITLE --> */}
      <h1 className="text-2xl mb-5">
        <b>Add New Car</b>
      </h1>

      {/* <!-- FORM --> */}
      <form onSubmit={insertcar} method="post" ref={form}>
        {/* <!-- INPUT FORM --> */}
        <div className="bg-white p-4 mb-10">
          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">
              Nama<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control col-span-4 max-w-sm px-3 py-2 border border-gray-300 rounded"
              name="name"
              placeholder="Placeholder"
              required
            />
          </div>

          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">
              Kategori<span className="text-red-500">*</span>
            </label>
            <select
              className="form-control col-span-4 max-w-sm px-3 py-2 border border-gray-300 rounded"
              id="category"
              name="category"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">
              Harga<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="form-control col-span-4 max-w-sm px-3 py-2 border border-gray-300 rounded"
              name="price"
              placeholder="Placeholder"
            />
          </div>

          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">
              Status Mobil<span className="text-red-500">*</span>
            </label>
            <select
              className="form-control col-span-4 max-w-sm px-3 py-2 border border-gray-300 rounded"
              id="cars"
              name="status"
            >
              <option value="true">Bisa Disewakan</option>
              <option value="false">Tidak Bisa Disewakan</option>
            </select>
          </div>

          <div className="grid grid-cols-5 mb-5">
            <label className="mt-2">
              Foto<span className="text-red-500">*</span>
            </label>
            <div>
              <input
                className="form-control col-span-4 max-w-sm px-3 py-2 border border-gray-300 rounded form-control col-span-4 max-w-sm px-3 py-2 border border-gray-300 rounded w-screen px-0 py-0"
                type="file"
                name="image"
              />
              <div className="text-sm text-gray-500 mt-1">
                File size max. 2MB
              </div>
            </div>
          </div>

          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">Start Rent</label>
            <div className="col-span-4">-</div>
          </div>

          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">Finish Rent</label>
            <div className="col-span-4">-</div>
          </div>

          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">Created At</label>
            <div className="col-span-4">-</div>
          </div>

          <div className="grid items-center grid-cols-5 mb-5">
            <label className="text-gray-700">Updated At</label>
            <div className="col-span-4">-</div>
          </div>
        </div>

        <Link href="/admin-cars">
          <a className="border-darkblue text-darkblue bg-backgroundGrey rounded px-3 py-2 border-2">
            <b>Cancel</b>
          </a>
        </Link>
        <button
          type="submit"
          className="ml-5 rounded-sm px-3 py-2 bg-darkblue text-white"
        >
          <b>Save</b>
        </button>
      </form>
    </Main>
  );
}
