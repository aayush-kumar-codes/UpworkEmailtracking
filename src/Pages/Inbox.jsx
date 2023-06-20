import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Header from "./Header";

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [readMessages, setReadMessages] = useState("");

  let navigate = useNavigate();
  const HandleInbox = (id, is_read) => {
    navigate(`/messagemodule/${id}`);
    setReadMessages(is_read);
  };

  useEffect(() => {
    axios
      .get("http://65.108.77.50:5777/messages")
      .then((response) => {
        console.log(response, 'Abhiiiiiiiiiiiiiiiiiiiiii')
        setMessages(response.data);
        setReadMessages(response?.data?.is_read);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [readMessages]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 10) {
      const truncatedWords = words.slice(0, 5);
      return truncatedWords.join(" ") + " ...";
    }
    return description;
  };
  const truncateTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 3) {
      const truncatedWords = words.slice(0, 3);
      return truncatedWords.join(" ") + "...";
    }
    return title;
  };
  return (
    <>
    <Header Title={'Title'} Describe={'Description'} Data={'Received at '} className={'mr-[20vw]'}/>
      <div className="p-4 sm:ml-64">
        {messages?.map((item, index) => {
          return (
            <div
              className={
                item.is_read
                  ? `flex bg-slate-50  p-1 border-b rounded-lg border-black cursor-pointer px-2 py-2`
                  : `flex bg-slate-200 p-1 border-b rounded-lg border-black cursor-pointer px-2 py-2`
              }
              key={index}
              onClick={() => {
                HandleInbox(item?.email_id, item.is_read);
              }}
            >
              <h1 className=" p-1 font-bold rounded-lg w-[20%] text-slate-500 mr-[4%]">
                {truncateTitle(item.email_subject)}
              </h1>
              <span className="text-slate-500 mr-4 w-[40%]">
                {truncateDescription(item.body)}
              </span>
              <span className="w-[25%] ">
                {" "}
                {moment(item.received_on).format("MMMM Do YYYY, h:mm a")}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Inbox;
