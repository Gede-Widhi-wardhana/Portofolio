import HeroImage from "/assets/Gede Widhi Wardhana.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/nodejs.png";
import Tools7 from "/assets/tools/github.png";
import Tools8 from "/assets/tools/figma.png";
import Tools9 from "/assets/tools/Laravel.png";
import Tools10 from "/assets/tools/python.png";
import Tools11 from "/assets/tools/vite.png";
import Tools12 from "/assets/tools/php.png";
import Tools13 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "1100",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Python",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1300",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "PHP",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "MySQL",
    ket: "Database",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/kubi.jpg";
import Proyek2 from "/assets/proyek/sierra.png";
import Proyek3 from "/assets/proyek/portofolio.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Kursus Hobi",
    desk: "Platform kursus hobi online dan offline, dari cari kursus, daftar, bayar, sampai dapat sertifikat.",
    tools: ["Laravel", "Tailwind CSS", "Alpine.js", "`MySQL"],
    dad: "200",
    link: "https://github.com/Bayu75/Kursus-Hobi",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "SIERRA",
    desk: "Sistem pengajuan dan pengelolaan surat akademik Informatika secara digital, dari pengajuan sampai unduh surat.",
    tools: ["Laravel", "Tailwind CSS", "MySQL"],
    dad: "300",
    link: "https://github.com/Bayu75/Sistem-Informasi-E-Surat-Informatika",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Portofolio",
    desk: "Sebuah situs web portofolio pribadi yang menampilkan informasi tentang diri saya, pengalaman, dan proyek-proyek yang telah saya kerjakan.",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
    link: "https://github.com/Gede-Widhi-wardhana/Portofolio",
  },
];
