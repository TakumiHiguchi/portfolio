import React,{Component} from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'HTML', A: 4, B: 3, fullMark: 5,
  },
  {
    subject: 'CSS', A: 4, B: 3, fullMark: 5,
  },
  {
    subject: 'React.js', A: 3, B: 3, fullMark: 5,
  },
  {
    subject: 'Vue.js', A: 1, B: 3, fullMark: 5,
  },
  {
    subject: 'jQuery', A: 2, B: 3, fullMark: 5,
  },
  {
    subject: 'SCSS', A: 3, B: 3, fullMark: 5,
  },
];
const data1 = [
  {
    subject: 'Java', A: 2, B: 3, fullMark: 5,
  },
  {
    subject: 'PHP', A: 2, B: 3, fullMark: 5,
  },
  {
    subject: 'Ruby', A: 4, B: 3, fullMark: 5,
  },
  {
    subject: 'PostgreSQL', A: 3, B: 3, fullMark: 5,
  },
  {
    subject: 'Python', A: 2, B: 3, fullMark: 5,
  },
  {
    subject: 'Go', A: 1, B: 3, fullMark: 5,
  },
];
const data2 = [
  {
    subject: 'Ruby on Rails', A: 4, B: 3, fullMark: 5,
  },
  {
    subject: 'Git', A: 2, B: 3, fullMark: 5,
  },
  {
    subject: 'Truffle', A: 1, B: 3, fullMark: 5,
  },
  {
    subject: 'AWS', A: 2, B: 3, fullMark: 5,
  },
  {
    subject: 'Solidity', A: 2, B: 3, fullMark: 5,
  },
  {
    subject: 'Vyper', A: 1, B: 3, fullMark: 5,
  },
];


export default class Skils extends Component{
    constructor(props){
        super(props);
        this.state={
            size:{
                width: 0,
                height: 0
            }
        }
    }
    
    componentWillMount () {
        window.addEventListener('load', () =>{
            this.getWindowSize();
        });
        window.addEventListener('resize', () => {
            this.getWindowSize();
        });
    }
    getWindowSize(){
        let width = window.innerWidth
        let height = window.innerHeight;
        let wsize = {
            width: width,
            height: height
        }
        this.setState({size: wsize});
    }
    
    render(){
        let width = this.state.size.width - 200;
        return(
               <div className="skilBox ">
                   <div className="flex-jus-around">
                       <RadarChart cx={width/6} cy={width/6} outerRadius={width/9} width={width/3} height={width/3} data={data}>
                         <PolarGrid />
                         <PolarAngleAxis dataKey="subject" />
                         <PolarRadiusAxis />
                         <Radar name="Mike" dataKey="A" stroke="#4cba7a" fill="#4cba7a" fillOpacity={0.6} />
                       </RadarChart>
                       <RadarChart cx={width/6} cy={width/6} outerRadius={width/9} width={width/3} height={width/3} data={data1}>
                         <PolarGrid />
                         <PolarAngleAxis dataKey="subject" />
                         <PolarRadiusAxis />
                         <Radar name="Mike" dataKey="A" stroke="#4cba7a" fill="#4cba7a" fillOpacity={0.6} />
                       </RadarChart>
                       <RadarChart cx={width/6} cy={width/6} outerRadius={width/9} width={width/3} height={width/3} data={data2}>
                         <PolarGrid />
                         <PolarAngleAxis dataKey="subject" />
                         <PolarRadiusAxis />
                         <Radar name="Mike" dataKey="A" stroke="#4cba7a" fill="#4cba7a" fillOpacity={0.6} />
                       </RadarChart>
                    </div>
                    <p>私が今までの活動で習得してきたスキルをレーダーチャートで表現しました。</p>
                    <p>自分のやりたいことをやるために広く浅くスキルを習得してきたため、専門性の低さが弱点です。</p>
                    <p>今後はバックエンド系の開発や、スマート・コントラクトの業務に携わる経験を増やし、理解を深めたいと考えています。</p>
                           
                           
               </div>
               );
    }
}

