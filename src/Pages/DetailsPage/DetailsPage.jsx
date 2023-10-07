import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";




const DetailsPage = () => {
   const params =useParams()
   console.log(params.id)
   const[details , setDetails] = useState([])
   
   useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data => setDetails(data.events))
},[])
    

   const clickedData = details.filter(detail => detail.id == params.id)
  

    
    return (
        <div className="p-[5%]">
{clickedData.map(oneClickedData => <Detail key={oneClickedData.id} oneClickedData={oneClickedData}></Detail>)}
        </div>
    );
};

export default DetailsPage;