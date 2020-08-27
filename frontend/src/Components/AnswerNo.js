import React from 'react';

const AnswerNo = (props) => {
	console.log(typeof props.answerNo);
	let NumAnswers;
	 if(props.answerNo !== 0) {
	 	NumAnswers = (
	 		<div className="has_answers d-flex ml-auto">
	 		<span>Answer {props.answerNo}</span>
	 	</div>
	 	)
	 }
	 else{
	 	NumAnswers = (
			<div className="No_answers d-flex ml-auto">
	 		<span>Answer {props.answerNo}</span>
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
