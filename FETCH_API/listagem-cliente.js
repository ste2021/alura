//no html coloca do lado elemento data-conteudo-tabela, pelo query selector o js pega o conteudo html, 
//queremos colocar os dados da api na tabela, quem pega esses dados é innerHTML
const corpoTabela = document.querySelector("[data-conteudo-tabela]")



const exibeCliente = (cpf, nome) => { //arrowfunction, pegou os dados do conteudoLinha
    const linha = document.createElement('tr') //propriedade createElement cria a tr na tabela
    const conteudoLinha = `
     <td>${cpf}</td>    
    <td>${nome}</td>
    `
        //template strings, n precisam colocar o nome e cpf, ele busca no array
    linha.innerHTML = conteudoLinha; //propriedade que exibe no html
    return linha; //chama a linha pr criar a tabela
}

listarClientes().then(exibe => {
        exibe.forEach(indice => { ///posicao array indidce faz esse papel p poder percorrer
            corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
        })
    }

)