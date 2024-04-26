import React from "react";
import { Styles } from "../styles/NoticeBoard";
import { GoDotFill } from "react-icons/go";
import { TiPin } from "react-icons/ti";
const NoticeBoard = ({ item }) => {
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
      <div className="notice-board-title">Notice Board</div>
      <div className="notice-background mx-auto">
        <div className="inner_background mx-auto">
          <div className="PinIcon">
            <TiPin />
          </div>

          <div className="notice-scroll mx-auto">
            {item.images.map((img, i) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a
                href={`${process.env.REACT_APP_API_URL}/${img.image}`}
                target="_blank"
                download={`${process.env.REACT_APP_API_URL}/${img.image}`}
                key={i}
              >
                <div className="mb-3 notice-content">{item.title}</div>
              </a>
            ))}
            {/* <a href={item}></a> */}
            {/* {item.map((values) => (
              <>
                <div key={values.id} className="noticeContent">
                  <span>
                    <GoDotFill />
                  </span>
                </div>
              </>
            ))} */}
            {}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default NoticeBoard;
