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
