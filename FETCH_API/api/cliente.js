const url = "http://localhost:4000/clientes"
const url2 = "http://localhost:4000/clientes/cliente"


const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch(url2, {
            method: "POST",
            headers: {
                "Content.type": "aplication/json"
            },
            body: json
        })
        .then(resp => {
            return resp.body //resposta q vai ser enviada ao servidor
        });
}