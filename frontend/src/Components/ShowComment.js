import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactHtmlParser from "react-html-parser";

const ShowComment = ({commentProps}) => {
	return (
		<div>
			{commentProps.map((comment, index) => {
				return (
					<div key={index} className="container comment bg-white text-primary small">
						<div>
						<i className="fas fa-comments pr-1"></i>	
						{ReactHtmlParser(`${comment.comment}`)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShowComment;
