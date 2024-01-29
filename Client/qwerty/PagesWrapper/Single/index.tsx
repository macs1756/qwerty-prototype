import { IpageSingleProps } from "../../type";

function SingleWrapper({ title, description, imageUrl }: IpageSingleProps) {

  return (
    <div>
      <h2>{title}</h2>
      <img src={process.env.DOMAIN + imageUrl} alt="main image" />
      <h6>{description}</h6>
    </div>
  );
}

export default SingleWrapper;
