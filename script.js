// função que altera a cor do quadro do código

function mudaCor() {
    let select = document.querySelector('#select-color');
    let optionValue = select.options[select.selectedIndex];
    let color = document.querySelector('.code_editor');
    let value = optionValue.value

    if (value === '#66ff00') {
        color.style.background = '#1e4620'
    } else if (value === '#ff69b4') {
        color.style.background = '#ff69b4'
    } else if (value === '#ff2323') {
        color.style.background = '#ff4747'
    } else {
        color.style.background = '#6BD1FF'
    }
};

// função que aplica o highlight

const linguagem = document.querySelector(".select-linguagem");
const areaDoCodigo = document.querySelector('.codigo-wrapper');
const botao = document.querySelector('.btn-highligth');

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
});

// formulario 



const form = document.getElementById("novoItem");

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log(evento)
    console.log(evento.target.elements['name'].value)
    console.log(evento.target.elements['description'].value)
})

