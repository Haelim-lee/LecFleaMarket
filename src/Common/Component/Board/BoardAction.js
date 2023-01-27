// import ReactDOM from 'react-dom';
// import NewsBoard from './NewsBoard';
// import QaBoard from './QaBoard';

export const InitializeScreen = (props, Data, MenuArray) => {
    // var News = MenuArray[0];
    // var QA = MenuArray[1];
    
    // if (props.Type === 'NewsBoard') {
    //     if (Data.NUM == 0)
    //         ReactDOM.render(<NewsBoard Selecter={(e) => ActiveFind(News, MenuArray)} LinkAction={true} />, document.getElementById('Board_View'));
    //     else
    //         ReactDOM.render(<NewsBoard Data={Data} Selecter={(e) => ActiveFind(News, MenuArray)} LinkAction={true} />, document.getElementById('Board_View'));
    // }
    // else if (props.Type === 'QaBoard') {
    //     if (Data.NUM == 0)
    //         ReactDOM.render(<QaBoard Selecter={(e) => ActiveFind(QA, MenuArray)} LinkAction={true} />, document.getElementById('Board_View'));
    //     else
    //         ReactDOM.render(<QaBoard Data={Data} Selecter={(e) => ActiveFind(QA, MenuArray)} LinkAction={true} />, document.getElementById('Board_View'));
    // }
}

export const ActiveFind = (Boards, MenuArray) => {
    ActiveCheck(Boards, MenuArray);
}

export const ActiveCheck = (Menu, MenuArray) => {
    // try {
    //     MenuArray.map((Item, Index) => {
    //         if (Item.current.className === 'TabActive')
    //             Item.current.className = '';
    //     })
    //     if (Menu.current.className === 'TabActive')
    //         Menu.current.className = '';
    //     else {
    //         Menu.current.className = 'TabActive';
    //         if (Menu.current.id === 'NewsBoard')
    //             ReactDOM.render(<NewsBoard Selecter={ActiveFind} LinkAction={false} />, document.getElementById('Board_View'));
    //         else if (Menu.current.id === 'QaBoard')
    //             ReactDOM.render(<QaBoard Selecter={ActiveFind} LinkAction={false} />, document.getElementById('Board_View'));
    
    //     }
    // }
    // catch (err) {

    // }
}