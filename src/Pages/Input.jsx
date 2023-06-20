import axios from "axios";
import moment from "moment";

import { useState, useEffect } from "react";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = () => {
  const [invite, setInvite] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState("");

  const truncateTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 3) {
      const truncatedWords = words.slice(0, 3);
      return truncatedWords.join(" ") + "...";
    }
    return title;
  };
  useEffect(() => {
    axios
      .get("http://65.108.77.50:5777/invites")
      .then((response) => {
        console.log(response, "=======================invite");
        setInvite(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const copyUrl = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("URL copied to clipboard:", url);
        setCopiedUrl(url);
        toast.success("URL Copied!");
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
      });
  };
  

  return (
    <>
      <Header
        Title={"Title"}
        Email={'Email'}
        Describe={"Received at "}
        Data={"Action"}
        className={"mr-[10vw]"}
      />
      <div className="p-4 sm:ml-64">
        {invite.map((item, index) => (
          <div
            className="flex bg-slate-50 p-1 border-b rounded-lg border-black cursor-pointer px-2 py-2"
            key={index}
          >
            <h1 className="bg-slate-50 p-1 font-bold rounded-lg w-[25%] text-slate-500 mr-[4%]">
              {truncateTitle(item.email_subject)}
            </h1>

            <h1 className="bg-slate-50 p-1 font-bold rounded-lg w-[25%] text-slate-500 mr-[4%]">
              {item.email_to}
            </h1>

            <span className="w-[25%] ">
              {" "}
              {moment(item.received_on).format("MMMM Do YYYY, h:mm a")}
            </span>
            <button
              className="bg-blue-500 text-slate-50 font-semibold rounded-lg px-2 py-2"
              onClick={() => copyUrl(item.proposal_link)}
            >
              Copy URL
            </button>
            <ToastContainer />
          </div>
        ))}
      </div>
    </>
  );
};

export default Input;
