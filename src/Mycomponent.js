import React, { Component } from 'react'

export default class Mycomponent extends Component {
      
     state={
         count:0
     }

      increase=()=>{
          this.setState(
              (previous)=> ({ count:this.previous.count+1})
          )
      }

    render() {
     const {count}=this.state
    
        return (
            <div>
               <h1>{count}</h1> 
                <button  onClick={this.increase}>increase</button>
            </div>
        )
    }
}
