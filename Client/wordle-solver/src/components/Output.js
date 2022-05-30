import { useState } from "react";

const Letter = ({ l }) => {
	return <span className="letter">{l}</span>;
};

const Word = ({ word }) => {
	let w = [];
	for (let i = 0; i < 5; i++) {
		w.push(word[i]);
	}
	return (
		<div className="word">
			{w.map((l, id) => (
				<Letter key={id} l={l} />
			))}
		</div>
	);
};

const Output = ({result}) => {
	const [words, setWords] = useState(
        result);
	return (
		<div className="col-sm h-100">
			<div className="card " id="output">
				<div className="title">Words</div>
				<hr />
                {result ?<div className="words">
					{words.map((word,id) => (
						<Word key={id} word={word} />
					))}
				</div> :
                
                <div className="no-result">
                    <p>Fill the form and hit Submit to get a list of words</p>

                </div> }
				
			</div>
		</div>
	);
};

export default Output;
