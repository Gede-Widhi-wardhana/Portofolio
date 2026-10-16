import "./index.css";
import DataImage from "./data";

function App() {
  return (
    <>
      <div className="Hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-indigo-400 text-black w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Gede Widhi Wardhana" className="w-10 rounded-md" />
            <q>Ngoding itu seru, kalau ada yang semangatin.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hai, saya Gede Widhi Wardhana</h1>
          <p className="text-base/loose mb-6 opacity-70">
            Saya mahasiswa semester 5 Program Studi Informatika Universitas Udayana yang memiliki minat pada pengembangan web, pengelolaan basis data, dan analisis data. Saya memiliki pengalaman dalam mengembangkan sistem informasi
            menggunakan PHP dan Laravel, serta memanfaatkan AI sebagai alat bantu dalam proses pemrograman. Saya mampu beradaptasi, bekerja sama dalam tim, dan memiliki semangat untuk terus belajar serta mengembangkan keterampilan di bidang
            teknologi informasi.
          </p>
          <div className="flex items-center sm:gap-4 gap-2"> 
            <a href="#" className="bg-indigo-600 p-4 rounded-2xl hover:bg-indigo-500">
              Download CV <i class="ri-download-line ri-lg"></i>
            </a>
            <a href="#" className="bg-indigo-600 p-4 rounded-2xl hover:bg-indigo-500">
              Lihat Project <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Gede Widhi Wardhana" className="w-[500px] opacity-90rounded-4xl md:ml-auto" />
      </div>
    </>
  );
}

export default App;
