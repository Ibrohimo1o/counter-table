import './Counter.css'

import { useState } from 'react'

const Counter = () => {
	const [count,setCount] = useState(0)
		

	return (
		<div className='counter-wrapper'>
			<div className="counter-card">
			
			<h1>{count}</h1>
			<div>
				<button onClick={()=> setCount(count - 1)}>-</button>
				<button onClick={()=> setCount(0)}>reset</button>
				<button onClick={()=> setCount(count + 1)}>+</button>
				</div>
			</div>
		</div>
	)
}

export default Counter