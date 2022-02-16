export default function Movies({ data }) {

  return (
    <div>
      <div>
        {data.Search.map(transformar)}
      </div>
    </div>
  )
}

function transformar(elemento) {
  return (
    <>
    <div>{elemento.Title} --- {elemento.Year} </div>
    <img src={elemento.Poster} width="300" height="400" />
    </>
  )
}
export async function getServerSideProps(context) {

  const res = await fetch(`http://www.omdbapi.com/?apikey=ed926521&s=bagdad`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}