
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;

        if (!nome || !telefone || !email) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            event.preventDefault(); // Impede o envio do formulário
        } else {
            alert("Formulário enviado com sucesso!");
        }
    });
