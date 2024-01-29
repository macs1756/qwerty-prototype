import axiosInstance from "../../axios";
import { IProjectProps } from "../../type";



function Projects({language, data}: IProjectProps) {
    
  return (
    <div>
      {
        data.map((e,i)=>(
          <div key={e?.id + i}>
            <img src={process.env.DOMAIN + e?.attributes?.img?.data?.attributes?.url} alt="preview" />
            <h3>{e?.attributes?.title}</h3>

          </div>
        ))
      }
    </div>
  );
}

export default Projects;
