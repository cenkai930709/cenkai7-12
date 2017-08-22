import React,{Component} from 'react';
import Li from './Li';

class UL extends Component{
	constructor(){
		super();
		this.state={
			arr:['思考角度看','问题','想办法解决'],
			num:0
			
		}
	}
	click=()=>{
		let {arr}=this.state;
		let arr3=Object.assign(arr);
		arr3.push('搞笑');
		this.setState({
			arr:arr3,
			num:9
		})
	}
	
	render(){
		let {arr,num}=this.state;
		let list=null;
		list=arr.map((e,i)=>{
			let data={
				txt:e,
				num:i,
				key:i
			}
			return <Li {...data}/>
		})
		
		
		return(	
			<div>
				<button onClick={this.click}>点击按钮</button>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}
export default UL;