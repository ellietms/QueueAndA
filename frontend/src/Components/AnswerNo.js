import React from 'react';

const AnswerNo = (props) => {
	return (
		<ul className="ul_answer">
			<li>Answer</li>
			<li>{props.answerNo}</li>
		</ul>
	);
};

export default AnswerNo;
