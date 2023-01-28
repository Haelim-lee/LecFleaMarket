import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React from 'react';
import Datas from './FAQDatas.js';


function FAQCategories( {category, changeCategory} ) {
    const categories = GetCategories(Datas);    

    return (
      <div>
        <select onChange={changeCategory}>
          {GetCategoryItems(categories)}
        </select>
      </div>
    );
  };

function GetCategories( datas ){
  var arr = new Array(datas.length);

  datas.forEach(data => { 
    arr.push(data.name);
  });

  return arr;
}

function GetCategoryItems( categories ){

  var arr = new Array(categories.length);

  categories.forEach(category => {
    arr.push(GetCategoryItem(category));
  });

  return arr;
}

function GetCategoryItem(category){
  return (
    <option>{category}</option>
  );
}


export default FAQCategories;