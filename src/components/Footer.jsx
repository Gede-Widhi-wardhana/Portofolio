const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Project</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Gede-Widhi-wardhana">
          <i className="ri-github-fill ri-2"></i>
        </a>
        <a href="https://www.instagram.com/widdana_/?__pwa=1">
          <i className="ri-instagram-fill ri-2"></i>
        </a>
        <a href="https://www.linkedin.com/in/widhi-wardhana-gede/">
          <i className="ri-linkedin-fill ri-2"></i>
        </a>
        <a href="https://wa.me/6285943111974">
          <i className="ri-whatsapp-fill ri-2"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
