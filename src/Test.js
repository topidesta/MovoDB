import React, { Component } from 'react';

export default class Test extends Component{
    state={
        toggle:this.props.toggle
    }

  toggle = () =>{
    this.setState({
      toggle:!this.state.toggle
    })
  }

    render(){
        const {toggle} = this
        return(
            <div>
                <h1>Welcome</h1>

                {this.state.toggle&&
                <p>this wont be viseble</p>}

                <PropCheck text={this.props.text}/>

                <button onClick={toggle}>show /hide</button>
            </div>
        );  
    }
}


class PropCheck extends Component{
    render(){
        return(
            <div>{this.props.text}</div>
        )
    }
}

