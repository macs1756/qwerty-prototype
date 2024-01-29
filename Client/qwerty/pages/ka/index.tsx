import axiosInstance from "../../axios";
import Header from "../../components/header";
import Projects from "../../components/projects";
import HomeWrapper from "../../PagesWrapper/Home";
import { IpageProps, Language } from "../../type";

function HomeKa({ data, projectsData }: IpageProps) {
  return (
    <>
      <Header />
      <HomeWrapper
        title={data[0]?.attributes?.title}
        description={data[0]?.attributes?.description}
      />
      <Projects 
      language={Language.Ka}
      data={projectsData}
       />
    </>
  );
}

export default HomeKa;


export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get('/language-models?locale=ka');
    const data = res.data.data;

    const projectsRes = await axiosInstance.get('/projects?locale=ka&populate=*');
    const projectsData = projectsRes.data.data;


    if (res.status !== 200 || projectsRes.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return { props: { data, projectsData } };

  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: null, projectsData: null } };
  }
}