import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ShowComment = (props) => {
	return (
		<div>
			{props.commentProps.map((comment, index) => {
				return (
					<p key={index} className="container answer_box my-4">
						{comment.comment}
					</p>
				);
			})}
		</div>
	);
};

export default ShowComment;
