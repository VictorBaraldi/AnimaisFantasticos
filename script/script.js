function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((value) => {
        value.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((value, index) => {
      value.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function slideDown() {
  const menuAcordeon = document.querySelectorAll(".js-accordeon dt");
  if (menuAcordeon.length) {
    menuAcordeon[0].classList.add("ativo");
    menuAcordeon[0].nextElementSibling.classList.add("ativo");
    menuAcordeon.forEach((value) => {
      value.addEventListener("click", activeAcordeon);
    });

    function activeAcordeon() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
  }
}
function smoothScroll() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  if (linksInternos.length) {
    function scrollToSection(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const link = document.querySelector(href);
      link.scrollIntoView({
        behavior: "smooth",
      });
    }

    linksInternos.forEach((value) => {
      value.addEventListener("click", scrollToSection);
    });
  }
}

function animaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const halfWindow = window.innerHeight * 0.65;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((value) => {
        const sectionTop = value.getBoundingClientRect().top;

        if (sectionTop < halfWindow) {
          value.classList.add("ativo");
        }
      });
    }
  }
  animaScroll();
}

window.addEventListener("scroll", animaScroll);

animaScroll();
smoothScroll();
initTabNav();
slideDown();
