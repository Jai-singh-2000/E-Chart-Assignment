import Wine from '../Wine-Data.json';
import {useState,useEffect} from "react";
import ReactEcharts from "echarts-for-react"; 
var option;

const Scatter=()=>{

    const [data,setData]=useState([]);

    const fetchScatterData=(Wine)=>{

        let colorArr=Wine.map((item)=>{
            return Number(item["Color intensity"]);
        })

        let hueArr=Wine.map((item)=>{
            return item["Hue"];
        })
        
        //Make new merge array with both elements [ [1,2], [2,3] ]
        let mergeArr=[];
        for(let index in Wine)
        {
            mergeArr.push([colorArr[index],hueArr[index]]);
        }

        setData(mergeArr);
    }

    useEffect(()=>{
        fetchScatterData(Wine);
    },[])

    option = {
        xAxis: {name:"Color Intensity"},
        yAxis: {name:"Hue"},
        series: [
          {
            symbolSize: 20,
            data: data,
            type: 'scatter'
          }
        ]
      };
return (
    <div className="scatter">

    <div className="heading-container">
        <div className="heading-inner">
            <h1>Scatter Plot</h1>
            <p>Color Intensity - Hue </p>
        </div>
    </div>
        
    <ReactEcharts option={option} />;
    
    </div>
)
    

} 
export default Scatter;
