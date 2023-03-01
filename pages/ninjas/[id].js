export const getStaticPaths = async () => {
  const res = await fetch('https://api.jsonbin.io/v3/qs/63ff8314ebd26539d0878566');
  const data = await res.json();

  const paths = data.map(clan => {
    return {
      params: { id: clan.role.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://api.jsonbin.io/v3/qs/63ff8314ebd26539d0878566' + id);
  const data = await res.json();

  return {
    props: { clans: data }
  }
}

const Details = (props) => {
  return ( 
    <div>
      <h1>{ props.clans.emoji }</h1>
    </div>
   );
}
 
export default Details;