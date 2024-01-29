import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import axiosInstance from "../../../../axios";
import Header from "../../../../components/header";
import SingleWrapper from "../../../../PagesWrapper/Single";
import { IsingleWrapper } from "../../../../type";

function ProjectEn({ projectData }: IsingleWrapper) {

  return (
    <>
    <Header />
    <SingleWrapper 
    title={projectData.attributes.title}
    description={projectData.attributes.description}
    imageUrl={projectData.attributes.image.data.attributes.url}
     />
      </>
  );
}

export default  ProjectEn;


interface ProjectParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { id } = params as ProjectParams

  try {
    const projectRes = await axiosInstance.get(`/projects/${id}?populate=*`);
    const projectData = projectRes.data.data;


    if (projectRes.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return { props: { projectData } };

  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: null, projectsData: null } };
  }
}