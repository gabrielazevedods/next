// A QUESTÃO 1 DA RECEITA 9 ESTÁ NO ARQUIVO USERS.JS 
// A QUESTÃO 3 ESTÁ NA LINHA 7
// A QUESTÃO 4 ESTÁ ESCRITA A PARTIR DA LINHA 51, DENTRO DA ESTRUTURA ELSE

export default function TheMovie({ data }) {
  
  if (!data) return (<div>carregando...</div>) // CASO NÃO ESTEJA NA LISTA DE PATHS, EXIBE CARREGANDO ENQUANTO FAZ A REQUISIÇÃO

  if (data.Title) {
    return (
      <div className="container">
        <div className="titulo">{data.Title} --- {data.Year}</div>
        <div className="descricao">{data.Plot}</div>
        <div className="imagem">
          <img src={data.Poster} width="300" height="400" />
        </div>

        <style global jsx>{`
        body {
          
          background: #282C34;
          color: white;
          margin: 20px;
          padding: 20px;
          }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .titulo {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        
        .descricao {
          margin-bottom: 20px;
          font-size: 1.2rem;
          width: 40%;
        }
        
      `}</style>

      </div>
      
    ) 
  } else {
    return (<div>Não há o recurso solicitado no sistema</div>) // CASO O TÍTULO NÃO SEJA ENCONTRADO, O SISTEMA EXIBE ESSA MENSAGEM
  }
 
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "tt0095801" } },
      { params: { id: "tt0033152" } },
      { params: { id: "tt0015400" } },
      { params: { id: "tt0041149" } },
      { params: { id: "tt0044388" } },
      { params: { id: "tt0098746" } },
      { params: { id: "tt0046322" } },
      { params: { id: "tt0046497" } },
      { params: { id: "tt0044389" } }
    ],
    fallback: true
  }
}

export async function getStaticProps({ params }) {

  const res = await fetch(`https://www.omdbapi.com/?apikey=f1cbc41e&i=${params.id}`)
  const data = await res.json();
  
  return {
    props: {
      data
    }
  }
}