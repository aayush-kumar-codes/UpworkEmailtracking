import axios from "axios";
import { useState, useEffect } from "react";

const Input = () => {
  const [invite, setInvite] = useState([]);

  useEffect(() => {
    axios.get("http://65.108.77.50:5777/invites")
      .then(response => { 
        // console.log(response,'=======================invite')
        setInvite(response.data); 
      })
      .catch(error => { 
        console.error(error);
      });
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      {invite.map((item, index) => (
         <div
         className="flex bg-slate-50 p-1 border-b rounded-lg border-black cursor-pointer px-2 py-2"
         key={index}
         
       >
         <h1 className="bg-slate-50 p-1 font-bold rounded-lg w-[25%] text-slate-500 mr-[4%]">
           {item.username}
         </h1>
           <span className="text-slate-500">
             {item.email_to}
           </span>
       </div>
      ))}
    </div>
  );
};

export default Input;

