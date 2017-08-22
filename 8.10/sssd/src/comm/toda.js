import React,{Component} from 'react';
import Li from './Li';

class Toda extends Component{
	
	constructor(){
		super();
		this.state={
			value:'',
			arr:['你是谁想干嘛']
		}
	}
	change=(ev)=>{
		this.setState({
			value:ev.target.value
		})
			
		
	}
	maItem=(ev)=>{
		if(ev.KeyCode==13){
			let {arr}=this.state;
			let arr2=Object.assign(arr);
			arr2.push(ev.target.value);
			this.setState({
				arr:arr2,
				value:''
			})
				
			
		}
	}
	render(){
		let {arr}=this.state;
		let arr2=arr.map((e,i)=>{
			let data={
				txt:e,
				num:i,
				key:i
			
			}
			return <Li {...data} /> 
		})
		
		
		return(
			<div>
				<input type='text'
					value={this.state.value}
					onChange={this.change}
					onKeyUp={this.maItem}
				/>
				<ul>
					{arr2}
				</ul>
			</div>
		)
	}
	
}

export default Toda;
