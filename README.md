## React_extension
* Chapter 1. setState
	1. setState(stateChange, [callback])------object method
 		1. stateChange is a state change object (this object reflects the state change)
            	2. callback is an optional function that is called after the state has been updated and the interface has been updated (after the render call)
					
	2. setState(updater, [callback])------function method
            	1. updater is a function that returns a stateChange object.
            	2. updater can receive state and props.
            	3. callback is an optional function that is called after the state has been updated and the interface has been updated (after the render call)

	* If the new state does not depend on the original state ===> use the object method
	* If the new state depends on the original state ===> use the function method
	* If you need to get the latest state after the execution of setState(), 
					to get data in the second callback function
* Chapter 2. lazyLoad
```js
	const Login = lazy(()=>import('@/pages/Login'))
	
	<Suspense fallback={<h1>loading.....</h1>}>
        	<Switch>
            		<Route path="/xxx" component={Xxxx}/>
            		<Redirect to="/login"/>
        	</Switch>
    	</Suspense>
```
* Chapter 3. hooks
	* Hook is a new feature/ syntax added in React version 16.8.0
	* It allows you to use state and other React features in function components
	1. State Hook: React.useState()
	2. Effect Hook: React.useEffect()
	3. Ref Hook: React.useRef()
* Chapter 4. Fragment
	* There is no need to have a real DOM root tag
	```
	<Fragment><Fragment>  
	or 
	<></>
	```
* Chapter 5. Context
	* Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language
	* component communication method, often used between "ancestor component" and "descendant component"
* Chapter 6. optimize
* Chapter 7. renderProps
* Chapter 8. ErrorBoundary
