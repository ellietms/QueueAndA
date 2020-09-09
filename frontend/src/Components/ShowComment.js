import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ShowComment = ({commentProps}) => {
	return (
		<div>
			{commentProps.map((comment, index) => {
				return (
					<div key={index} className="container comment">
						<div>
						<i className="fas fa-comments pr-1"></i>	
						{comment.comment}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShowComment;
