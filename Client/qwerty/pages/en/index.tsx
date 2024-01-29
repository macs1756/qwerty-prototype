import Header from "../../components/header";
import HomeWrapper from "../../PagesWrapper/Home";
import axiosInstance from "../../axios";
import { Idata, Language } from '../../type'
import Projects from "../../components/projects";


function HomeEn({ data }: Idata) {

  console.log(data);


  return (
    <>
      <Header />
      <HomeWrapper
        title={data[0]?.attributes?.title}
        description={data[0]?.attributes?.description}
      />
      <Projects language={Language.En} />
    </>
  );
}

export default HomeEn;


export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get('/language-models?locale=en');
    const data = res.data.data
    return { props: { data } }

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
