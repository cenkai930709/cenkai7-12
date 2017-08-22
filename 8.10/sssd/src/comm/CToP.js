import React,{Component} from 'react';
import '../css/index.css';

class CToP extends Component{
	constructor(){
		super();
		this.state={
			arr:[
				{name:'第一个对象',checked:false,id:1},
				{name:'第二个对象',checked:false,id:2},
				{name:'第三个对象',checked:false,id:3},
				{name:'第四个对象',checked:false,id:4},
				{name:'第五个对象',checked:true,id:5}
			]
		}
	}
	changeChild=(id)=>{
		let {arr}=this.state;
		let arr2=Object.assign(arr);
		arr2.forEach((e,i)=>{
			if(e.id===id){
				e.checked=!e.checked
			}
		})
		this.setState({
			arr:arr2
		})
	}
	render(){
		let {arr}=this.state;
		let list=null;
		list=arr.map((e,i)=>{
			let data={
				txt:e.name,
				key:i,
				id:e.id,
				checked:e.checked,
				changeChild:this.changeChild
				
			}
			return <Li {...data} />
			
		})
		console.log(arr);
		return(
			<ul>
				{list}
			</ul>
		)
	}
	
}
class Li extends React.Component{
	change=()=>{
		this.props.changeChild(this.props.id);
	}
	render(){
		return (
			<li>
				<input type='checkbox'
					checked={this.props.checked}
					onChange={this.change}
				/>
				<span>{this.props.txt}</span>
			</li>
		)
	}
	
}


export default CToP;