import axiosInstance from "../../axios";
import { IProjectProps } from "../../type";



function Projects({language, data}: IProjectProps) {
    

  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px'}}>
      {
        data.map((e,i)=>(
          <div key={e?.id + i}>
            <img style={{width: '100%'}} src={process.env.DOMAIN + e?.attributes?.image?.data?.attributes?.url} alt="preview" />
            <h3>{e?.attributes?.title}</h3>

          </div>
        ))
      }
    </div>
  );
}

export default Projects;
