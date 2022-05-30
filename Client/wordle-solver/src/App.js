import { useState } from "react";

import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Output from "./components/Output";

import "./App.css";

const App = ()=> {
  const [result,setResult]= useState()
	return (
		<div className="App">
			<div className="container-fluid">
				<Navbar />
				<hr />
				<main>
					<div className="row vh-75 px-2">
						<Input  result={result} setResult={setResult}/>
						<Output result={result} />
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
