import React, { useCallback, useState } from "react";
import FAQCategories from './FAQCategories.js';
import FAQBlocks from './FAQBlocks.js';
import FAQDatas from './FAQDatas.js';

function QaBoard(){

  var first = FAQDatas[0].name;

  const [category, setCategory] = useState(first);
  const onChangeCategory = useCallback((e) =>
  {
    setCategory(e.target.value);
    console.log(category);
  }, 
  [category]);

  var target = FAQDatas.find(d => d.name == category);

  return (
    <div id="fqa">
      <FAQCategories categories={FAQDatas} changeCategory={onChangeCategory}/>
      {FAQBlocks(target.blocks)}
    </div>
  );
}

export default QaBoard;