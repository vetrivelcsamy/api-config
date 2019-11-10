import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchParms = () => {
	const [post, updatepost] = useState([]);
	const [id, updateid] = useState(1);

	useEffect(() => {
		async function getUser() {
			try {
				const response = await axios.get(`https://reqres.in/api/users/${id}`);
				updatepost(response.data.data);
			} catch (error) {
				console.error(error);
			}
		}
		getUser();
	}, [id]);

	return (
		<div>
			<h1>Hello world</h1>
			<input id='id' value={id} placeholder='id' onChange={e => updateid(e.target.value)} />
			<p>{post.id}</p>
			<img src={post.avatar} alt={post.first_name} />
			<h1>
				{post.first_name} {post.last_name}
			</h1>
			<h2>{post.email}</h2>
		</div>
	);
};

export default SearchParms;
