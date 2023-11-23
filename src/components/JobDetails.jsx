import { useParams } from "react-router-dom";
import jobs from "../data/data";

export function JobDetails() {
  const { position } = useParams();
  const job = jobs.find((job) => job.position === position);

  return (
    <section>
      <div className="container">
        <div className="details__top">
          <div>
            <h1>{job.company}</h1>
            <h4>{job.postedAt}</h4>
          </div>
        </div>
        <div className="requirements">
          <h1>Requirements</h1>
          <ul className="requirement__item">
            {job.requirements.reqItem.map((item, index)=> (
              <li key={index}>{item} </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
