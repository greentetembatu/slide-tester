/*<!--==================sixBuildStBusinessPackagesData==================-->*/

function renderSixBuildStBusinessPackages(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="six-build-st-section-title">
      <h1>${data.section.title}</h1>
      <p>${data.section.subtitle}</p>
    </div>

    <div class="six-build-st-packages-grid">
      ${data.packages
        .map(
          (pkg) => `
        <div class="six-build-st-package-card">
          <div class="six-build-st-card-badge">${pkg.badge}</div>

          <div class="six-build-st-card-content">
            <div class="six-build-st-package-type">${pkg.type}</div>
            <h2 class="six-build-st-package-name">${pkg.name}</h2>

            <p class="six-build-st-package-desc">
              ${pkg.description}
            </p>

            <div class="six-build-st-features">
              ${pkg.features
                .map(
                  (feature) => `
                <div class="six-build-st-feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>${feature}</span>
                </div>
              `
                )
                .join("")}

              <a href="${pkg.detailLink}" class="six-build-st-btn-detail">
                <span>Selengkapnya</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <div class="six-build-st-package-price">
              ${pkg.price}
            </div>

            <div class="six-build-st-card-actions">
              <a href="${pkg.contactLink}" class="six-build-st-btn-contact">
                <i class="fab fa-whatsapp"></i>
                <span>Hubungi Kami</span>
              </a>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
renderSixBuildStBusinessPackages(
  "sixBuildStBusinessPackages",
  sixBuildStBusinessPackagesData
);





/*<!--==================packages-grid-complete-pt==================-->*/

function renderBusinessPackage(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="packages-grid-complete-pt">
      <div class="package-card-complete-pt">
        <div class="card-content-complete-pt">

          <div class="section-title-complete-pt">
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
          </div>

          <div class="package-info-header">
            <div class="package-type-complete-pt">${data.type}</div>
            <h2 class="package-name-complete-pt">${data.name}</h2>
          </div>

          <p class="package-desc-complete-pt">${data.description}</p>

          <div class="features-wrapper-split">
            <div class="features-complete-pt">
              ${data.features.map(item => `
                <div class="feature-item-complete-pt">
                  <i class="fas fa-check-circle"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>

            <div class="bonus-section-split">
              <div class="package-type-complete-pt-bomus">Bonus</div>
              ${data.bonus.map(item => `
                <div class="feature-item-complete-pt">
                  <i class="fas fa-gift"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="footer-action-split">
            <div class="package-price">${data.price}</div>
            <a href="${data.contactLink}" class="btn-contact-split">
              <i class="fab fa-whatsapp"></i>
              <span>Hubungi Kami</span>
            </a>
          </div>

        </div>

        <div class="card-image-side-complete-pt">
          <div class="diagonal-overlay"></div>
          <img src="${data.image.src}" alt="${data.image.alt}">
        </div>
      </div>
    </div>
  `;
}


renderBusinessPackage(
  "businessPackagesCompletePt",
  businessPackagesDataPt.completePt
);



/*<!--==================packages-grid-complete-cv==================-->*/

function renderBusinessPackage(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="packages-grid-complete-cv">
      <div class="package-card-complete-cv">
        <div class="card-content-complete-cv">

          <div class="section-title-complete-cv">
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
          </div>

          <div class="package-info-header">
            <div class="package-type-complete-cv">${data.type}</div>
            <h2 class="package-name-complete-cv">${data.name}</h2>
          </div>

          <p class="package-desc-complete-cv">${data.description}</p>

          <div class="features-wrapper-split">
            <div class="features-complete-cv">
              ${data.features.map(item => `
                <div class="feature-item-complete-cv">
                  <i class="fas fa-check-circle"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>

            <div class="bonus-section-split">
              <div class="package-type-complete-cv-bomus">Bonus</div>
              ${data.bonus.map(item => `
                <div class="feature-item-complete-cv">
                  <i class="fas fa-gift"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="footer-action-split">
            <div class="package-price">${data.price}</div>
            <a href="${data.contactLink}" class="btn-contact-split">
              <i class="fab fa-whatsapp"></i>
              <span>Hubungi Kami</span>
            </a>
          </div>

        </div>

        <div class="card-image-side-complete-cv">
          <div class="diagonal-overlay"></div>
          <img src="${data.image.src}" alt="${data.image.alt}">
        </div>
      </div>
    </div>
  `;
}


renderBusinessPackage(
  "businessPackagesCompleteCv",
  businessPackagesDataCv.completeCv
);







function renderBusinessPackageKoperasi(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="packages-grid-complete-koperasi">
      <div class="package-card-complete-koperasi">
        <div class="card-content-complete-koperasi">

          <div class="section-title-complete-koperasi">
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
          </div>

          <div class="package-info-header">
            <div class="package-type-complete-koperasi">${data.type}</div>
            <h2 class="package-name-complete-koperasi">${data.name}</h2>
          </div>

          <p class="package-desc-complete-koperasi">${data.description}</p>

          <div class="features-wrapper-split">
            <div class="features-complete-koperasi">
              ${data.features.map(item => `
                <div class="feature-item-complete-koperasi">
                  <i class="fas fa-check-circle"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>

            <div class="bonus-section-split">
              <div class="package-type-complete-koperasi-bomus">Bonus</div>
              ${data.bonus.map(item => `
                <div class="feature-item-complete-koperasi">
                  <i class="fas fa-gift"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="footer-action-split">
            <div class="package-price">${data.price}</div>
            <a href="${data.contactLink}" class="btn-contact-split">
              <i class="fab fa-whatsapp"></i>
              <span>Hubungi Kami</span>
            </a>
          </div>

        </div>

        <div class="card-image-side-complete-koperasi">
          <div class="diagonal-overlay"></div>
          <img src="${data.image.src}" alt="${data.image.alt}">
        </div>
      </div>
    </div>
  `;
}

renderBusinessPackageKoperasi(
  "businessPackagesCompleteKoperasi",
  businessPackagesDataKoperasi.completeKoperasi
);




















function renderBusinessPackageYayasan(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="packages-grid-complete-yayasan">
      <div class="package-card-complete-yayasan">
        <div class="card-content-complete-yayasan">

          <div class="section-title-complete-yayasan">
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
          </div>

          <div class="package-info-header">
            <div class="package-type-complete-yayasan">${data.type}</div>
            <h2 class="package-name-complete-yayasan">${data.name}</h2>
          </div>

          <p class="package-desc-complete-yayasan">${data.description}</p>

          <div class="features-wrapper-split">
            <div class="features-complete-yayasan">
              ${data.features.map(item => `
                <div class="feature-item-complete-yayasan">
                  <i class="fas fa-check-circle"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>

            <div class="bonus-section-split">
              <div class="package-type-complete-yayasan-bomus">Bonus</div>
              ${data.bonus.map(item => `
                <div class="feature-item-complete-yayasan">
                  <i class="fas fa-gift"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="footer-action-split">
            <div class="package-price">${data.price}</div>
            <a href="${data.contactLink}" class="btn-contact-split">
              <i class="fab fa-whatsapp"></i>
              <span>Hubungi Kami</span>
            </a>
          </div>

        </div>

        <div class="card-image-side-complete-yayasan">
          <div class="diagonal-overlay"></div>
          <img src="${data.image.src}" alt="${data.image.alt}">
        </div>
      </div>
    </div>
  `;
}

renderBusinessPackageYayasan(
  "businessPackagesCompleteYayasan",
  businessPackagesDataYayasan.completeYayasan
);















function renderBusinessPackageFirma(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="packages-grid-complete-firma">
      <div class="package-card-complete-firma">
        <div class="card-content-complete-firma">

          <div class="section-title-complete-firma">
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
          </div>

          <div class="package-info-header">
            <div class="package-type-complete-firma">${data.type}</div>
            <h2 class="package-name-complete-firma">${data.name}</h2>
          </div>

          <p class="package-desc-complete-firma">${data.description}</p>

          <div class="features-wrapper-split">
            <div class="features-complete-firma">
              ${data.features.map(item => `
                <div class="feature-item-complete-firma">
                  <i class="fas fa-check-circle"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>

            <div class="bonus-section-split">
              <div class="package-type-complete-firma-bomus">Bonus</div>
              ${data.bonus.map(item => `
                <div class="feature-item-complete-firma">
                  <i class="fas fa-gift"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="footer-action-split">
            <div class="package-price">${data.price}</div>
            <a href="${data.contactLink}" class="btn-contact-split">
              <i class="fab fa-whatsapp"></i>
              <span>Hubungi Kami</span>
            </a>
          </div>

        </div>

        <div class="card-image-side-complete-firma">
          <div class="diagonal-overlay"></div>
          <img src="${data.image.src}" alt="${data.image.alt}">
        </div>
      </div>
    </div>
  `;
}

renderBusinessPackageFirma(
  "businessPackagesCompleteFirma",
  businessPackagesDataFirma.completeFirma
);




















function renderBusinessPackagePma(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="packages-grid-complete-pma">
      <div class="package-card-complete-pma">
        <div class="card-content-complete-pma">

          <div class="section-title-complete-pma">
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
          </div>

          <div class="package-info-header">
            <div class="package-type-complete-pma">${data.type}</div>
            <h2 class="package-name-complete-pma">${data.name}</h2>
          </div>

          <p class="package-desc-complete-pma">${data.description}</p>

          <div class="features-wrapper-split">
            <div class="features-complete-pma">
              ${data.features.map(item => `
                <div class="feature-item-complete-pma">
                  <i class="fas fa-check-circle"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>

            <div class="bonus-section-split">
              <div class="package-type-complete-pma-bomus">Bonus</div>
              ${data.bonus.map(item => `
                <div class="feature-item-complete-pma">
                  <i class="fas fa-gift"></i>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="footer-action-split">
            <div class="package-price">${data.price}</div>
            <a href="${data.contactLink}" class="btn-contact-split">
              <i class="fab fa-whatsapp"></i>
              <span>Hubungi Kami</span>
            </a>
          </div>

        </div>

        <div class="card-image-side-complete-pma">
          <div class="diagonal-overlay"></div>
          <img src="${data.image.src}" alt="${data.image.alt}">
        </div>
      </div>
    </div>
  `;
}

renderBusinessPackagePma(
  "businessPackagesCompletePma",
  businessPackagesDataPma.completePma
);


/*<!--==================view-about-explan==================-->*/
function renderAboutExplanation(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="view-about-explan-container">
      <div class="view-about-explan-content">
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>

        <p>${data.description}</p>

        <h3 class="content-subtitle">${data.serviceTitle}</h3>

        <ul class="service-list">
          ${data.services.map((item, index) => `
            <li>
              <span class="service-num">${index + 1}</span>
              <div>
                <strong>${item.title}:</strong> ${item.desc}
              </div>
            </li>
          `).join("")}
        </ul>

        <a href="${data.button.link}" class="view-about-explan-btn-primary">
          <i class="fa-brands fa-whatsapp"></i>
          ${data.button.text}
        </a>
      </div>
    </div>
  `;
}
renderAboutExplanation(
  "viewAboutExplan",
  aboutExplanationSections.notarisWenika
);


/*<!--==================tree-superior-services ==================-->*/

function renderSuperiorServices(targetId, data) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="tree-superior-container">
      <div class="tree-superior-section-header">
        <h2>${data.title}</h2>
        <p>${data.subtitle}</p>
      </div>

      <div class="tree-superior-services-grid">
        ${data.services.map(service => `
          <div class="tree-superior-service-card">
            <div class="tree-superior-service-icon">
              <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
renderSuperiorServices(
  "treeSuperiorServices",
  superiorServicesSections.notaryMainServices
);


/*<!--==================WHY US SECTION ==================-->*/
function renderWhyUs(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  // Menambahkan class animasi fade-in-up pada setiap item
  const itemsHTML = data.items
    .map(
      (item, index) => `
            <div class="why-us-item reveal" style="transition-delay: ${
              index * 100
            }ms">
                <div class="icon-box">
                    <i class="${item.iconClass}"></i>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `
    )
    .join("");

  root.innerHTML = `
        <section class="${data.sectionClass}">
            <div class="why-us-parallax-bg"></div>
            <div class="why-us-container">
                <div class="${data.header.class} reveal">
                    <h2>${data.header.title}</h2>
                    <div class="${data.header.underlineClass}"></div>
                </div>
                <div class="${data.gridClass}">
                    ${itemsHTML}
                </div>
            </div>
        </section>
    `;

  // Inisialisasi Intersection Observer untuk animasi scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderWhyUs("why-us-root", whyUsData);
});

/*<!--==================VIEW ND SECTION ==================-->*/

function renderViewNdInfo(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const columnsHTML = data.columns
    .map((col) => {
      const listHTML = col.items.map((item) => `<li>${item}</li>`).join("");

      return `
        <div class="${data.columnClass}">
          <h2>${col.title}</h2>
          <ul class="${data.listClass}">
            ${listHTML}
          </ul>
        </div>
      `;
    })
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.particlesClass}"></div>

      <div class="${data.containerClass}">
        ${columnsHTML}
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewNdInfo("view-nd-info-root", viewNdInfoData);
});

/*<!--==================PARALLAX SECTION ==================-->*/

function renderParallaxSection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const cardsHTML = data.cards
    .map(
      (card) => `
      <div class="feature-card">
        <div class="icon-wrapper">
          <i class="${card.iconClass}"></i>
        </div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">
        ${cardsHTML}
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderParallaxSection("parallax-root", parallaxSectionData);
});

/*<!--===============view-career-root===============-->*/
function renderViewCareerJobVacancySection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const cardsHTML = data.cards
    .map(
      (card) => `
        <div class="view-career-card">
          <span>${card.status}</span>
          <h3>${card.position}</h3>
          <div class="view-qual-label">${card.qualificationLabel}</div>
          <div class="view-qual-item">
            ${card.qualificationText}
          </div>
          <a href="${card.applyLink}" class="${card.applyBtnClass}">
            ${card.applyText}
          </a>
        </div>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">
        <${data.heading.tag}>${data.heading.text}</${data.heading.tag}>

        <div class="${data.gridClass}">
          ${cardsHTML}
        </div>
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewCareerJobVacancySection(
    "view-career-root",
    viewCareerJobVacancySectionData
  );
});

/*<!--===============view-target-vision-mission-root===============-->*/

function renderViewTargetVisionMission(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.containerClass}">

        <div class="${data.titleSection.wrapperClass}">
          <h3>${data.titleSection.title}</h3>
          <div class="${data.titleSection.dividerClass}"></div>
        </div>

        <div class="${data.visionMissionWrapperClass}">
          <div class="${data.vision.boxClass}">
            <h4>${data.vision.titleHTML}</h4>
            <p>${data.vision.description}</p>
          </div>

          <div class="${data.mission.boxClass}">
            <h4>${data.mission.titleHTML}</h4>
            <p>${data.mission.description}</p>
          </div>
        </div>

      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewTargetVisionMission(
    "view-target-vision-mission-root",
    viewTargetVisionMissionSectionData
  );
});

/*<!--===============ARTIKEL===============-->*/

function article_render(gridId, data, modalId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = "";

  data.forEach((article) => {
    const card = document.createElement("div");
    card.className = "article-card";

    card.onclick = () =>
      article_openModal(article.id, data, modalId);

    card.innerHTML = `
      <img src="${article.image}" alt="${article.title}" class="article-img">
      <div class="article-body">
        <h3 class="article-title">${article.title}</h3>
        <p class="article-description">
          ${article.description.substring(0, 120)}...
        </p>
        <ul class="article-meta">
          <li>👤 ${article.author} | 📅 ${article.date}</li>
        </ul>
      </div>
    `;

    grid.appendChild(card);
  });
}






function article_openModal(id, data, modalId) {
  const article = data.find((a) => a.id === id);
  if (!article) return;

  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.querySelector(".article-modal-img").src = article.image;
  modal.querySelector(".article-modal-title").innerText = article.title;
  modal.querySelector(
    ".article-modal-meta"
  ).innerText = `${article.author} | ${article.date}`;
  modal.querySelector(".article-modal-desc").innerText =
    article.description;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}





function article_initModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const closeBtn = modal.querySelector(".article-close");

  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}







document.addEventListener("DOMContentLoaded", () => {
  article_render("article-grid", articleData, "articleModal");
  article_initModal("articleModal");
});



/*<!--===============TEAM SECTION===============-->*/
function tm_renderTeam(targetGridId, data) {
  const grid = document.getElementById(targetGridId);
  if (!grid) return;

  grid.innerHTML = "";

  data.forEach((member) => {
    const card = document.createElement("div");
    card.className = "tm-team-card";
    card.onclick = () =>
      tm_openModal(member.id, data);

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" class="tm-member-img">
      <div class="tm-card-body">
        <div class="tm-member-role">${member.role}</div>
        <h3 class="tm-member-name">${member.name}</h3>
        <p class="tm-member-short-desc">${member.shortDesc}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}




function tm_openModal(id, data) {
  const member = data.find((m) => m.id === id);
  if (!member) return;

  const modal = document.getElementById("tm-teamModal");
  if (!modal) return;

  document.getElementById("tm-modal-img").src = member.image;
  document.getElementById("tm-modal-name").innerText = member.name;
  document.getElementById("tm-modal-role").innerText = member.role;
  document.getElementById("tm-modal-fullDesc").innerText = member.fullDesc;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

const closeBtn = document.getElementById("tm-closeBtn");
if (closeBtn) {
  closeBtn.onclick = () => {
    document.getElementById("tm-teamModal").style.display = "none";
    document.body.style.overflow = "auto";
  };
}



window.addEventListener("click", (event) => {
  const modal = document.getElementById("tm-teamModal");
  if (modal && event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});




document.addEventListener("DOMContentLoaded", () => {
  tm_renderTeam("tm-team-grid", tm_teamData);
});



/*======CLIENT LOGO SECTION===========*/
/*console.log("MAIN.JS AKTIF");*/
function renderClientLogo() {
  const titleEl = document.getElementById("clientLogoTitle");
  const trackEl = document.getElementById("logoTrack");

  if (!trackEl) return;

  /* ===== RENDER TITLE ===== */
  if (titleEl && CLIENT_LOGO_DATA?.title) {
    titleEl.innerHTML = `<h3>${CLIENT_LOGO_DATA.title}</h3>`;
  }

  /* ===== RENDER LOGO ===== */
  if (Array.isArray(CLIENT_LOGO_DATA?.logos)) {
    const logoHTML = CLIENT_LOGO_DATA.logos
      .map((logo) => `<img src="${logo.image}" alt="${logo.alt || ""}">`)
      .join("");

    // Duplicate untuk infinite marquee
    trackEl.innerHTML = logoHTML + logoHTML;
  }

  // Panggil counter saja
  if (typeof initClientCounter === "function") {
    initClientCounter();
  }
}

/* ===== COUNTER ===== */
function initClientCounter() {
  const BASE_COUNT = 10000;
  const MAX_DAILY_INCREASE = 4;

  const countEl = document.getElementById("clientCount");
  if (!countEl) {
    console.error("clientCount tidak ditemukan");
    return;
  }

  let storedCount = parseInt(localStorage.getItem("clientCount")) || BASE_COUNT;
  let lastUpdate = localStorage.getItem("clientLastUpdate");
  const today = new Date().toDateString();

  if (lastUpdate !== today) {
    const increase = Math.floor(Math.random() * MAX_DAILY_INCREASE) + 1;
    storedCount += increase;

    localStorage.setItem("clientCount", storedCount);
    localStorage.setItem("clientLastUpdate", today);
  }

  animateCount(countEl, storedCount);
}

/* ===== ANIMASI ANGKA ===== */
function animateCount(el, target) {
  let start = 0;
  const duration = 1200;
  const startTime = performance.now();

  function update(time) {
    const progress = Math.min((time - startTime) / duration, 1);
    const value = Math.floor(progress * target);

    el.textContent = value.toLocaleString("id-ID");

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Pastikan dijalankan saat DOM siap
document.addEventListener("DOMContentLoaded", function () {
  renderClientLogo();
});

/*<!--======TREE STEEP WAY EASY======-->*/
function renderViewTabBusinessLicenseStepsSection(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const stepsHTML = data.content.steps
    .map(
      (step) => `
        <div class="${step.itemClass}">
          <img
            src="${step.icon.src}"
            alt="${step.icon.alt}"
            class="${step.icon.class}"
          />
          <div class="view-tab-step-text">
            <h3>${step.text.title}</h3>
            <p>${step.text.description}</p>
          </div>
        </div>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="${data.content.wrapperClass}">
        <${data.content.heading.tag}>
          ${data.content.heading.text}
        </${data.content.heading.tag}>

        <p class="${data.content.subDescription.class}">
          ${data.content.subDescription.text}
        </p>

        ${stepsHTML}
      </div>

      <div class="${data.imageSide.wrapperClass}">
        <img
          src="${data.imageSide.image.src}"
          alt="${data.imageSide.image.alt}"
        />
      </div>
    </section>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  renderViewTabBusinessLicenseStepsSection(
    "view-tab-steps-root",
    viewTabBusinessLicenseStepsSectionData
  );
});



















/*============FAQ==============*/
/*============FAQ==============*/
/*============FAQ==============*/


function renderViewFaq(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const columnsHTML = data.columns
    .map(
      col => `
      <div class="view-faq-column">
        ${col.items
          .map(
            item => `
          <div class="view-faq-item">
            <button class="view-faq-question">
              ${item.question}
            </button>
            <div class="view-faq-answer">
              <p>${item.answer}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `
    )
    .join("");

  root.innerHTML = `
    <section class="${data.sectionClass}">
      <div class="view-faq-header">
        <h2>${data.header.title}</h2>
        <p>${data.header.description}</p>
      </div>

      <div class="view-faq-grid">
        ${columnsHTML}
      </div>
    </section>
  `;
}




function initFaqAccordion(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;

  root.addEventListener("click", e => {
    const btn = e.target.closest(".view-faq-question");
    if (!btn) return;

    const item = btn.parentElement;
    const answer = item.querySelector(".view-faq-answer");

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
}




document.addEventListener("DOMContentLoaded", () => {
  renderViewFaq("view-faq-root", viewFaqBusinessEntitySectionData);
  initFaqAccordion("view-faq-root");
});
