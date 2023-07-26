import React from "react";
import {
  differenceInDays,
  formatDistance,
  formatDistanceToNow,
} from "date-fns";
import { tr as trDili } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const diffInDays = differenceInDays(new Date(taskObj.deadline), new Date());
  const distanceToNow = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: trDili,
    addSuffix: true,
  });
  return (
    <div className="task p-6 bg-white rounded leading-6 mt-4 shadow-md  ">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span className={diffInDays <= 3 ? "bg-fayaaaa" : "sakin"}>
          {distanceToNow}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-md rounded b-0"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
