import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


interface Props {
  applications: any[];
  reload: () => Promise<void>;
}


const badgeColor = (status: string) => {

  switch(status){

    case "APPLIED":
      return "badge badge-info";

    case "REVIEWING":
      return "badge badge-warning";

    case "INTERVIEW":
      return "badge badge-secondary";

    case "OFFER":
      return "badge badge-success";

    case "REJECTED":
      return "badge badge-error";

    default:
      return "badge";

  }

};



const ApplicationTable = ({
  applications,
  reload,
}: Props) => {


  const navigate = useNavigate();


  return (

    <div className="overflow-x-auto rounded-2xl bg-base-200">

      <table className="table">

        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Job Type</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>

        {
          applications.map((item)=>(

            <tr key={item.id}>

              <td className="font-semibold">
                {item.company}
              </td>

              <td>
                {item.position}
              </td>

              <td>
                <span className={badgeColor(item.status)}>
                  {item.status}
                </span>
              </td>

              <td>
                {item.jobType}
              </td>

              <td>
                {item.salary || "--"}
              </td>

              <td>

                <div className="flex gap-2">

                  <button
                    onClick={() =>
                      navigate(`/applications/${item.id}`)
                    }
                    className="btn btn-sm btn-info"
                  >
                    <Eye size={16}/>
                  </button>


                  <button
                    onClick={() =>
                      navigate(`/applications/edit/${item.id}`)
                    }
                    className="btn btn-sm btn-warning"
                  >
                    <Pencil size={16}/>
                  </button>


                  <button
                    onClick={() =>
                      navigate(`/applications/delete/${item.id}`)
                    }
                    className="btn btn-sm btn-error"
                  >
                    <Trash2 size={16}/>
                  </button>

                </div>

              </td>

            </tr>

          ))
        }

        </tbody>

      </table>

    </div>

  );
};

export default ApplicationTable;