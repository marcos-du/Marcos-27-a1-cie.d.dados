<footer>
<script type="module" src="graficos/common.js">
</script>
<script type="module" src="graficos/informacoesGlobais.js">
</script>
<script type="module" src="graficos/quantidadeUsuarios.js">
</script>
</footer>
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  
  export {getCSS}
  import { getCSS } from "./common.js";
  const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getCSS('--primary-color')
      }
    }
  ]
  Plotly.newPlot(grafico, data, layout)
  const layout = {
    plot_bgcolor: getCSS('--bg-color')
    paper_bgcolor: getCSS('--bg-color')
}
import { getCSS, tickConfig } from "./common.js"
