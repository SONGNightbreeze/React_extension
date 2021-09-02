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
* Chapter 3. hooks
* Chapter 4. Fragment
* Chapter 5. Context
* Chapter 6. optimize
* Chapter 7. renderProps
* Chapter 8. ErrorBoundary
