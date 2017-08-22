import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import UL from './comm/app1';
//import Toda from './comm/toda';
//import UL from './comm/app';
//import CToP from './comm/CToP';
//import CTP from './comm/CTP';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';



import './todoList/css/index.css';
import HeadModel from './todoList/header';
import LiModel from './todoList/mai';
import FooTer from './todoList/footer';
//import registerServiceWorker from './registerServiceWorker';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			val:'',
			data:[],
			view:'#/all'
		}
	}
	//在react
	componentWillMount(){
		console.log('挂载之前')
	}
	componentDidMount(){
		this.setState({
			data:getItem('data')
		})
		console.log('挂载之后')
	}
	componentWillUnmount(){
		console.log('组件卸载')
	}
	//切换视图
	PchangeChecked=(id)=>{
		let {data}=this.state;
		let data2=Object.assign(data);
		data2.forEach(e=>{
			if(e.id===id){
				e.checked=!e.checked
			}
		})
		this.setState({
			data:data2
		})
		
	}
	//点击事件
	click=()=>{
		this.setState({
			val:''
		})
	}
	 //添加数据
	changeData=(newData)=>{
		let {data}=this.state;
		let data2=Object.assign(data);
		data2.unshift(newData);
		this.setState({
			data:data2,
			val:''	
		})
	}
	//修改输入框的内容
	change=(newval)=>{
		this.setState({
			val:newval
		})
	}
	//删除
	remove=(id)=>{
		let {data}=this.state;
		let data2=null;
		data2=data.filter((e,i)=>{
			return e.id !=id
		})
		this.setState({
			data:data2
		})
	}
	//全选
	allChange=()=>{
		let {checked}=this.all;
		let {data}=this.state;
		let data2=Object.assign(data);
		data2.forEach(e=>e.checked=checked);
		this.setState({
			data:data2
		})
		//组件卸载的方法
		//ReactDOM.unmountComponrntAtNode(document.getElementById("root"))
		
	}
	//替换数据
	changeText=(newData)=>{
		let {data} =this.state;
		let data2=Object.assign(data);
		data2.forEach((e,i)=>{
			if(e.id===newData.id){
				data2.splice(i,1,newData)
			}
		})
		this.setState({
			data:data2
		})
		
	}
	//清除完成项
	clearFinish=()=>{
		let {data} =this.state;
		let data2=Object.assign(data);
		
		data2=data2.filter(e=>{
			return !e.checked;
		});
		this.setState({
			data:data2
		})
		
	}
	//改变视图
	changeView=(newView)=>{
		this.setState({
			view:newView
		})
	}
	
  render(){
  	
  	let {data}=this.state;
  	let list=null;
  	let all=false;
  	let footer=null;
  	let changeAll=null;
  	
  	let filterView=Object.assign(data);
  	let len=data.length;
  	
  	filterView=filterView.filter(e=>{
  		//如果本次循环的e。checked为选中状态，那么用总长度 -1
  		if(e.checked)len--;
  		switch(this.state.view){
  			case '#/active':
	  			return !e.checked;
	  			break;
  			case '#/completed':
  				return e.checked;
  				break;
  			default:
	  			return Object.assign(data);
	  			break;
  		}
  	})
  	
  	list=filterView.map((e,i)=>{
  		let data={
  			key:i,
  			id:e.id,
  			txt:e.txt,
  			checked:e.checked,
  			PchangeChecked:this.PchangeChecked,
  			remove:this.remove,
  			changeText:this.changeText
  		}
  		return <LiModel {...data} />
  	})
  	
  	if(data.length){
  		all=data.every(e=>e.checked);
  		
  		changeAll=(
  			<input
	            className="toggle-all"
	            type="checkbox"
	            checked={all} 
	            onChange={this.allChange}
	            ref={(elem)=>{this.all=elem}}
	        />
  		)
  		//放置footerd的地方
  		let footerData={
  			num:len,
  			clearFinish:this.clearFinish,
  			changeView:this.changeView,
  			view:this.state.view
  		}
  		footer=(<FooTer {...footerData} />)
  		//只要数据发生变化，那么就会进render,进了render就会把最新数据存到本地。
  		localStorage.setItem('data',JSON.stringify(data));
  	}
  	
  	
  	
  	
    return (
      <div>
        <HeadModel 
        changeData={this.changeData}
        val={this.state.val} 
        change={this.change} 
        
        />
        <section className="main" ref={(elem)=>{this.main=elem}}>
          	{changeAll}
          <ul className="todo-list">
              {list}
          </ul>
      	</section>
      	
      		
       {footer}
        
        
      </div>
    )
  }
}
//获取本地的数据，如果本地有数据那么返回本地数据，否则返回[{checked:false,txt:'呵呵'，id：1}]
function getItem(data){
	return JSON.parse(localStorage.getItem(data)) || [{checked:false,txt:'呵呵',id:1}];
	
}


//只会进一次

ReactDOM.render(<App />,document.getElementById('root'));

if (module.hot) {
module.hot.accept();
}









//ReactDOM.render(<CTP />, document.getElementById('root'));
//ReactDOM.render(<UL />, document.getElementById('root'));
//registerServiceWorker();
