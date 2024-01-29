import Header from "../../components/header";
import HomeWrapper from "../../PagesWrapper/Home";
import axiosInstance from "../../axios";
import { Idata } from '../../type'

function HomeUk({ data }: Idata) {

  return (
    <>
      <Header />
      <HomeWrapper
        title={data[0]?.attributes?.title}
        description={data[0]?.attributes?.description}
      />
    </>
  );
}

export default HomeUk;

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get('/language-models?locale=uk');
    const data = res.data.data
    return { props: { data } }

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}