import React from "react";
import { Styles } from "../styles/NoticeBoard";
import { GoDotFill } from "react-icons/go";
import { TiPin } from "react-icons/ti";
const NoticeBoard = () => {
  const noticeData = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat.",
    },
    {
      id: 2,
      content: "Another notice content goes here.",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat.",
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat.",
    },
    {
      id: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat.",
    },
    {
      id: 6,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat.",
    },
    {
      id: 7,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat.",
    },
    {
      id: 8,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat.",
    },
    // Add more objects as needed
  ];
  return (
    <Styles>
      <div className="notice-board-title">
        Notice Board
      </div>
      <div className="notice-background mx-auto">
        
        <div className="inner_background mx-auto">


        <div className="PinIcon">
          <TiPin />
        </div>

    <div className="notice-scroll mx-auto">

          {noticeData.map((values) => (
            <>
              <div key={values.id} className="noticeContent">
                <span>
                  <GoDotFill />
                </span>
                <div className="mb-3 notice-content">{values.content}</div>
              </div>
            </>
          ))}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default NoticeBoard;
