import React from 'react';
import Datas from './FAQDatas.js';
import styled, { css } from 'styled-components';

/*

const CustomLabel = styled.label`
height: 100%;
display: block;
background: white;
border: 2px solid hsla(150, 75%, 50%, 1);
border-radius: 20px;
padding: 1rem;
margin-bottom: 1rem;
//margin: 1rem;
text-align: center;
box-shadow: 0px 3px 10px -2px hsla(150, 5%, 65%, 0.5);
position: relative;
`;

const CustomInput = styled.input`
  display: none;
  &:not(:disabled) ~ label {
    cursor: pointer;
  }
  &:disabled ~ label {
    color: hsla(150, 5%, 75%, 1);
    border-color: hsla(150, 5%, 75%, 1);
    box-shadow: none;
    cursor: not-allowed;
  }
  &:checked + ${CustomLabel}{
    background: hsla(150, 75%, 50%, 1);
    color: hsla(215, 0%, 100%, 1);
    box-shadow: 0px 0px 20px hsla(150, 100%, 50%, 0.75);
    &::after {
    color: hsla(215, 5%, 25%, 1);
    font-family: FontAwesome;
    border: 2px solid hsla(150, 75%, 45%, 1);
    content: "\f00c";
    font-size: 24px;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 2px 5px -2px hsla(0, 0%, 0%, 0.25);
  }
}
`;
*/

const RadioGroups = styled.div`
text-align: center;
`;

function Radio({target, checked, onChangeTarget}){
  return (

    <div>
      <input type="radio" name="radio-group" value={target} id={target} checked={checked} onChange={onChangeTarget}/>
      <label>
        <p>{target}</p>
      </label>
    </div>
  );
}

function FAQCategories( {category, changeCategory} ) {
    
  return (
    <RadioGroups >
      {
        Datas.map(data => {
          return (
            <Radio target={data.name} checked={data.name === category} onChangeTarget={changeCategory}/>
          );
        })
      }
    </RadioGroups>
  );
}

export default FAQCategories;