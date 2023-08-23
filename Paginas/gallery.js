const galeria = document.getElementById("galeria");

// Função para carregar as imagens
function carregarImagens() {
    const caminhoPasta = "../galeria/coptir23";
    
    // Pega uma lista de arquivos da pasta
    fetch(`${caminhoPasta}`)
        .then(response => response.text())
        .then(text => {
            const listaArquivos = text.split("\n");
            
            listaArquivos.forEach(arquivo => {
                if (/\.(jpe?g|png|gif)$/i.test(arquivo)) { // Verifica se é um arquivo de imagem
                    const imgElement = document.createElement("img");
                    imgElement.src = `${caminhoPasta}/${arquivo}`;
                    imgElement.alt = arquivo; // Use o nome do arquivo como texto alternativo
                    galeria.appendChild(imgElement);
                }
            });
        });
}

// Chama a função para carregar as imagens ao carregar a página
window.addEventListener("load", carregarImagens);