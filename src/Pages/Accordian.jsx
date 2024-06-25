import React ,{useState} from 'react';

const Accordian = (props) => {
    const [item,setItem]=useState(props.datas);
    const handletoggleActive=()=>{
        let newActive=item.active=== 1 ? 0 : 1;
        setItem({...item,active:newActive});
    };
  return (
    <div>
      


    <div className={`bg-gradient-to-b from-violet-500 to-black p-5 border mb-5 border-[#c9c6c655] rounded-md w-[500px] duration-500 group ${item.active===1?'is-active bg-white':''}`}>
    
    
               <div className="flex items-center">
                   <div className="w-full duration-500 group-[.is-active]:font-bold text-white">
                     {item.question}
                    </div>
                   <div className="text-xl rotate-90 duration-500 cursor-pointer group-[.is-active]:rotate-[270deg] text-white" onClick={handletoggleActive}> {'>'} </div>
               </div>
                   <div className="overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[100px] text-white">
                   {item.answer}
                   </div>
          </div>
    </div>
  )
}

export default Accordian;