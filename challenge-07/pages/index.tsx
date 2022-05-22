import Image from 'next/image';

const Home = () => {
    return (
        <>
        <div className="container mx-auto px-32">
        <section className="h-[500px] w-full bg-slate-200">
        <div className="container mx-auto">
          <div className="mx-auto flex items-center py-4">
            <div className="w-3/5">
              <Image
                src="/images/logo-biru.png"
                alt="logo biru"
                layout="fixed"
                width={100}
                height={34}
              />
            </div>
            <div className="flex w-2/5">
              <ul className="text-md flex flex-row items-center space-x-8 font-medium">
                <li>Our Service</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
              </ul>
              <button
                className="mx-4 rounded bg-red-600 p-2 font-medium text-white"
              >
                {" "}
                Logout
              </button>
            </div>
          </div>
          <div className="mx-auto flex py-4">
            <div className="flex h-96 w-1/2 flex-col items-start justify-center space-y-4">
              <h6 className="my-1 text-4xl font-bold text-black">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h6>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <button className="rounded bg-green-400 p-2 font-medium text-white">
                {" "}
                Mulai Sewa Mobil
              </button>
            </div>
            <div className="w-1/2">
              <div className="absolute right-0">
                <Image
                  src="/images/img-car.png"
                  alt="Hero image"
                  layout="intrinsic"
                  width={704}
                  height={407}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex w-full py-24">
        <div className="flex w-3/5 justify-center">
          <Image
            src="/images/img-service.png"
            alt="service image"
            layout="fixed"
            width={459}
            height={428}
          />
        </div>
        <div className="w-2/5">
          <h1 className="text-2xl">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h1>
          <p className="mt-6 mb-4">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center">
              <Image
                src="/images/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/images/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/images/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Sewa Mobil Jangka Panjang Bulanan
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/images/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Gratis Antar - Jemput Mobil di Bandara
              </p>
            </li>
            <li className="flex items-center">
              <Image
                src="/images/checklist-our-service.png"
                alt="checklist icon"
                layout="fixed"
                width={24}
                height={24}
              />
              <p className="inline-block pl-4">
                Layanan Airport Transfer / Drop In Out
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto h-96">
        <h1 className="text-2xl font-bold">Why Us?</h1>
        <p className="pt-4 text-sm">Mengapa harus pilih Binar Car Rental?</p>
        <div className="flex space-x-6 pt-10">
          <div className="w-1/4 rounded-lg border border-gray-400 p-4">
            <Image
              src="/images/icon-complete.png"
              alt="complete icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Mobil Lengkap</h1>
            <p className="py-4 text-sm">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="w-1/4 rounded-lg border border-gray-400 p-4">
            <Image
              src="/images/icon-price.png"
              alt="price icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Harga Murah</h1>
            <p className="py-4 text-sm">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="w-1/4 rounded-lg border border-gray-400 p-4">
            <Image
              src="/images/icon-24hrs.png"
              alt="24hrs icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Layanan 24 Jam</h1>
            <p className="py-4 text-sm">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="w-1/4 rounded-lg border border-gray-400 p-4">
            <Image
              src="/images/icon-professional.png"
              alt="professional icon"
              layout="fixed"
              width={32}
              height={32}
            />
            <h1 className="pt-4 text-base font-bold">Professional</h1>
            <p className="py-4 text-sm">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </section>
      </div>
      </>
    );
}
export default Home;