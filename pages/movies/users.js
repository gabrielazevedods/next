// ARQUIVO COM A REQUISIÇÃO A API DE MINHA PREFERÊNCIA, QUESTÃO DO EXERCÍCIO 1 DA RECEITA 9

export default function Users({ users }) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <h3 key={user.id}>{user.name} --- {user.address.city} --- {user.email}</h3>
        ))}
      </ul>
    </>
  );
}


export async function getStaticProps() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await data.json()

  return {
    props: {
      users
    },
  }
}

