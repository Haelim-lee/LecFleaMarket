import React from 'react';

function FAQBlocks(blocks) {

  var arr = new Array(blocks.length);

  blocks.forEach(block => {
    arr.push(CreateBlock(block));
  });

  return arr;
};

function CreateBlock(page) {

  return (
    <details class="faq_block">
      <summary class="faq_block_question">{page['question']}</summary>
      <p class="faq_block_answer">{page['answer']}</p>
    </details>
  );
}

export default FAQBlocks;