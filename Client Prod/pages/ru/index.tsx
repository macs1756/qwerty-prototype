import Header from "../../components/header";
import axiosInstance from "../../axios";
import { IpageProps } from '../../type'
import RootLayout from "@/app/layout";



function HomeRu({ data }: IpageProps) {

  return (
    <RootLayout>
      <Header data={data} />
    </RootLayout>
  );
}

export default HomeRu;


export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get('/movna-models?locale=ru');
    const data = res.data.data;

    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return { props: { data } };

  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: null } };
  }
}


