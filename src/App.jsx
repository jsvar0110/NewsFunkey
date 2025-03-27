import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default class App extends Component {
   pageSize = 6;
   constructor(props) {
      super(props);
      this.apiKey = import.meta.env.VITE_APP_NEWS_API || "";
      console.log("API Key:", this.apiKey);

      this.state = {
         progress: 0
      };
   }
   setProgress=(progress)=>{
      this.setState({progress:progress})
   }

   render() {
      return (
         <div>
            <BrowserRouter>
               <NavBar />
               <LoadingBar
                  color="#f11946"
                  height={3}
                  progress={this.state.progress}
                  // onLoaderFinished={() => setProgress(0)}
               />
               <Routes>
                  <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country="us" category="general" />} />
                  <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="business" pageSize={this.pageSize} country="us" category="business" />} />
                  <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
                  <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country="us" category="general" />} />
                  <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="health" pageSize={this.pageSize} country="us" category="health" />} />
                  <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="science" pageSize={this.pageSize} country="us" category="science" />} />
                  <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
                  <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
               </Routes>
            </BrowserRouter>
         </div>
      )
   }
}
