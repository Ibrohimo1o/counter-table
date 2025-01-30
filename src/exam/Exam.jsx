import './Exam.css'


const students = [
	{
		firstName: 'Ali',
		lastName: 'Valiyev',
		age: 18,
		level: 'HTML',
		coins: 120,
	},
	{
		firstName: 'Zuhra',
		lastName: 'Karimova',
		age: 19,
		level: 'CSS',
		coins: 150,
	},
	{
		firstName: 'Bekzod',
		lastName: 'Saidov',
		age: 20,
		level: 'JavaScript',
		coins: 200,
	},
	{
		firstName: 'Madina',
		lastName: 'Nazarova',
		age: 21,
		level: 'React',
		coins: 250,
	},
	{
		firstName: 'Aziz',
		lastName: 'Rahimov',
		age: 22,
		level: 'Node.js',
		coins: 300,
	},
]

const Exam = () => {
	return (
	<div className='exam-container'>
		
		<table className='exam-table'>
			<thead>
			<tr>
				<th>No</th>
				<th>firstName</th>
				<th>lastName</th>
				<th>age</th>
				<th>level</th>
				<th>coins</th>
			</tr>
			</thead>
			<tbody>
				{students.map((student,i)=> {
					return (
						<tr>
							<td>{i + 1}</td>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{student.age}</td>
							<td>{student.level}</td>
							<td>{student.coins}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	</div>
	)
}

export default Exam



// {students.map((student, id) => {
// 	return (
// 		<tr key={id}>
// 			<td>{student.firstName}</td>
// 			<td>{student.lastName}</td>
// 			<td>{student.age}</td>
// 			<td>{student.level}</td>
// 			<td>{student.coins}</td>
// 		</tr>
// 	)
// })}