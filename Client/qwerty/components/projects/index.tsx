import axiosInstance from "../../axios";
import { IProjectProps } from "../../type";



function Projects({language, data}: IProjectProps) {
  return (
    <div>Project {language}</div>
  );
}

export default Projects;



export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get('/projects?locale=uk');
    const data = res.data.data
    return { props: { data } }

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}