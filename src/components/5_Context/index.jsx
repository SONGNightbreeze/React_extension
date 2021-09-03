import React, { Component } from 'react'
import './index.css'

//create Context Object
const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class A extends Component {

	state = {username:'tom',age:18}

	render() {
		const {username,age} = this.state
		return (
			<div className="parent">
				<h3>im A component</h3>
				<h4>my surname :{username}</h4>
				<Provider value={{username,age}}>
					<B/>
				</Provider>
			</div>
		)
	}
}

class B extends Component {
	render() {
		return (
			<div className="child">
				<h3>im B component</h3>
				<C/>
			</div>
		)
	}
}

/* class C extends Component {
	//Declaration of acceptance context
	static contextType = MyContext
	render() {
		const {username,age} = this.context
		return (
			<div className="grand">
				<h3>im C component</h3>
				<h4>i receive username from A component:{username},age is{age}</h4>
			</div>
		)
	}
} */

function C(){
	return (
		<div className="grand">
			<h3>im C component</h3>
			<h4>i receive username from A component:
			<Consumer>
				{value => `${value.username},age is ${value.age}`}
			</Consumer>
			</h4>
		</div>
	)
}