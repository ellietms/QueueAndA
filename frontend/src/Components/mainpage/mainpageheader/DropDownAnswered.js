import React from "react";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";


const Select = styled.select`     
  cursor:pointer;
  margin-right:20px;
  font-weight:bold;
  color:#a31607;
}
  &:hover {
    color: red;
    border-top:1px solid #ed4343; 
  }`

const DropDownAnswered = ({ showQuestionWithNoAnswer }) => {
  return (
     <Select
        className="border-0 bg-transparent ml-2"
        onChange={(event) => showQuestionWithNoAnswer(event.target.value)}
      >
        <option value={false} className='text-white bg-dark'>All Questions</option>
        <option value={true} className='text-white bg-dark'> No answers</option>
      </Select>          
  );
};

export default DropDownAnswered;
