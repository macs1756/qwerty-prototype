import Header from "../../components/header";
import HomeWrapper from "../../PagesWrapper/Home";
import axiosInstance from "../../axios";
import { IpageProps, Language } from '../../type'
import Projects from "../../components/projects";

function HomeUk({ data, projectsData }: IpageProps) {

  console.log(projectsData);
  
  return (
    <>
      <Header />
      <HomeWrapper
        title={data[0]?.attributes?.title}
        description={data[0]?.attributes?.description}
      />
      <Projects 
      language={Language.Uk}
      data={projectsData}
       />
    </>
  );
}

export default HomeUk;
export async function getServerSideProps() {
  try {
    // Використовуйте axios безпосередньо, а не axiosInstance
    const res = await axiosInstance.get('/language-models?locale=uk');
    const data = res.data.data;

    const projectsRes = await axiosInstance.get('/projects?locale=uk&populate=*');
    const projectsData = projectsRes.data.data;

    // Перевірте статус відповіді перед отриманням даних
    if (res.status !== 200 || projectsRes.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return { props: { data, projectsData } };

  } catch (error) {
    console.error('Error fetching data:', error);
    // Повернення пустих пропсів у випадку помилки, щоб уникнути відображення пустої сторінки
    return { props: { data: null, projectsData: null } };
  }
}


