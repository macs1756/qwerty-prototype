import axiosInstance from "../../axios";
import Header from "../../components/header";
import Projects from "../../components/projects";
import HomeWrapper from "../../PagesWrapper/Home";
import { Idata, Language } from "../../type";

function HomeKa({ data }: Idata) {
  return (
    <>
      <Header />
      <HomeWrapper
        title={data[0]?.attributes?.title}
        description={data[0]?.attributes?.description}
      />
      <Projects language={Language.Ka} />
    </>
  );
}

export default HomeKa;


export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get('/language-models?locale=ka');
    const data = res.data.data
    return { props: { data } }

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}