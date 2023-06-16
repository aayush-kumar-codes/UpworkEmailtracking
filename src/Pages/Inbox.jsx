
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Inbox = () => {
  const [messages, setMessages] = useState([]);
 
  let navigate= useNavigate();
  const HandleInbox=(id)=>{
    navigate(`/messagemodule/${id}`)
}
  useEffect(() => {
    axios.get('http://65.108.77.50:5777/messages')
      .then(response => { 
        setMessages(response.data); 
      })
      .catch(error => { 
        console.error(error);
      });
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 10) {
      const truncatedWords = words.slice(0, 10);
      return truncatedWords.join(" ") + "....";
    }
    return description;
  };
  console.log(messages, '==========>');

  return (
    <div className="p-4 sm:ml-64">
      {messages?.map((item, index) => {
        return (
          <div
          className="flex bg-blue-100 p-1 border-b rounded-lg border-black cursor-pointer px-2 py-2"
          key={index}
          onClick={()=>HandleInbox(item?.email_id)}
           >
          <h1 className=" p-1 font-bold rounded-lg w-[30%] text-slate-500 mr-[4%]">
            {item.email_to
}
          </h1>
            <span className="text-slate-500" >
              {truncateDescription(item.body)}
            </span>
        </div>
        )
      }
       
      )}
    </div>
  );
};

export default Inbox;

