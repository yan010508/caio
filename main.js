function enviarFormulario() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome===""||email===""||telefone===""||mensagem===""){
        alert("Por favor, preencha todos os campos!");
        return
    }
    const urlApi = 'https://docs.google.com/forms/d/e/1FAIpQLSeGpUpbMCO_RTiC_OyVkKHSllHHnQWTC_NzcOZ0K8NspSxGRQ/formResponse'

    const dadosformularios = {
        'entry.190904527': nome,
        'entry.826110022': email,
        'entry.1067481278': telefone,
        'entry.34028280': mensagem
    }
    fetch(urlApi, {
        method: 'POST',
        mode: "no-cors",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(dadosformularios).toString()
    })
    .then(() => alert("Formulario foi enviado com sucesso."))
    .catch(() => alert("Erro ao enviar o formulario."))
}