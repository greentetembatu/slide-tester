document.addEventListener("DOMContentLoaded", () => {

  const navMenu = document.querySelector(".nav-menu-container");
  const menuToggle = document.getElementById("menuToggle");
  const contactToggle = document.getElementById("menuToggleContact");
  const contactDropdown = document.getElementById("dropdownContact");

  /* ===== MOBILE MENU ===== */
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("is-open");
      menuToggle.querySelector("i").classList.toggle("fa-bars");
      menuToggle.querySelector("i").classList.toggle("fa-times");

      contactDropdown?.classList.remove("is-open");
    });
  }

  /* ===== MOBILE CONTACT ===== */
  if (contactToggle && contactDropdown) {
    contactToggle.addEventListener("click", e => {
      e.stopPropagation();
      contactDropdown.classList.toggle("is-open");
      navMenu?.classList.remove("is-open");
    });
  }

  /* ===== DROPDOWN MOBILE ===== */
  document.querySelectorAll(".dropdown > .dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", e => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const parent = toggle.closest(".dropdown");
        parent.classList.toggle("is-open");
      }
    });
  });

  /* ===== CLICK OUTSIDE ===== */
  document.addEventListener("click", e => {
    if (!e.target.closest(".navigation-section")) {
      navMenu?.classList.remove("is-open");
      contactDropdown?.classList.remove("is-open");
    }
  });

  /* ===== RESET ON RESIZE ===== */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      navMenu?.classList.remove("is-open");
      contactDropdown?.classList.remove("is-open");
      document
        .querySelectorAll(".dropdown")
        .forEach(d => d.classList.remove("is-open"));
    }
  });

});


























document.addEventListener('DOMContentLoaded', function () {

  // =======================================================
  // I. KONFIGURASI
  // =======================================================

  const promoSlider = document.querySelector('.promo-slider');
  const sliderTrack = document.querySelector('.slider-track');
  const allSlides = document.querySelectorAll('.slide');

  const prevBtn = document.getElementById('prevBtnPromo');
  const nextBtn = document.getElementById('nextBtnPromo');

  const clonesCount = 2;
  const totalSlideCount = allSlides.length;
  const originalSlideCount = totalSlideCount - clonesCount * 2;

  let currentIndex = clonesCount;
  const slideInterval = 8000;
  const transitionTime = 500;

  let autoTimeout;

  // =======================================================
  // II. DRAG STATE
  // =======================================================

  let isDragging = false;
  let isHorizontalDrag = false;
  let startX = 0;
  let startY = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  const minMove = 10;

  // =======================================================
  // III. SLIDER CORE
  // =======================================================

  function goToSlide(index, fast = false) {
    currentIndex = index;
    const width = promoSlider.offsetWidth;

    sliderTrack.style.transition = fast
      ? 'none'
      : `transform ${transitionTime / 1000}s ease-in-out`;

    sliderTrack.style.transform =
      `translateX(${-currentIndex * width}px)`;
  }

  function checkLoop() {
    if (currentIndex >= originalSlideCount + clonesCount) {
      goToSlide(clonesCount, true);
    } else if (currentIndex < clonesCount) {
      goToSlide(originalSlideCount + clonesCount - 1, true);
    }
  }

  sliderTrack.addEventListener('transitionend', checkLoop);

  // =======================================================
  // IV. AUTO SLIDE (STABIL)
  // =======================================================

  function startAutoSlide() {
    autoTimeout = setTimeout(() => {
      goToSlide(currentIndex + 1);
      startAutoSlide();
    }, slideInterval);
  }

  function resetAutoSlide() {
    clearTimeout(autoTimeout);
    startAutoSlide();
  }

  // =======================================================
  // V. DRAG LOGIC
  // =======================================================

  function startDrag(e) {
    isDragging = true;
    isHorizontalDrag = false;

    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    startY = e.type.includes('mouse') ? e.pageY : e.touches[0].clientY;

    const width = promoSlider.offsetWidth;
    prevTranslate = -currentIndex * width;
    currentTranslate = prevTranslate;

    sliderTrack.style.transition = 'none';
    animationID = requestAnimationFrame(animation);

    clearTimeout(autoTimeout);
  }

  function drag(e) {
    if (!isDragging) return;

    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const y = e.type.includes('mouse') ? e.pageY : e.touches[0].clientY;

    const dx = x - startX;
    const dy = y - startY;

    if (!isHorizontalDrag) {
      if (Math.abs(dy) > Math.abs(dx)) {
        endDrag(true);
        return;
      }
      if (Math.abs(dx) > minMove) {
        isHorizontalDrag = true;
      }
    }

    if (isHorizontalDrag) {
      e.preventDefault();
      currentTranslate = prevTranslate + dx;
    }
  }

  function endDrag(allowSnap = true) {
    cancelAnimationFrame(animationID);
    if (!isDragging) return;
    isDragging = false;

    const width = promoSlider.offsetWidth;
    const moved = currentTranslate - prevTranslate;
    const swipeThreshold = Math.min(120, width * 0.18);

    sliderTrack.style.transition =
      `transform ${transitionTime / 1000}s ease-in-out`;

    if (allowSnap) {
      if (moved > swipeThreshold) {
        goToSlide(currentIndex - 1);
      } else if (moved < -swipeThreshold) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }

    resetAutoSlide();
  }

  function animation() {
    if (isDragging) {
      sliderTrack.style.transform =
        `translateX(${currentTranslate}px)`;
      requestAnimationFrame(animation);
    }
  }

  // =======================================================
  // VI. EVENT LISTENERS (DRAG)
  // =======================================================

  promoSlider.addEventListener('mousedown', startDrag);
  promoSlider.addEventListener('mousemove', drag);
  promoSlider.addEventListener('mouseup', () => endDrag(true));
  promoSlider.addEventListener('mouseleave', () => endDrag(false));

  promoSlider.addEventListener('touchstart', startDrag, { passive: true });
  promoSlider.addEventListener('touchmove', drag, { passive: false });
  promoSlider.addEventListener('touchend', () => endDrag(true));

  promoSlider.addEventListener('wheel', () => {}, { passive: true });

  // =======================================================
  // VII. PREV / NEXT BUTTON
  // =======================================================

  let buttonLocked = false;

  function lockButtons() {
    buttonLocked = true;
    setTimeout(() => buttonLocked = false, transitionTime);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (buttonLocked) return;
      lockButtons();
      goToSlide(currentIndex - 1);
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      if (buttonLocked) return;
      lockButtons();
      goToSlide(currentIndex + 1);
      resetAutoSlide();
    });
  }

  // =======================================================
  // VIII. CEGAH GHOST DRAG
  // =======================================================

  document.querySelectorAll('.slide, .slide img').forEach(el => {
    el.addEventListener('dragstart', e => e.preventDefault());
  });

  // =======================================================
  // IX. INIT
  // =======================================================

  goToSlide(clonesCount, true);
  startAutoSlide();

});














function initCarousel({
  track,
  prevBtn,
  nextBtn,
  itemClass,
  autoPlay = true,
  interval = 3000,
  breakpoints = { 0: 1, 768: 2, 1024: 4 } // default breakpoints untuk carousel layanan
}) {
  let items = Array.from(track.children);
  
  // Fungsi untuk mendapatkan jumlah item yang terlihat berdasarkan lebar layar dan breakpoints
  function getVisibleItems() {
    const width = window.innerWidth;
    // Urutkan breakpoints dari terbesar ke terkecil
    const sortedBreakpoints = Object.keys(breakpoints).map(Number).sort((a, b) => b - a);
    // Cari breakpoint terbesar yang kurang dari atau sama dengan lebar layar
    for (let breakpoint of sortedBreakpoints) {
      if (width >= breakpoint) {
        return breakpoints[breakpoint];
      }
    }
    // Jika tidak ada, kembalikan 1 (default)
    return 1;
  }
  
  let visible = getVisibleItems();

  // Clone depan & belakang
  items.forEach(i => track.appendChild(i.cloneNode(true)));
  items.slice().reverse().forEach(i => track.insertBefore(i.cloneNode(true), track.firstChild));

  let index = items.length;

  function update() {
    const item = track.querySelector(itemClass);
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(${-index * (item.offsetWidth + gap)}px)`;
  }

  function next() {
    index++;
    track.style.transition = '0.5s ease';
    update();
  }

  function prev() {
    index--;
    track.style.transition = '0.5s ease';
    update();
  }

  track.addEventListener('transitionend', () => {
    if (index >= items.length * 2) {
      track.style.transition = 'none';
      index = items.length;
      update();
    }
    if (index <= items.length - visible) {
      track.style.transition = 'none';
      index = items.length * 2 - visible;
      update();
    }
  });

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);

  // Auto
  let timer;
  if (autoPlay) {
    timer = setInterval(next, interval);
    [track, prevBtn, nextBtn].forEach(el => {
      el?.addEventListener('mouseenter', () => clearInterval(timer));
      el?.addEventListener('mouseleave', () => timer = setInterval(next, interval));
    });
  }

  // Update visible items saat resize
  window.addEventListener('resize', () => {
    visible = getVisibleItems();
    // Juga perlu update posisi carousel karena lebar item mungkin berubah
    update();
  });
  
  update();
}

// SECTION LAYANAN (lebih cepat)
initCarousel({
  track: document.getElementById('carouselTrackLayanan'),
  prevBtn: document.getElementById('prevBtnLayanan'),
  nextBtn: document.getElementById('nextBtnLayanan'),
  itemClass: '.layanan-item',
  interval: 2500,
  breakpoints: { 0: 1, 768: 2, 1024: 4 } // 4 kartu di desktop
});

// SECTION VIRTUAL OFFICE
initCarousel({
  track: document.getElementById('carouselTrackVirtual'),
  prevBtn: document.getElementById('prevBtnVirtual'),
  nextBtn: document.getElementById('nextBtnVirtual'),
  itemClass: '.virtual-item',
  interval: 1500,
  breakpoints: { 0: 1, 768: 2, 1024: 3 } // 3 kartu di desktop
});
/*function initCarousel({
  track,
  prevBtn,
  nextBtn,
  itemClass,
  autoPlay = true,
  interval = 3000
}) {
  let items = Array.from(track.children);
function getVisibleItems() {
  if (window.innerWidth >= 1024) return 3; // Desktop: 4 kartu
  if (window.innerWidth >= 768) return 2;  // Tablet: 2 kartu
  return 1; // Mobile: 1 kartu
}
  // Clone depan & belakang
  items.forEach(i => track.appendChild(i.cloneNode(true)));
  items.slice().reverse().forEach(i => track.insertBefore(i.cloneNode(true), track.firstChild));

  let index = items.length;

  function update() {
    const item = track.querySelector(itemClass);
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(${-index * (item.offsetWidth + gap)}px)`;
  }

  function next() {
    index++;
    track.style.transition = '0.5s ease';
    update();
  }

  function prev() {
    index--;
    track.style.transition = '0.5s ease';
    update();
  }

  track.addEventListener('transitionend', () => {
    if (index >= items.length * 2) {
      track.style.transition = 'none';
      index = items.length;
      update();
    }
    if (index <= items.length - visible) {
      track.style.transition = 'none';
      index = items.length * 2 - visible;
      update();
    }
  });

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);

  // Auto
  let timer;
  if (autoPlay) {
    timer = setInterval(next, interval);
    [track, prevBtn, nextBtn].forEach(el => {
      el?.addEventListener('mouseenter', () => clearInterval(timer));
      el?.addEventListener('mouseleave', () => timer = setInterval(next, interval));
    });
  }

  window.addEventListener('resize', update);
  update();
}


// SECTION LAYANAN (lebih cepat)
initCarousel({
  track: document.getElementById('carouselTrackLayanan'),
  prevBtn: document.getElementById('prevBtnLayanan'),
  nextBtn: document.getElementById('nextBtnLayanan'),
  itemClass: '.layanan-item',
  interval: 2500
});

// SECTION VIRTUAL OFFICE (lebih santai)
initCarousel({
  track: document.querySelector('.virtual-office .carousel-track'),
  prevBtn: document.querySelector('.virtual-office .prev'),
  nextBtn: document.querySelector('.virtual-office .next'),
  itemClass: '.card',
  interval: 3000
});*/


















// Fungsi ini hanya dijalankan SETELAH elemen <img> dari JSON masuk ke dalam #isoTrack
function initIsoSlider() {
  const track = document.getElementById('isoTrack');
  const slides = track.children;

  // Cek apakah gambar sudah ada (hasil dari render JSON)
  if (slides.length === 0) {
    console.error("Slider gagal: Tidak ada gambar di dalam #isoTrack");
    return;
  }

  let isoIndex = 0;

  // 1. Clone slide pertama untuk efek infinite loop yang halus
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  // 2. Logika Slide
  function isoAutoSlide() {
    isoIndex++;
    track.style.transition = 'transform 0.8s ease-in-out';
    track.style.transform = `translateX(-${isoIndex * 100}%)`;

    // Jika sampai di slide terakhir (clone dari yang pertama)
    if (isoIndex === slides.length - 1) {
      setTimeout(() => {
        track.style.transition = 'none'; // Matikan animasi sementara
        isoIndex = 0;
        track.style.transform = 'translateX(0)';
        track.offsetHeight; // Trik 'reflow' agar transisi bisa aktif lagi
        track.style.transition = 'transform 0.8s ease-in-out';
      }, 800);
    }
  }

  setInterval(isoAutoSlide, 3500);
}

// Panggil fungsi ini tepat setelah loop forEach/render JSON selesai
initIsoSlider();












document.addEventListener("DOMContentLoaded", function() {
  const copyMarquee = () => {
    const track = document.getElementById('logoTrack');
    if (!track) return;

    // Ambil semua isi (gambar) di dalam track
    const trackContent = track.innerHTML;
    
    // Gandakan isinya agar animasi -50% berjalan mulus tanpa gap
    track.innerHTML += trackContent;
  };

  copyMarquee();
});


















(function () {
  const BASE_COUNT = 10000;
  const MAX_DAILY_INCREASE = 4;

  const countEl = document.getElementById("clientCount");

  // Ambil data tersimpan
  let storedCount = parseInt(localStorage.getItem("clientCount")) || BASE_COUNT;
  let lastUpdate = localStorage.getItem("clientLastUpdate");

  const today = new Date().toDateString();

  // Jika hari baru → tambah angka
  if (lastUpdate !== today) {
    const increase = Math.floor(Math.random() * MAX_DAILY_INCREASE) + 1;
    storedCount += increase;

    localStorage.setItem("clientCount", storedCount);
    localStorage.setItem("clientLastUpdate", today);
  }

  // Format angka ribuan
  //countEl.textContent = storedCount.toLocaleString("id-ID");
})();















document.addEventListener("DOMContentLoaded", function() {
  const copyMarquee = () => {
    const track = document.getElementById('testimonialTrack');
    if (!track) return;

    // Ambil semua isi (gambar) di dalam track
    const trackContent = track.innerHTML;
    
    // Gandakan isinya agar animasi -50% berjalan mulus tanpa gap
    track.innerHTML += trackContent;
  };

  copyMarquee();
});






document.getElementById('currentYear').textContent = new Date().getFullYear();









document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    // Fungsi untuk menampilkan/menyembunyikan tombol saat scroll
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Fungsi klik untuk kembali ke atas dengan halus
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Efek gulir halus
        });
    });
});

