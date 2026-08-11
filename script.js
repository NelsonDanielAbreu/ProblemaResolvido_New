
/**
 * =========================================================
 * PROBLEMA RESOLVIDO
 * JAVASCRIPT PRINCIPAL
 * =========================================================
 */

document.addEventListener('DOMContentLoaded', function () {

    console.log('✅ JavaScript carregado com sucesso!');


    // =====================================================
    // ELEMENTOS
    // =====================================================

    const form = document.getElementById('problemForm');

    const btnWhatsapp =
        document.getElementById('btnWhatsapp');

    const btnEmail =
        document.getElementById('btnEmail');


    // =====================================================
    // VERIFICAR ELEMENTOS
    // =====================================================

    if (!form) {
        console.error(
            '❌ Erro: problemForm não foi encontrado.'
        );

        return;
    }


    if (!btnWhatsapp) {
        console.error(
            '❌ Erro: botão WhatsApp não foi encontrado.'
        );
    }


    if (!btnEmail) {
        console.error(
            '❌ Erro: botão E-mail não foi encontrado.'
        );
    }


    // =====================================================
    // BOTÃO WHATSAPP
    // =====================================================

    if (btnWhatsapp) {

        btnWhatsapp.addEventListener(
            'click',
            function (event) {

                event.preventDefault();

                console.log(
                    '📱 Botão WhatsApp clicado!'
                );

                sendToWhatsApp();
            }
        );
    }


    // =====================================================
    // BOTÃO EMAIL
    // =====================================================

    if (btnEmail) {

        btnEmail.addEventListener(
            'click',
            function (event) {

                event.preventDefault();

                console.log(
                    '📧 Botão E-mail clicado!'
                );

                sendToEmail();
            }
        );
    }

});


// =========================================================
// OBTER DADOS DO FORMULÁRIO
// =========================================================

function getFormData() {

    const form =
        document.getElementById('problemForm');


    if (!form) {

        alert(
            'Erro técnico: formulário não encontrado.'
        );

        return null;
    }


    // Validar formulário
    if (!form.checkValidity()) {

        form.reportValidity();

        return null;
    }


    const nome =
        document.getElementById('nome').value.trim();


    const telefone =
        document.getElementById('telefone').value.trim();


    const email =
        document.getElementById('email').value.trim();


    const mensagem =
        document
            .getElementById('problemMessage')
            .value
            .trim();


    return {
        nome,
        telefone,
        email,
        mensagem
    };
}


// =========================================================
// WHATSAPP
// =========================================================

function sendToWhatsApp() {

    console.log(
        '🚀 A preparar mensagem para WhatsApp...'
    );


    const dados = getFormData();


    if (!dados) {
        return;
    }


    // Número de WhatsApp
    // Formato internacional, sem + e sem espaços
    const phone = '351926717918';


    // Criar mensagem
    const textoFormatado =
        `Olá! O meu nome é *${dados.nome}*.\n` +
        `Telefone: ${dados.telefone}\n` +
        `E-mail: ${dados.email}\n\n` +
        `*Preciso de ajuda com o seguinte problema:*\n` +
        `${dados.mensagem}`;


    // IMPORTANTE:
    // O "/" depois de wa.me é obrigatório
    const urlFinal =
        'https://wa.me/' +
        phone +
        '?text=' +
        encodeURIComponent(textoFormatado);


    console.log(
        '🔗 URL WhatsApp:',
        urlFinal
    );


    // Abrir WhatsApp
    window.open(
        urlFinal,
        '_blank',
        'noopener,noreferrer'
    );
}


// =========================================================
// EMAIL
// =========================================================


function sendToEmail() {

    console.log('📧 A preparar mensagem para Gmail...');

    const dados = getFormData();

    if (!dados) {
        return;
    }

    // E-mail de destino
    const emailDestino = 'suporte@problemaresolvido.com';

    // Assunto
    const assunto =
        'Pedido de Ajuda — ' + dados.nome;

    // Corpo da mensagem
    const corpo =
        'Olá!\n\n' +
        'Novo pedido de ajuda:\n\n' +
        'Nome: ' + dados.nome + '\n' +
        'Telefone: ' + dados.telefone + '\n' +
        'E-mail: ' + dados.email + '\n\n' +
        'Descrição:\n' +
        dados.mensagem;

    // Criar URL do Gmail
    const urlGmail =
        'https://mail.google.com/mail/?view=cm' +
        '&fs=1' +
        '&to=' + encodeURIComponent(emailDestino) +
        '&su=' + encodeURIComponent(assunto) +
        '&body=' + encodeURIComponent(corpo);

    console.log('📧 A abrir Gmail...');

    // Abrir Gmail numa nova aba
    window.open(
        urlGmail,
        '_blank',
        'noopener,noreferrer'
    );
}


