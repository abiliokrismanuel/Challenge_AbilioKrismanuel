import Link from 'next/link';
import Image from 'next/image';
import {pdfjs,Document,Page} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Pdf() {
    const pdfName = `invoice_abilio.pdf`;
    return (
        <div className="border-2 rounded-xl p-7 my-12 max-w-3xl mx-auto">
        <div className="flex justify-between">
            <div>
                <h1 className="font-bold text-xl mb-4">Invoice</h1>
                <p className="text-gray-400">*no invoice</p>
            </div>
            <Link href={`/${pdfName}`}>
                <a target="_blank" download>
                    <button className="border border-darkblue px-3 py-1.5 rounded text-darkblue font-bold flex gap-3 items-center hover:shadow-lg transition-all duration-300">
                        <Image 
                        src="/images/icon/fi_download.svg" 
                        width={5}
                        height={5}
                        alt="download" />
                        Unduh
                    </button>
                </a>
            </Link>
        </div>

        <section className="border-2 rounded-lg mx-auto w-fit mt-8 shadow-lg overflow-hidden">
            <Document className='mx-auto' file={`/${pdfName}`}>
                <Page pageNumber={1} width={570} />
            </Document>
        </section>
    </div>
    )
}