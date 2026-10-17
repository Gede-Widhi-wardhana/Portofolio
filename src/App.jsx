import "./index.css";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="Hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-indigo-400 text-black w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Gede Widhi Wardhana" className="w-10 rounded-md" loading="lazy" />
            <q>Ngoding itu seru, kalau ada yang semangatin.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hai, saya Gede Widhi Wardhana</h1>
          <p className="text-base/loose mb-6 opacity-70 " style={{ textAlign: "justify" }}>
            Saya mahasiswa Informatika Universitas Udayana yang tertarik untuk belajar membangun website, mengolah basis data, dan menganalisis data untuk mengasah skill dan mempelajarinya lebih dalam.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1kh0l1rBcizcEWETtG7dbvsBIvXGAftHp/view?usp=sharing" className="bg-indigo-600 p-4 rounded-2xl hover:bg-indigo-500">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-indigo-600 p-4 rounded-2xl hover:bg-indigo-500">
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Gede Widhi Wardhana" className="w-[500px] opacity-90 rounded-4xl md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" />
      </div>

      {/* tentang section */}

      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-indigo-300 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p style={{ textAlign: "justify" }} className="text-base/loose mb-10">
            Saya mahasiswa semester 5 Program Studi Informatika, FMIPA Universitas Udayana. Saya tertarik pada pengembangan web, pengelolaan basis data, dan analisis data. Saya pernah mengembangkan sistem informasi dengan PHP dan Laravel,
            merancang basis data MySQL lengkap dengan pengaturan hak akses pengguna, membuat sistem monitoring parkir berbasis IoT dengan ESP32, serta menerapkan algoritma pohon keputusan ID3 dengan Python. Saya terbiasa bekerja dalam tim,
            cepat beradaptasi, dan memanfaatkan AI sebagai alat bantu dalam pemrograman. Saat ini saya terus mengasah kemampuan di bidang web dan data, dan terbuka untuk kesempatan magang (PKL) maupun kolaborasi proyek.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-blue-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-blue-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Tools yang digunakan
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Berikut ini adalah tools yang sering saya gunakan:
          </p>
          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools" className="w-14 bg-zinc-500 p-1 group-hover:bg-zinc-700" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project section */}

      <div className="project mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Project
        </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Berikut adalah project yang pernah saya buat:
        </p>
        <div className="poject-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 rounded-md bg-sky-900" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt={proyek.nama} loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}

      <div className="contact mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Kontak
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Mari terhubung dengan saya
        </p>
        <form action="https://formsubmit.co/wardhanagedewidhi@gmail.com" method="POST" className="bg-sky-900 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan nama lengkap..." className="border border-zinc-600 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan email..." className="border border-zinc-600 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukkan pesan..." className="border border-zinc-600 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-800 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-700">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
