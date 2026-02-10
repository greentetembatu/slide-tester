document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const topbar = document.querySelector(".topbar");
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Scroll variables
  let lastScrollTop = 0;
  const topbarHeight = topbar.offsetHeight;

  // Scroll event for topbar hide/show
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Topbar behavior
    if (window.innerWidth > 992) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll down - Sembunyikan topbar
        topbar.classList.add("hidden");
        navbar.style.top = "0"; // Navbar naik ke posisi paling atas layar
      } else {
        // Scroll up - Munculkan topbar
        topbar.classList.remove("hidden");
        navbar.style.top = topbarHeight + "px"; // Navbar turun kembali di bawah topbar
      }
    }

    lastScrollTop = scrollTop;
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");

    // Close all dropdowns when menu is closed
    if (!navMenu.classList.contains("active")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });
      document.querySelectorAll(".dropdown-arrow").forEach((arrow) => {
        arrow.classList.remove("active");
      });
    }
  });

  // Dropdown functionality for mobile (arrow click)
  dropdownToggles.forEach((toggle) => {
    // Wrap text in span for better targeting
    const text = toggle.childNodes[0];
    if (text.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.className = "menu-text";
      span.textContent = text.textContent;
      text.replaceWith(span);
    }

    // Find arrow icon
    const arrow = toggle.querySelector("i");
    if (arrow) {
      arrow.classList.add("dropdown-arrow");

      // Arrow click handler for mobile
      arrow.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          e.stopPropagation();

          const dropdown = this.closest(".dropdown");
          const dropdownMenu = dropdown.querySelector(".dropdown-menu");

          // Toggle current dropdown
          dropdownMenu.classList.toggle("show");
          this.classList.toggle("active");

          // Close other dropdowns
          document.querySelectorAll(".dropdown-menu").forEach((menu) => {
            if (menu !== dropdownMenu) {
              menu.classList.remove("show");
            }
          });

          document.querySelectorAll(".dropdown-arrow").forEach((otherArrow) => {
            if (otherArrow !== this) {
              otherArrow.classList.remove("active");
            }
          });
        }
      });
    }

    // Text click handler (navigates to page)
    /*const menuText = toggle.querySelector('.menu-text');
        if (menuText) {
            menuText.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    // On mobile, text click goes to page (simulate navigation)
                    e.preventDefault();
                    
                    // Close all dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('show');
                    });
                    
                    document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
                        arrow.classList.remove('active');
                    });
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                    
                    // Simulate page navigation (you should replace with actual navigation)
                    const pageName = this.textContent.trim().toLowerCase();
                    console.log(`Navigating to ${pageName} page...`);
                    // window.location.href = `/${pageName}.html`; // Uncomment for actual navigation
                    
                    // For demo: show alert
                    alert(`Navigating to ${pageName} page`);
                }*/
    const menuText = toggle.querySelector(".menu-text");

    if (menuText) {
      menuText.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
          // 1. Ambil URL dari elemen <a> induk
          const targetLink = this.closest("a").getAttribute("href");

          // Jika link hanya "#", maka cukup jalankan toggle dropdown (jangan pindah halaman)
          if (targetLink === "#" || !targetLink) {
            return;
          }

          // 2. Jalankan efek visual (opsional, sebelum pindah halaman)
          navMenu.classList.remove("active");
          const icon = menuToggle.querySelector("i");
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");

          // 3. Eksekusi perpindahan halaman
          // Hapus e.preventDefault() atau pastikan window.location dijalankan
          window.location.href = targetLink;
        }
      });
    }
  });

  // Close dropdowns when clicking outside (mobile)
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 992) {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.remove("show");
        });

        document.querySelectorAll(".dropdown-arrow").forEach((arrow) => {
          arrow.classList.remove("active");
        });
      }

      // Close mobile menu if clicking outside
      if (!e.target.closest("#nav-menu") && !e.target.closest("#menu-toggle")) {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");

        // Close all dropdowns
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.remove("show");
        });

        document.querySelectorAll(".dropdown-arrow").forEach((arrow) => {
          arrow.classList.remove("active");
        });
      }
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    // Reset on desktop
    if (window.innerWidth > 992) {
      navMenu.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");

      // Reset dropdowns
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });

      document.querySelectorAll(".dropdown-arrow").forEach((arrow) => {
        arrow.classList.remove("active");
      });

      // Show topbar on desktop
      topbar.classList.remove("hidden");
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Desktop hover functionality
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 992) {
        const menu = this.querySelector(".dropdown-menu");
        const arrow = this.querySelector(".dropdown-arrow");
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
        menu.style.transform = "translateY(0)";
        if (arrow) arrow.style.transform = "rotate(180deg)";
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 992) {
        const menu = this.querySelector(".dropdown-menu");
        const arrow = this.querySelector(".dropdown-arrow");
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
        menu.style.transform = "translateY(10px)";
        if (arrow) arrow.style.transform = "rotate(0deg)";
      }
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

/*window.addEventListener('scroll', function() {
        const parallaxElement = document.querySelector('.six-hero-columns');
        let scrollPosition = window.pageYOffset;

        // Angka 0.1 menentukan kecepatan parallax. 
        // Semakin kecil angkanya, semakin lambat gerakannya.
        // Nilai negatif membuat elemen bergerak berlawanan arah scroll.
        if (window.innerWidth > 991) { // Hanya jalankan di desktop agar tidak berat di mobile
            parallaxElement.style.transform = 'translateY(' + (scrollPosition * -0.1) + 'px)';
        }
    });*/

/*<!--six-build-st-business-packages-->*/











function setupScrollAnimations() {
  // Elemen yang akan diamati saat scroll
  const elementsToAnimate = document.querySelectorAll(
    ".six-build-st-section-title, .six-build-st-package-card, .six-build-st-card-badge, .six-build-st-card-content, " +
      ".six-build-st-package-type, .six-build-st-package-name, .six-build-st-package-desc, .six-build-st-features, " +
      ".six-build-st-feature-item, .six-build-st-package-price, .six-build-st-card-actions, .six-build-st-btn-detail, .six-build-st-btn-contact"
  );

  // Opsi untuk Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px", // mulai animasi sedikit sebelum elemen masuk viewport
    threshold: 0.1,
  };

  // Callback function untuk observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Tambahkan kelas 'animated' untuk memicu animasi
        entry.target.classList.add("animated");
        observer.unobserve(entry.target); // Hentikan observasi setelah animasi dipicu
      }
    });
  };

  // Buat Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Atur semua elemen untuk diamati
  elementsToAnimate.forEach((el) => {
    // Setel opacity awal ke 0 untuk semua elemen yang akan dianimasi
    el.style.opacity = "0";
    if (
      !el.classList.contains("six-build-st-feature-item") &&
      !el.classList.contains("six-build-st-btn-detail") &&
      !el.classList.contains("six-build-st-btn-contact")
    ) {
      el.style.transform = "translateY(30px)";
    }
    observer.observe(el);
  });
}

// Fungsi untuk memutar ulang animasi
function replayAnimations() {
  // Hapus kelas 'animated' dari semua elemen
  const animatedElements = document.querySelectorAll(".animated");
  animatedElements.forEach((el) => {
    el.classList.remove("animated");
    el.style.opacity = "0";
    if (
      !el.classList.contains("six-build-st-feature-item") &&
      !el.classList.contains("six-build-st-btn-detail") &&
      !el.classList.contains("six-build-st-btn-contact")
    ) {
      el.style.transform = "translateY(30px)";
    }
  });

  // Trigger reflow
  void document.body.offsetWidth;

  // Setel ulang animasi scroll
  setupScrollAnimations();
}

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Setup animasi scroll
  setupScrollAnimations();

  // Tambahkan efek hover pada kartu
  const cards = document.querySelectorAll(".six-build-st-package-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (this.classList.contains("animated")) {
        this.style.transform = "translateY(-10px)";
      }
    });

    card.addEventListener("mouseleave", function () {
      if (this.classList.contains("animated")) {
        this.style.transform = "translateY(0)";
      }
    });
  });

  // Animasi untuk tombol
  const buttons = document.querySelectorAll(
    ".six-build-st-btn-detail, .six-build-st-btn-contact"
  );
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      //e.preventDefault();
      // Animasi klik sederhana
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);

      // Simulasi aksi tombol
      const isSixBuildStBtnContact = this.classList.contains(
        ".six-build-st-btn-contact"
      );
      const packageName = this.closest(
        ".six-build-st-package-card"
      ).querySelector(".six-build-st-package-name").textContent;

      /*if (isSixBuildStBtnContact) {
        alert(
          `Terima kasih! Anda akan diarahkan ke WhatsApp untuk konsultasi mengenai ${packageName}.`
        );
      } else {
        alert(`Anda akan melihat detail lengkap dari paket ${packageName}.`);
      }*/
    });
  });

  // Event listener untuk tombol replay
});

/*======ISO SECTION===========*/

document.addEventListener("DOMContentLoaded", () => {
  const trackEl = document.getElementById("isoTrack");
  const textEl = document.getElementById("isoText");

  if (!trackEl || !textEl) return;

  /* === RENDER SLIDER DARI JSON === */
  trackEl.innerHTML = ISO_DATA.certificates
    .map(
      (cert) => `
        <img src="${cert.image}" alt="${cert.alt}">
      `
    )
    .join("");

  /* === RENDER TEXT === */
  textEl.innerHTML = `
    <h2>${ISO_DATA.title}</h2>
    <p>${ISO_DATA.description}</p>
  `;

  /* === INIT SLIDER SETELAH RENDER === */
  initIsoSlider();
});

function initIsoSlider() {
  const track = document.getElementById("isoTrack");
  const slides = track.children;

  if (!slides.length) {
    console.error("ISO Slider gagal: tidak ada slide");
    return;
  }

  let isoIndex = 0;

  /* CLONE SLIDE PERTAMA */
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  function isoAutoSlide() {
    isoIndex++;
    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = `translateX(-${isoIndex * 100}%)`;

    if (isoIndex === slides.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        isoIndex = 0;
        track.style.transform = "translateX(0)";
        track.offsetHeight; // reflow
        track.style.transition = "transform 0.8s ease-in-out";
      }, 800);
    }
  }

  setInterval(isoAutoSlide, 3500);
}

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("ts-main-title");
  const subtitleEl = document.getElementById("ts-main-subtitle");
  const trackEl = document.getElementById("ts-slider-track");

  if (!trackEl) return;

  // Set Title & Subtitle
  titleEl.textContent = TESTIMONIAL_DATA.title;
  subtitleEl.textContent = TESTIMONIAL_DATA.subtitle;

  // Render Function
  const renderCards = (data) => {
    return data
      .map(
        (item) => `
      <div class="ts-card">
        <div class="ts-header">
          <img src="${item.clientPhoto}" class="ts-photo" alt="${
          item.clientName
        }">
          <div class="ts-info">
            <h4>${item.clientName}</h4>
            <span>${item.clientRole}</span>
          </div>
        </div>
        <p class="ts-content">"${item.text}"</p>
        <div class="ts-footer">
          <span class="ts-date">${item.date}</span>
          <div class="ts-social">
            ${item.socials
              .map((s) => `<a href="${s.url}"><i class="${s.icon}"></i></a>`)
              .join("")}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  };

  // Isi Track dengan data original + duplikat (untuk loop tanpa putus)
  const cardsHTML = renderCards(TESTIMONIAL_DATA.testimonials);
  trackEl.innerHTML = cardsHTML + cardsHTML;
});

/*<!--===========SIDE ICON WHATSAPP===============-->*/
// Anda cukup mengganti link di bawah ini sesuai kebutuhan
const CS_CONTACTS = [
  {
    name: "CS Admin Utama",
    role: "Layanan 24 Jam",
    url: "https://wa.me/6282299950656",
  },
  /*{
    name: "CS Konsultasi",
    role: "Tanya Spesifikasi",
    url: "https://wa.me/6282299950656",
  },
  {
    name: "CS Pembayaran",
    role: "Konfirmasi Transfer",
    url: "https://wa.me/6282299950656",
  },*/
];

function toggleWaMenu() {
  const menu = document.getElementById("waMenu");
  const container = document.getElementById("wa-list-container");

  // Jika menu dibuka, render isinya
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";

    // Render daftar hanya jika container masih kosong
    if (container.innerHTML === "") {
      const listHTML = CS_CONTACTS.map(
        (cs) => `
        <a href="${cs.url}" target="_blank" class="wa-item">
          <i class="fab fa-whatsapp"></i>
          <div class="wa-item-info">
            <span>${cs.name}</span>
            <small>${cs.role}</small>
          </div>
        </a>
      `
      ).join("");
      container.innerHTML = listHTML;
    }
  }
}

/*<!--===========SIDE ICON BACK TO TOP===============-->*/

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const bttButton = document.getElementById("backToTopBtn");

  // Munculkan tombol jika scroll lebih dari 300px
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    bttButton.style.display = "block";
    bttButton.style.animation = "fadeInBtt 0.5s";
  } else {
    bttButton.style.display = "none";
  }
}

// Fungsi untuk scroll ke atas dengan halus
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Ini yang membuat gerakannya halus (smooth)
  });
}
