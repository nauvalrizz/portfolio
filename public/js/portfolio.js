
    (function(){
      var desktop=document.getElementById('desktop');
      var windows=Array.prototype.slice.call(document.querySelectorAll('.window'));
      var topZ=10;
      var currentLanguage='en';
      var forcedTheme='dark';
      var translations={
        'Loading portfolio desktop…':'Memuat desktop portofolio…','Opening windows…':'Membuka jendela…','Ready.':'Siap.','Click an icon to open':'Klik ikon untuk membuka',
        'contact':'kontak','certificates':'sertifikasi','File':'Berkas','Edit':'Sunting','Search':'Cari','Help':'Bantuan','View':'Tampilan','Options':'Opsi','Archive':'Arsip','Channels':'Kategori','Images':'Gambar',
        'INFORMATICS GRADUATE / SELECTED WORK':'LULUSAN INFORMATIKA / KARYA PILIHAN','builds useful digital experiences.':'membangun pengalaman digital yang berguna.','Fresh Informatics graduate from Universitas Amikom Purwokerto with hands-on experience across web development, UI/UX, mobile and desktop applications, multimedia, and usability evaluation.':'Lulusan baru Informatika dari Universitas Amikom Purwokerto dengan pengalaman langsung dalam pengembangan web, UI/UX, aplikasi mobile dan desktop, multimedia, serta evaluasi usability.','OPEN PROJECTS':'BUKA PROYEK','VIEW SKILLS':'LIHAT SKILL','Degree':'Gelar','Based':'Domisili','PROJECT INDEX':'INDEKS PROYEK','WORKING SET':'PERANGKAT KERJA','PUBLISHED RESEARCH':'RISET TERBIT','web + research':'web + riset','e-commerce':'e-commerce','news portal':'portal berita','+ 5 more':'+ 5 lainnya','Laravel, Next.js, Flutter, C#/.NET, WordPress, MySQL, MongoDB, SQL Server, Figma, and Git.':'Laravel, Next.js, Flutter, C#/.NET, WordPress, MySQL, MongoDB, SQL Server, Figma, dan Git.','Website usability evaluation using the System Usability Scale: 56 respondents and a mean score of 81.83, published in June 2026.':'Evaluasi usability website menggunakan System Usability Scale: 56 responden dengan skor rata-rata 81,83, terbit Juni 2026.','1 file':'1 berkas','plain text':'teks biasa',
        'Village UI Redesign':'Redesain UI Web Desa','Village Website UI Redesign':'Redesain UI Website Desa','KKL PROJECT / UI REDESIGN · WORDPRESS / AUG 2025':'PROYEK KKL / REDESAIN UI · WORDPRESS / AGU 2025','E-COMMERCE / NEXT.JS · MONGODB / MAY 2025':'E-COMMERCE / NEXT.JS · MONGODB / MEI 2025','3D ANIMATION / 3DS MAX · MIXAMO / MAR 2025':'ANIMASI 3D / 3DS MAX · MIXAMO / MAR 2025','FINAL RENDER':'RENDER AKHIR','NEWS PORTAL / LARAVEL · LIVEWIRE · MYSQL / NOV 2024':'PORTAL BERITA / LARAVEL · LIVEWIRE · MYSQL / NOV 2024','DESKTOP APP / C# · .NET · SQL SERVER / OCT 2024':'APLIKASI DESKTOP / C# · .NET · SQL SERVER / OKT 2024','MOBILE MARKETPLACE / FLUTTER · DART · FIGMA / MAY 2024':'MARKETPLACE MOBILE / FLUTTER · DART · FIGMA / MEI 2024','CHARACTER IP / DESIGN · STRATEGY / APR 2024':'IP KARAKTER / DESAIN · STRATEGI / APR 2024',
        'CHALLENGE':'TANTANGAN','BUILD':'PROSES','OUTCOME':'HASIL','MY FOCUS':'FOKUS SAYA','CORE EXPERIENCE':'PENGALAMAN UTAMA','VALIDATION':'VALIDASI','RESULT':'HASIL','PLATFORM':'PLATFORM','DATA LAYER':'LAPISAN DATA','PRODUCTION':'PRODUKSI','TOOLCHAIN':'ALUR ALAT','ACCESS MODEL':'MODEL AKSES','COLLABORATION':'KOLABORASI','CORE PACKAGE':'PAKET UTAMA','STRATEGY':'STRATEGI',
        'Turning cultural discovery into an experience you can hear, explore, and test.':'Mengubah eksplorasi budaya menjadi pengalaman yang bisa didengar, dijelajahi, dan diuji.','MuSantara guides learners from instrument categories and search into audio playback and interactive quizzes, all within a responsive educational interface.':'MuSantara memandu pelajar dari kategori instrumen dan pencarian menuju pemutaran audio serta kuis interaktif dalam antarmuka edukasi yang responsif.','Make traditional instrument knowledge feel engaging rather than encyclopedic.':'Membuat pengetahuan alat musik tradisional terasa menarik, bukan sekadar ensiklopedia.','Developed the interface, multimedia flow, and usability evaluation.':'Mengembangkan antarmuka, alur multimedia, dan evaluasi usability.','Reached a SUS score of 81.83 across 56 respondents.':'Mencapai skor SUS 81,83 dari 56 responden.',
        'Refining a village website so public information feels clearer and easier to reach.':'Menyempurnakan website desa agar informasi publik terasa lebih jelas dan mudah dijangkau.','Completed during KKL, this project focused on improving the existing Karangtengah village website interface, navigation, and content presentation.':'Dikerjakan selama KKL, proyek ini berfokus memperbaiki antarmuka, navigasi, dan penyajian konten pada website Desa Karangtengah yang sudah ada.','The existing village website needed a clearer interface for everyday public information.':'Website desa yang sudah ada membutuhkan antarmuka yang lebih jelas untuk informasi publik sehari-hari.','Reworked the UI, navigation, and content presentation in WordPress during KKL.':'Mengerjakan ulang UI, navigasi, dan penyajian konten di WordPress selama KKL.','Made key village updates and services easier to browse on the live site.':'Membuat kabar desa dan layanan utama lebih mudah dijelajahi di website aktif.',
        'One connected system from product discovery to stock movement.':'Satu sistem terhubung dari penemuan produk hingga pergerakan stok.','Customers move through authentication, products, cart, addresses, and orders while role-based tools keep inventory and automatic stock updates in sync.':'Pelanggan melewati autentikasi, produk, keranjang, alamat, dan pesanan, sementara alat berbasis peran menjaga inventaris serta pembaruan stok otomatis tetap sinkron.','Connect a usable storefront with the operational logic behind it.':'Menghubungkan etalase yang mudah digunakan dengan logika operasional di belakangnya.','Built the full-stack purchasing, access, order, and inventory flows.':'Membangun alur full-stack untuk pembelian, akses, pesanan, dan inventaris.','Linked checkout actions directly to managed stock updates.':'Menghubungkan proses checkout langsung ke pembaruan stok terkelola.',
        'Building a story world from rigged characters to the final camera move.':'Membangun dunia cerita dari karakter yang di-rig hingga gerakan kamera akhir.','The production combines character and environment assets, rigging, animation, and structured scene composition across roads, houses, trees, backgrounds, and props.':'Produksi ini menggabungkan aset karakter dan lingkungan, rigging, animasi, serta komposisi adegan untuk jalan, rumah, pohon, latar, dan properti.','Stage a coherent animated environment from many separate 3D assets.':'Menyusun lingkungan animasi yang koheren dari berbagai aset 3D terpisah.','Supported modeling, rigging, character motion, camera work, and assembly.':'Mendukung modeling, rigging, gerak karakter, kamera, dan penyusunan adegan.','Produced an organized scene ready to carry the animated story.':'Menghasilkan adegan tertata yang siap membawa cerita animasi.',
        'A newsroom workflow where every role sees the tools it actually needs.':'Alur kerja ruang redaksi tempat setiap peran melihat alat yang benar-benar dibutuhkan.','The responsive portal combines publishing CRUD, authentication, validation, comments, and replies with distinct access for administrators, editors, journalists, and readers.':'Portal responsif ini menggabungkan CRUD publikasi, autentikasi, validasi, komentar, dan balasan dengan akses berbeda bagi administrator, editor, jurnalis, dan pembaca.','Support public reading and controlled editorial work in one system.':'Mendukung pembacaan publik dan kerja editorial terkontrol dalam satu sistem.','Designed the interface and developed role-aware publishing workflows.':'Merancang antarmuka dan mengembangkan alur publikasi berbasis peran.','Created a complete path from article management to discussion.':'Membuat alur lengkap dari pengelolaan artikel hingga diskusi.',
        'A desktop control point for spaces, vehicles, reservations, and transactions.':'Pusat kendali desktop untuk ruang, kendaraan, reservasi, dan transaksi.','ParkEazy keeps authentication, availability monitoring, parking records, reservations, and CRUD operations inside one focused operational interface.':'ParkEazy menyatukan autentikasi, pemantauan ketersediaan, catatan parkir, reservasi, dan operasi CRUD dalam satu antarmuka operasional.','Make daily parking activity easy to monitor and record.':'Memudahkan pemantauan dan pencatatan aktivitas parkir harian.','Developed the application logic and desktop interface in C#/.NET.':'Mengembangkan logika aplikasi dan antarmuka desktop dengan C#/.NET.','Unified space availability, activity, and transaction records.':'Menyatukan ketersediaan ruang, aktivitas, dan catatan transaksi.',
        'A focused mobile journey for browsing and discovering game-account listings.':'Perjalanan mobile yang fokus untuk menelusuri dan menemukan listing akun game.','The Flutter application translates the marketplace concept into clear navigation, interface components, and product-listing views developed through a collaborative Git workflow.':'Aplikasi Flutter ini menerjemahkan konsep marketplace menjadi navigasi, komponen antarmuka, dan tampilan listing produk yang jelas melalui alur Git kolaboratif.','Keep a specialized marketplace understandable on a small screen.':'Menjaga marketplace khusus tetap mudah dipahami di layar kecil.','Contributed UI/UX, Flutter implementation, testing, and team workflow.':'Berkontribusi pada UI/UX, implementasi Flutter, pengujian, dan alur kerja tim.','Delivered a navigable product-listing application with the team.':'Menghasilkan aplikasi listing produk yang mudah dinavigasi bersama tim.',
        'A character concept developed as an identity, a story, and a marketable IP.':'Konsep karakter yang dikembangkan sebagai identitas, cerita, dan IP yang dapat dipasarkan.','Lapon moves beyond visual design into a full profile, backstory, synopsis, SWOT analysis, intellectual-property strategy, and audience segmentation.':'Lapon melampaui desain visual menjadi profil lengkap, latar cerita, sinopsis, analisis SWOT, strategi kekayaan intelektual, dan segmentasi audiens.','Create a character that could live beyond a single illustration.':'Menciptakan karakter yang dapat berkembang melampaui satu ilustrasi.','Developed the visual identity, world-building, and positioning strategy.':'Mengembangkan identitas visual, world-building, dan strategi positioning.','Documented a complete character concept with market direction.':'Mendokumentasikan konsep karakter lengkap dengan arah pasar.',
        '8 projects':'8 proyek','click a file to preview':'klik berkas untuk melihat','The Skill Deck':'Koleksi Skill','Sixteen tools, collected through real builds. Flip any card for the field note.':'Enam belas alat yang terkumpul dari proyek nyata. Balik kartu untuk melihat catatannya.','SERIES 2026 · 16 CARDS':'SERI 2026 · 16 KARTU','FIELD NOTE':'CATATAN PROYEK','FLIP BACK ↺':'BALIK LAGI ↺','METHOD':'METODE','PROOF':'BUKTI','TOOLKIT':'PERANGKAT','click a card to flip':'klik kartu untuk membalik',
        'Certifications':'Sertifikasi','certifications — Archive':'sertifikasi — Arsip','THE SKILL DECK':'KOLEKSI SKILL','CERTIFICATIONS':'SERTIFIKASI','Formal training that supports the systems, productivity, language, and front-end work in this portfolio.':'Pelatihan formal yang mendukung kemampuan sistem, produktivitas, bahasa, dan front-end dalam portofolio ini.','Linux system administration training.':'Pelatihan administrasi sistem Linux.','Productivity and document workflow training.':'Pelatihan produktivitas dan alur kerja dokumen.','English-language competency training.':'Pelatihan kompetensi bahasa Inggris.','Front-end development training.':'Pelatihan pengembangan front-end.','CERTIFICATE · 2024':'SERTIFIKAT · 2024','4 certificates':'4 sertifikat','verified from CV':'terverifikasi dari CV','training archive':'arsip pelatihan',
        'Let’s build something useful.':'Mari membangun sesuatu yang berguna.','For opportunities, collaborations, or project conversations, get in touch through the channel where this portfolio was shared.':'Untuk peluang, kolaborasi, atau percakapan proyek, hubungi melalui saluran tempat portofolio ini dibagikan.','Contact Me':'Hubungi Saya',
        'More':'Lainnya','Portfolio shortcuts, tools, and small experiments.':'Pintasan portofolio, alat, dan eksperimen kecil.','About Me':'Tentang Saya','Projects':'Proyek','selected college work':'karya kuliah pilihan','Skills & Tools':'Skill & Alat','Contact':'Kontak','PLAYGROUND & TOOLS':'EKSPERIMEN & ALAT','Commands, Snake, and Tetris':'Perintah, Snake, dan Tetris','Project Gallery':'Galeri Proyek','Preview your own images':'Pratinjau gambarmu','Wallpaper Studio':'Studio Wallpaper','Color, pattern, image, and motion':'Warna, pola, gambar, dan gerak','Quick Switcher':'Pindah Cepat','Jump anywhere · Ctrl/⌘ + K':'Lompat ke mana saja · Ctrl/⌘ + K','Show Wallpaper':'Tampilkan Wallpaper','Minimize every open window':'Minimalkan semua jendela','My Projects':'Proyek Saya','Skills':'Skill','More':'Lainnya','Profile & overview':'Profil & ringkasan','Eight case studies':'Delapan studi kasus','Skill Deck':'Koleksi Skill','Sixteen flip cards':'Enam belas kartu balik','Start a conversation':'Mulai percakapan','Display FX':'Efek Tampilan','Wallpaper & sound':'Wallpaper & suara','Type to filter, then choose a destination.':'Ketik untuk memfilter, lalu pilih tujuan.','CLOSE':'TUTUP','Open Terminal':'Buka Terminal','Change Wallpaper':'Ganti Wallpaper','Tidy Windows':'Rapikan Jendela',
        'my_projects — File Manager':'my_projects — Pengelola Berkas','skills.cfg — Control Panel':'skills.cfg — Panel Kontrol','about_me.txt — Notepad':'about_me.txt — Catatan','contact.msg — Mail':'contact.msg — Surat','gallery — Image Viewer':'gallery — Penampil Gambar','wallpaper.cfg — Display':'wallpaper.cfg — Tampilan','Profile & overview':'Profil & ringkasan','Commands & games':'Perintah & game',
        'Interface, multimedia flow, and usability evaluation':'Antarmuka, alur multimedia, dan evaluasi usability','Discover instruments, hear their sound, then test understanding':'Temukan instrumen, dengarkan suaranya, lalu uji pemahaman','System Usability Scale study with 56 respondents':'Studi System Usability Scale dengan 56 responden','81.83 SUS score, documented in published research':'Skor SUS 81,83 yang terdokumentasi dalam riset terbit','UI redesign and information architecture':'Redesain UI dan arsitektur informasi','Existing village website interface and navigation':'Antarmuka dan navigasi website desa yang sudah ada','WordPress-based village information website':'Website informasi desa berbasis WordPress','Clearer access to updates and public services':'Akses yang lebih jelas ke kabar dan layanan publik','Full-stack purchasing and inventory flows':'Alur pembelian dan inventaris full-stack','Authentication, products, cart, address, and order handling':'Autentikasi, produk, keranjang, alamat, dan pengelolaan pesanan','MongoDB-backed product and account information':'Informasi produk dan akun berbasis MongoDB','Checkout connected to role-based stock management':'Checkout terhubung ke pengelolaan stok berbasis peran','Character motion, camera work, and scene assembly':'Gerak karakter, kamera, dan penyusunan adegan','Models, environments, props, rigging, and animation':'Model, lingkungan, properti, rigging, dan animasi','3ds Max and Mixamo across the 3D workflow':'3ds Max dan Mixamo dalam alur kerja 3D','A coherent environment structured for the final story':'Lingkungan koheren yang disusun untuk cerita akhir','Interface design and role-aware publishing workflows':'Desain antarmuka dan alur publikasi berbasis peran','Draft, validate, publish, comment, and reply':'Tulis draf, validasi, terbitkan, beri komentar, dan balas','Separate tools for administrators, editors, journalists, and readers':'Perangkat terpisah untuk administrator, editor, jurnalis, dan pembaca','A responsive portal covering the complete newsroom flow':'Portal responsif yang mencakup alur redaksi lengkap','Desktop interface and application logic':'Antarmuka desktop dan logika aplikasi','Authentication, reservations, vehicles, and parking records':'Autentikasi, reservasi, kendaraan, dan catatan parkir','SQL Server records connected to C#/.NET workflows':'Data SQL Server yang terhubung ke alur C#/.NET','One operational view for daily parking management':'Satu tampilan operasional untuk pengelolaan parkir harian','UI/UX, Flutter implementation, and testing':'UI/UX, implementasi Flutter, dan pengujian','Browse, search, and inspect game-account listings':'Telusuri, cari, dan periksa listing akun game','Shared Git workflow across the mobile project team':'Alur Git bersama dalam tim proyek mobile','A focused marketplace journey designed for a small screen':'Perjalanan marketplace terfokus untuk layar kecil','Visual identity, world-building, and positioning':'Identitas visual, world-building, dan positioning','Profile, backstory, synopsis, and character direction':'Profil, latar cerita, sinopsis, dan arah karakter','SWOT analysis, audience segments, and IP planning':'Analisis SWOT, segmentasi audiens, dan perencanaan IP','A character concept ready to grow beyond one illustration':'Konsep karakter yang siap berkembang melampaui satu ilustrasi',
        'DISCOVER':'TEMUKAN','LISTEN':'DENGARKAN','QUIZ':'KUIS','AUDIT':'AUDIT','REDESIGN':'REDESAIN','REFINE':'SEMPURNAKAN','BROWSE':'TELUSURI','CHECKOUT':'CHECKOUT','STOCK':'STOK','MODEL':'MODEL','RIG':'RIG','ANIMATE':'ANIMASI','DRAFT':'DRAF','REVIEW':'TINJAU','PUBLISH':'TERBITKAN','ARRIVE':'DATANG','PARK':'PARKIR','RECORD':'CATAT','LISTING':'LISTING','DETAIL':'DETAIL','STORY':'CERITA',
        'SERVER-SIDE CRAFT':'PENGEMBANGAN SERVER','Structured web apps with authentication, content, and role-based flows.':'Aplikasi web terstruktur dengan autentikasi, konten, dan alur berbasis peran.','FULL-STACK WEB':'WEB FULL-STACK','Responsive storefront logic from product discovery through checkout.':'Logika toko responsif dari penemuan produk hingga checkout.','INTERACTION LOGIC':'LOGIKA INTERAKSI','Interface behavior, interactive learning, and client-side experiences.':'Perilaku antarmuka, pembelajaran interaktif, dan pengalaman sisi klien.','CONTENT SYSTEMS':'SISTEM KONTEN','Maintainable publishing structures for public information.':'Struktur publikasi yang mudah dikelola untuk informasi publik.','MOBILE INTERFACES':'ANTARMUKA MOBILE','Focused mobile journeys with clear navigation and reusable UI.':'Perjalanan mobile terfokus dengan navigasi jelas dan UI yang dapat digunakan ulang.','DESKTOP SYSTEMS':'SISTEM DESKTOP','Desktop application logic for records, reservations, and operations.':'Logika aplikasi desktop untuk catatan, reservasi, dan operasi.','RELATIONAL DATA':'DATA RELASIONAL','Reliable relational data behind content and application workflows.':'Data relasional andal di balik alur konten dan aplikasi.','DOCUMENT DATA':'DATA DOKUMEN','Flexible product and account data for a connected storefront.':'Data produk dan akun fleksibel untuk toko yang terhubung.','INTERFACE DESIGN':'DESAIN ANTARMUKA','Interface planning before code, from screens to shared direction.':'Perencanaan antarmuka sebelum coding, dari layar hingga arah bersama.','USER FLOWS':'ALUR PENGGUNA','Clear flows shaped around what people need to do next.':'Alur jelas yang dibentuk berdasarkan langkah pengguna berikutnya.','IDEA TO FLOW':'IDE KE ALUR','Early interaction models that expose friction before development.':'Model interaksi awal yang menemukan hambatan sebelum pengembangan.','Flow first, then refine':'Utamakan alur, lalu sempurnakan','USABILITY EVIDENCE':'BUKTI USABILITY','Structured usability evaluation turned into a published result.':'Evaluasi usability terstruktur yang menghasilkan publikasi.','SCENE BUILDING':'PENYUSUNAN ADEGAN','Characters, environments, camera work, and scene assembly.':'Karakter, lingkungan, kamera, dan penyusunan adegan.','CHARACTER MOTION':'GERAK KARAKTER','Character rigging and motion integrated into a 3D workflow.':'Rigging dan gerak karakter yang terintegrasi ke alur 3D.','MOTION POLISH':'PENYEMPURNAAN GERAK','Motion and post-production polish for visual storytelling.':'Penyempurnaan gerak dan pascaproduksi untuk penceritaan visual.','Animation & finishing':'Animasi & penyelesaian','TEAM DELIVERY':'KOLABORASI TIM','Versioned collaboration and organized handoff across builds.':'Kolaborasi berversi dan serah-terima teratur antarproyek.','JBAG team workflow':'Alur kerja tim JBAG',
        'Ready. Type HELP to see the basic commands.':'Siap. Ketik HELP untuk melihat perintah dasar.','Best this session:':'Terbaik sesi ini:','GAME MODE':'MODE GAME','← EXIT GAME':'← KELUAR GAME','SCORE':'SKOR','SPEED':'KECEPATAN','BEST':'TERBAIK','Starts slow. Every bite makes the snake faster.':'Mulai pelan. Setiap makanan membuat ular makin cepat.','START':'MULAI','PAUSE':'JEDA','ARROW KEYS / WASD':'TOMBOL PANAH / WASD','LINES':'BARIS','Clear lines. The blocks fall faster as your score grows.':'Hapus baris. Balok jatuh makin cepat saat skor bertambah.','ARROWS · UP ROTATES':'PANAH · ATAS MEMUTAR','best scores kept this session':'skor terbaik tersimpan selama sesi ini',
        'CHOOSE IMAGES':'PILIH GAMBAR','Preview project images for this visit.':'Pratinjau gambar proyek selama kunjungan ini.','No project images added yet.':'Belum ada gambar proyek.','Choose PNG, JPEG, GIF, or WebP files.':'Pilih berkas PNG, JPEG, GIF, atau WebP.','0 images':'0 gambar','not saved after refresh':'tidak tersimpan setelah dimuat ulang','DESKTOP COLOR':'WARNA DESKTOP','PATTERN':'POLA','GRID':'KOTAK','PLAIN':'POLOS','WALLPAPER ANIMATION':'ANIMASI WALLPAPER','OFF':'MATI','Move a pointer or drag a finger to bend the signal field; click or tap for a subtle pulse. Choose Solar for the complete eight-planet orbital view.':'Gerakkan pointer atau geser jari untuk membengkokkan medan sinyal; klik atau ketuk untuk pulsa halus. Pilih Solar untuk tampilan orbit delapan planet.','SYSTEM EFFECTS':'EFEK SISTEM','CRT · ON':'CRT · NYALA','SOUND · ON':'SUARA · NYALA','TEST SOUND':'TES SUARA','PREVIEW SAVER':'PRATINJAU SAVER','Adds fine scanlines, a soft screen-edge vignette, and a slow phosphor sweep.':'Menambahkan scanline halus, vignette lembut, dan sapuan phosphor pelan.','Each action picks a new note pattern from a musical scale. Window controls keep distinct rising and falling cues.':'Setiap aksi memilih pola nada baru dari tangga nada. Kontrol jendela tetap memiliki nada naik dan turun yang berbeda.','TOUCH FX':'EFEK SENTUH','Drag a finger to bend the signal field. Every tap sends a visible pulse and supported phones add a tiny vibration.':'Geser jari untuk membengkokkan medan sinyal. Setiap ketukan menghasilkan pulsa dan getaran kecil pada ponsel yang mendukung.','SAVER':'SAVER','Starts after 50 seconds without pointer, key, or scroll activity.':'Dimulai setelah 50 detik tanpa aktivitas pointer, tombol, atau gulir.','MOVE POINTER OR PRESS A KEY TO RETURN':'GERAKKAN POINTER ATAU TEKAN TOMBOL UNTUK KEMBALI','USE AN IMAGE':'GUNAKAN GAMBAR','RESET':'ATUR ULANG','Changes last until this page is refreshed.':'Perubahan berlaku sampai halaman dimuat ulang.','BIT the robot pet. Tap it gently for tricks, hold and spin to dizzy it, or drop it on a window roof. It can also climb up by itself.':'BIT robot peliharaan. Tap pelan untuk trik, angkat dan putar untuk memusingkannya, atau letakkan di atap window. Ia juga bisa memanjat sendiri.'
      };
      var translatedNodes=[];
      function collectTranslatedNodes(){
        var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){var parent=node.parentElement;if(!parent||parent.closest('script,style')){return NodeFilter.FILTER_REJECT;}var key=node.nodeValue.trim();return key&&translations[key]?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
        var node;while((node=walker.nextNode())){translatedNodes.push({node:node,en:node.nodeValue.trim(),lead:(node.nodeValue.match(/^\s*/)||[''])[0],trail:(node.nodeValue.match(/\s*$/)||[''])[0]});}
      }
      function applyLanguage(language){
        currentLanguage=language;document.documentElement.lang=language==='id'?'id':'en';
        translatedNodes.forEach(function(item){item.node.nodeValue=item.lead+(language==='id'?(translations[item.en]||item.en):item.en)+item.trail;});
        document.querySelectorAll('[data-language-toggle]').forEach(function(button){var isIndonesian=language==='id';button.setAttribute('aria-pressed',String(isIndonesian));button.textContent=button.classList.contains('quick-setting')?(isIndonesian?'LANGUAGE · EN':'BAHASA · ID'):(isIndonesian?'EN':'ID');button.setAttribute('aria-label',isIndonesian?'Switch to English':'Ganti ke Bahasa Indonesia');});
        if(skillCards&&skillStatus){updateSkillStatus();}applyTheme(forcedTheme);
      }
      function applyTheme(theme){
        forcedTheme=theme;document.documentElement.classList.toggle('theme-dark',theme==='dark');document.documentElement.classList.toggle('theme-light',theme==='light');
        document.querySelectorAll('[data-theme-toggle]').forEach(function(button){var dark=theme==='dark';button.setAttribute('aria-pressed',String(dark));button.textContent=button.classList.contains('quick-setting')?(currentLanguage==='id'?(dark?'TEMA · TERANG':'TEMA · GELAP'):(dark?'THEME · LIGHT':'THEME · DARK')):(dark?'LIGHT':'DARK');button.setAttribute('aria-label',dark?(currentLanguage==='id'?'Gunakan tema terang':'Use light theme'):(currentLanguage==='id'?'Gunakan tema gelap':'Use dark theme'));});refreshCursorPalette();
      }
      collectTranslatedNodes();
      document.querySelectorAll('[data-language-toggle]').forEach(function(button){button.addEventListener('click',function(){applyLanguage(currentLanguage==='en'?'id':'en');});});
      document.querySelectorAll('[data-theme-toggle]').forEach(function(button){button.addEventListener('click',function(){applyTheme(forcedTheme==='light'?'dark':'light');});});
      applyLanguage('en');applyTheme(forcedTheme);
      var boot=document.getElementById('boot-screen');
      var bootStatus=document.getElementById('boot-status');
      function finishBoot(){desktop.classList.add('is-ready');boot.classList.add('is-leaving');setTimeout(function(){boot.classList.add('is-done');},840);}
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){boot.classList.add('is-done');desktop.classList.add('is-ready');}else{setTimeout(function(){bootStatus.textContent='Opening windows…';},340);setTimeout(function(){bootStatus.textContent='Ready.';},620);setTimeout(finishBoot,760);}
      function focusWindow(win){if(!win){return;}topZ+=1;windows.forEach(function(item){item.classList.remove('is-focused');});document.querySelectorAll('.task-button').forEach(function(button){button.classList.remove('is-focused');});win.classList.add('is-focused');win.style.zIndex=topZ;var task=document.querySelector('.task-button[data-open="'+win.id+'"]');if(task){task.classList.add('is-focused');}}
      function syncTaskbarDensity(){var activeCount=document.querySelectorAll('.task-button.active').length;desktop.classList.toggle('taskbar-dense',window.innerWidth>=1024&&activeCount>4);}
      function setTask(id,visible){document.querySelectorAll('.task-button[data-open="'+id+'"]').forEach(function(button){button.classList.toggle('active',visible);});syncTaskbarDensity();}
      function openWindow(id,source){var win=document.getElementById(id);if(!win){return;}var wasDormant=win.classList.contains('is-hidden')||win.classList.contains('minimized');var sourceRect=source&&source.getBoundingClientRect?source.getBoundingClientRect():null;if(window.innerWidth<1024){windows.forEach(function(item){if(item!==win){item.classList.add('is-hidden');item.classList.remove('minimized','maximized','is-focused','launching');setTask(item.id,false);}});document.querySelectorAll('.mobile-nav-button[data-open]').forEach(function(button){if(button.getAttribute('data-open')===id){button.setAttribute('aria-current','page');}else{button.removeAttribute('aria-current');}});}win.classList.remove('is-hidden','minimized');if(wasDormant){var winRect=win.getBoundingClientRect();if(sourceRect&&sourceRect.width&&sourceRect.height&&winRect.width&&winRect.height){var sourceX=sourceRect.left+sourceRect.width/2;var sourceY=sourceRect.top+sourceRect.height/2;var winX=winRect.left+winRect.width/2;var winY=winRect.top+winRect.height/2;var maxTravel=window.innerWidth<1024?120:220;var launchX=Math.max(-maxTravel,Math.min(maxTravel,(sourceX-winX)*.32));var launchY=Math.max(-maxTravel,Math.min(maxTravel,(sourceY-winY)*.32));var originX=Math.max(0,Math.min(100,(sourceX-winRect.left)/winRect.width*100));var originY=Math.max(0,Math.min(100,(sourceY-winRect.top)/winRect.height*100));win.style.setProperty('--launch-x',launchX+'px');win.style.setProperty('--launch-y',launchY+'px');win.style.setProperty('--launch-origin-x',originX+'%');win.style.setProperty('--launch-origin-y',originY+'%');}else{win.style.setProperty('--launch-x','18px');win.style.setProperty('--launch-y','16px');win.style.setProperty('--launch-origin-x','50%');win.style.setProperty('--launch-origin-y','50%');}win.classList.remove('launching');void win.offsetWidth;win.classList.add('launching');clearTimeout(win.launchTimer);win.launchTimer=setTimeout(function(){win.classList.remove('launching');},540);}setTask(id,true);focusWindow(win);if(window.innerWidth<768&&(id==='about-window'||id==='skills-window'||id==='contact-window')){var targetScroller=id==='skills-window'?win.querySelector('.skills-scroll-content'):win.querySelector('.window-body');if(targetScroller){targetScroller.scrollTop=0;}}if(id==='terminal-window'&&!win.classList.contains('game-mode')){setTimeout(function(){var input=document.getElementById('terminal-input');if(input){input.focus();}},120);}if(window.innerWidth>=1024&&window.innerWidth<1181){win.scrollIntoView({behavior:'smooth',block:'start'});}}
      function pauseProjectVideos(){document.querySelectorAll('#projects-window video').forEach(function(video){video.pause();});}function minimizeWindow(win){if(win.id==='projects-window'){pauseProjectVideos();}win.classList.remove('maximized');win.classList.add('minimized');win.classList.remove('is-focused');var task=document.querySelector('.task-button[data-open="'+win.id+'"]');if(task){task.classList.remove('is-focused');}if(window.innerWidth<1024){document.querySelectorAll('.mobile-nav-button[data-open]').forEach(function(button){button.removeAttribute('aria-current');});}}
      document.querySelectorAll('[data-open]').forEach(function(button){button.addEventListener('click',function(){openWindow(button.getAttribute('data-open'),button);var skillTab=button.getAttribute('data-skill-tab-open');if(skillTab&&typeof setSkillTab==='function'){setSkillTab(skillTab);}closeStart();});});
      windows.forEach(function(win){win.addEventListener('pointerdown',function(){focusWindow(win);});});document.addEventListener('click',function(event){var button=event.target&&event.target.closest?event.target.closest('[data-action]'):null;if(!button)return;var win=button.closest('.window');if(!win)return;event.stopPropagation();var action=button.getAttribute('data-action');playRetroClick(button,false,false,action);if(action==='maximize'){win.classList.toggle('maximized');focusWindow(win);}else if(action==='minimize'){if(win.id==='terminal-window'){pauseActiveGame();}minimizeWindow(win);}else if(action==='close'){if(win.id==='terminal-window'){closeGameMode(true);}if(win.id==='projects-window'){pauseProjectVideos();}win.classList.remove('minimized','maximized');win.classList.add('is-hidden');setTask(win.id,false);}});
      var projectFiles=Array.prototype.slice.call(document.querySelectorAll('#projects-window .file'));
      var projectArticles=Array.prototype.slice.call(document.querySelectorAll('#projects-window .project'));
      var projectPreview=document.querySelector('#projects-window .preview');
      var projectSelector=document.getElementById('project-selector');
      var projectSelectorButton=document.getElementById('project-selector-button');
      var projectSelectorCurrent=document.getElementById('project-selector-current');
      var projectSelectorLabel=document.getElementById('project-selector-label');
      var projectSelectorMenu=document.getElementById('project-selector-menu');
      var projectMenuItems=[];
      var projectSwitchTimer=0;
      var projectSelectorCloseTimer=0;
      function compactProjectMeta(value){var parts=value.split('/').map(function(part){return part.trim();}).filter(Boolean);var category=parts[0]||'';var date=parts[parts.length-1]||'';function titleCase(text){return text.toLowerCase().replace(/(^|[\s-])([a-z])/g,function(match,space,letter){return space+letter.toUpperCase();}).replace(/\bKkl\b/g,'KKL').replace(/\bUi\b/g,'UI').replace(/\b3d\b/gi,'3D');}return titleCase(category)+(category&&date?' · ':'')+titleCase(date);}
      function updateProjectCounter(projectId){var index=projectFiles.findIndex(function(item){return item.getAttribute('data-project')===projectId;});if(index<0){index=0;}projectSelectorLabel.textContent='PROJECT '+String(index+1).padStart(2,'0')+' / '+String(projectFiles.length).padStart(2,'0');}
      function setProjectDetails(article,expanded){var button=article.querySelector('.project-details-toggle');var panel=article.querySelector('.project-details-panel');if(!button||!panel){return;}button.setAttribute('aria-expanded',String(expanded));panel.classList.toggle('is-open',expanded);panel.setAttribute('aria-hidden',String(!expanded));panel.inert=!expanded;}
      function closeProjectDetails(){projectArticles.forEach(function(article){setProjectDetails(article,false);});}
      function buildMobileProjectViews(){
        projectArticles.forEach(function(article,index){
          var meta=article.querySelector('.meta');var story=article.querySelector('.project-story');var headline=story&&story.querySelector('strong');var description=story&&story.querySelector('small');var notes=article.querySelector(':scope > .project-notes');var detail=article.querySelector(':scope > .project-detail');if(!meta||!story||!headline||!description){return;}
          var fullMeta=meta.textContent.trim();var desktopMeta=document.createElement('span');desktopMeta.className='desktop-meta';desktopMeta.textContent=fullMeta;var mobileMeta=document.createElement('span');mobileMeta.className='mobile-meta';mobileMeta.textContent=compactProjectMeta(fullMeta);meta.textContent='';meta.appendChild(desktopMeta);meta.appendChild(mobileMeta);
          var summary=document.createElement('p');summary.className='project-mobile-summary';summary.textContent=description.textContent.trim();article.insertBefore(summary,article.children[1]);
          var liveLink=story.querySelector('.project-live-link');if(liveLink){liveLink.textContent='';var desktopCta=document.createElement('span');desktopCta.className='desktop-cta';desktopCta.textContent='LIVE DEMO';var mobileCta=document.createElement('span');mobileCta.className='mobile-cta';mobileCta.textContent='OPEN LIVE DEMO';var arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';liveLink.appendChild(desktopCta);liveLink.appendChild(mobileCta);liveLink.appendChild(arrow);}
          var button=document.createElement('button');button.type='button';button.className='project-details-toggle';button.id='project-details-toggle-'+index;button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','project-details-'+index);button.innerHTML='<span class="details-arrow" aria-hidden="true">▸</span><span>VIEW PROJECT DETAILS</span>';
          var panel=document.createElement('div');panel.className='project-details-panel';panel.id='project-details-'+index;panel.setAttribute('role','region');panel.setAttribute('aria-labelledby',button.id);panel.setAttribute('aria-hidden','true');panel.inert=true;var inner=document.createElement('div');inner.className='project-details-inner';var copy=document.createElement('div');copy.className='project-details-copy';var fullHeadline=document.createElement('p');fullHeadline.className='details-headline';fullHeadline.textContent=headline.textContent.trim();var fullDescription=document.createElement('p');fullDescription.className='details-description';fullDescription.textContent=description.textContent.trim();var stack=document.createElement('p');stack.className='details-stack';var stackParts=fullMeta.split('/').map(function(part){return part.trim();}).filter(Boolean);var stackValue=stackParts.length>2?stackParts.slice(1,-1).join(' / '):(stackParts[1]||fullMeta);stack.innerHTML='<b>TECHNOLOGY STACK</b><span></span>';stack.querySelector('span').textContent=stackValue;copy.appendChild(fullHeadline);copy.appendChild(fullDescription);copy.appendChild(stack);inner.appendChild(copy);
          if(notes){var notesCopy=document.createElement('div');notesCopy.className='project-details-notes';Array.prototype.forEach.call(notes.children,function(note){notesCopy.appendChild(note.cloneNode(true));});inner.appendChild(notesCopy);}
          if(detail){var facts=document.createElement('dl');facts.className='project-details-facts';Array.prototype.forEach.call(detail.children,function(item){facts.appendChild(item.cloneNode(true));});inner.appendChild(facts);}
          panel.appendChild(inner);article.appendChild(button);article.appendChild(panel);button.addEventListener('click',function(){setProjectDetails(article,button.getAttribute('aria-expanded')!=='true');});
        });
        document.querySelectorAll('#projects-window .project-preview-shot').forEach(function(image){
          var visual=image.closest('.project-visual');var state=visual&&visual.querySelector('.project-preview-state span');if(visual){visual.setAttribute('aria-busy','true');}
          function reveal(){if(!visual){return;}image.classList.add('is-loaded');visual.classList.add('is-loaded');visual.classList.remove('is-error');visual.setAttribute('aria-busy','false');}
          function fail(){if(!visual){return;}image.classList.remove('is-loaded');visual.classList.remove('is-loaded');visual.classList.add('is-error');visual.setAttribute('aria-busy','false');if(state){state.textContent='PREVIEW UNAVAILABLE';}}
          if(image.complete){image.naturalWidth?reveal():fail();}else{image.addEventListener('load',reveal,{once:true});image.addEventListener('error',fail,{once:true});}
        });
      }
      buildMobileProjectViews();
      updateProjectCounter((projectFiles.find(function(item){return item.classList.contains('active');})||projectFiles[0]).getAttribute('data-project'));
      function closeProjectSelector(restoreFocus){
        clearTimeout(projectSelectorCloseTimer);projectSelectorButton.setAttribute('aria-expanded','false');projectSelectorMenu.classList.remove('is-open');
        if(!projectSelectorMenu.hidden){projectSelectorCloseTimer=setTimeout(function(){projectSelectorMenu.hidden=true;},180);}
        if(restoreFocus){projectSelectorButton.focus();}
      }
      function openProjectSelector(){
        clearTimeout(projectSelectorCloseTimer);projectSelectorMenu.hidden=false;projectSelectorButton.setAttribute('aria-expanded','true');requestAnimationFrame(function(){projectSelectorMenu.classList.add('is-open');});
        var selected=projectMenuItems.find(function(item){return item.getAttribute('aria-selected')==='true';})||projectMenuItems[0];if(selected){selected.focus();}
      }
      function commitProject(projectId){
        pauseProjectVideos();closeProjectDetails();
        projectFiles.forEach(function(item){var selected=item.getAttribute('data-project')===projectId;item.classList.toggle('active',selected);item.setAttribute('aria-selected',String(selected));});
        projectArticles.forEach(function(item){item.classList.toggle('active',item.id===projectId);});
        projectMenuItems.forEach(function(item){var selected=item.getAttribute('data-project')===projectId;item.classList.toggle('active',selected);item.setAttribute('aria-selected',String(selected));});
        var source=projectFiles.find(function(item){return item.getAttribute('data-project')===projectId;});
        if(source){projectSelectorCurrent.textContent=source.textContent.trim();}
        updateProjectCounter(projectId);
        if(projectPreview){projectPreview.scrollTop=0;}
      }
      function selectProject(projectId){
        clearTimeout(projectSwitchTimer);closeProjectSelector(false);
        var current=document.querySelector('#projects-window .project.active');
        if(current&&current.id===projectId){if(projectPreview){projectPreview.scrollTop=0;}return;}
        if(window.matchMedia('(max-width: 767px)').matches&&projectPreview){projectPreview.classList.add('is-switching');projectSwitchTimer=setTimeout(function(){commitProject(projectId);requestAnimationFrame(function(){projectPreview.classList.remove('is-switching');});},80);}else{commitProject(projectId);}
      }
      projectFiles.forEach(function(button){
        var menuItem=document.createElement('button');menuItem.type='button';menuItem.className='project-selector-item';menuItem.setAttribute('role','option');menuItem.setAttribute('data-project',button.getAttribute('data-project'));menuItem.setAttribute('aria-selected',button.classList.contains('active')?'true':'false');menuItem.textContent=button.textContent.trim();projectSelectorMenu.appendChild(menuItem);projectMenuItems.push(menuItem);
        button.addEventListener('click',function(){selectProject(button.getAttribute('data-project'));});
        menuItem.addEventListener('click',function(){selectProject(menuItem.getAttribute('data-project'));projectSelectorButton.focus();});
      });
      projectSelectorButton.addEventListener('click',function(event){event.stopPropagation();projectSelectorButton.getAttribute('aria-expanded')==='true'?closeProjectSelector(false):openProjectSelector();});
      projectSelector.addEventListener('keydown',function(event){
        if(event.key==='Escape'){event.preventDefault();closeProjectSelector(true);return;}
        if(projectSelectorButton.getAttribute('aria-expanded')!=='true'&&(event.key==='ArrowDown'||event.key==='ArrowUp')){event.preventDefault();openProjectSelector();return;}
        var index=projectMenuItems.indexOf(document.activeElement);if(index<0){return;}
        if(event.key==='ArrowDown'||event.key==='ArrowUp'||event.key==='Home'||event.key==='End'){event.preventDefault();if(event.key==='Home'){index=0;}else if(event.key==='End'){index=projectMenuItems.length-1;}else{index=(index+(event.key==='ArrowDown'?1:-1)+projectMenuItems.length)%projectMenuItems.length;}projectMenuItems[index].focus();}
      });
      document.addEventListener('click',function(event){if(!projectSelector.contains(event.target)){closeProjectSelector(false);}});
      document.addEventListener('keydown',function(event){if(event.key==='Escape'&&!projectSelectorMenu.hidden){event.preventDefault();closeProjectSelector(true);}});
      var skillStatus=document.getElementById('skill-status');
      var skillCards=Array.prototype.slice.call(document.querySelectorAll('.skill-card'));
      var currentSkillTab='deck';var skillHintNode=document.getElementById('skill-hint');
      var skillTabButtons=Array.prototype.slice.call(document.querySelectorAll('[data-skill-tab]'));
      function updateSkillStatus(){if(currentSkillTab==='certs'){skillStatus.textContent=currentLanguage==='id'?'4 sertifikat':'4 certificates';if(skillHintNode){skillHintNode.textContent=currentLanguage==='id'?'terverifikasi dari CV':'verified from CV';}return;}var turned=skillCards.filter(function(card){return card.getAttribute('aria-pressed')==='true';}).length;skillStatus.textContent=currentLanguage==='id'?turned+' kartu dibalik':turned+' card'+(turned===1?'':'s')+' turned';if(skillHintNode){skillHintNode.textContent=currentLanguage==='id'?'klik kartu untuk membalik':'click a card to flip';}}
      function setSkillTab(tab){currentSkillTab=(tab==='certs')?'certs':'deck';skillTabButtons.forEach(function(button){var selected=button.getAttribute('data-skill-tab')===currentSkillTab;button.setAttribute('aria-selected',String(selected));button.setAttribute('tabindex',selected?'0':'-1');});document.getElementById('skill-panel-deck').hidden=currentSkillTab!=='deck';document.getElementById('skill-panel-certs').hidden=currentSkillTab!=='certs';var skillsScroller=document.querySelector('#skills-window .skills-scroll-content');if(skillsScroller){skillsScroller.scrollTop=0;}if(skillCards&&skillStatus){updateSkillStatus();}}
      skillTabButtons.forEach(function(button){button.addEventListener('click',function(){setSkillTab(button.getAttribute('data-skill-tab'));});button.addEventListener('keydown',function(event){var index=skillTabButtons.indexOf(button);if(event.key==='ArrowRight'||event.key==='ArrowLeft'||event.key==='Home'||event.key==='End'){event.preventDefault();if(event.key==='Home'){index=0;}else if(event.key==='End'){index=skillTabButtons.length-1;}else{index=(index+(event.key==='ArrowRight'?1:-1)+skillTabButtons.length)%skillTabButtons.length;}var next=skillTabButtons[index];setSkillTab(next.getAttribute('data-skill-tab'));next.focus();}});});
      skillCards.forEach(function(card){card.addEventListener('click',function(){var flipped=card.getAttribute('aria-pressed')==='true';card.setAttribute('aria-pressed',String(!flipped));updateSkillStatus();});});
      document.querySelectorAll('#contact-window .contact-open[aria-disabled="true"]').forEach(function(link){link.addEventListener('click',function(event){event.preventDefault();});});
      var startButton=document.getElementById('start-button');var startMenu=document.getElementById('start-menu');var mobileMore=document.getElementById('mobile-more');var closeMore=document.getElementById('close-more');
      function closeStart(restoreMobileFocus){var wasOpen=startMenu.classList.contains('open');startMenu.classList.remove('open');startMenu.setAttribute('aria-hidden','true');startButton.setAttribute('aria-expanded','false');mobileMore.setAttribute('aria-expanded','false');mobileMore.removeAttribute('aria-current');if(restoreMobileFocus&&wasOpen&&window.innerWidth<1024){mobileMore.focus();}}
      function toggleStart(event,trigger){event.stopPropagation();var open=startMenu.classList.toggle('open');startMenu.setAttribute('aria-hidden',String(!open));startButton.setAttribute('aria-expanded',String(open));mobileMore.setAttribute('aria-expanded',String(open));if(open&&window.innerWidth<1024){trigger.setAttribute('aria-current','page');setTimeout(function(){closeMore.focus();},20);}else if(trigger===mobileMore){trigger.removeAttribute('aria-current');}}
      startButton.addEventListener('click',function(event){toggleStart(event,startButton);});
      mobileMore.addEventListener('click',function(event){toggleStart(event,mobileMore);});
      closeMore.addEventListener('click',function(event){event.stopPropagation();closeStart(true);});
      document.addEventListener('keydown',function(event){if(event.key==='Escape'&&startMenu.classList.contains('open')){event.preventDefault();closeStart(true);}});
      document.getElementById('show-desktop').addEventListener('click',function(){windows.forEach(function(win){if(!win.classList.contains('is-hidden')){minimizeWindow(win);}});closeStart();});
      var quickSwitcher=document.getElementById('quick-switcher');
      var switcherSearch=document.getElementById('switcher-search');
      var switcherItems=Array.prototype.slice.call(document.querySelectorAll('[data-switch-open]'));
      function filterSwitcher(){var query=switcherSearch.value.trim().toLowerCase();switcherItems.forEach(function(item){item.hidden=query&&item.getAttribute('data-search').indexOf(query)===-1;});}
      function openQuickSwitcher(){closeStart();closeContext();quickSwitcher.classList.add('open');quickSwitcher.setAttribute('aria-hidden','false');switcherSearch.value='';filterSwitcher();setTimeout(function(){switcherSearch.focus();},20);}
      function closeQuickSwitcher(){quickSwitcher.classList.remove('open');quickSwitcher.setAttribute('aria-hidden','true');}
      document.getElementById('open-switcher').addEventListener('click',openQuickSwitcher);
      document.getElementById('close-switcher').addEventListener('click',closeQuickSwitcher);
      quickSwitcher.addEventListener('pointerdown',function(event){if(event.target===quickSwitcher){closeQuickSwitcher();}});
      switcherSearch.addEventListener('input',filterSwitcher);
      switcherItems.forEach(function(button){button.addEventListener('click',function(){openWindow(button.getAttribute('data-switch-open'),button);var skillTab=button.getAttribute('data-skill-tab-open');if(skillTab&&typeof setSkillTab==='function'){setSkillTab(skillTab);}closeQuickSwitcher();});});
      document.addEventListener('keydown',function(event){if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();quickSwitcher.classList.contains('open')?closeQuickSwitcher():openQuickSwitcher();}else if(event.key==='Escape'&&quickSwitcher.classList.contains('open')){event.preventDefault();closeQuickSwitcher();}});
      document.addEventListener('click',function(event){if(!startMenu.contains(event.target)){closeStart();}});
      var contextMenu=document.getElementById('context-menu');
      function closeContext(){contextMenu.classList.remove('open');}
      function contextTargetAllowed(target){return target&&!target.closest('.window,.taskbar,.start-menu,.pet');}
      function openContextMenu(clientX,clientY){closeStart();var left=Math.min(clientX,window.innerWidth-198);var top=Math.min(clientY,window.innerHeight-132);contextMenu.style.left=Math.max(4,left)+'px';contextMenu.style.top=Math.max(4,top)+'px';contextMenu.classList.add('open');}
      desktop.addEventListener('contextmenu',function(event){if(!contextTargetAllowed(event.target)){return;}event.preventDefault();openContextMenu(event.clientX,event.clientY);});
      document.addEventListener('click',function(event){if(!contextMenu.contains(event.target)){closeContext();}});
      contextMenu.addEventListener('click',closeContext);
      /* Touch long-press: iOS never fires contextmenu over empty areas, so detect the hold ourselves. */
      var longPressTimer=null,longPressFired=false,longPressX=0,longPressY=0;
      function clearLongPress(){if(longPressTimer){clearTimeout(longPressTimer);longPressTimer=null;}longPressFired=false;}
      desktop.addEventListener('touchstart',function(event){
        clearLongPress();
        if(event.touches.length!==1){return;}
        var target=event.target;
        if(!contextTargetAllowed(target)||target.closest('.context-menu,.mobile-dock,.quick-switcher')){return;}
        var touch=event.touches[0];
        longPressX=touch.clientX;longPressY=touch.clientY;
        longPressTimer=setTimeout(function(){longPressTimer=null;longPressFired=true;if(navigator.vibrate){navigator.vibrate(18);}openContextMenu(longPressX,longPressY);},540);
      },{passive:true});
      desktop.addEventListener('touchmove',function(event){if(!longPressTimer){return;}var touch=event.touches[0];if(Math.abs(touch.clientX-longPressX)>12||Math.abs(touch.clientY-longPressY)>12){clearLongPress();}},{passive:true});
      desktop.addEventListener('touchend',function(event){var fired=longPressFired;clearLongPress();if(fired&&event.cancelable){event.preventDefault();}},false);
      desktop.addEventListener('touchcancel',clearLongPress,{passive:true});
      document.getElementById('tidy-windows').addEventListener('click',function(){windows.forEach(function(win){win.style.left='';win.style.top='';win.style.right='';win.classList.remove('maximized','minimized','is-focused');if(win.id==='about-window'){win.classList.remove('is-hidden');setTask(win.id,true);}else{win.classList.add('is-hidden');setTask(win.id,false);}});focusWindow(document.getElementById('about-window'));});
      function enableDrag(win){var bar=win.querySelector('.titlebar');var dragging=false,sx=0,sy=0,sl=0,st=0;bar.addEventListener('pointerdown',function(event){if(window.innerWidth<1181||event.target.closest('button')||win.classList.contains('maximized')){return;}dragging=true;focusWindow(win);sx=event.clientX;sy=event.clientY;sl=win.offsetLeft;st=win.offsetTop;bar.setPointerCapture(event.pointerId);});bar.addEventListener('pointermove',function(event){if(!dragging){return;}var ml=Math.max(0,desktop.clientWidth-win.offsetWidth);var mt=Math.max(0,desktop.clientHeight-win.offsetHeight-48);win.style.left=Math.min(ml,Math.max(0,sl+event.clientX-sx))+'px';win.style.top=Math.min(mt,Math.max(0,st+event.clientY-sy))+'px';win.style.right='auto';});function stop(event){if(dragging){dragging=false;try{bar.releasePointerCapture(event.pointerId);}catch(ignore){}}}bar.addEventListener('pointerup',stop);bar.addEventListener('pointercancel',stop);}
      windows.forEach(enableDrag);

      function syncVisualViewport(){desktop.style.setProperty('--app-height',Math.round(window.innerHeight)+'px');}
      var compactMode=window.innerWidth<1024;
      function syncResponsiveMode(){
        var nextCompact=window.innerWidth<1024;
        syncTaskbarDensity();
        if(nextCompact&&!compactMode){
          var activeWindow=document.querySelector('.window.is-focused:not(.is-hidden):not(.minimized)')||document.querySelector('.window:not(.is-hidden):not(.minimized)')||document.getElementById('about-window');
          windows.forEach(function(item){if(item!==activeWindow){item.classList.add('is-hidden');item.classList.remove('minimized','maximized','is-focused','launching');setTask(item.id,false);}});
          if(activeWindow){activeWindow.classList.remove('is-hidden','minimized','maximized');setTask(activeWindow.id,true);focusWindow(activeWindow);document.querySelectorAll('.mobile-nav-button[data-open]').forEach(function(button){if(button.getAttribute('data-open')===activeWindow.id){button.setAttribute('aria-current','page');}else{button.removeAttribute('aria-current');}});}
        }
        compactMode=nextCompact;
      }
      syncVisualViewport();syncResponsiveMode();window.addEventListener('resize',function(){syncVisualViewport();syncResponsiveMode();});if(window.visualViewport){window.visualViewport.addEventListener('resize',syncVisualViewport);window.visualViewport.addEventListener('scroll',syncVisualViewport);}

      var cursorCanvas=document.getElementById('wallpaper-cursor-field');
      var cursorContext=cursorCanvas.getContext('2d');
      var cursorPoints=[];
      var cursorTrail=[];
      var cursorTarget={x:window.innerWidth*.55,y:window.innerHeight*.42};
      var cursorPosition={x:cursorTarget.x,y:cursorTarget.y};
      var cursorVelocity={x:0,y:0};
      var cursorBursts=[];
      var cursorPalette=['160,215,200','120,180,168','79,174,156'];
      function refreshCursorPalette(){cursorPalette=document.documentElement.classList.contains('theme-light')?['33,76,58','146,116,46','217,194,112']:['160,215,200','120,180,168','79,174,156'];}
      var cursorVisible=false;
      var cursorLastMove=0;
      var cursorDpr=1;
      var cursorWidth=0;
      var cursorHeight=0;
      var reduceWallpaperMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
      var cursorInput='mouse';
      var interactionLayer=document.getElementById('interaction-layer');
      function showTapPulse(event){
        if(reduceWallpaperMotion.matches||!interactionLayer){return;}
        var bounds=desktop.getBoundingClientRect();
        var pulse=document.createElement('span');
        pulse.className='tap-pulse';pulse.style.left=(event.clientX-bounds.left)+'px';pulse.style.top=(event.clientY-bounds.top)+'px';
        interactionLayer.appendChild(pulse);setTimeout(function(){pulse.remove();},650);
        if(event.pointerType==='touch'&&event.target.closest('button,a,label,input')&&navigator.vibrate){try{navigator.vibrate(8);}catch(ignore){}}
      }
      document.addEventListener('pointerdown',showTapPulse,{passive:true});
      function seedCursorField(){
        cursorPoints=[];
        var spacing=Math.max(108,Math.min(142,cursorWidth/10));
        var columns=Math.ceil(cursorWidth/spacing)+1;
        var rows=Math.ceil(cursorHeight/spacing)+1;
        for(var row=0;row<rows;row+=1){for(var column=0;column<columns;column+=1){
          var seed=(column+1)*12.9898+(row+1)*78.233;
          var jitterX=(Math.sin(seed)*43758.5453%1)*22;
          var jitterY=(Math.sin(seed*1.73)*24634.6345%1)*18;
          cursorPoints.push({x:column*spacing+spacing*.28+jitterX,y:row*spacing+spacing*.25+jitterY,column:column,row:row});
        }}
      }
      function resizeCursorField(){
        var bounds=desktop.getBoundingClientRect();
        cursorWidth=Math.max(1,Math.round(bounds.width));cursorHeight=Math.max(1,Math.round(bounds.height));
        cursorDpr=Math.min(2,window.devicePixelRatio||1);
        cursorCanvas.width=Math.round(cursorWidth*cursorDpr);cursorCanvas.height=Math.round(cursorHeight*cursorDpr);
        cursorCanvas.style.width=cursorWidth+'px';cursorCanvas.style.height=cursorHeight+'px';
        cursorContext.setTransform(cursorDpr,0,0,cursorDpr,0,0);
        seedCursorField();
      }
      desktop.addEventListener('pointermove',function(event){
        if(reduceWallpaperMotion.matches){return;}
        var bounds=desktop.getBoundingClientRect();
        var nextX=event.clientX-bounds.left,nextY=event.clientY-bounds.top;
        cursorInput=event.pointerType||'mouse';
        cursorVelocity.x=nextX-cursorTarget.x;cursorVelocity.y=nextY-cursorTarget.y;
        cursorTarget.x=nextX;cursorTarget.y=nextY;
        cursorVisible=true;cursorLastMove=performance.now();
        cursorTrail.unshift({x:cursorTarget.x,y:cursorTarget.y,life:1});
        if(cursorTrail.length>(cursorInput==='touch'?20:14)){cursorTrail.length=cursorInput==='touch'?20:14;}
      },{passive:true});
      desktop.addEventListener('pointerdown',function(event){
        if(reduceWallpaperMotion.matches){return;}
        var bounds=desktop.getBoundingClientRect();
        cursorInput=event.pointerType||'mouse';
        cursorTarget.x=event.clientX-bounds.left;cursorTarget.y=event.clientY-bounds.top;
        cursorPosition.x=cursorTarget.x;cursorPosition.y=cursorTarget.y;cursorVisible=true;cursorLastMove=performance.now();
        cursorBursts.push({x:cursorTarget.x,y:cursorTarget.y,life:1});
        if(cursorBursts.length>5){cursorBursts.shift();}
      },{passive:true});
      desktop.addEventListener('pointerleave',function(){cursorVisible=false;});
      function drawCursorField(time){
        cursorContext.clearRect(0,0,cursorWidth,cursorHeight);
        if(!reduceWallpaperMotion.matches&&!desktop.classList.contains('motion-off')){
          cursorPosition.x+=(cursorTarget.x-cursorPosition.x)*.12;cursorPosition.y+=(cursorTarget.y-cursorPosition.y)*.12;
          var active=cursorVisible&&time-cursorLastMove<(cursorInput==='touch'?1100:1800);
          var radius=active?(cursorInput==='touch'?155:185):95;
          var intensity=desktop.classList.contains('motion-3')?.78:desktop.classList.contains('motion-2')?.58:.68;
          var rendered=[];
          cursorPoints.forEach(function(point,index){
            var floatX=Math.sin(time*.00038+index*1.91)*4;
            var floatY=Math.cos(time*.00031+index*1.37)*4;
            var x=point.x+floatX,y=point.y+floatY;
            var dx=x-cursorPosition.x,dy=y-cursorPosition.y;
            var distance=Math.sqrt(dx*dx+dy*dy)||1;
            var pull=Math.max(0,1-distance/radius);
            if(active&&pull>0){x+=(dx/distance)*pull*16;y+=(dy/distance)*pull*16;}
            rendered.push({x:x,y:y,column:point.column,row:point.row,pull:pull});
          });
          cursorContext.lineWidth=1;
          rendered.forEach(function(point,index){
            for(var otherIndex=index+1;otherIndex<rendered.length;otherIndex+=1){
              var other=rendered[otherIndex];
              if(Math.abs(point.column-other.column)>1||Math.abs(point.row-other.row)>1){continue;}
              var dx=other.x-point.x,dy=other.y-point.y,dist=Math.sqrt(dx*dx+dy*dy);
              if(dist>150){continue;}
              var glow=Math.max(point.pull,other.pull);
              cursorContext.strokeStyle='rgba('+cursorPalette[0]+','+(0.055+glow*.18)*intensity+')';
              cursorContext.beginPath();cursorContext.moveTo(point.x,point.y);cursorContext.lineTo(other.x,other.y);cursorContext.stroke();
            }
            var size=1.2+point.pull*2.6;
            cursorContext.fillStyle='rgba('+cursorPalette[0]+','+(0.22+point.pull*.55)*intensity+')';
            cursorContext.fillRect(point.x-size/2,point.y-size/2,size,size);
            if(active&&point.pull>.08){
              cursorContext.strokeStyle='rgba('+cursorPalette[1]+','+(point.pull*.36)*intensity+')';
              cursorContext.beginPath();cursorContext.moveTo(cursorPosition.x,cursorPosition.y);cursorContext.lineTo(point.x,point.y);cursorContext.stroke();
            }
          });
          if(cursorTrail.length>1){
            cursorContext.beginPath();cursorContext.moveTo(cursorTrail[0].x,cursorTrail[0].y);
            for(var trailIndex=1;trailIndex<cursorTrail.length;trailIndex+=1){var previous=cursorTrail[trailIndex-1],trail=cursorTrail[trailIndex];var midX=(previous.x+trail.x)/2,midY=(previous.y+trail.y)/2;cursorContext.quadraticCurveTo(previous.x,previous.y,midX,midY);}
            cursorContext.strokeStyle='rgba('+cursorPalette[1]+','+(.2*intensity)+')';cursorContext.lineWidth=1.2;cursorContext.stroke();
          }
          cursorTrail.forEach(function(trail,index){trail.life*=.9;var size=2.5+index*.72;cursorContext.fillStyle='rgba('+cursorPalette[0]+','+(trail.life*.3*intensity)+')';cursorContext.fillRect(trail.x-size/2,trail.y-size/2,size,size);});
          cursorTrail=cursorTrail.filter(function(trail){return trail.life>.07;});
          cursorBursts.forEach(function(burst){burst.life*=.86;var ring=(1-burst.life)*22+3;cursorContext.strokeStyle='rgba('+cursorPalette[2]+','+(burst.life*.42*intensity)+')';cursorContext.lineWidth=1;cursorContext.beginPath();cursorContext.arc(burst.x,burst.y,ring,0,Math.PI*2);cursorContext.stroke();for(var ray=0;ray<4;ray+=1){var angle=Math.PI*2*ray/4;cursorContext.beginPath();cursorContext.moveTo(burst.x+Math.cos(angle)*(ring+2),burst.y+Math.sin(angle)*(ring+2));cursorContext.lineTo(burst.x+Math.cos(angle)*(ring+5),burst.y+Math.sin(angle)*(ring+5));cursorContext.stroke();}});
          cursorBursts=cursorBursts.filter(function(burst){return burst.life>.06;});
          if(active){
            var pulse=17+Math.sin(time*.008)*3;
            var speed=Math.min(14,Math.sqrt(cursorVelocity.x*cursorVelocity.x+cursorVelocity.y*cursorVelocity.y));
            cursorContext.strokeStyle='rgba('+cursorPalette[0]+','+(.5*intensity)+')';cursorContext.lineWidth=1;
            cursorContext.save();cursorContext.translate(cursorPosition.x,cursorPosition.y);cursorContext.rotate(time*.00055);cursorContext.setLineDash([5,6]);cursorContext.beginPath();cursorContext.arc(0,0,pulse+7+speed*.25,0,Math.PI*1.55);cursorContext.stroke();cursorContext.restore();cursorContext.setLineDash([]);
            cursorContext.beginPath();cursorContext.arc(cursorPosition.x,cursorPosition.y,pulse,0,Math.PI*2);cursorContext.stroke();
            cursorContext.beginPath();cursorContext.moveTo(cursorPosition.x-pulse-8,cursorPosition.y);cursorContext.lineTo(cursorPosition.x-pulse+2,cursorPosition.y);cursorContext.moveTo(cursorPosition.x+pulse-2,cursorPosition.y);cursorContext.lineTo(cursorPosition.x+pulse+8,cursorPosition.y);cursorContext.moveTo(cursorPosition.x,cursorPosition.y-pulse-8);cursorContext.lineTo(cursorPosition.x,cursorPosition.y-pulse+2);cursorContext.moveTo(cursorPosition.x,cursorPosition.y+pulse-2);cursorContext.lineTo(cursorPosition.x,cursorPosition.y+pulse+8);cursorContext.stroke();
            cursorVelocity.x*=.82;cursorVelocity.y*=.82;
          }
        }
        window.requestAnimationFrame(drawCursorField);
      }
      resizeCursorField();window.addEventListener('resize',resizeCursorField);window.requestAnimationFrame(drawCursorField);

      var crtEnabled=true;
      var clickSoundEnabled=true;
      var clickAudioContext=null;
      var clickScale=[261.63,293.66,329.63,349.23,392,440,493.88,523.25];
      var lastScaleStep=-1;
      var systemStatus=document.getElementById('system-status');
      var systemStatusCopy=document.getElementById('system-status-copy');
      var soundMeter=document.getElementById('sound-meter');
      var saverCountdown=document.getElementById('saver-countdown');
      var systemButtons=Array.prototype.slice.call(document.querySelectorAll('[data-system-toggle]'));
      function animateSoundMeter(){if(!soundMeter){return;}soundMeter.classList.remove('is-playing');void soundMeter.offsetWidth;soundMeter.classList.add('is-playing');setTimeout(function(){soundMeter.classList.remove('is-playing');},820);}
      function syncSystemButtons(){
        systemButtons.forEach(function(button){
          var type=button.getAttribute('data-system-toggle');
          var enabled=type==='crt'?crtEnabled:clickSoundEnabled;
          button.setAttribute('aria-pressed',String(enabled));
          button.setAttribute('aria-label',type==='crt'?(enabled?'Turn CRT effect off':'Turn CRT effect on'):(enabled?'Mute click sounds':'Turn click sounds on'));
          if(button.classList.contains('system-button')){button.textContent=(type==='crt'?'CRT':'SOUND')+' · '+(enabled?'ON':'OFF');}
        });
        if(systemStatusCopy){systemStatusCopy.firstChild.nodeValue=(crtEnabled?'CRT on':'CRT off')+' · '+(clickSoundEnabled?'click sound on':'click sound muted')+' · '+(typeof petEnabled==='undefined'||petEnabled?'pet on':'pet off')+' · Saver: ';}
      }
      function playRetroClick(target,force,demo,controlAction){
        if(!clickSoundEnabled&&!force){return;}
        var AudioEngine=window.AudioContext||window.webkitAudioContext;
        if(!AudioEngine){if(systemStatusCopy){systemStatusCopy.firstChild.nodeValue='Audio is not available in this browser · Saver: ';}return;}
        try{
          if(!clickAudioContext){clickAudioContext=new AudioEngine();}
          function tick(){
            var now=clickAudioContext.currentTime;
            var openTone=target&&target.closest('[data-open],[data-switch-open],.skill-card,.file');
            var closeTone=controlAction==='close'||target&&target.closest('[data-action="close"],#close-switcher');
            var minimizeTone=controlAction==='minimize'||target&&target.closest('[data-action="minimize"]');
            var maximizeTone=controlAction==='maximize'||target&&target.closest('[data-action="maximize"]');
            var first=Math.floor(Math.random()*7);
            if(first===lastScaleStep){first=(first+1+Math.floor(Math.random()*5))%7;}
            lastScaleStep=first;
            var direction=Math.random()>.5?1:-1;
            var steps=demo?[0,1,2,3,4,5,6,7]:maximizeTone?[0,2,4]:minimizeTone?[2,1,0]:closeTone?[4,2,0]:openTone?[0,2,1]:[0,direction];
            var octave=Math.random()>.76?2:1;
            steps.forEach(function(step,index){
              var raw=first+step*direction;
              var wrapped=((raw%7)+7)%7;
              var octaveShift=Math.floor(raw/7);
              var frequency=clickScale[wrapped]*octave*Math.pow(2,octaveShift);
              frequency=Math.max(196,Math.min(1046.5,frequency));
              var oscillator=clickAudioContext.createOscillator();var gain=clickAudioContext.createGain();
              var start=now+index*(demo?.07:.035);var duration=demo?.13:.095;
              oscillator.type=index%2===0?'triangle':'square';
              oscillator.frequency.setValueAtTime(frequency,start);
              gain.gain.setValueAtTime(0.001,start);gain.gain.linearRampToValueAtTime(demo?.055:(index===0?.046:.032),start+.008);gain.gain.exponentialRampToValueAtTime(.001,start+duration);
              oscillator.connect(gain);gain.connect(clickAudioContext.destination);oscillator.start(start);oscillator.stop(start+duration+.01);
            });
            animateSoundMeter();
          }
          if(clickAudioContext.state==='suspended'){clickAudioContext.resume().then(tick).catch(function(){if(systemStatusCopy){systemStatusCopy.firstChild.nodeValue='Tap TEST SOUND again, then check media volume · Saver: ';}});}else{tick();}
        }catch(ignore){if(systemStatusCopy){systemStatusCopy.firstChild.nodeValue='Audio could not start. Check media volume · Saver: ';}}
      }
      systemButtons.forEach(function(button){button.addEventListener('click',function(){var type=button.getAttribute('data-system-toggle');if(type==='crt'){crtEnabled=!crtEnabled;desktop.classList.toggle('crt-on',crtEnabled);}else{clickSoundEnabled=!clickSoundEnabled;}syncSystemButtons();});});
      document.getElementById('test-sound').addEventListener('click',function(event){clickSoundEnabled=true;syncSystemButtons();playRetroClick(event.currentTarget,true,true);if(systemStatusCopy){systemStatusCopy.firstChild.nodeValue='Sound test played · Click feedback is on · Saver: ';}setTimeout(syncSystemButtons,1800);});
      document.addEventListener('click',function(event){if(event.target.closest('button,a,.file-picker')&&!event.target.closest('[data-no-auto-sound],[data-action]')){playRetroClick(event.target,false,false);}});
      syncSystemButtons();

      var konamiLayer=document.getElementById('konami-layer');
      var konamiSequence=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','KeyB','KeyA'];
      var konamiStep=0;
      var konamiTimer=0;
      function fillKonamiPixels(){
        konamiLayer.querySelectorAll('.konami-pixel').forEach(function(pixel){pixel.remove();});
        var palette=['var(--select)','var(--paper)','#9a7f38','#8f4a48','#52613b','#6f4c58'];
        for(var index=0;index<54;index+=1){
          var pixel=document.createElement('i');
          pixel.className='konami-pixel';
          pixel.style.setProperty('--x',(2+Math.random()*96).toFixed(2)+'%');
          pixel.style.setProperty('--s',(5+Math.floor(Math.random()*8))+'px');
          pixel.style.setProperty('--c',palette[index%palette.length]);
          pixel.style.setProperty('--d',(2.8+Math.random()*2.6).toFixed(2)+'s');
          pixel.style.setProperty('--delay',(-Math.random()*4.5).toFixed(2)+'s');
          pixel.style.setProperty('--drift',(-45+Math.random()*90).toFixed(0)+'px');
          pixel.style.setProperty('--r',(-25+Math.random()*50).toFixed(0)+'deg');
          konamiLayer.appendChild(pixel);
        }
      }
      function deactivateKonami(){
        clearTimeout(konamiTimer);desktop.classList.remove('party-mode');konamiLayer.classList.remove('active');konamiLayer.setAttribute('aria-hidden','true');
      }
      function activateKonami(){
        clearTimeout(konamiTimer);fillKonamiPixels();desktop.classList.add('party-mode');konamiLayer.classList.remove('active');void konamiLayer.offsetWidth;konamiLayer.classList.add('active');konamiLayer.setAttribute('aria-hidden','false');playRetroClick(null,false,true);konamiTimer=setTimeout(deactivateKonami,9000);
      }
      document.addEventListener('keydown',function(event){
        if(event.key==='Escape'&&desktop.classList.contains('party-mode')){deactivateKonami();return;}
        if(event.ctrlKey||event.metaKey||event.altKey){konamiStep=0;return;}
        var code=event.code;
        if(code===konamiSequence[konamiStep]){konamiStep+=1;if(konamiStep===konamiSequence.length){konamiStep=0;activateKonami();}}else{konamiStep=code===konamiSequence[0]?1:0;}
      });

      var screenSaver=document.getElementById('screen-saver');
      var saverTime=document.getElementById('saver-time');
      var saverHintNode=document.querySelector('.saver-hint');
      var idleDelay=50000;
      var lastActivity=Date.now();
      var saverActive=false;
      var saverShownAt=0;
      var previewSaverActive=false;
      function updateSaverHint(){var touchDevice=('ontouchstart' in window)||(navigator.maxTouchPoints>0);var useIndonesian=currentLanguage==='id';saverHintNode.textContent=touchDevice?(useIndonesian?'KETUK LAYAR UNTUK KEMBALI':'TAP ANYWHERE TO RETURN'):(useIndonesian?'GERAKKAN POINTER ATAU TEKAN TOMBOL UNTUK KEMBALI':'MOVE POINTER OR PRESS A KEY TO RETURN');}
      function updateSaverTime(){var now=new Date();saverTime.textContent=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');}
      function showScreenSaver(){if(saverActive||reduceWallpaperMotion.matches||document.hidden){return;}saverActive=true;saverShownAt=Date.now();updateSaverTime();updateSaverHint();screenSaver.classList.add('active');screenSaver.setAttribute('aria-hidden','false');closeStart();closeContext();}
      function hideScreenSaver(){if(!saverActive){return;}saverActive=false;previewSaverActive=false;screenSaver.classList.remove('active');screenSaver.setAttribute('aria-hidden','true');lastActivity=Date.now();}
      function noteActivity(){if(saverActive&&Date.now()-saverShownAt<700){return;}lastActivity=Date.now();if(saverActive){hideScreenSaver();}}
      document.addEventListener('pointerdown',function(event){if(saverActive){event.preventDefault();event.stopPropagation();hideScreenSaver();return;}noteActivity();},true);
      document.addEventListener('pointermove',noteActivity,{passive:true});
      document.addEventListener('touchstart',function(event){if(saverActive){if(event.cancelable){event.preventDefault();}event.stopPropagation();hideScreenSaver();return;}noteActivity();},{capture:true,passive:false});
      document.addEventListener('touchmove',noteActivity,{passive:true});
      document.addEventListener('scroll',noteActivity,{passive:true,capture:true});
      document.addEventListener('keydown',function(event){if(saverActive){event.preventDefault();event.stopImmediatePropagation();hideScreenSaver();return;}noteActivity();},true);
      document.addEventListener('visibilitychange',function(){if(document.hidden){hideScreenSaver();}else{lastActivity=Date.now();}});
      document.getElementById('preview-saver').addEventListener('click',function(){previewSaverActive=true;showScreenSaver();if(!saverActive){previewSaverActive=false;}});
      setInterval(function(){if(previewSaverActive&&saverActive){lastActivity=Date.now();}var remaining=Math.max(0,Math.ceil((idleDelay-(Date.now()-lastActivity))/1000));if(saverCountdown){saverCountdown.textContent=saverActive?'active now':remaining+'s';}if(!saverActive&&remaining<=0){showScreenSaver();}if(saverActive){updateSaverTime();}},1000);

      var gameWindow=document.getElementById('terminal-window');
      var terminalHome=document.getElementById('terminal-home');
      var terminalOutput=document.getElementById('terminal-output');
      var terminalForm=document.getElementById('terminal-form');
      var terminalInput=document.getElementById('terminal-input');
      var terminalGameMenu=document.getElementById('terminal-game-menu');
      var gameRunner=document.getElementById('game-runner');
      var gameRunnerTitle=document.getElementById('game-runner-title');
      var currentGame='';
      function appendTerminal(command,response){terminalOutput.textContent+='\n\nC:\\NOPAL> '+command+'\n'+response;terminalOutput.scrollTop=terminalOutput.scrollHeight;}
      function runTerminalCommand(raw){var command=raw.trim().toLowerCase();if(!command){return;}terminalGameMenu.hidden=true;if(command==='help'){appendTerminal(command,'BASIC COMMANDS\nHELP     show this guide\nGAMES    list mini games\nSNAKE    launch Snake\nTETRIS   launch Tetris\nDATE     show local date and time\nCLEAR    clear terminal');}else if(command==='games'||command==='game'){appendTerminal(command,'2 games installed. Choose one below or type its name.');terminalGameMenu.hidden=false;}else if(command==='snake'||command==='1'||command==='play snake'){appendTerminal(command,'Launching Snake in game mode…');launchGame('snake-game');}else if(command==='tetris'||command==='2'||command==='play tetris'){appendTerminal(command,'Launching Tetris in game mode…');launchGame('tetris-game');}else if(command==='date'||command==='time'){appendTerminal(command,new Date().toLocaleString());}else if(command==='konami'){appendTerminal(command,'Cheat code accepted. Party mode engaged.');activateKonami();}else if(command==='clear'||command==='cls'){terminalOutput.textContent='';}else{appendTerminal(command,'Command not found. Type HELP for the command list.');}}
      terminalForm.addEventListener('submit',function(event){event.preventDefault();var command=terminalInput.value;terminalInput.value='';runTerminalCommand(command);});
      document.querySelectorAll('[data-command]').forEach(function(button){button.addEventListener('click',function(){runTerminalCommand(button.getAttribute('data-command'));terminalInput.focus();});});
      document.querySelectorAll('[data-launch-game]').forEach(function(button){button.addEventListener('click',function(){launchGame(button.getAttribute('data-launch-game'));});});
      function launchGame(id){currentGame=id;terminalHome.hidden=true;gameRunner.hidden=false;gameWindow.classList.add('game-mode','maximized');gameWindow.querySelector('.titlebar-title').textContent=id==='snake-game'?'Terminal — Snake':'Terminal — Tetris';gameRunnerTitle.textContent=id==='snake-game'?'SNAKE / FULL GAME MODE':'TETRIS / FULL GAME MODE';document.querySelectorAll('.game-view').forEach(function(view){view.classList.toggle('active',view.id===id);});if(id==='snake-game'){resetSnake();drawSnake();}else{resetTetris();drawTetris();}focusWindow(gameWindow);}
      function pauseActiveGame(){if(currentGame==='snake-game'&&snakeState==='running'){snakeState='paused';snakePause.textContent='RESUME';snakeText('Paused while the terminal is minimized.');drawSnake();clearTimeout(snakeTimer);}if(currentGame==='tetris-game'&&tetrisState==='running'){tetrisState='paused';tetrisPause.textContent='RESUME';tetrisMessage.textContent='Paused while the terminal is minimized.';drawTetris();clearTimeout(tetrisTimer);}}
      function closeGameMode(reset){if(!currentGame){return;}pauseActiveGame();if(reset){if(currentGame==='snake-game'){resetSnake();}else{resetTetris();}}document.querySelectorAll('.game-view').forEach(function(view){view.classList.remove('active');});currentGame='';gameRunner.hidden=true;terminalHome.hidden=false;terminalGameMenu.hidden=true;gameWindow.classList.remove('game-mode','maximized');gameWindow.querySelector('.titlebar-title').textContent='Terminal';}
      document.getElementById('game-exit').addEventListener('click',function(){closeGameMode(true);terminalInput.focus();});

      var snakeCanvas=document.getElementById('snake-canvas');
      var snakeContext=snakeCanvas.getContext('2d');
      var snakeScore=document.getElementById('snake-score');
      var snakeSpeed=document.getElementById('snake-speed');
      var snakeBest=document.getElementById('snake-best');
      var snakeBestMenu=document.getElementById('snake-best-menu');
      var snakeMessage=document.getElementById('snake-message');
      var snakeStart=document.getElementById('snake-start');
      var snakePause=document.getElementById('snake-pause');
      var snakeCell=20,snakeCols=16,snakeRows=12;
      var snake=[],snakeFood={x:11,y:6},snakeDirection={x:1,y:0},snakeNext={x:1,y:0};
      var snakePoints=0,snakeHigh=0,snakeState='idle',snakeTurnLocked=false,snakeTimer=0;
      function snakeDelay(){return Math.max(72,220-Math.floor(snakePoints/10)*12);}
      function snakeText(text){snakeMessage.textContent=text;}
      function snakeFoodNext(){var open=[];for(var y=0;y<snakeRows;y+=1){for(var x=0;x<snakeCols;x+=1){if(!snake.some(function(part){return part.x===x&&part.y===y;})){open.push({x:x,y:y});}}}snakeFood=open.length?open[Math.floor(Math.random()*open.length)]:{x:-1,y:-1};}
      function drawSnake(){snakeContext.fillStyle='#0a100c';snakeContext.fillRect(0,0,320,240);snakeContext.strokeStyle='rgba(185,199,148,.07)';snakeContext.lineWidth=1;for(var gx=snakeCell;gx<320;gx+=snakeCell){snakeContext.beginPath();snakeContext.moveTo(gx+.5,0);snakeContext.lineTo(gx+.5,240);snakeContext.stroke();}for(var gy=snakeCell;gy<240;gy+=snakeCell){snakeContext.beginPath();snakeContext.moveTo(0,gy+.5);snakeContext.lineTo(320,gy+.5);snakeContext.stroke();}snakeContext.fillStyle='#fffdf5';snakeContext.fillRect(snakeFood.x*snakeCell+5,snakeFood.y*snakeCell+5,10,10);snakeContext.fillStyle='#c8bd85';snakeContext.fillRect(snakeFood.x*snakeCell+8,snakeFood.y*snakeCell+2,5,5);snake.forEach(function(part,index){snakeContext.fillStyle=index===0?'#c8bd85':'#77b8a9';snakeContext.fillRect(part.x*snakeCell+2,part.y*snakeCell+2,16,16);if(index===0){snakeContext.fillStyle='#0a100c';snakeContext.fillRect(part.x*snakeCell+12,part.y*snakeCell+6,3,3);}});if(snakeState==='idle'||snakeState==='paused'||snakeState==='over'){snakeContext.fillStyle='rgba(10,16,12,.76)';snakeContext.fillRect(0,96,320,48);snakeContext.fillStyle='#c8bd85';snakeContext.textAlign='center';snakeContext.font='700 16px Georgia, serif';snakeContext.fillText(snakeState==='over'?'GAME OVER':snakeState==='paused'?'PAUSED':'PRESS START',160,126);}}
      function resetSnake(){clearTimeout(snakeTimer);snake=[{x:6,y:6},{x:5,y:6},{x:4,y:6}];snakeDirection={x:1,y:0};snakeNext={x:1,y:0};snakePoints=0;snakeTurnLocked=false;snakeState='idle';snakeFoodNext();snakeScore.textContent='000';snakeSpeed.textContent='1×';snakeBest.textContent=String(snakeHigh).padStart(3,'0');snakeBestMenu.textContent=String(snakeHigh).padStart(3,'0');snakePause.textContent='PAUSE';snakeStart.textContent='START';snakeText('Starts slow. Every bite makes the snake faster.');drawSnake();}
      function setSnakeDirection(x,y){if(snakeState!=='running'||snakeTurnLocked||snakeDirection.x+x===0&&snakeDirection.y+y===0){return;}snakeNext={x:x,y:y};snakeTurnLocked=true;}
      function scheduleSnake(){clearTimeout(snakeTimer);if(snakeState==='running'){snakeTimer=setTimeout(stepSnake,snakeDelay());}}
      function stepSnake(){if(snakeState!=='running'){return;}if(gameWindow.classList.contains('is-hidden')||gameWindow.classList.contains('minimized')||currentGame!=='snake-game'){scheduleSnake();return;}snakeDirection=snakeNext;snakeTurnLocked=false;var head={x:snake[0].x+snakeDirection.x,y:snake[0].y+snakeDirection.y};var hitWall=head.x<0||head.x>=snakeCols||head.y<0||head.y>=snakeRows;var hitTail=snake.some(function(part,index){return index<snake.length-1&&part.x===head.x&&part.y===head.y;});if(hitWall||hitTail){snakeState='over';snakeHigh=Math.max(snakeHigh,snakePoints);snakeBest.textContent=String(snakeHigh).padStart(3,'0');snakeBestMenu.textContent=String(snakeHigh).padStart(3,'0');snakeStart.textContent='RETRY';snakeText('Game over. Press RETRY to go again.');drawSnake();return;}snake.unshift(head);if(head.x===snakeFood.x&&head.y===snakeFood.y){snakePoints+=10;snakeHigh=Math.max(snakeHigh,snakePoints);snakeScore.textContent=String(snakePoints).padStart(3,'0');snakeBest.textContent=String(snakeHigh).padStart(3,'0');snakeBestMenu.textContent=String(snakeHigh).padStart(3,'0');snakeSpeed.textContent=(Math.min(3,1+snakePoints/100)).toFixed(1)+'×';snakeFoodNext();}else{snake.pop();}drawSnake();scheduleSnake();}
      snakeStart.addEventListener('click',function(){if(snakeState==='over'){resetSnake();}snakeState='running';snakeStart.textContent='RUNNING';snakePause.textContent='PAUSE';snakeText('Go! Each food pixel increases the speed.');drawSnake();scheduleSnake();});
      snakePause.addEventListener('click',function(){if(snakeState==='idle'||snakeState==='over'){return;}snakeState=snakeState==='paused'?'running':'paused';snakePause.textContent=snakeState==='paused'?'RESUME':'PAUSE';snakeText(snakeState==='paused'?'Paused.':'Back in motion.');drawSnake();scheduleSnake();});
      document.querySelectorAll('[data-direction]').forEach(function(button){button.addEventListener('click',function(){var direction=button.getAttribute('data-direction');if(direction==='up'){setSnakeDirection(0,-1);}if(direction==='down'){setSnakeDirection(0,1);}if(direction==='left'){setSnakeDirection(-1,0);}if(direction==='right'){setSnakeDirection(1,0);}});});

      var tetrisCanvas=document.getElementById('tetris-canvas');
      var tetrisContext=tetrisCanvas.getContext('2d');
      var tetrisScoreEl=document.getElementById('tetris-score');
      var tetrisLinesEl=document.getElementById('tetris-lines');
      var tetrisSpeedEl=document.getElementById('tetris-speed');
      var tetrisBestEl=document.getElementById('tetris-best');
      var tetrisBestMenu=document.getElementById('tetris-best-menu');
      var tetrisMessage=document.getElementById('tetris-message');
      var tetrisStart=document.getElementById('tetris-start');
      var tetrisPause=document.getElementById('tetris-pause');
      var tetrisCols=10,tetrisRows=20,tetrisCell=20,tetrisBoard=[],tetrisPiece=null,tetrisScore=0,tetrisLines=0,tetrisHigh=0,tetrisState='idle',tetrisTimer=0;
      var tetrisShapes=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]]];
      var tetrisColors=['#c8bd85','#fffdf5','#77b8a9','#e5d68d','#b9c97c','#8fc8bc','#d1e7a2'];
      function emptyTetrisBoard(){tetrisBoard=[];for(var y=0;y<tetrisRows;y+=1){tetrisBoard.push(new Array(tetrisCols).fill(-1));}}
      function tetrisDelay(){return Math.max(90,620-tetrisLines*24);}
      function tetrisValid(piece,dx,dy,shape){shape=shape||piece.shape;for(var y=0;y<shape.length;y+=1){for(var x=0;x<shape[y].length;x+=1){if(!shape[y][x]){continue;}var nx=piece.x+x+(dx||0),ny=piece.y+y+(dy||0);if(nx<0||nx>=tetrisCols||ny>=tetrisRows||(ny>=0&&tetrisBoard[ny][nx]!==-1)){return false;}}}return true;}
      function newTetrisPiece(){var type=Math.floor(Math.random()*tetrisShapes.length);tetrisPiece={shape:tetrisShapes[type].map(function(row){return row.slice();}),type:type,x:3,y:0};if(!tetrisValid(tetrisPiece,0,0)){tetrisState='over';tetrisHigh=Math.max(tetrisHigh,tetrisScore);tetrisBestEl.textContent=String(tetrisHigh).padStart(3,'0');tetrisBestMenu.textContent=String(tetrisHigh).padStart(3,'0');tetrisStart.textContent='RETRY';tetrisMessage.textContent='Game over. Press RETRY to clear the board.';}}
      function rotateTetris(){if(tetrisState!=='running'){return;}var rotated=tetrisPiece.shape[0].map(function(_,index){return tetrisPiece.shape.map(function(row){return row[index];}).reverse();});if(tetrisValid(tetrisPiece,0,0,rotated)){tetrisPiece.shape=rotated;drawTetris();}}
      function lockTetris(){tetrisPiece.shape.forEach(function(row,y){row.forEach(function(value,x){if(value&&tetrisPiece.y+y>=0){tetrisBoard[tetrisPiece.y+y][tetrisPiece.x+x]=tetrisPiece.type;}});});var cleared=0;for(var y=tetrisRows-1;y>=0;y-=1){if(tetrisBoard[y].every(function(cell){return cell!==-1;})){tetrisBoard.splice(y,1);tetrisBoard.unshift(new Array(tetrisCols).fill(-1));cleared+=1;y+=1;}}if(cleared){tetrisLines+=cleared;tetrisScore+=cleared*100*cleared;tetrisHigh=Math.max(tetrisHigh,tetrisScore);tetrisScoreEl.textContent=String(tetrisScore).padStart(3,'0');tetrisBestEl.textContent=String(tetrisHigh).padStart(3,'0');tetrisBestMenu.textContent=String(tetrisHigh).padStart(3,'0');tetrisLinesEl.textContent=String(tetrisLines).padStart(2,'0');tetrisSpeedEl.textContent=(620/tetrisDelay()).toFixed(1)+'×';}newTetrisPiece();}
      function moveTetris(dx,dy){if(tetrisState!=='running'){return false;}if(tetrisValid(tetrisPiece,dx,dy)){tetrisPiece.x+=dx;tetrisPiece.y+=dy;drawTetris();return true;}if(dy===1){lockTetris();drawTetris();}return false;}
      function drawTetris(){tetrisContext.fillStyle='#0a100c';tetrisContext.fillRect(0,0,200,400);tetrisContext.strokeStyle='rgba(185,199,148,.07)';for(var x=20;x<200;x+=20){tetrisContext.beginPath();tetrisContext.moveTo(x+.5,0);tetrisContext.lineTo(x+.5,400);tetrisContext.stroke();}for(var y=20;y<400;y+=20){tetrisContext.beginPath();tetrisContext.moveTo(0,y+.5);tetrisContext.lineTo(200,y+.5);tetrisContext.stroke();}tetrisBoard.forEach(function(row,y){row.forEach(function(cell,x){if(cell!==-1){tetrisContext.fillStyle=tetrisColors[cell];tetrisContext.fillRect(x*20+2,y*20+2,16,16);}});});if(tetrisPiece){tetrisPiece.shape.forEach(function(row,y){row.forEach(function(value,x){if(value){tetrisContext.fillStyle=tetrisColors[tetrisPiece.type];tetrisContext.fillRect((tetrisPiece.x+x)*20+2,(tetrisPiece.y+y)*20+2,16,16);}});});}if(tetrisState==='idle'||tetrisState==='paused'||tetrisState==='over'){tetrisContext.fillStyle='rgba(10,16,12,.78)';tetrisContext.fillRect(0,174,200,52);tetrisContext.fillStyle='#c8bd85';tetrisContext.textAlign='center';tetrisContext.font='700 14px Georgia, serif';tetrisContext.fillText(tetrisState==='over'?'GAME OVER':tetrisState==='paused'?'PAUSED':'PRESS START',100,205);}}
      function resetTetris(){clearTimeout(tetrisTimer);emptyTetrisBoard();tetrisScore=0;tetrisLines=0;tetrisState='idle';tetrisScoreEl.textContent='000';tetrisLinesEl.textContent='00';tetrisSpeedEl.textContent='1×';tetrisBestEl.textContent=String(tetrisHigh).padStart(3,'0');tetrisBestMenu.textContent=String(tetrisHigh).padStart(3,'0');tetrisStart.textContent='START';tetrisPause.textContent='PAUSE';tetrisMessage.textContent='Clear lines. The blocks fall faster as your score grows.';newTetrisPiece();drawTetris();}
      function scheduleTetris(){clearTimeout(tetrisTimer);if(tetrisState==='running'){tetrisTimer=setTimeout(stepTetris,tetrisDelay());}}
      function stepTetris(){if(tetrisState!=='running'){return;}if(gameWindow.classList.contains('is-hidden')||gameWindow.classList.contains('minimized')||currentGame!=='tetris-game'){scheduleTetris();return;}moveTetris(0,1);scheduleTetris();}
      tetrisStart.addEventListener('click',function(){if(tetrisState==='over'){resetTetris();}tetrisState='running';tetrisStart.textContent='RUNNING';tetrisPause.textContent='PAUSE';tetrisMessage.textContent='Stack cleanly. Every cleared line increases the pace.';drawTetris();scheduleTetris();});
      tetrisPause.addEventListener('click',function(){if(tetrisState==='idle'||tetrisState==='over'){return;}tetrisState=tetrisState==='paused'?'running':'paused';tetrisPause.textContent=tetrisState==='paused'?'RESUME':'PAUSE';drawTetris();scheduleTetris();});
      document.querySelectorAll('[data-tetris]').forEach(function(button){button.addEventListener('click',function(){var action=button.getAttribute('data-tetris');if(action==='rotate'){rotateTetris();}else if(action==='left'){moveTetris(-1,0);}else if(action==='right'){moveTetris(1,0);}else if(action==='down'){moveTetris(0,1);}});});
      document.addEventListener('keydown',function(event){if(!gameWindow.classList.contains('is-focused')||gameWindow.classList.contains('is-hidden')||gameWindow.classList.contains('minimized')){return;}if(currentGame==='snake-game'){var directions={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};if(directions[event.code]){event.preventDefault();setSnakeDirection(directions[event.code][0],directions[event.code][1]);}else if(event.code==='Space'){event.preventDefault();snakePause.click();}}else if(currentGame==='tetris-game'){if(event.code==='ArrowUp'||event.code==='KeyW'){event.preventDefault();rotateTetris();}if(event.code==='ArrowLeft'||event.code==='KeyA'){event.preventDefault();moveTetris(-1,0);}if(event.code==='ArrowRight'||event.code==='KeyD'){event.preventDefault();moveTetris(1,0);}if(event.code==='ArrowDown'||event.code==='KeyS'){event.preventDefault();moveTetris(0,1);}if(event.code==='Space'){event.preventDefault();tetrisPause.click();}}});
      resetSnake();resetTetris();

      var galleryInput=document.getElementById('gallery-input');
      var galleryGrid=document.getElementById('gallery-grid');
      var galleryCount=document.getElementById('gallery-count');
      var galleryUrls=[];
      function emptyGallery(){galleryGrid.innerHTML='<div class="gallery-empty">No project images added yet.<br>Choose PNG, JPEG, GIF, or WebP files.</div>';galleryCount.textContent='0 images';}
      function addGalleryFiles(files){Array.prototype.slice.call(files).forEach(function(file){if(!/^image\/(png|jpeg|gif|webp)$/.test(file.type)){return;}var url=URL.createObjectURL(file);galleryUrls.push(url);var figure=document.createElement('figure');figure.className='gallery-item';var image=document.createElement('img');image.src=url;image.alt='Uploaded project preview: '+file.name;var caption=document.createElement('span');caption.textContent=file.name;var remove=document.createElement('button');remove.className='gallery-remove bevel';remove.type='button';remove.setAttribute('aria-label','Remove '+file.name);remove.textContent='×';remove.addEventListener('click',function(){URL.revokeObjectURL(url);galleryUrls=galleryUrls.filter(function(item){return item!==url;});figure.remove();galleryCount.textContent=galleryUrls.length+' image'+(galleryUrls.length===1?'':'s');if(!galleryUrls.length){emptyGallery();}});figure.appendChild(image);figure.appendChild(caption);figure.appendChild(remove);if(galleryGrid.querySelector('.gallery-empty')){galleryGrid.textContent='';}galleryGrid.appendChild(figure);});galleryCount.textContent=galleryUrls.length+' image'+(galleryUrls.length===1?'':'s');}
      galleryInput.addEventListener('change',function(){addGalleryFiles(galleryInput.files);galleryInput.value='';});
      document.getElementById('clear-gallery').addEventListener('click',function(){galleryUrls.forEach(function(url){URL.revokeObjectURL(url);});galleryUrls=[];emptyGallery();});

      var currentPattern='grid';
      var wallpaperUrl='';
      function applyPattern(pattern){currentPattern=pattern;desktop.style.backgroundSize='';if(pattern==='grid'){desktop.style.backgroundImage='linear-gradient(rgba(0,0,0,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.13) 1px,transparent 1px)';desktop.style.backgroundSize='32px 32px';}else if(pattern==='lines'){desktop.style.backgroundImage='repeating-linear-gradient(135deg,rgba(0,0,0,.12) 0 2px,transparent 2px 15px)';}else{desktop.style.backgroundImage='none';}}
      document.querySelectorAll('.swatch').forEach(function(button){button.addEventListener('click',function(){desktop.style.backgroundColor=button.getAttribute('data-color');document.querySelectorAll('.swatch').forEach(function(item){item.setAttribute('aria-pressed',String(item===button));});});});
      document.querySelectorAll('.pattern-button').forEach(function(button){button.addEventListener('click',function(){if(wallpaperUrl){URL.revokeObjectURL(wallpaperUrl);wallpaperUrl='';}applyPattern(button.getAttribute('data-pattern'));document.querySelectorAll('.pattern-button').forEach(function(item){item.setAttribute('aria-pressed',String(item===button));});});});
      document.querySelectorAll('.motion-button').forEach(function(button){button.addEventListener('click',function(){var motion=button.getAttribute('data-motion');desktop.classList.remove('motion-1','motion-2','motion-3','motion-4','motion-off');desktop.classList.add(motion==='off'?'motion-off':'motion-'+motion);document.querySelectorAll('.motion-button').forEach(function(item){item.setAttribute('aria-pressed',String(item===button));});});});
      document.getElementById('wallpaper-input').addEventListener('change',function(event){var file=event.target.files[0];if(!file||!/^image\/(png|jpeg|gif|webp)$/.test(file.type)){return;}if(wallpaperUrl){URL.revokeObjectURL(wallpaperUrl);}wallpaperUrl=URL.createObjectURL(file);desktop.style.backgroundImage='url("'+wallpaperUrl+'")';desktop.style.backgroundSize='cover';desktop.style.backgroundPosition='center';event.target.value='';});
      document.getElementById('reset-wallpaper').addEventListener('click',function(){if(wallpaperUrl){URL.revokeObjectURL(wallpaperUrl);wallpaperUrl='';}desktop.style.backgroundColor='';desktop.style.backgroundImage='';desktop.style.backgroundSize='';desktop.style.backgroundPosition='';currentPattern='grid';document.querySelectorAll('.swatch').forEach(function(item,index){item.setAttribute('aria-pressed',String(index===0));});});
      window.addEventListener('beforeunload',function(){galleryUrls.forEach(function(url){URL.revokeObjectURL(url);});if(wallpaperUrl){URL.revokeObjectURL(wallpaperUrl);}});

      function updateClock(){var now=new Date();document.getElementById('clock').textContent=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');}
      updateClock();setInterval(updateClock,30000);focusWindow(document.getElementById('about-window'));syncTaskbarDensity();

      /* BIT — the desktop robot pet. He wanders the empty desktop, chirps portfolio quips, and takes offense personally.
         TRICKS: gentle taps make him happy (3 slow pats = love), 5 rapid taps make him angry, a circular whoosh
         around his body while held makes him dizzy on release, and dropping him onto a window parks him on its roof.
         He also climbs by himself when bored, rides dragged windows like a skateboard passenger, and flees when a
         window lands on top of him. Expressions follow a priority ladder:
         dizzy > scared > angry > surprised > proud > love > happy > curious > idle/sleepy.
         When a window is maximized the whole desktop is covered, so instead of roaming unseen he takes a
         fullscreen nap: frozen in place and hidden until the window is restored, then he wakes where he left off. */
      var pet=document.getElementById('desktop-pet');
      var petBot=pet?pet.querySelector('.pet-bot'):null;
      var petSpeechText=document.getElementById('pet-speech-text');
      var petToggle=document.getElementById('pet-toggle');
      var petEnabled=true;
      var petReduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var petState='idle'; // idle | walk | sleep | held | climb | ride | fullnap
      var petPos={x:24,y:220},petTarget={x:24,y:220};
      var petDir=1,petIdleUntil=0,petLastActivity=Date.now(),petSpeakTimer=0,petHopTimer=0;
      var petDrag=null; // {dx,dy,moved,downAt}
      var petQuips={
        en:['BEEP-BOOP.','GPA 3.77? NICE NUMBERS, HUMAN.','TRY SNAKE IN THE TERMINAL.','8 PROJECTS. I GUARDED ALL OF THEM.','I RUN ON CLEAN CODE AND COFFEE FUMES.','CLICK ME AGAIN. I DARE YOU.','HOLD ME AND SPIN ME. IF YOU DARE.'],
        id:['BEEP-BOOP.','IPK 3.77? MANTAP, MANUSIA.','COBA MAIN SNAKE DI TERMINAL.','8 PROYEK. SEMUA AKU JAGAIN.','AKU JALAN PAKAI CLEAN CODE DAN UAP KOPI.','KLIK AKU LAGI. BERANI.','ANGKAT AKU LALU PUTAR. KALAU BERANI.']
      };
      var petExprQuips={
        happy:{en:['HEHE. THAT TICKLES.','NICE PAT, HUMAN.'],id:['HIHI. GELI.','BELAIAN BAGUS, MANUSIA.']},
        love:{en:['BEEP. I LIKE YOU.','ALL HEARTS AND SERVOS.'],id:['BEEP. AKU SUKA KAMU.','SEMUA HATI DAN SERVOS.']},
        curious:{en:['?'],id:['?']},
        surprised:{en:['WOAH!','HEY! PERSONAL SPACE!'],id:['WAH!','HEI! JARAK DONG!']},
        dizzy:{en:['WHOA... SPINNING.','THE ROOM IS TILTED.','BLIP... DIZZY.'],id:['DUH... PUSING.','RUANGANNYA MUTER.','BLIP... KEPALA MUTER.']},
        angry:{en:['HEY! GENTLE!','TOO MANY POKES!','BACK OFF, HUMAN.'],id:['HEI! PELAN-PELAN!','KEBANYAKAN DITAP!','MUNDUR, MANUSIA!']},
        scared:{en:['WAAAH!','TOO FAST! NOT A ROLLERCOASTER!'],id:['KYAAA!','KECEPETAN! BUKAN ROLLER COASTER!']},
        proud:{en:['LOOK AT ME! KING OF THE WINDOW!','NAILED IT.'],id:['LIHAT! AKU RAJA JENDELA!','BERHASIL!']}
      };
      var PET_EXPR_PRIORITY={dizzy:70,scared:60,angry:50,surprised:40,proud:38,love:32,happy:30,curious:22};
      var petExprUntil={},petExprCur='';
      var petTaps=[],petGentle={count:0,last:0},petAngryUntil=0,petPreSleepState=null,petFleeSpeedUntil=0,petSurpriseCoolUntil=0;
      var petSpin=null,petSpinReady=false,petDizzyCooldown=0;
      var petRide=null,petClimb=null,petClimbCooldown=0;
      var petOverlapCheckAt=0,petCuriousCooldown=0,petCursor=null;
      function petBounds(){
        var reserve=58;
        if(window.innerWidth<1024){
          var dock=document.querySelector('.mobile-dock');
          var bar=document.querySelector('.taskbar');
          reserve=((dock&&dock.offsetHeight)||70)+((bar&&bar.offsetHeight)||42)+24;
        }
        return {minX:10,maxX:Math.max(10,desktop.clientWidth-90),minY:58,maxY:Math.max(58,desktop.clientHeight-reserve-108)};
      }
      function petClamp(point){var b=petBounds();point.x=Math.min(b.maxX,Math.max(b.minX,point.x));point.y=Math.min(b.maxY,Math.max(b.minY,point.y));return point;}
      /* Glitch guard: the single source of truth for rendered position. Every legal motion
         step (walk 130px/s, window-chase 520px/s, climb) stays well under the per-frame
         budget; anything bigger is a stale-state jump and is trimmed to a short slide in
         that frame instead of a teleport smear. Held drags are exempt (the pointer drives
         those), so the guard is only applied on the main frame path. */
      var petJumpSeen=false,petJumpFrom={x:0,y:0};
      function petGlitchAnchor(x,y){petJumpFrom.x=x;petJumpFrom.y=y;petJumpSeen=true;}
      function petJumpRecord(){petGlitchAnchor(petPos.x,petPos.y);}
      function petGlitchGuard(dt){
        var cx=petPos.x,cy=petPos.y;
        if(!petJumpSeen){petGlitchAnchor(cx,cy);return;}
        var dx=cx-petJumpFrom.x,dy=cy-petJumpFrom.y,dist=Math.hypot(dx,dy);
        var secs=Math.max(0.004,Math.min(0.05,dt||0.016));
        var maxJump=Math.max(6,Math.min(30,620*secs)); /* time-based: smooth at every refresh rate */
        if(dist>maxJump){
          cx=petJumpFrom.x+dx/dist*maxJump;cy=petJumpFrom.y+dy/dist*maxJump;
          petPos.x=cx;petPos.y=cy;
        }
        petGlitchAnchor(cx,cy);
      }
      /* Bounded chase: follows an anchor point at a fixed px/sec cap instead of an
         exponential lerp, so a far anchor (a dropped-onto window body, a window that
         just teleported) reads as a quick scoot, never a teleport smear. */
      function petChase(tx,ty,dt,cap){
        var dx=tx-petPos.x,dy=ty-petPos.y,dist=Math.hypot(dx,dy);
        if(dist<0.5){return;}
        var step=Math.min(dist,(cap||520)*dt);
        petPos.x+=dx/dist*step;petPos.y+=dy/dist*step;
      }
      function petSetWalking(on){if(pet){pet.classList.toggle('walking',on);}}
      /* One writer for the inner robot body's pose. CSS keyframe animations (walk bob,
         hop, shiver) own the element's transform while active and completely override
         inline style, so writing there per frame only wastes layout passes and makes the
         pose pop on transitions; skip those states. Change-gated so the DOM is touched
         only when the pose actually changed. */
      var petPostureLast='';
      function petPosture(degree,flipX){
        if(!pet||!petBot){return;}
        if(pet.classList.contains('walking')||pet.classList.contains('pet-hop')||
           petExprCur==='angry'||petExprCur==='scared'){return;}
        var value='scaleX('+(flipX===undefined?petDir:flipX)+') rotate('+degree+'deg)';
        if(value!==petPostureLast){petPostureLast=value;petBot.style.transform=value;}
      }
      function petSpeak(text,sticky){
        if(!petSpeechText||!pet){return;}
        petSpeechText.textContent=text;
        pet.classList.add('speaking');
        clearTimeout(petSpeakTimer);
        if(!sticky){petSpeakTimer=setTimeout(function(){pet.classList.remove('speaking');},2600);}
      }
      function petQuip(){var list=petQuips[currentLanguage]||petQuips.en;return list[Math.floor(Math.random()*list.length)];}
      function petExprQuip(id){var pool=petExprQuips[id]||petExprQuips.surprised;var list=pool[currentLanguage]||pool.en;return list[(Math.random()*list.length)|0];}
      function petDeskWide(){return window.innerWidth>=1024;}
      function petCenter(){return {x:petPos.x+40,y:petPos.y+52};}
      function playPetBeep(kind){
        if(!clickSoundEnabled){return;}
        var AudioEngine=window.AudioContext||window.webkitAudioContext;
        if(!AudioEngine){return;}
        try{
          if(!clickAudioContext){clickAudioContext=new AudioEngine();}
          var context=clickAudioContext;
          if(context.state!=='running'){context.resume();}
          var table={
            happy:{notes:[880,660,990],type:'square',gap:0.11,vol:0.036},
            drop:{notes:[392,262],type:'square',gap:0.11,vol:0.036},
            wake:{notes:[392,587],type:'square',gap:0.11,vol:0.036},
            greet:{notes:[660,880],type:'square',gap:0.11,vol:0.036},
            angry:{notes:[196,164,147],type:'sawtooth',gap:0.13,vol:0.05},
            dizzy:{notes:[520,660,520,660,520],type:'square',gap:0.08,vol:0.028},
            love:{notes:[523,659,784],type:'sine',gap:0.13,vol:0.045},
            surprised:{notes:[1244],type:'square',gap:0.1,vol:0.035},
            scared:{notes:[1318,1568,1318,1568],type:'square',gap:0.06,vol:0.03},
            proud:{notes:[523,659,784,1046],type:'square',gap:0.09,vol:0.036},
            curious:{notes:[740],type:'sine',gap:0.1,vol:0.04}
          };
          var cfg=table[kind]||table.greet;
          var startAt=context.currentTime+0.01;
          cfg.notes.forEach(function(frequency,index){
            var start=startAt+index*cfg.gap,duration=0.11;
            var oscillator=context.createOscillator();var gain=context.createGain();
            oscillator.type=cfg.type;oscillator.frequency.setValueAtTime(frequency,start);
            gain.gain.setValueAtTime(0.001,start);gain.gain.linearRampToValueAtTime(cfg.vol,start+0.012);gain.gain.exponentialRampToValueAtTime(0.001,start+duration);
            oscillator.connect(gain);gain.connect(context.destination);oscillator.start(start);oscillator.stop(start+duration+0.02);
          });
          animateSoundMeter();
        }catch(ignore){}
      }
      function petHop(){
        if(!pet){return;}
        pet.classList.remove('pet-hop');void pet.offsetWidth;
        pet.classList.add('pet-hop');
        clearTimeout(petHopTimer);
        petHopTimer=setTimeout(function(){pet.classList.remove('pet-hop');},560);
      }
      /* Expression manager: only the highest-priority live expression wears the face. */
      function petExprTick(now){
        var best='',bestPrio=-1,id,until,pri;
        for(id in petExprUntil){until=petExprUntil[id];if(until>now){pri=PET_EXPR_PRIORITY[id]||0;if(pri>bestPrio){best=id;bestPrio=pri;}}}
        if(best!==petExprCur){if(petExprCur){pet.classList.remove('expr-'+petExprCur);}petExprCur=best;if(best){pet.classList.add('expr-'+best);}}
      }
      function petExpress(id,durMs,force){
        var now=performance.now();
        if(!force&&petExprCur===id&&petExprUntil[id]&&now<petExprUntil[id]){petExprUntil[id]=now+durMs;return true;}
        if(!force&&petExprCur!==''){
          var curPrio=PET_EXPR_PRIORITY[petExprCur]||0,newPrio=PET_EXPR_PRIORITY[id]||0;
          if(curPrio>=newPrio&&now<petExprUntil[petExprCur]){return false;}
        }
        petExprUntil[id]=now+durMs;petExprTick(now);return true;
      }
      function petExprClear(){petExprUntil={};petExprTick(performance.now());}
      /* Window awareness: windows are walls. BIT steers around them, flees when one lands
         on him, and treats a window he stands on top of as his personal roof. */
      function petDesktopWindows(){
        if(!petDeskWide()){return [];}
        return windows.filter(function(win){return !win.classList.contains('is-hidden')&&!win.classList.contains('minimized');});
      }
      function petWindowSane(win){
        return !!win&&win.ownerDocument&&document.body.contains(win)&&
          !win.classList.contains('is-hidden')&&!win.classList.contains('minimized')&&!win.classList.contains('maximized');
      }
      function petWinZ(win){return (parseInt(win.style.zIndex||'0',10)||0)||4;}
      function petWallAt(x,y){
        var list=petDesktopWindows(),i,win;
        for(i=0;i<list.length;i++){
          win=list[i];
          if(win.classList.contains('maximized')){continue;}
          var left=win.offsetLeft,top=win.offsetTop,w=win.offsetWidth,h=win.offsetHeight;
          if(x>left-44&&x<left+w+44&&y>top-44&&y<top+h+44){return win;}
        }
        return null;
      }
      /* Raw-rect check (no wall margin): is BIT's body under an actual window right now? */
      function petInsideWall(x,y){
        var list=petDesktopWindows(),i,win;
        for(i=0;i<list.length;i++){
          win=list[i];
          if(win.classList.contains('maximized')){continue;}
          if(x>win.offsetLeft&&x<win.offsetLeft+win.offsetWidth&&y>win.offsetTop&&y<win.offsetTop+win.offsetHeight){return win;}
        }
        return null;
      }
      function petNearestFree(preferred,probe){
        var bounds=petBounds(),i;
        function isFree(point){
          if(point.x<bounds.minX||point.x>bounds.maxX||point.y<bounds.minY||point.y>bounds.maxY){return false;}
          return petWallAt(point.x+40,point.y+52)===null;
        }
        var first=petClamp({x:preferred.x,y:preferred.y});
        if(isFree(first)){return first;}
        var radius=probe||90;
        for(i=0;i<26;i++){
          var angle=(i/26)*Math.PI*2+0.4;
          var candidate=petClamp({x:preferred.x+Math.cos(angle)*radius,y:preferred.y+Math.sin(angle)*radius});
          if(isFree(candidate)){return candidate;}
          if(i%5===4){radius+=60;}
        }
        return first;
      }
      function petPickTarget(){
        var bounds=petBounds();
        var chase=cursorVisible&&cursorLastMove&&Date.now()-cursorLastMove<2400&&Math.random()<0.25;
        var target;
        if(chase&&cursorTarget){
          target={x:cursorTarget.x+(Math.random()*70-35),y:cursorTarget.y+(Math.random()*70-35)};
        }else{
          target={x:bounds.minX+Math.random()*(bounds.maxX-bounds.minX),y:bounds.minY+Math.random()*(bounds.maxY-bounds.minY)};
        }
        petClamp(target);
        if(window.innerWidth>=1024&&target.x<155&&target.y<340){target.x=175+Math.random()*60;petClamp(target);}
        if(Math.hypot(target.x-petPos.x,target.y-petPos.y)<70){target.x+=target.x>=petPos.x?150:-150;petClamp(target);}
        if(petDeskWide()&&!petReduce){
          var tries=0;
          while(petWallAt(target.x+40,target.y+52)&&tries<8){
            target.x=bounds.minX+Math.random()*(bounds.maxX-bounds.minX);
            target.y=bounds.minY+Math.random()*(bounds.maxY-bounds.minY);
            petClamp(target);tries++;
          }
        }
        petTarget=target;
        if(Math.abs(petTarget.x-petPos.x)>8){petDir=petTarget.x<petPos.x?-1:1;pet.style.setProperty('--pet-dir',String(petDir));}
        petState='walk';
      }
      function petStop(now){
        petState='idle';petIdleUntil=performance.now()+900+Math.random()*2400;petSetWalking(false);
        petFleeSpeedUntil=0;
        if(Math.random()<0.3){petSpeak(petQuip());}
        petMaybeClimb(now||performance.now());
      }
      function petMaybeClimb(now){
        if(petReduce||!petDeskWide()||petRide||petClimb||now<petClimbCooldown){return;}
        if(petAngryUntil&&now<petAngryUntil){return;}
        var list=petDesktopWindows(),center=petCenter(),best=null,bestDist=520,i,win;
        for(i=0;i<list.length;i++){
          win=list[i];
          if(!petWindowSane(win)||win.offsetWidth<150){continue;}
          var dist=Math.hypot(win.offsetLeft+win.offsetWidth/2-center.x,win.offsetTop+win.offsetHeight-center.y);
          if(dist<bestDist){bestDist=dist;best=win;}
        }
        if(best&&Math.random()<0.2){petStartClimb(best);}
      }
      function petStartClimb(win){
        if(!petDeskWide()||!petWindowSane(win)){return false;}
        var center=petCenter();
        var side=center.x>win.offsetLeft+win.offsetWidth/2?'right':'left';
        petClimb={win:win,side:side,phase:0};
        /* Same offsets as the phase-1 wall grab: walking up to the grab point and then
           grabbing the edge must not begin with a visible sidestep. */
        petTarget=petClamp({x:side==='left'?win.offsetLeft-68:win.offsetLeft+win.offsetWidth-12,y:win.offsetTop+win.offsetHeight-120});
        petState='climb';petSetWalking(false);
        if(Math.abs(petTarget.x-petPos.x)>8){petDir=petTarget.x<petPos.x?-1:1;pet.style.setProperty('--pet-dir',String(petDir));}
        return true;
      }
      function petClimbAbort(){
        if(!petClimb){return;}
        petClimb=null;petState='idle';petIdleUntil=performance.now()+700;petSetWalking(false);
      }
      function petClimbTick(now,dt){
        var climb=petClimb,win=climb?climb.win:null;
        if(!climb||!petWindowSane(win)){petClimbAbort();return;}
        if(climb.phase===0){
          var dx=petTarget.x-petPos.x,dy=petTarget.y-petPos.y,dist=Math.hypot(dx,dy);
          if(dist<9){climb.phase=1;}
          else{
            petPos.x+=dx/dist*100*dt;petPos.y+=dy/dist*100*dt;
            petSetWalking(true); /* walk bob owns the robot's pose while climbing */
          }
        }else{
          /* Windows parked high (top>=129) earn a roof perch; windows sitting low get
             clung to the titlebar's wall edge instead of being refused outright. */
          var roofOK=win.offsetTop>=129,sideK=44;
          var grabY=roofOK?win.offsetTop-100:win.offsetTop+sideK;
          var edgeX=climb.side==='left'?win.offsetLeft-68:win.offsetLeft+win.offsetWidth-12;
          petChase(edgeX,petPos.y,dt,520); /* track the moving wall edge at crawl speed */
          petPos.y-=150*dt;
          petSetWalking(true);
          if(petPos.y<=grabY){
            petPerch(win,{x:edgeX+40,y:roofOK?grabY+52:win.offsetTop+sideK+40},roofOK?'roof':'side');
            petClimbCooldown=now+28000;
            petExpress('proud',3200,true);
            playPetBeep('proud');
            petHop();
            petSpeak(petExprQuip('proud'));
          }
        }
      }
      function petSleep(){
        if(!pet||petState==='sleep'||petState==='held'){return;}
        petPreSleepState=(petState==='ride')?'ride':null;
        if(petState==='climb'){petClimb=null;}
        petState='sleep';petSetWalking(false);
        petExprClear();
        pet.classList.add('pet-sleeping');
        petSpeak('Z Z Z',true);
        petPosture(0);
      }
      function petWake(quiet){
        if(petState!=='sleep'){return;}
        petState='idle';petIdleUntil=performance.now()+600;
        pet.classList.remove('pet-sleeping','speaking');
        if(petPreSleepState==='ride'&&petRide&&petWindowSane(petRide.win)){petState='ride';}
        petPreSleepState=null;
        if(!quiet){playPetBeep('wake');}
      }
      function petWalkTick(now,dt){
        var spd=76;
        if(now<petFleeSpeedUntil){spd=130;}
        else if(petExprCur==='dizzy'){spd=46;}
        var dx=petTarget.x-petPos.x,dy=petTarget.y-petPos.y,dist=Math.hypot(dx,dy);
        if(dist<5){petStop(now);return;}
        var stepX=dx/dist*spd*dt,stepY=dy/dist*spd*dt;
        if(petDeskWide()&&!petReduce&&!petInsideWall(petPos.x+40,petPos.y+52)){
          /* steer around window "walls" (unless BIT is flat under one: then he escapes straight out) */
          var nx=petPos.x+40+stepX,ny=petPos.y+52+stepY;
          if(petWallAt(nx,ny)){
            var slideX=petWallAt(nx,petPos.y+52)===null;
            var slideY=petWallAt(petPos.x+40,ny)===null;
            if(slideX){stepY=0;}
            else if(slideY){stepX=0;}
            else{
              var px=-(dy/(dist||1)),py=dx/(dist||1),detour=null,cand;
              cand=petNearestFree({x:petPos.x+px*150-40,y:petPos.y+py*150-52},60);
              if(!petWallAt(cand.x+40,cand.y+52)){detour=cand;}
              else{
                cand=petNearestFree({x:petPos.x-px*150-40,y:petPos.y-py*150-52},60);
                if(!petWallAt(cand.x+40,cand.y+52)){detour=cand;px=-px;py=-py;}
              }
              if(detour){
                petTarget=detour;
                /* nudge sideways along the searched escape side: without this the bot
                   retargets every frame but never moves when boxed inside a wall margin */
                petPos.x+=px*90*dt;petPos.y+=py*90*dt;
                petSetWalking(true);
                return;
              }
              /* no detour found either: surge through rather than stand frozen */
            }
          }
        }
        petPos.x+=stepX;petPos.y+=stepY;
        petSetWalking(true);
        /* dizzy slows the crawl (spd branch above) and the CSS dizzy-bob rocks the body;
           no extra position shake, so the coordinates stay rock-stable while dizzy. */
      }
      function petPerch(win,point,anchorHint){
        var left=win.offsetLeft,top=win.offsetTop,w=win.offsetWidth,h=win.offsetHeight;
        var anchor=anchorHint||(top>=129?'roof':'side');
        var ride={win:win,anchor:anchor,lx:left,ly:top,shouted:false,wanderAt:0,off:0,offTarget:0,span:[0,0],fastTime:0,sSide:'right'};
        if(anchor==='roof'){
          var roofSpan=[12,Math.max(12,w-92)];
          ride.span=roofSpan;
          ride.off=ride.offTarget=point?Math.min(roofSpan[1],Math.max(roofSpan[0],point.x-left-40)):Math.min(roofSpan[1],Math.max(roofSpan[0],w/2-40));
        }else{
          var sideSpan=[30,Math.max(30,h-116)];
          ride.span=sideSpan;
          ride.sSide=point&&point.x-left<w/2?'left':'right';
          ride.off=ride.offTarget=point?Math.min(sideSpan[1],Math.max(sideSpan[0],point.y-top-40)):Math.min(sideSpan[1],Math.max(sideSpan[0],h/2-40));
        }
        petRide=ride;petClimb=null;petState='ride';
        petExprClear();
        petDir=1;pet.style.setProperty('--pet-dir','1');
        pet.style.zIndex=String(petWinZ(win)+1);
        petSetWalking(false);
      }
      function petRideTick(now,dt){
        var ride=petRide,win=ride?ride.win:null;
        if(!ride||!petWindowSane(win)){petHopOff('drop');return;}
        if(!petDeskWide()){petHopOff('drop');return;}
        var left=win.offsetLeft,top=win.offsetTop,w=win.offsetWidth,h=win.offsetHeight;
        if(ride.anchor==='roof'&&top<129){
          ride.anchor='side';ride.sSide='right';
          ride.span=[30,Math.max(30,h-116)];
          ride.off=ride.offTarget=Math.min(ride.span[1],Math.max(ride.span[0],h/2-40));
        }
        var safeDt=Math.max(0.008,dt);
        var vx=(left-ride.lx)/safeDt,vy=(top-ride.ly)/safeDt,spd=Math.hypot(vx,vy);
        ride.lx=left;ride.ly=top;
        if(spd>3000){
          ride.fastTime+=safeDt;
          if(ride.fastTime>0.09){petHopOff('throw');return;}
        }else{ride.fastTime=0;}
        if(spd>950){
          if(!petReduce&&petExpress('scared',1400)&&!ride.shouted){
            ride.shouted=true;playPetBeep('scared');petSpeak(petExprQuip('scared'));
          }
        }
        /* pace back and forth along the ledge when nobody is moving the window */
        if(now>ride.wanderAt){
          ride.wanderAt=now+1800+Math.random()*2600;
          ride.offTarget=ride.span[0]+Math.random()*(ride.span[1]-ride.span[0]);
        }
        var diff=ride.offTarget-ride.off;
        if(Math.abs(diff)>4){
          ride.off+=diff*Math.min(1,dt*2.4);petSetWalking(true);
          if(ride.anchor==='roof'){petDir=diff<0?-1:1;}
          else{petDir=ride.sSide==='left'?1:-1;}
          pet.style.setProperty('--pet-dir',String(petDir));
        }else{petSetWalking(false);}
        var tx,ty;
        if(ride.anchor==='roof'){tx=left+ride.off;ty=top-100;}
        else{tx=ride.sSide==='left'?left-80+12:left+w-12;ty=top+ride.off;}
        petChase(tx,ty,dt,520); /* bounded so rode-along jumps scoot, never teleport-smear */
        var lean=spd>140?Math.max(-14,Math.min(14,(-vx)/220)):0;
        petPosture(lean.toFixed(1));
        pet.style.zIndex=String(petWinZ(win)+1);
      }
      function petHopOff(reason){
        var hadRide=!!petRide;
        petRide=null;petClimb=null;pet.style.zIndex='3'; /* back to the wallpaper floor layer, under windows */petSetWalking(false);
        if(!hadRide||petState==='held'||petState==='sleep'){return;}
        petHop();
        if(reason==='throw'){
          petExpress('surprised',1500,true);
          playPetBeep('scared');
          petSpeak(petExprQuip('scared'));
          var c=petCenter();
          petFleeFrom(c.x,c.y,performance.now());
        }else{
          petState='walk';
          petTarget=petNearestFree({x:petPos.x,y:petPos.y+120},120);
          if(Math.abs(petTarget.x-petPos.x)>8){petDir=petTarget.x<petPos.x?-1:1;pet.style.setProperty('--pet-dir',String(petDir));}
        }
        petLastActivity=Date.now();
      }
      function petFleeFrom(x,y,now){
        var bounds=petBounds();
        var corners=[{x:bounds.minX,y:bounds.minY},{x:bounds.maxX,y:bounds.minY},{x:bounds.minX,y:bounds.maxY},{x:bounds.maxX,y:bounds.maxY}];
        corners.sort(function(a,b){return Math.hypot(b.x-x,b.y-y)-Math.hypot(a.x-x,a.y-y);});
        petTarget=petNearestFree(corners[0],140);
        petState='walk';petFleeSpeedUntil=now+2200;
        if(Math.abs(petTarget.x-petPos.x)>8){petDir=petTarget.x<petPos.x?-1:1;pet.style.setProperty('--pet-dir',String(petDir));}
      }
      function petAnger(now){
        petAngryUntil=now+8000;
        petGentle.count=0;
        petExpress('angry',8100,true);
        playPetBeep('angry');
        petSpeak(petExprQuip('angry'));
      }
      function petCalmCheck(now){
        if(petAngryUntil&&now>petAngryUntil){
          petAngryUntil=0;
          petExprUntil.angry=0;petExprTick(now);
          playPetBeep('happy');
          petSpeak(currentLanguage==='id'?'OK. DAMAI YA.':'OK. WE\'RE COOL.');
        }
      }
      function petDizzy(now){
        petSpinReady=false;petSpin=null;
        petDizzyCooldown=now+12000;
        petExpress('dizzy',3000,true);
        playPetBeep('dizzy');
        petSpeak(petExprQuip('dizzy'));
        var angle=Math.random()*Math.PI*2;
        petTarget=petNearestFree({x:petPos.x+Math.cos(angle)*180,y:petPos.y+Math.sin(angle)*120},120);
        if(Math.abs(petTarget.x-petPos.x)>8){petDir=petTarget.x<petPos.x?-1:1;pet.style.setProperty('--pet-dir',String(petDir));}
        petState='walk';
      }
      function petCoverTick(now){
        petOverlapCheckAt=now+380;
        if(!petEnabled){return;}
        if(petState==='held'||petState==='climb'||petState==='sleep'){return;}
        var list=petDesktopWindows(),i,other;
        if(petState==='ride'){
          /* riding: someone stacks a window on top of us -> hop off rather than fight for the layer */
          if(!petRide){return;}
          var win=petRide.win,winZ=petWinZ(win);
          var pr={x:petPos.x-6,y:petPos.y-6,w:92,h:116};
          for(i=0;i<list.length;i++){
            other=list[i];
            if(other===win||other.classList.contains('maximized')){continue;}
            if(petWinZ(other)<=winZ){continue;}
            if(pr.x<other.offsetLeft+other.offsetWidth&&pr.x+pr.w>other.offsetLeft&&
               pr.y<other.offsetTop+other.offsetHeight&&pr.y+pr.h>other.offsetTop){
              petExpress('surprised',1400,true);
              playPetBeep('surprised');
              petHopOff('push');
              return;
            }
          }
          return;
        }
        if(petState!=='walk'&&petState!=='idle'){return;}
        if(now<petSurpriseCoolUntil){return;} /* one startle per intrusion: re-fires stutter into jumpy teleports */
        var center=petCenter();
        for(i=0;i<list.length;i++){
          var wall=list[i];
          if(wall.classList.contains('maximized')){continue;}
          if(center.x>wall.offsetLeft&&center.x<wall.offsetLeft+wall.offsetWidth&&
             center.y>wall.offsetTop&&center.y<wall.offsetTop+wall.offsetHeight){
            petExpress('surprised',1500,true);
            playPetBeep('surprised');
            petSpeak(petExprQuip('surprised'));
            petSurpriseCoolUntil=now+2000;
            var dx=center.x-(wall.offsetLeft+wall.offsetWidth/2),dy=center.y-(wall.offsetTop+wall.offsetHeight/2);
            var dist=Math.hypot(dx,dy)||1;dx/=dist;dy/=dist;
            petTarget=petNearestFree({x:center.x+dx*230-40,y:center.y+dy*160-52},120);
            petDir=petTarget.x<petPos.x?-1:1;pet.style.setProperty('--pet-dir',String(petDir));
            petState='walk';petFleeSpeedUntil=now+1800;
            return;
          }
        }
      }
      function petCuriousTick(now){
        if(now<petCuriousCooldown||!petCursor||petState!=='idle'||petExprCur!==''){return;}
        var dwell=now-petCursor.t;
        if(dwell<1400||dwell>6000){return;}
        var center=petCenter();
        if(Math.hypot(petCursor.x-center.x,petCursor.y-center.y)<170){
          petDir=petCursor.x<center.x?-1:1;pet.style.setProperty('--pet-dir',String(petDir));
          if(petExpress('curious',2600)){
            playPetBeep('curious');
            petSpeak(petExprQuip('curious'));
            petCuriousCooldown=now+14000;
          }
        }
      }
      var petFrameLast=0;
      function petFrame(now){
        requestAnimationFrame(petFrame);
        if(!petEnabled||saverActive){return;}
        var dt=Math.min(0.05,(now-petFrameLast)/1000||0.016);petFrameLast=now;
        petFullnapSync(now);
        if(petFullnap){
          petJumpRecord();
          pet.style.transform='translate('+petPos.x+'px,'+petPos.y+'px)';
          return;
        }
        if(petState==='held'){
          petJumpRecord();
          pet.style.transform='translate('+petPos.x+'px,'+petPos.y+'px)';
          return;
        }
        petCalmCheck(now);
        petExprTick(now);
        if(petState!=='sleep'&&Date.now()-petLastActivity>45000&&!petReduce){petSleep();}
        if(!petDeskWide()){
          if(petState==='ride'){petHopOff('drop');}
          if(petState==='climb'){petClimbAbort();}
        }else if(now>=petOverlapCheckAt){petCoverTick(now);}
        if(!petReduce){
          if(petState==='idle'&&now>=petIdleUntil){petPickTarget();}
          if(petState==='walk'){petWalkTick(now,dt);}
          else if(petState==='climb'){petClimbTick(now,dt);}
          else if(petState==='ride'){petRideTick(now,dt);}
          else if(petState==='idle'){
            petPosture(0);
            petCuriousTick(now);
          }
        }
        petGlitchGuard(dt);
        pet.style.transform='translate('+petPos.x+'px,'+petPos.y+'px)';
      }
      function petPositionFromEvent(event){
        var bounds=desktop.getBoundingClientRect();
        return {x:event.clientX-bounds.left,y:event.clientY-bounds.top};
      }
      function petPointerDown(event){
        if(!petEnabled||saverActive){return;}
        noteActivity();petLastActivity=Date.now();petWake(true);
        var point=petPositionFromEvent(event);
        petDrag={dx:point.x-petPos.x,dy:point.y-petPos.y,moved:false,downAt:Date.now()};
        petSpin=null;petSpinReady=false;pet.classList.remove('pet-spin-ready');
        try{pet.setPointerCapture(event.pointerId);}catch(ignore){}
      }
      function petPointerMove(event){
        if(!petDrag){return;}
        var now=performance.now();
        var point=petPositionFromEvent(event);
        if(!petDrag.moved&&Math.hypot(point.x-petPos.x-petDrag.dx,point.y-petPos.y-petDrag.dy)>9){
          petDrag.moved=true;petState='held';
          if(petRide){petRide=null;pet.style.zIndex='3';}
          if(petClimb){petClimb=null;}
          pet.classList.add('pet-held');pet.classList.remove('speaking');petSetWalking(false);
          pet.style.setProperty('--pet-dir','1');
          petExprClear();
        }
        if(petDrag.moved){
          petPos=petClamp({x:point.x-petDrag.dx,y:point.y-petDrag.dy});
          /* Spin physics: accumulate signed turning of the pointer velocity vector. Only real
             circular strokes build up a full revolution — straight drags cancel out. */
          var swing=0;
          if(!petReduce){
            if(!petSpin){petSpin={lx:point.x,ly:point.y,lt:now,ang:0,acc:0};}
            var dtm=Math.max(0.008,(now-petSpin.lt)/1000);
            var vx=(point.x-petSpin.lx)/dtm,vy=(point.y-petSpin.ly)/dtm;
            var spd=Math.hypot(vx,vy),ang=Math.atan2(vy,vx);
            var delta=ang-petSpin.ang;
            if(delta>Math.PI){delta-=Math.PI*2;}else if(delta<-Math.PI){delta+=Math.PI*2;}
            /* one full hand loop (2π of turning) makes it dizzy, with a ~1.5s memory half-life */
            petSpin.acc*=Math.pow(0.63,dtm);
            if(spd>70&&dtm>0.01){petSpin.acc+=delta;}
            petSpin.ang=ang;petSpin.lx=point.x;petSpin.ly=point.y;petSpin.lt=now;
            if(now>=petDizzyCooldown&&Math.abs(petSpin.acc)>=Math.PI*2){petSpinReady=true;}
            pet.classList.toggle('pet-spin-ready',petSpinReady);
            swing=Math.max(-540,Math.min(540,petSpin.acc*57.2958));
          }
          petPosture((Math.sin(now/160)*10+swing).toFixed(1),1);
          petLastActivity=Date.now();
        }
      }
      function petPointerUp(event){
        if(!petDrag){return;}
        var held=petDrag.moved,quick=Date.now()-petDrag.downAt<420;
        petDrag=null;
        try{pet.releasePointerCapture(event.pointerId);}catch(ignore){}
        var now=performance.now();
        if(held){
          petState='idle';petIdleUntil=now+900;
          pet.classList.remove('pet-held','pet-spin-ready');
          pet.style.setProperty('--pet-dir',String(petDir));
          if(petSpinReady&&!petReduce){
            petDizzy(now);
          }else if(petDeskWide()&&!petReduce){
            var dropOn=petDroppedOnWindow(petCenter());
            if(dropOn){
              petPerch(dropOn,petCenter());
              petHop();playPetBeep('proud');
              petExpress('proud',3200,true);
              petSpeak(petExprQuip('proud'));
            }else{
              petHop();playPetBeep('drop');
              petSpeak(currentLanguage==='id'?'WIHH! SERU JUGA.':'WHEEE! DROP DELIVERED.');
            }
          }else{
            petHop();playPetBeep('drop');
            petSpeak(currentLanguage==='id'?'WIHH! SERU JUGA.':'WHEEE! DROP DELIVERED.');
          }
          petSpin=null;petSpinReady=false;
        }else if(quick){
          petTap(petPositionFromEvent(event),now);
        }
        petLastActivity=Date.now();noteActivity();
      }
      function petDroppedOnWindow(center){
        var list=petDesktopWindows(),best=null,bestZ=-1,i,win;
        for(i=0;i<list.length;i++){
          win=list[i];
          if(!petWindowSane(win)||win.offsetWidth<140){continue;}
          if(center.x>win.offsetLeft-14&&center.x<win.offsetLeft+win.offsetWidth+14&&
             center.y>win.offsetTop-14&&center.y<win.offsetTop+win.offsetHeight+14){
            var z=petWinZ(win);
            if(z>bestZ){bestZ=z;best=win;}
          }
        }
        return best;
      }
      function petTap(point,now){
        /* rapid taps confuse the poor thing: 5 taps within 2s = fury; slow pats = affection */
        petTaps.push(now);
        petTaps=petTaps.filter(function(t){return now-t<2000;});
        if(petTaps.length>=5){
          petTaps=[];petAnger(now);return;
        }
        if(petAngryUntil&&now<petAngryUntil){
          petAngryUntil=now+8000;petExpress('angry',8100,true);
          playPetBeep('angry');
          petSpeak(petExprQuip('angry'));
          if(petState==='ride'){petHopOff('push');}
          petFleeFrom(point?point.x:petCenter().x,point?point.y:petCenter().y,now);
          return;
        }
        var gap=now-(petGentle.last||0);
        if(gap>700&&gap<2800){petGentle.count++;}else if(gap>50){petGentle.count=1;}
        petGentle.last=now;
        if(petGentle.count>=3){
          petGentle.count=0;
          petHop();playPetBeep('love');
          if(petExpress('love',3500)){petSpeak(petExprQuip('love'));}
          else{petSpeak(petQuip());}
        }else{
          petHop();playPetBeep('happy');
          petExpress('happy',1500);
          petSpeak(petQuip());
        }
      }
      function syncPetToggle(){
        if(!petToggle){return;}
        var translated=currentLanguage==='id';
        petToggle.setAttribute('aria-pressed',String(petEnabled));
        petToggle.textContent='PET · '+(translated?(petEnabled?'NYALA':'MATI'):(petEnabled?'ON':'OFF'));
        petToggle.setAttribute('aria-label',translated?(petEnabled?'Sembunyikan hewan peliharaan':'Tampilkan hewan peliharaan'):(petEnabled?'Hide the desktop pet':'Show the desktop pet'));
      }
      /* Window lifecycle hooks: BIT reacts to windows being opened, dragged over him,
         minimized, maximized, or closed. Registered at click time through the same
         binding the window manager uses, so no window code had to change. */
      var petOrigOpen=openWindow,petOrigMin=minimizeWindow;
      openWindow=function(id,source){
        var result=petOrigOpen.call(this,id,source);
        petOverlapCheckAt=0;
        return result;
      };
      minimizeWindow=function(win){
        var result=petOrigMin.call(this,win);
        petOnWindowAction(win,'minimize');
        return result;
      };
      function petAnyMaximized(){
        var list=petDesktopWindows(),i;
        for(i=0;i<list.length;i++){
          if(list[i].classList.contains('maximized')){return true;}
        }
        return false;
      }
      /* Fullscreen nap: a maximized window covers the entire desktop and BIT would roam
         behind it unseen (which reads as teleporting on restore), so he freezes in place
         instead and resumes exactly where he was once the desktop is visible again. */
      var petFullnap=false;
      function petFullnapSync(now){
        var should=petAnyMaximized();
        if(should===petFullnap){return;}
        petFullnap=should;
        if(should){
          if(petRide){petRide=null;pet.style.zIndex='3';}
          if(petClimb){petClimb=null;}
          if(petDrag){petDrag=null;pet.classList.remove('pet-held','pet-spin-ready');petSpinReady=false;petSpin=null;}
          petState='fullnap';petSetWalking(false);petExprClear();
          petClimbCooldown=Math.max(petClimbCooldown,now+3000);
          petDizzyCooldown=Math.max(petDizzyCooldown,now+4000);
          petAngryUntil=0;petTaps=[];petGentle.count=0;
          pet.classList.remove('speaking','pet-hop','pet-sleeping');
          pet.classList.add('pet-fullnap');
          petPosture(0);
          playPetBeep('drop');
        }else{
          pet.classList.remove('pet-fullnap');
          petHop(); /* touch-and-go: he hops as he fades back in */
          petState='idle';petIdleUntil=now+900;petLastActivity=Date.now();
          petAngryUntil=0;petTaps=[];petGentle.count=0;
          petExpress('happy',1800,true);
          playPetBeep('wake');
          petSpeak(currentLanguage==='id'?'AKU BALIK!':'BACK TO DUTY.');
          petOverlapCheckAt=0;
        }
      }
      function petOnWindowAction(win,action){
        if(!petEnabled){return;}
        if(action==='close'||action==='minimize'||action==='maximize'){
          petFullnapSync(performance.now()); /* evaluated first: naps take precedence over hops */
          if(!petFullnap){
            if(petRide&&petRide.win===win){petHopOff('drop');}
            if(petClimb&&petClimb.win===win){petClimbAbort();}
          }
          petOverlapCheckAt=0;
        }
      }
      if(pet&&petBot){
        pet.addEventListener('pointerdown',petPointerDown);
        pet.addEventListener('pointermove',petPointerMove);
        pet.addEventListener('pointerup',petPointerUp);
        pet.addEventListener('pointercancel',petPointerUp);
        pet.addEventListener('click',function(event){
          event.stopPropagation(); /* keeps click near pet from double-beeping */
          if(event.detail===0){ /* keyboard activation */
            petLastActivity=Date.now();petWake(true);petTap(petCenter(),performance.now());noteActivity();
          }
        });
        pet.addEventListener('dragstart',function(event){event.preventDefault();});
        ['pointermove','pointerdown','touchmove','keydown'].forEach(function(eventName){
          document.addEventListener(eventName,function(){
            petLastActivity=Date.now();
            if(petState==='sleep'){petWake(true);}
          },{passive:true});
        });
        document.addEventListener('scroll',function(){
          petLastActivity=Date.now();
          if(petState==='sleep'){petWake(true);}
        },true);
        document.addEventListener('pointermove',function(event){
          if(event.pointerType!=='mouse'&&event.pointerType!=='pen'){return;}
          var bounds=desktop.getBoundingClientRect();
          petCursor={x:event.clientX-bounds.left,y:event.clientY-bounds.top,t:performance.now()};
        },{passive:true});
        windows.forEach(function(win){
          win.querySelectorAll('[data-action]').forEach(function(button){
            button.addEventListener('click',function(){
              petOnWindowAction(win,button.getAttribute('data-action'));
            });
          });
        });
        window.addEventListener('resize',function(){petClamp(petPos);petClamp(petTarget);petGlitchAnchor(petPos.x,petPos.y);pet.style.transform='translate('+petPos.x+'px,'+petPos.y+'px)';petOverlapCheckAt=0;});
        var petTidyBtn=document.getElementById('tidy-windows'); /* context menu: teleports all windows home */
        if(petTidyBtn){petTidyBtn.addEventListener('click',function(){
          petFullnapSync(performance.now()); /* tidy unmaximizes: may wake a napped BIT */
          if(petRide){petExpress('surprised',1400,true);petHopOff('drop');}
          if(petClimb){petClimbAbort();}
          petOverlapCheckAt=0;
        });}
        var petStartBounds=petBounds();
        /* First load: keep BIT clear of the opening About window, tucked into the
           bottom-right desktop corner with breathing room above the taskbar. */
        petPos={x:Math.max(petStartBounds.minX,petStartBounds.maxX-14),y:Math.max(petStartBounds.minY,petStartBounds.maxY-4)};
        petTarget={x:petPos.x,y:petPos.y};
        petIdleUntil=performance.now()+1800;
        pet.style.transform='translate('+petPos.x+'px,'+petPos.y+'px)';
        requestAnimationFrame(petFrame);
        setTimeout(function(){
          petHop();petSpeak(currentLanguage==='id'?'BEEP. AKU BIT.':'BEEP. I AM BIT.');
        },petReduce?250:1400);
      }
      if(petToggle){
        petToggle.addEventListener('click',function(){
          petEnabled=!petEnabled;
          if(pet){
            pet.classList.toggle('is-off',!petEnabled);
            if(petEnabled){petState='idle';petIdleUntil=performance.now()+500;petLastActivity=Date.now();petClamp(petPos);}
            else{pet.classList.remove('speaking','pet-sleeping','pet-held','walking','pet-hop','pet-spin-ready','pet-fullnap','expr-happy','expr-love','expr-curious','expr-surprised','expr-dizzy','expr-angry','expr-scared','expr-proud');clearTimeout(petSpeakTimer);petDrag=null;petState='idle';petExprClear();petRide=null;petClimb=null;pet.style.zIndex='3';petAngryUntil=0;petTaps=[];petFullnap=false;}
          }
          syncPetToggle();syncSystemButtons();
        });
        document.querySelectorAll('[data-language-toggle]').forEach(function(button){button.addEventListener('click',syncPetToggle);});
        syncPetToggle();syncSystemButtons();
      }
      /* Tiny debug hatch so the tricks can be spot-checked without perfect pointer kung-fu. */
      window.__bit={
        el:pet,
        express:function(id,ms){return petExpress(id,ms||3000,true);},
        dizzy:function(){petDizzy(performance.now());},
        angry:function(){petAnger(performance.now());},
        state:function(){return {state:petState,expr:petExprCur,ride:!!petRide,climb:!!petClimb,phase:petClimb?petClimb.phase:null,fullnap:petFullnap};},
        climb:function(id){
          var win=id?document.getElementById(id):null;
          if(!win){var list=petDesktopWindows();win=list.length?list[0]:null;}
          if(win&&petWindowSane(win)){petStartClimb(win);return true;}
          return false;
        },
        perch:function(id){
          var win=id?document.getElementById(id):null;
          if(!win){var list2=petDesktopWindows();win=list2.length?list2[0]:null;}
          if(win&&petWindowSane(win)){petPerch(win,null);return true;}
          return false;
        },
        hopoff:function(){petHopOff('drop');},
        speak:function(text){petSpeak(text);}
      };
    }());

  