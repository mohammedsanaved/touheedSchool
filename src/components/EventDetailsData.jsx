import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

const EventDetailsData = () => {
  return (
    <div>
      <h1 className="fs-1 fw-bold">
        72nd Independence Day Celebrations at Touheed.
      </h1>
      <div className="d-flex gap-4 justify-content-md-start mt-2">
        <div className="d-flex gap-2">
          {" "}
          {/* Apply text-success class for success color */}
          <FaCalendarAlt className="fs-4 fw-semibold text-success" />
          <p className="fs-5">15 August 2024</p>
        </div>
        <div className="d-flex gap-2 ">
          {" "}
          {/* Apply text-success class for success color */}
          <CiClock2 className="fs-4 text-success fw-semibold" />
          <p className="fs-5">20:24 am</p>
        </div>
        <div className="d-flex">
          {" "}
          <LuMapPin className="fs-4 text-success" />
          <p className="fs-5">15 August 2024</p>
        </div>
      </div>
      <p className="mt-4 fs-4">
        The Touheed campus witnessed a grand celebration of our 72nd
        Independence Day on Wednesday, 15th August 2018. The tri-color was
        unfurled by the Chief Guest Mr. Mohammad Meeran Shahbuddin, at the
        school grounds. <br /> <br /> National Anthem and patriotic songs were rendered by the
        students. Later the programme was shifted to the auditorium. Mr. Imtiyaz
        Ahmed Kazi (Correspondent) presided over the programme. <br /> <br /> Mr. Fatah MH,
        Hafiz Ikram Shahbuddin and Mr. Mohammad Murfad Nakhuda (Trustee) were
        present on the dais.The programme started with ‘Qirat’ by Fawaz Shaikh
        (X) followed with ‘Hamd’ by Ayesha Midhat (X) and ‘Na’th’ by Zarqa
        Zainab(IX).
      </p>
    </div>
  );
};

export default EventDetailsData;
