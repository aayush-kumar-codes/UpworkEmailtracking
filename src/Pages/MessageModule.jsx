import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MessageModule = () => {
  const [module, setModule] = useState([]);
  const [read,setRead] = useState("");
  
  const {id}  = useParams()
  useEffect(() => {
    axios
      .get(`http://65.108.77.50:5777/messages?id=${id}`)
      .then((response) => {
        
        setModule(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://65.108.77.50:5777/messages?id=${id}&is_read=1`)
      .then((res) => {
       
        //setRead(response.data);
        setRead(res?.data?.is_read)
      })
      .catch((error) => {
        console.error(error);
      });     
  }, [id]);

  return (
    <div className="p-4 sm:ml-64">
      
        <div
          className=" bg-slate-50 p-1 border-b rounded-lg border-black cursor-pointer px-2 py-2"
          
        >
          <h1 className="bg-slate-50 p-1 font-bold rounded-lg w-[25%] text-slate-500 mr-[4%]">
            {module.email_to}
          </h1>
          <p className="text-slate-500 p-8">{module.body}</p>
          <p className="text-slate-500 font-bold p-8">{module.username}</p>
        </div>
    </div>
  );
};

export default MessageModule;
