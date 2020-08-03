import React,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faChevronRight,faChevronDown,faShareAlt,faShieldAlt,faBook } from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import './Works.scss'

const IMAGEURL = "https://hiiragi000.xsrv.jp";

const images = [[IMAGEURL+"/images/portfolio/Proofly.jpeg"],
                [IMAGEURL+"/images/portfolio/Nurture.jpeg",IMAGEURL+"/images/portfolio/Nurture1.jpeg",IMAGEURL+"/images/portfolio/Nurture2.jpeg",IMAGEURL+"/images/portfolio/Nurture3.jpeg"],
                [IMAGEURL+"/images/portfolio/musicBW.jpeg"],
                [IMAGEURL+"/images/portfolio/bitcoinex1.jpeg"],
                [IMAGEURL+"/images/portfolio/portfolio.jpeg"],
                [IMAGEURL+"/images/portfolio/portfolio.jpeg"]];

const ChevronRight ={
    marginLeft:"10px"
  }
export default class Works extends Component{
    constructor(props){
        super(props);
        this.state={
            popup:false,
            target:0
        }
    }
    
    PopupToggle(type){
        this.setState({popup:!this.state.popup,target:type});
    }
    render(){
        
        return(
               <div>
                   <div className="wroksBox">
                        <div className="flex-jus-between worksInner">
                            <div className="workBox" onClick={() => this.PopupToggle(0) }>
                                <img alt="Proofly" src={IMAGEURL+"/images/portfolio/Proofly.jpeg"} />
                                <p>Proofly</p>
                            </div>
                            <div className="workBox" onClick={() => this.PopupToggle(1) }>
                                <img alt="Nurture" src={IMAGEURL+"/images/portfolio/Nurture.jpeg"} />
                                <p>N:urture</p>
                            </div>
                            <div className="workBox" onClick={() => this.PopupToggle(2) }>
                                <img alt="musicBW" src={IMAGEURL+"/images/portfolio/musicBW.jpeg"} />
                                <p>music.branchwith</p>
                            </div>
                        </div>
                        <div className="flex-jus-between worksInner">
                            <div className="workBox" onClick={() => this.PopupToggle(3) }>
                                <img alt="bitcoinex1" src={IMAGEURL+"/images/portfolio/bitcoinex1.jpeg"} />
                                <p>Bitcoin explorer</p>
                            </div>
                            <div className="workBox" onClick={() => this.PopupToggle(4) }>
                                <img alt="Proofly" src={IMAGEURL+"/images/portfolio/portfolio.jpeg"} />
                                <p>Takumi's Portfolio</p>
                            </div>
                            <div className="workBox">
                            </div>
                        </div>
                   </div>
                   <Popup isPopup={this.state.popup} target={this.state.target} action={(type) => this.PopupToggle(type)}/>
               </div>
               );
    }
}

class Popup extends Component{
    Body(type){
        if(type == 0){
            return(
                   <div className="popWrokBox flex">
                        <div className="imageBox">
                            <img alt="Proofly" src={images[type][0]} />
                        </div>
                        <Proofly />
                   </div>
                   );
        }else if(type == 1){
            return(
                   <div className="popWrokBox flex">
                        <div className="imageBox">
                            {images[type].map((data)=>
                                <img alt="Nurture" src={data} />
                            )}
                        </div>
                        <Nurture />
                   </div>
                   );
        }else if(type == 2){
            return(
                   <div className="popWrokBox flex">
                        <div className="imageBox">
                            <img alt="music.branchwith" src={images[type][0]} />
                        </div>
                        <MBW />
                   </div>
                   );
        }else if(type == 3){
            return(
                   <div className="popWrokBox flex">
                        <div className="imageBox">
                            {images[type].map((data)=>
                                <img alt="bitcoin explorer" src={data} />
                            )}
                        </div>
                        <Bitcoin />
                   </div>
                   );
        }else{
            return(
            <div className="popWrokBox flex">
                 <div className="imageBox">
                     <img alt="Takumi's portfolio" src={images[type][0]} />
                 </div>
                 
            </div>
            );
        }
    }
    render(){
        return(
               <div className={this.props.isPopup ? 'popup popup_toggle_effect' : 'popup popup_toggle_effect_de'} >
                   <div className="popup_wrap" onClick={() => this.props.action(this.props.target) }></div>
                   <div className="whir flex">
                        {this.Body(this.props.target)}
                   </div>
               </div>
               
               
               );
    }
}

const Proofly = (props) =>{
    return(
           <div className="body scroll-y">
               <h3>Proofly</h3>
               <div className="lineIncontentbox">
                   <p>indexを承認制にした文章投稿サイトです。記事をERC721の規格に沿ってトークン化し著作権を紐付け、トークンを売買することで、記事の著作権を”スマートに”移動できる環境の構築を目指しています。</p>
                       <p>ゆくゆくは画像や動画などもトークン化し、コンテンツに価値をつけ、画像を公開するだけで収入を得られるプラットフォームを目指しています。</p>
                       <p>現在は、ERC721のトークン周りを製作中です。</p>
                   <p>制作時間: 3ヶ月〜</p><p>運営開始日: 2020年5月12日</p>
               </div>
               <div className="h-line">使用言語、フレームワーク等</div>
               <div className="lineIncontentbox">
                   <p>HTML、SCSS(CSS)、jQuery(javaScript)、Ruby、Ruby on Rails、ethereum、solidity、git、Heroku</p>
               </div>
               <div className="h-line">Links</div>
               <div className="lineIncontentbox">
                   <a className="linkblock LBcolor1" href="https://www.proofly.jp" target="_blank">Demo<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                   <a className="linkblock LBcolor2" href="https://github.com/TakumiHiguchi/Proofly" target="_blank">github<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
               </div>
           </div>
           );
}

const Nurture = (props) =>{
    return(
           <div className="body scroll-y">
               <h3>N:urture</h3>
               <div class="lineIncontentbox">
                   <p>日本大学生のための時間割管理アプリです。10年間分の時間割を、学期別にカレンダーという枠組みの中に保存して簡単に見ることができます。</p>
                   <p>作成したカレンダーは友人や先生、先輩と共有できます。</p>
                   <p>React.jsを初めて採用した作品で、SPAで制作しました。また、SPAで初めて、Oauth2での認証を導入しました。</p>
                   <p>制作期間: ver2.0: 2020/6/15 ~ 2020/7/31</p><p>運営開始日: 2020年8月1日</p><p>運営期間: -</p>
               </div>
               <div className="h-line">使用言語、フレームワーク等</div>
               <div className="lineIncontentbox">
                   <p>HTML、SCSS(CSS)、React.js、JSX、Java、Ruby(API)、Ruby on Rails(API)、PostgreSQL、Sqlite（開発）、git、Heroku</p>
               </div>
               <div className="h-line">Links</div>
               <div className="lineIncontentbox">
                   <div><a className="linkblock LBcolor1" href="https://java.cse.ce.nihon-u.ac.jp/daikibo2020/u306171/" target="_blank">Demo (Javaサーバ)<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a></div>
                   <a className="linkblock LBcolor1" href="https://github.com/TakumiHiguchi/Nurture-front" target="_blank">github(front)<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                   <a className="linkblock LBcolor2" href="https://github.com/TakumiHiguchi/Nurture-backendAPI" target="_blank">github(API)<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
               </div>
           </div>
           );
}

const MBW = (props) =>{
    return(
           <div className="body">
           <h3>music.branchwith</h3>
               <div class="lineIncontentbox">
                   <p>初めてRuby on Railsを使用したwebサイトです。Ruby on Railsを学習しながら制作したため、制作時間がかなりかかってしまいました。Herokuのschedulerを用いることで、毎日定刻にweb上から歌詞をスクレイピングし、DBに格納ののち、urlを生成して歌詞を自動公開しています。</p>
                   <p>また、スクレイピングした歌詞のYoutube動画のurlをGoogleAPIで取得し、自動で再生できるようにしています。（現在はquotaが足りないため停止）</p>
                    <p>サイト内の記事はほとんど全てclowdworksで募集したライターさんに執筆していただいています。（現在はProoflyに移行）</p>
                   <p>制作時間: ３ヶ月</p><p>運営開始日: 2018年10月29日</p>
               </div>
               <div className="h-line">使用言語、フレームワーク等</div>
               <div className="lineIncontentbox">
                   <p>HTML、SCSS(CSS)、React.js、Ruby、PostgreSQL、Sqlite（開発）、mySQL（開発）、Ruby on Rails、git、Heroku等</p>
               </div>
               <div className="h-line">Links</div>
               <div className="lineIncontentbox">
                   <a className="linkblock LBcolor1" href="https://mbw6.herokuapp.com" target="_blank">Demo<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                   <a className="linkblock LBcolor2" href="https://github.com/TakumiHiguchi/music.branchwith" target="_blank">github<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
               </div>
           </div>
           );
}

const Bitcoin = (props) =>{
    return(
           <div className="body">
               <h3>Bitcoin explorer</h3>
               <div class="lineIncontentbox">
                   <p>Bitcoinのブロックヘッダーやトランザクションなどを簡単に見ることができるサイトです。ブロックチェーンが一般な人にもっと身近なものになって欲しいという願いの元制作しました。</p>
                   <p>VPSのCentOS7上にbitcoindをインストールして起動し、bitcoin-cli経由のwebAPIを作成して、そこから値を取得しています。</p>
                   <p>このサービスの開発記は、Proofly上で公開しています。</p>
                   <p>制作時間: 10日</p><p>運営開始日: 2020年2月11日</p>
               </div>
               <div className="h-line">使用言語、フレームワーク等</div>
               <div className="lineIncontentbox">
                   <p>HTML、SCSS(CSS)、jQuery(javaScript)、Apache、Bitcoin-cli、Ruby、Ruby on Rails、git、Heroku、CentOS7</p>
               </div>
               <div className="h-line">Links</div>
               <div className="lineIncontentbox">
                   <a class="linkblock LBcolor1" href="https://techlife.branchwith.com/blockchain/btc_exproler" target="_blank">Demo<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
                   <a class="linkblock LBcolor2" href="https://github.com/TakumiHiguchi/techlife.branchwith" target="_blank">github<FontAwesomeIcon style={ChevronRight} icon={faChevronRight} /></a>
               </div>
           </div>
           );
}
