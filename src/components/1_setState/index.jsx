import React, { Component } from 'react'

export default class Demo extends Component {

	state = {count:0}

	add = ()=>{
		//setState: Object method
		const {count} = this.state
		this.setState({count:count+1},()=>{
			console.log(this.state.count);
		})
		//console.log(this.state.count); // 0   

		//setState: function method
		this.setState( state => ({count:state.count+1}))
	}

	render() {
		return (
			<div>
				<h1>count：{this.state.count}</h1>
				<button onClick={this.add}>click on +1</button>
			</div>
		)
	}
}
