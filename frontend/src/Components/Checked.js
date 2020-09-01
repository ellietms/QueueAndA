import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Loader from "./Loader";

const Checked = ({ questionDetails }) => {
	return (
		<div className="container">
			{questionDetails ? (
				<div>
					{questionDetails.length === 0 ? (
						<div className="title_font pl-2 d-flex m-3">This Question needs &nbsp; Answers </div>
					) : (
						<div className="title_font pl-2 d-flex m-3">
							<div className="fas fa-check-square h1 checked rounded" />
					    <span className="pl-2">{questionDetails.length} Answers</span>
						</div>
					)}
				</div>
			) : (
				<Loader/>
			)}
		</div>
	);
};

export default Checked;
