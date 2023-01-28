import React, { useCallback, useState } from "react";
import Datas from './Datas.js';
import styled, { css } from 'styled-components';

const FQAComponent = styled.div`
`;

const CategoryGroup = styled.div`
`;

const Category = styled.button`
`;

const Block = styled.details`
`;

const BlockQuestion = styled.summary`
`;

const BlockAnswer = styled.p`
`;

function FQA() {

  var first = Datas[0].name;

  const [category, setCategory] = useState(first);
  const onClicked = useCallback((e) => {
    setCategory(e.target.innerText);
    console.log(category);
  },
    [category]);

  var blocks = GetBlocks(category);

  return (
    <FQAComponent id="fqa">
      <CategoryGroup class="faq_category_group">
        {
          Datas.map(data => {
            return (
              <Category class="faq_category" onClick={onClicked}>
                {data.name}
              </Category>
            );
          })
        }
      </CategoryGroup>
      {
        blocks.map(block => {
          return (
            <Block class="faq_block">
              <BlockQuestion class="faq_block_question">{block['question']}</BlockQuestion>
              <BlockAnswer class="faq_block_answer">{block['answer']}</BlockAnswer>
            </Block>
          );
        })
      }
    </FQAComponent>
  );
}

function GetBlocks(category) {

  var target = Datas.find(d => d.name == category);

  if (target == null)
    return [];

  return target.blocks;
}

export default FQA;