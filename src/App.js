import React,{Component} from 'react';
import './css/pc/App.scss';
import './css/sm/smApp.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faChevronRight,faChevronDown,faShareAlt,faShieldAlt,faBook } from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; //twitterアイコン

import Header from './Header';
import News from './News';
import Works from './Works';
import Skils from './Skils';

const IMAGEURL = "https://hiiragi000.xsrv.jp";

const ChevronRight ={
    marginLeft:"10px"
  }

function App() {
  return (
    <div className="App">
      <section className="headSection">
          <div className="headSection-inner">
              <Header />
              <h2 className="smNone leftIndex">
                    About
              </h2>
              <div className="headSction-title">
                <div className="titleBox">
                    <h1>Takumi's portfolio</h1>
                    <div className="subtitle">Web Enginner/Blockchain Engineer</div>
                    <div className="linkBox pcNone">
                    <a href="https://twitter.com/taku_blockchain">Twitter<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                    <a href="https://github.com/TakumiHiguchi/">Github<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                </div>
                </div>
                <div className="hContent smNone">
                    <p>エンジニアTakumiのポートフォリオサイト。エンジニアとしての活動内容と、成長した記録をまとめています。</p>
                    <p>「あなたに私の魅力が伝わって欲しい」そんな想いでこのサイトを制作しました。</p>
                    <p>どうぞお時間の許す限りサイト内をご散策ください。</p>
                    
                </div>
                <div className="linkBox smNone">
                    <a href="https://twitter.com/taku_blockchain">Twitter<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                    <a href="https://github.com/TakumiHiguchi/">Github<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                </div>
              </div>
              
          </div>
          
      </section>
      <section className="section secConcept backOp" id="concept">
          <div className="section-inner opInner">
              <h2 className="leftIndex">
                    Concept
              </h2>
              <div className="conceptBox flex">
                  <div className="absConcept">
                      <h3>ITを中心とした技術革新によって広がる<br />所得格差社会を変えたい。</h3>
                      <p>日々進歩をつづけるIT技術。<br />そんなIT技術は少しずつ私たちの生活を<br />より良いものに変えてきました。</p>
                      <p>しかし、IT技術は、進歩と同時に<br />所得格差も少しずつ広げてしまいました。</p>
                      <p>そんな社会で私たちITエンジニアは<br />技術の進歩だけに目を向ければ良いのでしょうか？</p>
                      <p>いいえ、違います。</p>
                      <p>我々ITエンジニアはIT技術の進歩によって広がった<br />所得格差社会をIT技術によって変える必要があります。</p>
                      <p>これは、私たちの責務です。</p>
                  </div>
                  <div className="imgConcept"><img src={IMAGEURL+"/images/portfolio/lg.jpg"} /></div>
              </div>
          </div>
      </section>
      <section className="section secSkils" id="skils">
          <div className="section-inner lound">
              <h2 className="leftIndex">
                    My Skils
              </h2>
              <Skils />
          </div>
      </section>
          
      <section className="section secWork" id="works">
          <div className="section-inner">
              <h2 className="leftIndex">
                    Wroks
              </h2>
              <Works />
              
          </div>
      </section>
          
      <section className="section secNews" id="eb">
          <div className="section-inner">
              <h2 className="leftIndex">
                    Engineer blog and News
              </h2>
              <News />
              
          </div>
          
      </section>
      <footer className="flex-jus-center" id="contact">
          <div>© 2019 - 2020　Takumi's portfolio</div>
      </footer>
    </div>
  );
}

export default App;
