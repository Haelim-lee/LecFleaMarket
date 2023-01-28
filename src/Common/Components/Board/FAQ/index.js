import React, { useCallback, useState } from "react";
import Datas from './Datas.js';
import styled, { css } from 'styled-components';

const FAQComponent = styled.div`
  margin-top : 10px;
  margin-bottom : 10px;
  margin-left : 10px;
  margin-right : 10px;
`;

const FAQTitle = styled.h2``;

const CategoryGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50px;
  margin-top : 30px;
  margin-bottom : 60px;
`;

const Category = styled.button`
  flex: 1;
  border: 1px solid;
  margin-left : 5px;
  margin-right : 5px;
`;

const Block = styled.details`
  margin-left : 5px;
  margin-right : 5px;
  margin-top : 10px;
  margin-bottom : 10px;
  border: 1px solid lightgray;
`;

const BlockQuestion = styled.summary`
  margin-left : 10px;
  margin-right : 10px;
  font-size: 20px;
`;

const BlockAnswer = styled.p`
  margin-top : 10px;
  margin-left : 20px;
  margin-right : 20px;
`;

function FAQ() {

  var first = Datas[0].name;

  const [category, setCategory] = useState(first);
  const onClicked = useCallback((e) => setCategory(e.target.innerText), [category]);

  var blocks = GetBlocks(category);

  return (
    <FAQComponent id="faq">

      <FAQTitle>FAQ</FAQTitle>

      <CategoryGroup>
        {
          Datas.map(data => {
            return (
              <Category onClick={onClicked}>{data.name}</Category>
            );
          })
        }
      </CategoryGroup>

      {
        blocks.map(block => {
          return (
            <Block>
              <BlockQuestion>{block['question']}</BlockQuestion>
              <BlockAnswer>{block['answer']}</BlockAnswer>
            </Block>
          );
        })
      }
    </FAQComponent>
  );
}

function GetBlocks(category) {

  var target = Datas.find(d => d.name == category);

  if (target == null)
    return [];

  return target.blocks;
}

export default FAQ;