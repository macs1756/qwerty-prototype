import Header from "../../components/header";
import HomeWrapper from "../../PagesWrapper/Home";
import axiosInstance from "../../axios";
import { IpageProps, Language } from '../../type'
import Projects from "../../components/projects";


function HomeEn({ data, projectsData }: IpageProps) {

  console.log(data);


  return (
    <>
      <Header />
      <HomeWrapper
        title={data[0]?.attributes?.title}
        description={data[0]?.attributes?.description}
      />
      <Projects 
      language={Language.En}
      data={projectsData}
       />
    </>
  );
}

export default HomeEn;


export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get('/language-models?locale=en');
    const data = res.data.data;

    const projectsRes = await axiosInstance.get('/projects?locale=en&populate=*');
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
