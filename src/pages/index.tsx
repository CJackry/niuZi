import Index from '@/src/views/Index';

export default function Home() {
  return (
    <div>
      <Index />
    </div>
  );
}

// export async function getServerSideProps() {
//   let navList:Array<object> = [{}];
//   clientInstance({
//     url: '/api/navList',
//     method: 'get',
//   }).then((res) => {
//     navList = res.data.data;
//   });
//   console.log(navList);
//   return {
//     props: { navList },
//   };
// }
