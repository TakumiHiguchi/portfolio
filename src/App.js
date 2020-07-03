import React,{Component} from 'react';
import './App.scss';



import Header from './Header';
import News from './News';
import Works from './Works';
import Skils from './Skils';

const IMAGEURL = "https://hiiragi000.xsrv.jp";



function App() {
  return (
    <div className="App">
      <Header />
      <section className="headSection">
          <div className="headSection-inner">
              <h2 className="leftIndex">
                    About
              </h2>
              <div className="headSction-title">
                  <h1>Takumi's portfolio</h1>
                  <div>Web Enginner/Blockchain Engineer</div>
                  <p>エンジニアTakumiのポートフォリオサイト。エンジニアとしての活動内容と、成長した記録をまとめています。</p>
                  <p>「あなたに私の魅力が伝わって欲しい」そんな想いでこのサイトを制作しました。</p>
                  <p>どうぞお時間の許す限りサイト内をご散策ください。</p>
              </div>
              
          </div>
          
      </section>
      <section className="section secConcept">
          <div className="section-inner">
              <h2 className="leftIndex">
                    CONCEPT
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
      <section className="section secSkils">
          <div className="section-inner lound">
              <h2 className="leftIndex">
                    My Skils
              </h2>
              <Skils />
          </div>
      </section>
          
      <section className="section secWork">
          <div className="section-inner">
              <h2 className="leftIndex">
                    Wroks
              </h2>
              <Works />
              
          </div>
      </section>
          
      <section className="section secNews">
          <div className="section-inner">
              <h2 className="leftIndex">
                    Engineer blog and News
              </h2>
              <News />
              
          </div>
          
      </section>
    </div>
  );
}

export default App;
