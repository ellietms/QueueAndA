import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Checked = ({ questionDetails }) => {
	return (
		<div>
			{questionDetails ? (
				<div>
					{questionDetails.length === 0 ? (
						<div> Question need  </div>
					) : (
						<div className="px-2">
							<div className="fas fa-check-square h1 checked rounded" />
						</div>
					)}
				</div>
			) : (
				<div> Something is wrong </div>
			)}
		</div>
	);
};

export default Checked;
