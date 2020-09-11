import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DataTime from "./DataTime";

const ShowComment = ({commentProps}) => {
	return (
		<div>
			{commentProps.map((comment, index) => {
				return (
					<div key={index} className="container comment">
						<div>
						<i className="fas fa-comments pr-1"></i>	
						{comment.comment}
						<DataTime datatime={comment.createdAt}/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShowComment;
