

interface IhomeProps {
  title: string
  description: string
}

function HomeWrapper({title , description}: IhomeProps) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default HomeWrapper;