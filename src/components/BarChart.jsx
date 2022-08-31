import Wine from '../Wine-Data.json';
import {useState,useEffect} from "react";
import ReactEcharts from "echarts-for-react"; 
var option;

const BarChart=()=>{
    
  const [malic,setMalicAcid]=useState([]);
  const [alcohol,setAlcohol]=useState([]);

  const fetchBarData=(Wine)=>{
   
    let malicAcidArr=Wine.map((item)=>{
      return item["Malic Acid"];
    })
    setMalicAcid(malicAcidArr);

    let alcoholArr=Wine.map((item)=>{
      return item.Alcohol;
    })
    setAlcohol(alcoholArr);
  
  }

  useEffect(()=>{
    fetchBarData(Wine);
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: alcohol,
        axisTick: {
          alignWithLabel: true
        },
        name:"Alcohol"
      }
    ],
    yAxis: [
      {
        type: 'value',
        name:"Malic Acid"
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data:malic

      }
      ]
  };
  
  

return (
  <div className="bar">

    <div className="heading-container">
      <div className="heading-inner">
        <h1>Bar Chart</h1>
        <p>Alcohol - Malic Acid </p>
      </div>
    </div>
    
    <span className='bar'>
      <ReactEcharts option={option} />;
    </span>
  
  </div>

);

} 
export default BarChart;


