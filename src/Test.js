import React, { Component } from 'react';

export default class Test extends Component{

    componentDidMount()
    {
        console.log("Component mounted")
    }

    state={
        toggle:this.props.toggle,
        text:"ddd"
    }

  toggle = () =>{
    this.setState({
      toggle:!this.state.toggle
    })
  }

  submit = () =>{
    this.setState({text:this.text.value})
  }

    render(){
        const {toggle} = this
        return(
            <div>
                <h1>Welcome</h1>
                {this.state.text}
                {this.state.toggle&&
                <p>this wont be viseble</p>}
                <Foo/>
                <AgeChecker age={this.state}/>
                <PropCheck text={this.props.text}/>
                <input type="text" ref ={(input)=>this.text = input}/>
                <button onClick={this.submit}>submti</button>

                {this.submit}
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

class Foo extends Component {
    handleClick() {
      return(
          <div>clicked</div>
      )
    }
    render() {
      return (<div> <button onClick={this.handleClick}>Click Me</button>
      </div>)
    }
  }

class AgeChecker extends Component{

    CheckAge(){
        var res = ""
        if(this.props.age<18){
            res = <div>age is 18+</div>
        }
        else{
            res = <div>kut</div>
        }
        return res
    }

    render(){
        return(
            this.CheckAge()
        )
    }
}



