import {useEffect, useState} from 'react';
import Comments from '../../comments/Comments';

function DetPost(props) {
	console.log(props);
	let {match:{params:{postId}}} = props;
	let [comment, setComment] = useState([]);
	useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/comments')
	  .then(value => value.json())
	  .then(value =>{
		  value = value.filter(value=> value.postId === +postId)
		  return setComment([...value])})
	},[postId])

	return (
		<div>
			{
				comment.map(value => <Comments key={value.id} item={value}/>)
			}
		</div>
	);
}

export default DetPost;