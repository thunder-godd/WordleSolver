import { useState } from "react";

 const LetterInputs = ({ id, handleChange }) => {
    
 	return (
 		<input
 			id={id}
 			
 			type="text"
 
 			className="form-control form-control-sm border border-warning"
 			placeholder="-"
 			onChange={e=>handleChange(e.target.value, id)}
 		/>
 	);
};

const Input = ({result , setResult}) => {
	const [entry, setEntry] = useState({});
	const [correct, setCorrect] = useState("");
	const [incorrect, setIncorrect] = useState("");
    const [correctly_placed,setCorrectly]=useState("")
	const [letters, setLetters] = useState(['','','','','']);
    const Apiurl="https://peaceful-coast-17173.herokuapp.com"
	const handleChange = (value, id) => {
        console.log(typeof id)
        setLetters(prevState=>{
            prevState[id]=value;
            return [...prevState] 
        })
        setCorrectly(letters.toString().replaceAll(',', ''))
     }
	const handleClick = (e) => {
		e.preventDefault();
		setEntry({
			correct: correct,
			incorrect: incorrect,
			correctly_placed: correctly_placed,
		});
        console.log(entry)
		const submitInput = async (url = "", data = {}) => {
			const response = await fetch(url, {
				method: "POST",
				 mode: "cors",
				 credentials: "include", // include, *same-origin, omit
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
					"Access-Control-Allow-Origin": "*",
				},
				
				body: JSON.stringify(data), // body data type must match "Content-Type" header
			});
			console.log(data);
			return response.json();
		};
		submitInput(`${Apiurl}/result`, entry).then(
			(data) => {
				setResult(data.words)
			}
		);
	};

	return (
		<div className="col-sm h-100 input" id="input">
			<form className="card">
				<div className="form-group">
					<label htmlFor="correct">Correct Letters</label>
					<input
						type="text"
						id="correct"
						className="form-control border border-warning"
						name="correct"
						placeholder="Letters in Green and Yellow"
						onChange={(e) => setCorrect(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="incorrect">Incorrect Letters</label>
					<input
						type="text"
						id="incorrect"
						className="form-control border border-warning"
						name="incorrect"
						placeholder="Letters in Grey "
						onChange={(e) => setIncorrect(e.target.value)}
					/>
				</div>

				 <div className="placed">
					<label>Correctly Placed Letters </label>
					<div className="input-group correctly-placed">
						
                       { letters.map((letter, id) => (
                             
                             <LetterInputs
                                        key={id}
                                        id={parseInt(id)}
                                        handleChange={handleChange}
                                     />
                       ))
                                 

                                }
					</div>
				</div> 
				<button
					className="btn btn-warning"
					onClick={(e) => handleClick(e)}
					id="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Input;
