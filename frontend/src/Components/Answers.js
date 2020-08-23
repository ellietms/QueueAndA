import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AnswerBoxes from './AnswerBoxes';

const Answers = ({ questionDetails }) => {
	return (
		<div>
			{questionDetails ? (
				<div>
					{questionDetails.map((answer, index) => {
						return (
							<div className="container">
								<div key={index}>
									<AnswerBoxes answer={answer} />
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div>No answer</div>
			)}
		</div>
	);
};

export default Answers;
