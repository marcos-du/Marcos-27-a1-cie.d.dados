const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    cosole.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`

    const container = document.getElementById(graficos - container)
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
console.log(paragrafo)
// código omitido
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = (dados.tempo_medio - horas) * 100

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e ${minutos} minutos conectadas.`
async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.`
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

    async function vizualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) * 100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`

        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
    }

    vizualizarInformacoesGlobais()
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
(const porcentagemConectada = (pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: 'red'
      }
    }
  ]
  ]
  async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      x: nomeDasRedes,
      y: quantidadeUsuarios,
      type: 'bar'
    }
  ]
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data)
  
  }
  
  quantidadeUsuarios()
  // código omitido

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo',
       x: 0,
       font: {
           color: getCSS('--primary-color'),
           family: getCSS('--font'),
           size: 30
       }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'nome das redes sociais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }


  
const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
  color: getCSS('--primary-color'),
  size: 16,
  family: getCSS('--font')
}

export { getCSS, tickConfig }