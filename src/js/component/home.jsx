import React from "react";
import Form from "./Form.jsx";


//include images into your bundle



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<p>Todo list</p>
			<Form/>
		</div>
	);
};

export default Home;
