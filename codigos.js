function functionPesquisar() {
    // Obtém o valor digitado pelo usuário no campo de pesquisa e converte para minúsculas
    // para facilitar a comparação, ignorando diferenças entre maiúsculas e minúsculas.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    let sectionResultado = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let listaLinguagens = "";

    // Verifica se o usuário digitou algum termo de pesquisa.
    if (campoPesquisa === "") {
        // Se o campo estiver vazio, exibe uma mensagem informando que não há dados para pesquisar.
        sectionResultado.innerHTML = "Sem dados para pesquisar";
        return; // Encerra a função.
    }

    // Itera sobre cada linguagem no array 'linguagens' (assumindo que 'linguagens' é um array definido anteriormente).
    for (let linguagem of linguagens) {
        // Converte o título da linguagem para minúsculas para facilitar a comparação.
        let linguagemTitulo = linguagem.titulo.toLowerCase();

        // Verifica se o título da linguagem contém o termo pesquisado.
        if (linguagemTitulo.includes(campoPesquisa)) {
            // Se encontrar uma correspondência, adiciona a linguagem aos resultados da pesquisa,
            // formatando-a como um elemento HTML.
            listaLinguagens += `
                <div class="item-resultado">
                    <h2>${linguagem.titulo}</h2>
                    <a href="${linguagem.link}" target="_blank"><small> [+mais informações]</small></br></a>
                    <p class="descricao-meta">${linguagem.descricao}</p>
                    <p class="descricao-meta">Ano: ${linguagem.ano}</p>
                </div>
            `;
        }
    }

    // Verifica se foram encontrados resultados.
    if (!listaLinguagens) {
        // Se não houver resultados, exibe uma mensagem informando que nenhuma linguagem foi encontrada.
        sectionResultado.getElementById = "Nenhuma linguagem encontrada!";
    } else {
        // Se houver resultados, atualiza o conteúdo da seção de resultados com a lista de linguagens encontradas.
        sectionResultado.innerHTML = listaLinguagens;
    }
}