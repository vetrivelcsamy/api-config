import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [animal, updateAnimal] = useState([]);

	useEffect(() => {
		async function getUser() {
			try {
				const response = await axios.get(
					"https://gist.githubusercontent.com/vetrivelcsamy/8b0be509d060b95aa4bb75b6b7f515a0/raw/f7380d723908776a9eb51d9b2f77bff657f7dc18/test.json"
				);
				updateAnimal(response.data.slice(0, 20));
			} catch (error) {
				console.error(error);
			}
		}
		getUser();
	}, []);

	return (
		<div>
			<h1>Hello world</h1>
			{animal.map(ani => (
				<div key={ani.id}>
					<span>{ani.car_name}</span> - <b>{ani.car_model}</b> -
					<b style={{ color: ani.car_color }}>{ani.car_color}</b> - <b>{ani.car_year}</b>
					<img src={ani.image} alt={ani.car_name} />
				</div>
			))}
		</div>
	);
};

export default Search;
