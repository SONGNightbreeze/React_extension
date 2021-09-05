import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

	state = {
		// Identifier
		hasError:'' 
	}

	static getDerivedStateFromError(error){
		console.log('@@@',error);
		return {hasError:error}
	}

	componentDidCatch(){
		console.log('errors are counted and fed back to the server');
	}

	render() {
		return (
			<div>
				<h2>im Parent component</h2>
				{this.state.hasError ? <h2>Try again later</h2> : <Child/>}
			</div>
		)
	}
}
