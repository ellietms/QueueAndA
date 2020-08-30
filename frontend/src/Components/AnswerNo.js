import React from 'react';

const AnswerNo = (props) => {
	let NumAnswers;
	 if(props.answerNo === 1) {
	 	NumAnswers = (
	 		<div className="has_answers d-flex ml-auto">
	 		<span>{props.answerNo} Answer</span>
	 	</div>
	 	)
	 }
	 else if (props.answerNo > 1){
		NumAnswers = (
			<div className="has_answers d-flex ml-auto">
			<span>{props.answerNo} Answers</span>
		</div>
		)
	 }

	 else{
	 	NumAnswers = (
			<div className="no_answers d-flex ml-auto">
	 		<span>Needs Answer</span>
	 	</div>
	 	)
	 }
	return (
		<div>
			{NumAnswers}
		</div>
	);
};

export default AnswerNo;
