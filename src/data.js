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
import Tools8 from "/assets/tools/canva.png";
import Tools9 from "/assets/tools/figma.png";

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
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
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
    tools: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "SIERRA",
    desk: "Sistem pengajuan dan pengelolaan surat akademik Informatika secara digital, dari pengajuan sampai unduh surat.",
    tools: ["Laravel", "Tailwind CSS", "MySQL"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Portofolio",
    desk: "Sebuah situs web portofolio pribadi yang menampilkan informasi tentang diri saya, pengalaman, dan proyek-proyek yang telah saya kerjakan.",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
];
