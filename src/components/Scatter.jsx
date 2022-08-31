import Wine from '../Wine-Data.json';
import {useState,useEffect} from "react";
import ReactEcharts from "echarts-for-react"; 
var option;

const Scatter=()=>{

    const [data,setData]=useState([]);

    const fetchScatterData=(Wine)=>{
        let color=Wine.map((item)=>{
            return Number(item["Color intensity"]);
        })

        let hue=Wine.map((item)=>{
            return item["Hue"];
        })
        
        let mergeArr=[];
        for(let index in Wine)
        {
            mergeArr.push([color[index],hue[index]]);
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
