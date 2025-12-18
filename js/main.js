document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
            
            // Tutup dropdown contact jika terbuka
            const dropdownContact = document.getElementById('dropdownContact');
            if (dropdownContact && dropdownContact.classList.contains('active')) {
                dropdownContact.classList.remove('active');
            }
        });
    }
    
    // Toggle dropdown contact (mobile)
    const menuToggleContact = document.getElementById('menuToggleContact');
    const dropdownContact = document.getElementById('dropdownContact');
    
    if (menuToggleContact && dropdownContact) {
        menuToggleContact.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownContact.classList.toggle('active');
            
            // Tutup menu utama jika terbuka
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuToggle) {
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            }
        });
        
        // Tutup dropdown contact saat klik di luar
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.menu-toggle-contact') && 
                !e.target.closest('.dropdown-contact')) {
                dropdownContact.classList.remove('active');
            }
        });
    }
    
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        menuToggle.querySelector('i').classList.remove('fa-times');
                        menuToggle.querySelector('i').classList.add('fa-bars');
                    }
                    
                    // Close contact dropdown if open
                    if (dropdownContact && dropdownContact.classList.contains('active')) {
                        dropdownContact.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Dropdown functionality for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                e.stopPropagation();
                const dropdown = this.closest('.dropdown');
                const menu = dropdown.querySelector('.dropdown-menu');
                
                if (menu) {
                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
    
    // Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    // Variabel (harus sudah dideklarasikan sebelumnya)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const dropdownContact = document.getElementById('dropdownContact');
    
    // 1. Tutup dropdown contact
    if (dropdownContact && dropdownContact.classList.contains('active')) {
        if (!e.target.closest('.menu-toggle-contact') && 
            !e.target.closest('.dropdown-contact')) {
            dropdownContact.classList.remove('active');
        }
    }
    
    // 2. Tutup menu utama
    if (navMenu && navMenu.classList.contains('active')) {
        if (!e.target.closest('.menu-toggle') && 
            !e.target.closest('.nav-menu-container')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        }
    }
});
    
    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Add scroll effect to navbar
    const navigationSection = document.querySelector('.navigation-section');
    if (navigationSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navigationSection.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
                navigationSection.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            } else {
                navigationSection.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                navigationSection.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            }
        });
    }
    
    // Close menus on window resize (reset for desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            // Reset mobile menu
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (menuToggle) {
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
            
            // Reset contact dropdown
            if (dropdownContact) {
                dropdownContact.classList.remove('active');
            }
            
            // Reset dropdown displays
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = '';
            });
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
    const indicatorsContainer = document.querySelector('.slider-indicators');

    const clonesCount = 2;
    const totalSlideCount = allSlides.length;
    const originalSlideCount = totalSlideCount - clonesCount * 2;

    let currentIndex = clonesCount;
    const slideInterval = 8000;
    const transitionTime = 500;
    let autoSlide;

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

        const realIndex =
            (currentIndex - clonesCount + originalSlideCount) % originalSlideCount;

        document.querySelectorAll('.indicator').forEach((dot, i) => {
            dot.classList.toggle('active', i === realIndex);
        });
    }

    function checkLoop() {
        if (currentIndex >= originalSlideCount + clonesCount) {
            goToSlide(clonesCount, true);
        } else if (currentIndex < clonesCount) {
            goToSlide(originalSlideCount + clonesCount - 1, true);
        }
    }

    sliderTrack.addEventListener('transitionend', checkLoop);

    function startAutoSlide() {
        autoSlide = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, slideInterval);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // =======================================================
    // IV. DRAG LOGIC (INI KUNCI SCROLL)
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
        clearInterval(autoSlide);
    }

    function drag(e) {
        if (!isDragging) return;

        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const y = e.type.includes('mouse') ? e.pageY : e.touches[0].clientY;

        const dx = x - startX;
        const dy = y - startY;

        // BELUM tentukan arah
        if (!isHorizontalDrag) {
            if (Math.abs(dy) > Math.abs(dx)) {
                // Scroll vertikal → LEPAS
                endDrag(true);
                return;
            }
            if (Math.abs(dx) > minMove) {
                isHorizontalDrag = true;
            }
        }

        if (isHorizontalDrag) {
            e.preventDefault(); // hanya cegah jika horizontal
            currentTranslate = prevTranslate + dx;
        }
    }

    function endDrag(allowSnap = false) {
        cancelAnimationFrame(animationID);
        if (!isDragging) return;

        isDragging = false;

        if (!allowSnap) return;

        const width = promoSlider.offsetWidth;
        const moved = currentTranslate - prevTranslate;

        sliderTrack.style.transition =
            `transform ${transitionTime / 1000}s ease-in-out`;

        if (moved > width * 0.15) {
            goToSlide(currentIndex - 1);
        } else if (moved < -width * 0.15) {
            goToSlide(currentIndex + 1);
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
    // V. EVENT LISTENERS
    // =======================================================

    promoSlider.addEventListener('mousedown', startDrag);
    promoSlider.addEventListener('mousemove', drag);
    promoSlider.addEventListener('mouseup', () => endDrag(true));
    promoSlider.addEventListener('mouseleave', () => endDrag(false));

    promoSlider.addEventListener('touchstart', startDrag, { passive: true });
    promoSlider.addEventListener('touchmove', drag, { passive: false });
    promoSlider.addEventListener('touchend', () => endDrag(true));

    // 🔥 BIARKAN SCROLL MOUSE WHEEL LEWAT
    promoSlider.addEventListener('wheel', () => {}, { passive: true });

    // =======================================================
    // VI. INIT
    // =======================================================

    // indicators
    for (let i = 0; i < originalSlideCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'indicator';
        dot.onclick = () => {
            goToSlide(i + clonesCount);
            resetAutoSlide();
        };
        indicatorsContainer.appendChild(dot);
    }

    goToSlide(clonesCount, true);
    startAutoSlide();
});



















const track = document.getElementById('carouselTrackLayanan');
const prevBtn = document.getElementById('prevBtnLayanan');
const nextBtn = document.getElementById('nextBtnLayanan');

let items = Array.from(track.children);
const itemsVisible = window.innerWidth > 768 ? 3 : 1;

// 1. Setup Infinite (Clone awal dan akhir)
items.forEach(item => {
    let cloneFirst = item.cloneNode(true);
    let cloneLast = item.cloneNode(true);
    track.appendChild(cloneFirst);
    track.insertBefore(cloneLast, track.firstChild);
});

let index = items.length; // Mulai dari item asli pertama
const updatePos = () => {
  const item = track.querySelector('.layanan-item');
  const style = window.getComputedStyle(track);
  const gap = parseInt(style.gap) || 0; // Mengambil nilai gap dari CSS (20px)
  
  // Lebar total = lebar kartu + gap antar kartu
  const moveDistance = item.offsetWidth + gap;
  
  track.style.transform = `translateX(${-index * moveDistance}px)`;
};

// Fungsi Geser
const moveNext = () => {
    index++;
    track.style.transition = "transform 0.5s ease-in-out";
    updatePos();
};

const movePrev = () => {
    index--;
    track.style.transition = "transform 0.5s ease-in-out";
    updatePos();
};

// Reset Loop tanpa animasi
track.addEventListener('transitionend', () => {
    if (index >= items.length * 2) {
        track.style.transition = "none";
        index = items.length;
        updatePos();
    }
    if (index <= items.length - itemsVisible - 1) {
        track.style.transition = "none";
        index = items.length * 2 - itemsVisible - 1;
        updatePos();
    }
});

// Event Listeners
nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

// Auto Play
let autoSlide = setInterval(moveNext, 3000);
[track, nextBtn, prevBtn].forEach(el => {
    el.addEventListener('mouseenter', () => clearInterval(autoSlide));
    el.addEventListener('mouseleave', () => autoSlide = setInterval(moveNext, 3000));
});

// Geser Manual (Mouse Drag)
let isDragging = false, startX, scrollLeft;
track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    clearInterval(autoSlide);
});
window.addEventListener('mouseup', () => isDragging = false);
track.addEventListener('mousemove', (e) => {
    if(!isDragging) return;
    const x = e.pageX;
    const walk = (x - startX);
    if(Math.abs(walk) > 50) {
        walk > 0 ? movePrev() : moveNext();
        isDragging = false; // Reset agar tidak geser berkali-kali
    }
});

// Initial Position
window.onload = updatePos;
window.addEventListener('resize', updatePos);