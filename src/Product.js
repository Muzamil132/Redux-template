import React, { Component } from 'react'
import { unstable_batchedUpdates } from 'react-dom'

 class Product extends Component {
    constructor(props){
        super(props)
        this.state={qty:9,productid:''}
  }
  addtocart=(id)=>{
   this.setState((state)=>({
       qty:this.state.qty+1,
       productid:id
       
   }))
  }
    render() {
        return (
            <div>
                <button
                onClick={()=>this.addtocart(1)}
                >
                    Add cart
                </button>
                <button
                onClick={()=>this.addtocart(2)}
                >
                    Add cart
                </button>
                <button
                onClick={()=>this.addtocart(3)}
                >
                    Add cart
                </button>
                <Card productid={this.state.productid} qty={this.props.qty}/>
            </div>
        )
    }
}


 class Card extends Component {

    constructor(props){
          super(props)
          this.state={qty:this.props.qty,productid:this.props.productid}
    }
    // componentDidMount(){
    //     console.log('compoent update hoya ha ' )
    // }
    // componentDidUpdate(){
    //     console.log('compoent update  ka bad chalna ha   hoya ha ' )
    // }
    // update=()=>{
    //     this.setState({
    //         qty:this.state.qty+1
    //     })
    // }

    static getDerivedStateFromProps(props,state){
  if(props.qty!==state.qty){
      return{
          qty:props.qty
      }
      return null
  }
    }
        render() {
        return (
            <div>
           <h1>ye ha e nh product</h1>
           <button onClick={this.update}>
               update
            
           </button>
           <h4>{this.state.qty}</h4>
            </div>
        )
    }
}

export {
    Product,Card
}
