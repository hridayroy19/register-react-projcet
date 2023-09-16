/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Result = ({secleted,totalCoust,remaining})=> {
console.log(secleted)    

    return (

        <div className=" h-[350px] w-80 text-center border ml-8  ">
            <div> <h4  className="text-center text-[16px]  font-medium">
                
            Credit Hour Remaining {remaining}<span> hr</span> </h4>  </div>
            <hr className="w-[80%]  ml-5  font-bold" />

           <h4 className="text-xl text-[#1C1B1B] font-bold "> Course Name</h4>
          
           {

            secleted.map(actor =>(
                <li className=" text-xl mt-4 text-black" key={actor.id}> {actor.name} </li>
            ))

           }
 <hr className="w-[80%]  ml-5 font-bold" />
           <h3 className="text-center text-[16px]  font-medium"> Total Credit Hour: {totalCoust} </h3>
           <hr className="w-[80%] ml-5  font-bold" />
        </div>
    );
};

export default Result;