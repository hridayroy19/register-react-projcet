/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Result from "../Result/Result";
import Swal from 'sweetalert2'

const Card = () => {
const [actour, setActour]=useState([])
const [selectedActors,setSelectedActors]=useState([]);
const [remaining,setRemaining] = useState(0);
const [totalCoust,setTotalCoust] = useState(0)



useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data=> setActour(data))

},[]);

const handelSelected  = (actor)=>{
    const isExit = selectedActors.find((item)=>item.id ==actor.id);
    let count = actor.time;
    if (isExit){
        return  Swal.fire('all ready book')
    }
    else{

        

            selectedActors.forEach((item)=>{
                count = parseFloat(count)+parseFloat(item.time)
            });
            
        
        
        const totalRemaing =20-count;
        if (count>20){
            return Swal.fire('Reaminig time the end ')
        }

        setTotalCoust(count);
      
        setRemaining(totalRemaing);

        const seleted = [...selectedActors, actor];
        setSelectedActors(seleted)
    }
    
    
}; //wait ami ektu console log kor eta thle na data pabi



  return(
    <div className="container">
    <div className="home-container flex  justify-between mt-10">
    <div className="card-container  grid lg:grid-cols-3 md:grid-cols-2  gap-7 ml-16 ">
{

actour.map (actor =>(
    
<div key={actor.id} className="card lg:w-[280px] w-[250px] h-[350px] lg:h-[370px] shadow-xl ">

<img src={actor.cover} alt="picture" className="w-full p-2" />


<h2 className=" text-center text-xl font-semibold text-[#1C1B1b] mt-4">{actor.name}</h2>
<p className="text-center text-black font-medium text-[14px]">{actor.title} </p>

<div className=" flex justify-between mt-3">
<div className="ml-7">
<h4 className=" text-[16px] text-black font-medium"> <span> $</span> price : {actor.price} </h4>
</div>
<div>
<h5 className=" text-[16px] text-black font-medium mr-7">
Credit : {actor.time} <span> hr</span>
</h5>
</div>
</div>
<div className="text-center">
<button onClick={()=> handelSelected(actor)} className=" w-[80%] h-9 mt-5 bg-[#2F80ED] rounded-[8px]  "> Select </button>
</div>
</div>
)) 
}
  </div>


<div className=" text-3xl text-blue-400"> 
<Result secleted={selectedActors} remaining ={remaining} totalCoust ={totalCoust} ></Result>
</div>

    </div>

</div>

  );
};
export default Card;
