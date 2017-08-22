import React,{Component} from "react";

class FooterList extends Component{
	//通过点击切换视图
	changeView=()=>{
		this.props.changeView(this.props.hash);
	}
	render(){
		
		let child=null;
		let defaultChilden=[
			<span>H</span>,
			<span>W!</span>
		];
		if(this.props.children){
			child=React.Children.map(this.props.children,(child)=>{
				return child;
			})
			
		}else{
			child=React.Children.map(defaultChilden,(child)=>{
				return child;
			})
		}
		return(
			<li>
				<a
					href={this.props.hash}
					className={(this.props.view==this.props.hash)?'selected':''}
					onClick={this.changeView}
				>{this.props.name}</a>
				{child}
			</li>
		)
	}
};
export default FooterList;
