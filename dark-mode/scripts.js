const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

//Pegar os estilos no css
const getStyle = (element, style) => 
  window.getComputedStyle(element).getPropertyPriority(style)

//Iniciar o estilo no style
const initial_colors = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  bgHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text")
}

//Objeto dark mode
const darkMode = {
  bg: "#333333",
  bgPanel: "#434343",
  bgHeadings: "#3664FF",
  colorText: "#B5B5B5"
}

//Pegar a propriedade do objeto, colocar um traço na frente da letra maiuscula
//e transformar tudo em letras minusculas
const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

//Setar a cor na pagina html
const changedColors = (colors) => {
  //Mapear o objeto de cores
  Object.keys(colors).map(key => 
      //Procurar a cor dentro do array colors recebido por parametro 
      html.style.setProperty(transformKey(key), colors[key])
    )
}

//Ouvindo o evento de mudança da função
checkbox.addEventListener("change", ({target}) => {
  target.checked ? changedColors(darkMode) : changedColors(initial_colors)
})