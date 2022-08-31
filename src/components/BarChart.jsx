import Wine from '../Wine-Data.json';
import {useState,useEffect} from "react";
import ReactEcharts from "echarts-for-react"; 
var option;

const BarChart=()=>{
    
  const [malic,setMalicAcid]=useState([]);
  const [alcohol,setAlcohol]=useState([]);

  const fetchBarData=(Wine)=>{

    //Get array of alcohol value
    let alcoholArr=Wine.map((item)=>{
      return item.Alcohol;
    })
    
    //This array give all unique Alcohol values [1,2,3] 
    let uniqueArr=[...new Set(alcoholArr)]; 
    setAlcohol(uniqueArr);
 

    let malic=[];

    for(let index in uniqueArr)
    {
      //Filter array of Object of Alcohol value 1, 2, 3
      let filteredArrOfObj=Wine.filter((item)=>{
        return item.Alcohol===uniqueArr[index]; 
      })

      //From those filterArrOfObj, make array with malic acid 
      let filteredMalicArr=filteredArrOfObj.map((item)=>{
        return item["Malic Acid"];
      })

      const average = filteredMalicArr.reduce((a, b) => a + b, 0) / filteredMalicArr.length;
      malic.push(average);
    
    }

    //malic = [13.74, 12.27, 13.15]
    setMalicAcid(malic);

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


