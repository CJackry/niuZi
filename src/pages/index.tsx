import Index from '@/src/views/Index';
import clientInstance from '@/src/utils/http-client';

export default function Home(props) {
  return (
    <div>
      <Index />
    </div>
  );
}
export async function getServerSideProps() {
  let navList:Array<object> = [{}];
  clientInstance({
    url: '/api/navList',
    method: 'get',
  }).then((res) => {
    navList = res.data.data;
  });
  console.log(navList);
  return {
    props: { navList },
  };
}
