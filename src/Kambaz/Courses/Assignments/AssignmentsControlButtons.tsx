import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <div className="bg-secondary text-white px-3 py-1 rounded-pill me-2">
        40% of Total
      </div>
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}