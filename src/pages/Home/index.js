import React from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

const Home = ()=>{

  const data = [
    { name: 'A', x: 21 },
    { name: 'B', x: 22 },
    { name: 'C', x: -32 },
    { name: 'D', x: -14 },
    { name: 'E', x: -51 },
    { name: 'F', x: 16 },
    { name: 'G', x: 7 },
    { name: 'H', x: -8 },
    { name: 'I', x: 9 },
  ]

  return(
  <div> 
    <h1>Teste Charts</h1>
    <RadarChart height={500} width={500}
      outerRadius='80%' data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey='name' />
      <PolarRadiusAxis />
      <Radar dataKey='x' stroke="green" fill="green" fillOpacity={0.5} />
    </RadarChart>
    
  </div>
  );
};

export default Home;