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
			<ul>
				{list}
			</ul>
		)
	}
}
export default UL;