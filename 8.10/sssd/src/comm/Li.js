import React,{Component} from 'react';

class Li extends Component{
	render(){
		return (
			<li>
				<span className="red">{this.props.num}</span>
				<span className="active">{this.props.txt}</span>
			</li>
		)
	}
}
export default Li;