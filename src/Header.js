import React,{Component} from 'react';

import './Header.scss'

export default class Header extends Component{
    
    
    render(){
        return(
               <header className="flex-jus-between">
                    <h1>Takumi's portfolio</h1>
                    <div className="flex">
                        <a href="#concept">Concept</a>
                        <a href="#skils">My Skils</a>
                        <a href="#works">Wroks</a>
                        <a href="#eb">Engineer blog</a>
                        <a href="#eb">News</a>
                        <a href="#contact">Contact</a>
                    </div>
               </header>
               );
    }
}
