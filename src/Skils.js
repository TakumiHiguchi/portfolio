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
            device: 'pc',
            size:{
                width: 0,
                height: 0
            }
        }
    }
    componentDidMount() {
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0) {
        this.setState({ device: 'sp' });
      } else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
        // iOS12 まで
        this.setState({ device: 'tab' });
      } else if (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
        // iOS13 以降
        this.setState({ device: 'tab' });
      } else {
        this.setState({ device: 'pc' });
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
        let psPosition = [3,6,9];
        if(this.state.device != "pc"){
          psPosition = [1,2,3];
          width = this.state.size.width;
        }
        return(
               <div className="skilBox ">
                   <div className="flex-jus-around">
                       <RadarChart cx={width/psPosition[1]} cy={width/psPosition[1]} outerRadius={width/psPosition[2]} width={width/psPosition[0]} height={width/psPosition[0]} data={data}>
                         <PolarGrid />
                         <PolarAngleAxis dataKey="subject" />
                         <PolarRadiusAxis />
                         <Radar name="Mike" dataKey="A" stroke="#4cba7a" fill="#4cba7a" fillOpacity={0.6} />
                       </RadarChart>
                       <RadarChart cx={width/psPosition[1]} cy={width/psPosition[1]} outerRadius={width/psPosition[2]} width={width/psPosition[0]} height={width/psPosition[0]} data={data1}>
                         <PolarGrid />
                         <PolarAngleAxis dataKey="subject" />
                         <PolarRadiusAxis />
                         <Radar name="Mike" dataKey="A" stroke="#4cba7a" fill="#4cba7a" fillOpacity={0.6} />
                       </RadarChart>
                       <RadarChart cx={width/psPosition[1]} cy={width/psPosition[1]} outerRadius={width/psPosition[2]} width={width/psPosition[0]} height={width/psPosition[0]} data={data2}>
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

