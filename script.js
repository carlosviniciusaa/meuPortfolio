const navigation = document.querySelector(".navigation");
const navigationToggle = document.querySelector(".navigation__toggle");
const navigationMenu = document.querySelector("#navigation-menu");
const navigationLinks = document.querySelectorAll(".navigation__brand, .navigation__link");
const mobileNavigationBreakpoint = window.matchMedia("(max-width: 52rem)");

if (navigation && navigationToggle && navigationMenu) {
    const closeNavigationMenu = (restoreFocus = false) => {
        navigation.classList.remove("navigation--open");
        navigationToggle.setAttribute("aria-expanded", "false");
        navigationToggle.setAttribute("aria-label", "Abrir menu");

        if (restoreFocus) {
            navigationToggle.focus();
        }
    };

    const openNavigationMenu = () => {
        if (!mobileNavigationBreakpoint.matches) {
            return;
        }

        navigation.classList.add("navigation--open");
        navigationToggle.setAttribute("aria-expanded", "true");
        navigationToggle.setAttribute("aria-label", "Fechar menu");
    };

    navigationToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("navigation--open");

        if (isOpen) {
            closeNavigationMenu();
        } else {
            openNavigationMenu();
        }
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeNavigationMenu();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navigation.classList.contains("navigation--open")) {
            closeNavigationMenu(true);
        }
    });

    document.addEventListener("click", (event) => {
        if (navigation.classList.contains("navigation--open") && !navigation.contains(event.target)) {
            closeNavigationMenu();
        }
    });

    mobileNavigationBreakpoint.addEventListener("change", (event) => {
        if (!event.matches) {
            closeNavigationMenu();
        }
    });
}

const contactForm = document.querySelector("#formulario");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#nome").value.trim();
    const message = document.querySelector("#mensagem").value.trim();
    const phone = "5514996981360";
    const text = `Olá, meu nome é ${name} e gostaria de entrar em contato com você. Minha mensagem é: ${message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

const certificateDialog = document.querySelector("#certificate-dialog");
const certificateDialogImage = document.querySelector("#certificate-dialog-image");
const certificateDialogTitle = document.querySelector("#certificate-dialog-title");
const certificateDialogClose = document.querySelector(".certificate-dialog__close");
const certificatePreviews = document.querySelectorAll(".certificate-card__preview");

if (certificateDialog && certificateDialogImage && certificateDialogTitle && certificateDialogClose
    && typeof certificateDialog.showModal === "function") {
    certificatePreviews.forEach((preview) => {
        preview.addEventListener("click", (event) => {
            const previewImage = preview.querySelector("img");

            event.preventDefault();
            certificateDialogImage.src = preview.dataset.certificateSrc;
            certificateDialogImage.alt = previewImage.alt;
            certificateDialogTitle.textContent = preview.dataset.certificateTitle;
            certificateDialog.showModal();
        });
    });

    certificateDialogClose.addEventListener("click", () => {
        certificateDialog.close();
    });

    certificateDialog.addEventListener("click", (event) => {
        if (event.target === certificateDialog) {
            certificateDialog.close();
        }
    });

}
