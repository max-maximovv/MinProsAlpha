import "./projects.css";

import { getData } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";

function Card(props) {
  return (
    <li className="projects-card">
      <a href={props.url}>
        <div>
          <img src={props.img} />
          <h5>{props.name}</h5>
        </div>
      </a>
    </li>
  );
}

export default function ProjectsBlock(props) {
  {
    /**const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData(
      "http://localhost:1337/api/management-projects"
    ).then((res) => {
      setData(res.data);
    });
  }, []);**/
  }
  return (
    <div className="manage-projects">
      <h3>{props.title}</h3>
      {/**{data ? (
        <ul>
          {data.map((itm, index) => {
            return (
              <Card
                key={index}
                name={itm.attributes.title}
                url={itm.attributes.Link}
                img={itm.attributes.Img}
              />
            );
          })}
        </ul>
      ) : (
        "Загрузка..."
      )}**/}
      <ul>
        <Card
          key="1"
          name="Общественный Совет при Министерстве просвещения"
          url="https://minpros.gospmr.org/about/12023"
          img="/imgs/header/icons8-диалог-100.png"
        />
        <Card
          key="2"
          name="Общественный республиканский студенческий совет"
          url="https://minpros.gospmr.org/about/12351"
          img="/imgs/header/icons8-конференция-переднего-плана-выбранные-96.png"
        />
        <Card
          key="3"
          name="Противодействие коррупции"
          url="https://minpros.gospmr.org/about/11655"
          img="/imgs/header/icons8-монета-90.png"
        />
        <Card
          key="4"
          name="Диалог на равных"
          url="https://minpros.gospmr.org/about/12765"
          img="/imgs/header/image_2024-09-19_14-02-36.png"
        />
      </ul>
    </div>
  );
}
