import React,{Component} from "react";
import PropTypes from 'prop-types';

class LiModel extends Component{
	constructor(props){
		super(props);
		this.state={
			db:false,
			txt:this.props.txt
		}
	}
	changeChecked = () => {
    this.props.PchangeChecked(this.props.id);
    // console.log(this.props.id);
  }
	//删除
	remove=()=>{
		this.props.remove(this.props.id)
	}
	//双击事件
	dbclick=()=>{
		this.setState({
			db:true,
			txt:this.props.txt
		},()=>{
			this.db.focus();
		})
	}
	
	change=()=>{
		this.setState({
			txt:this.db.value
		})
	}
	
	//失焦后改变原来的数据信息
	blur=()=>{
		
		let {id,checked}=this.props;
		let newData={
			id:id,
			checked:checked,
			txt:this.state.txt
		}
		this.props.changeText(newData);
		
		this.setState({
			db:false
			
		})
	}
	keyup=(ev)=>{
		if(ev.keyCode===13){
			this.blur();
		}
		if(ev.keyCode===27){
			this.setState({
				txt:this.props.txt,
				db:false
			})
		}
	}
  render(){
  	let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    if(this.state.db){
    	sClass+='editing';
    }
    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange = {this.changeChecked}
                checked={checked} />
              <label onDoubleClick={this.dbclick}>{txt}</label>
              <button 
              className="destroy"
              onClick={this.remove}
              ></button>
          </div>
          <input 
          	ref={(elem)=>{this.db=elem}}
          	className="edit"
          	onBlur={this.blur}
          	value={this.state.txt}
          	onChange={this.change}
          	onKeyUp={this.keyup}
          />
      </li>
    )
  }
}
LiModel.propTypes={
	checked:PropTypes.bool,
	txt:PropTypes.String
}
export default LiModel;