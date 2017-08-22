import React,{Component} from "react";
class HeadModel extends Component{
	constructor(props){
		super(props);
//		this.state={
//			value:this.props.val
//		}
	}
	change=(ev)=>{
//		this.setState({
//			value:ev.target.val
//		})
		this.props.change(ev.target.value);
	}
	//回车
	keyup=(ev)=>{
		if(ev.keyCode===13){
			let json={
				txt:ev.target.value,
				id:+new Date,
				checked:false
			}
			this.props.changeData(json)
		}
	}
	
	
  render(){
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.val}
            onChange={this.change}
            onKeyUp={this.keyup}
            />
      </header>
    )
  }
}
export default HeadModel;