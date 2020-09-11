import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactHtmlParser from "react-html-parser";
import DataTime from "./DataTime";

const ShowComment = ({commentProps}) => {
	return (
		<div>
			{commentProps.map((comment, index) => {
				return (
					<div key={index} className="container comment bg-white text-primary small">
						<div>
						<i className="fas fa-comments pr-1"></i>	
						{ReactHtmlParser(`${comment.comment}`)}
						<DataTime datatime={comment.createdAt}/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShowComment;
