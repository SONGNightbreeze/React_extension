import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

	state = {carName:"benz"}

	changeCar = ()=>{
		this.setState({carName:'BMW'})
	}

	/* shouldComponentUpdate(nextProps,nextState){
		// console.log(this.props,this.state); 
		// console.log(nextProps,nextState); 
		return !this.state.carName === nextState.carName
	} */

	render() {
		console.log('Parent---render');
		const {carName} = this.state
		return (
			<div className="parent">
				<h3>im Parent component</h3>
				<span>car name：{carName}</span><br/>
				<button onClick={this.changeCar}>change car</button>
				<Child/>
			</div>
		)
	}
}

class Child extends PureComponent {

	/* shouldComponentUpdate(nextProps,nextState){
		console.log(this.props,this.state); 
		console.log(nextProps,nextState); 
		return !this.props.carName === nextProps.carName
	} */

	render() {
		console.log('Child---render');
		return (
			<div className="child">
				<h3>im Child component</h3>
				<span>receive car name：{this.props.carName}</span>
			</div>
		)
	}
}
