import { useEffect, useHook} from 'react';
import coc from 'clashofclans.js';

const { client } = coc;

const loadClan = async (updateValue) => {
  await client.login({ email: 'leeuwetam@gmail.com', password: 'ff!jo7ZMtGR9cH2d' });

  const clan = await client.getClan('#2PP');

  updateValue(clan);

  console.log(`${clan.name} (${clan.tag})`);
}

const ourClans = () => {
  const client = new Client({ keys: [process.env.cockey], cache: true, retryLimit: 2, restRequestTimeout: 5000 });
  const [clan, setClan] = useHook();

  useEffect(() => {
    loadClan(setClan);
  }, []);
  return <div></div>;
}

export default ourClans;