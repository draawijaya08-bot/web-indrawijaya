export const services = [
  {
    title: "Motion Graphic",
    icon: "spark" as const,
    text: "Visual yang bergerak. Cerita yang terasa.",
    body: "Menghidupkan pesan lewat perpaduan desain, ritme, dan animasi. Dari identitas visual bergerak hingga konten digital, setiap elemen dirancang untuk memperjelas cerita.",
    bullets: ["Animasi logo & identitas visual", "Kinetic typography & explainer", "Konten animasi untuk media sosial"],
  },
  {
    title: "Web Development",
    icon: "globe" as const,
    text: "Website berkarakter, dari tampilan hingga interaksi.",
    body: "Menerjemahkan ide menjadi pengalaman web yang jelas, responsif, dan nyaman dijelajahi. Desain dan pengembangan berjalan bersama agar tampilan memiliki fungsi yang tepat.",
    bullets: ["Landing page & website portofolio", "Antarmuka responsif untuk berbagai layar", "Komponen dan interaksi dengan Next.js"],
  },
  {
    title: "Motion for the Web",
    icon: "chart" as const,
    text: "Ketika gerak dan kode saling melengkapi.",
    body: "Memadukan motion graphic dan pengembangan web untuk membentuk pengalaman digital yang lebih hidup. Animasi menjadi bagian dari alur, membantu pengguna memahami dan menikmati setiap interaksi.",
    bullets: ["Micro-interaction & transisi antarmuka", "Animasi visual berbasis CSS dan SVG", "Gerak yang memperhatikan aksesibilitas"],
  },
];

export const processSteps = [
  { title: "Konsep & Arah Visual", short: ["Konsep &", "Arah Visual"], text: "Memahami tujuan, mengenali audiens, lalu menyatukan ide menjadi arah visual yang jelas.", body: "Setiap proyek dimulai dari cerita yang ingin disampaikan. Tahap ini merangkum tujuan, referensi, kebutuhan konten, dan arah visual sebelum masuk ke desain atau pengembangan." },
  { title: "Desain & Development", short: ["Desain &", "Development"], text: "Mengolah ide menjadi visual bergerak dan pengalaman web yang saling terhubung.", body: "Konsep dikembangkan menjadi storyboard, desain antarmuka, animasi, atau komponen web sesuai kebutuhan proyek. Bentuk, ritme, dan interaksi disusun sebagai satu pengalaman." },
  { title: "Finishing & Delivery", short: ["Finishing &", "Delivery"], text: "Merapikan detail, menguji hasil, dan menyiapkan karya untuk digunakan.", body: "Tahap akhir berfokus pada detail: meninjau gerak, keterbacaan, responsivitas, dan interaksi. Hasil kemudian disiapkan dalam format yang disepakati untuk kebutuhan publikasi atau website." },
];

export const categories = ["Semua", "Motion Graphic", "Web Development"] as const;
export type Category = typeof categories[number];

export const projects = [
  { id: "flow", title: "Flow — Kinetic Identity", label: "MOTION GRAPHIC", categories: ["Motion Graphic"], summary: "Eksplorasi identitas visual melalui bentuk, tipografi, dan ritme.", description: "Studi konsep motion graphic yang memadukan tipografi dan bentuk geometris. Gerak berulang memperlihatkan bagaimana sebuah identitas dapat memiliki ritme dan karakternya sendiri.", tags: ["Kinetic Typography", "Brand Motion", "Visual Rhythm"] },
  { id: "forma", title: "Forma — Digital Experience", label: "WEB DEVELOPMENT", categories: ["Web Development"], summary: "Studi landing page dengan tata letak bersih dan karakter visual yang kuat.", description: "Eksplorasi landing page untuk sebuah studio kreatif fiktif. Fokusnya adalah hierarki konten, komposisi visual, dan antarmuka yang tetap terbaca pada layar desktop maupun ponsel.", tags: ["Landing Page", "Responsive UI", "Creative Development"] },
  { id: "pulse", title: "Pulse — Interactive Motion", label: "MOTION × WEB", categories: ["Motion Graphic", "Web Development"], summary: "Pertemuan animasi visual dan interaksi web dalam satu pengalaman.", description: "Konsep pengalaman digital yang menghubungkan motion graphic dengan antarmuka web. Bentuk dan gerak menjadi aksen yang memperkuat identitas, dengan opsi jeda untuk mengontrol animasi.", tags: ["Web Animation", "CSS & SVG", "Interaction Design"] },
] as const;
export type Project = typeof projects[number];

export const faqs = [
  ["Apa fokus kreatif Indra Wijaya?", "Fokus portofolio ini adalah motion graphic dan web development: mengolah ide menjadi animasi visual, antarmuka website, dan pengalaman digital yang memadukan keduanya."],
  ["Apakah motion graphic bisa digabung dengan website?", "Bisa. Motion dapat menjadi bagian dari identitas website melalui animasi, transisi, dan micro-interaction. Pengguna juga perlu tetap bisa membaca konten dan mengontrol gerak dengan nyaman."],
  ["Bagaimana alur pengerjaan proyek?", "Alurnya dimulai dari memahami brief dan menentukan arah visual, berlanjut ke desain serta pengembangan, kemudian finishing dan pemeriksaan hasil. Ruang lingkup dan jadwal dibahas sesuai kebutuhan proyek."],
  ["Bagaimana memulai sebuah proyek?", "Klik Siapkan Brief Proyek untuk merangkum kebutuhanmu. Brief dapat diunduh untuk dibagikan saat menghubungi Indra. Formulir ini membuat dokumen brief dan belum mengirim pesan secara otomatis."],
] as const;
