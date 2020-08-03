import React,{Component} from 'react';
import axios from 'axios';
import './css/pc/News.scss'
import './css/sm/smNews.scss'

const ENDPOINT = "https://www.proofly.jp"

export default class News extends Component{
    constructor(props){
        super(props);
        
        var tbl  = [...Array(5)].map(k=>"a")
        
        this.state = {
            article:tbl
        }
    }
    componentDidMount(){
        this.loadBlog();
    }
    
    loadBlog(){
        //記事を取得
    axios.get(ENDPOINT + '/api/v1/article?ukey=takumiHiguchi&per=5')
        .then(response => {
            let insArticle = this.state.article
            response.data.articles.map((data,index) =>
                                       insArticle[index] = data
                               )
            
            this.setState({article: insArticle});
            console.log(this.state.article);
        })
        .catch(() => {
            console.log('通信に失敗しました');
        });
    }
    
    render(){
        return(
               <div className="newsBox flex">
                    <div className="engineer">
                        <h2 className="flex-jus-between">Engineer Blog<a href="https://www.proofly.jp/">prooflyより提供</a></h2>
                        <div className="en-wrap">
                            {this.state.article.map((article,index) =>
                                                    <BlogLine key={"blog" + index} data={article[0]}/>
                                                    
                             )}
                        </div>
                        <div className="flex-jus-center">
                            <a href="https://www.proofly.jp/nuser/takumiHiguchi/article" className="more">More</a>
                        </div>
                    </div>
                    <div className="news smNone">
                        <h2>News</h2>
                    </div>
               </div>
               );
    }
}

const BlogLine = (props) =>{
    let date = ["2020","","",""]
    try {
        date = props.data.created_at.split('/');
    }
    catch (e) {
        date = ["","","",""]
    }
    return(
           <a href={"https://www.proofly.jp/nuser/"+props.data.user_key+"/article/" + props.data.article_key} className="blogLine flex">
                <div className="dateCircle flex-jus-center">
                    <div className="dateCircleInner">
                        <div></div>
                        <div>{parseInt(date[0]) - 2000}/{date[1]}/{date[2]}</div>
                        <div>{date[3]}</div>
                    </div>
                </div>
                <div className="element">
                    <div className="title">
                        {props.data.title}
                    </div>
                    <div className="description smNone">
                        {props.data.description}
                    </div>
                    <div className="user">
                        {props.data.user_name}
                    </div>
                </div>
           
           </a>
           );
}
