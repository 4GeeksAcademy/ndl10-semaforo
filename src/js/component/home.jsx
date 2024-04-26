import React, { useState } from "react";



//include images into your bundle


//create your first component
const Home = () => {
	const [color, setColor] = useState("green");
	const changeColor = () => {
		// Cambiar el color del semáforo según el estado actual
		switch (color) {
			case 'red':
				setColor('yellow');
				break;
			case 'yellow':
				setColor('green');
				break;
			case 'green':
				setColor('red');
				break;
			default:
				setColor('red');
				break;
		}
	};
	const turnAllPurple = () => {
		// Para cambiar el estado de todas las luces al morado. No funciona, no veo donde esta el fallo o fallos.
		setColor('purple');
	};


	return (


		<div>
			<div className="holder"></div>

			<div className="trafficlight container mb-5">

				<div className={"light red " + (color === "red" ? "active" : "")} onClick={() => setColor("red")}>

				</div>
				<div className={"light yellow " + (color === "yellow" ? "active" : "")} onClick={() => setColor("yellow")}>

				</div>
				<div className={"light green " + (color === "green" ? "active" : "")} onClick={() => setColor("green")}>

				</div>




			</div>
			<div class="d-grid gap-2 d-md-flex justify-content-md-end me-5">
				<button className="striped btn btn-primary me-md-2" type="button" onClick={changeColor}>Change color</button>
				<button className="striped btn btn-primary" type="button" onClick={turnAllPurple} >Surprise!</button>
			</div>
		</div >

	);
};

export default Home;
