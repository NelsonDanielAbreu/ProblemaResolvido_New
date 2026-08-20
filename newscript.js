/**
 * PROBLEMA RESOLVIDO
 * JavaScript principal
 * Envio por WhatsApp e E-mail
 */

document.addEventListener('DOMContentLoaded', () => {

    console.log(
        "Ficheiro JavaScript carregado com sucesso e pronto para escutar cliques!"
    );

    // =====================================================
    // BOTÃO WHATSAPP
    // =====================================================

    const btnWhatsapp = document.querySelector('.btn-whatsapp');

    if (btnWhatsapp) {

        btnWhatsapp.addEventListener('click', (e) => {

            e.preventDefault();

            sendToWhatsApp();

        });

    } else {

        console.error(
            "Erro: Botão do WhatsApp não foi encontrado no HTML."
        );

    }


    // =====================================================
    // BOTÃO E-MAIL
    // =====================================================

    const btnEmail = document.querySelector('.btn-email');

    if (btnEmail) {

        btnEmail.addEventListener('click', (e) => {

            e.preventDefault();

            sendToEmail();

        });

    } else {

        console.error(
            "Erro: Botão de E-mail não foi encontrado no HTML."
        );

    }

});


// =========================================================
// ENVIAR POR WHATSAPP
// =========================================================

function sendToWhatsApp() {

    console.log(
        "Função sendToWhatsApp disparada com sucesso!"
    );

    const form = document.getElementById('problemForm');

    const problemMessageInput =
        document.getElementById('problemMessage');


    // Verificar se o formulário existe

    if (!form || !problemMessageInput) {

        alert(
            "Erro técnico: Formulário não encontrado."
        );

        return;

    }


    // Verificar se todos os campos obrigatórios estão preenchidos

    if (!form.checkValidity()) {

        form.reportValidity();

        return;

    }


    // =====================================================
    // RECOLHER DADOS DO FORMULÁRIO
    // =====================================================

    const nome =
        form.querySelector('[name="nome"]').value.trim();

    const telefone =
        form.querySelector('[name="telefone"]').value.trim();

    const email =
        form.querySelector('[name="email"]').value.trim();

    const morada =
        form.querySelector('[name="morada"]').value.trim();

    const mensagem =
        problemMessageInput.value.trim();


    // =====================================================
    // MENSAGEM DO WHATSAPP
    // =====================================================

    const textoFormatado =
`Olá! O meu nome é *${nome}*.

Telefone: ${telefone}
E-mail: ${email}
Morada: ${morada}

*Preciso de ajuda com o seguinte problema:*
${mensagem}`;


    // =====================================================
    // NÚMERO DE WHATSAPP
    // =====================================================

    const phone = "351926717918";


    // Criar URL do WhatsApp

    const urlFinal =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(textoFormatado);


    console.log(
        "A abrir URL segura:",
        urlFinal
    );


    // Abrir WhatsApp numa nova janela

    window.open(
        urlFinal,
        '_blank'
    );

}


// =========================================================
// ENVIAR POR E-MAIL
// =========================================================

function sendToEmail() {

    console.log(
        "Função sendToEmail disparada!"
    );


    const form =
        document.getElementById('problemForm');

    const problemMessageInput =
        document.getElementById('problemMessage');


    // Verificar se o formulário existe

    if (!form || !problemMessageInput) {

        alert(
            "Erro técnico: Formulário não encontrado."
        );

        return;

    }


    // Verificar campos obrigatórios

    if (!form.checkValidity()) {

        form.reportValidity();

        return;

    }


    // =====================================================
    // RECOLHER DADOS DO FORMULÁRIO
    // =====================================================

    const nome =
        form.querySelector('[name="nome"]').value.trim();

    const telefone =
        form.querySelector('[name="telefone"]').value.trim();

    const email =
        form.querySelector('[name="email"]').value.trim();

    const morada =
        form.querySelector('[name="morada"]').value.trim();

    const mensagem =
        problemMessageInput.value.trim();


    // =====================================================
    // E-MAIL DE DESTINO
    // =====================================================

    const emailDestino =
        "suporte@problemaresolvido.com";


    // =====================================================
    // ASSUNTO
    // =====================================================

    const assunto =
        encodeURIComponent(
            "Pedido de Ajuda — " + nome
        );


    // =====================================================
    // CORPO DO E-MAIL
    // =====================================================

    const corpo =
        encodeURIComponent(

            "Olá!\n\n" +

            "Novo pedido de ajuda:\n\n" +

            "Nome: " + nome + "\n" +

            "Telefone: " + telefone + "\n" +

            "E-mail: " + email + "\n" +

            "Morada: " + morada + "\n\n" +

            "Descrição do problema:\n" +

            mensagem

        );


// =====================================================
// CRIAR URL DO GMAIL
// =====================================================

const urlGmail =
    "https://mail.google.com/mail/?view=cm" +
    "&fs=1" +
    "&to=" + encodeURIComponent(emailDestino) +
    "&su=" + encodeURIComponent(
        "Pedido de Ajuda — " + nome
    ) +
    "&body=" + encodeURIComponent(
        "Olá!\n\n" +
        "Novo pedido de ajuda:\n\n" +
        "Nome: " + nome + "\n" +
        "Telefone: " + telefone + "\n" +
        "E-mail: " + email + "\n" +
        "Morada: " + morada + "\n\n" +
        "Descrição do problema:\n" +
        mensagem
    );

console.log(
    "A abrir Gmail:",
    urlGmail
);

// Abrir Gmail numa nova aba
window.open(
    urlGmail,
    "_blank",
    "noopener,noreferrer"
);

}