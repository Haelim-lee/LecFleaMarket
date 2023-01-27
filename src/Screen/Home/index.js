import React, { useState, useEffect, useContext } from 'react';
import { HomeViewContext, withContext } from './HomeViewContext';
import * as property from './HomeViewProperty.js';
import * as actions from './HomeViewActions.js';
import NewsViewer from './NewsViewer/index.js';
import '../style.css';


function Home() {
    const { context, dispatch } = useContext(HomeViewContext); //모듈 전역 컨텍스트
    const [state, setState] = useState(property.InitializeState); //모듈 지역 스테이트
    const view = { state, setState, context, dispatch };

    useEffect(() => { actions.InitializeScreen(view); });

    return(
        <div id='WrapperBox' className='Wrapper'>
            <div className='HomeMasterPanel'>
                <div style={{display: 'none'}} className='FinderBox'>
                    <h1>LecFleaMarket</h1>
                </div>
                <div className="content">
                    <NewsViewer NewsData= {state.News}/>
                    <NewsViewer NewsData= {state.QA}/>
                </div>
            </div>
        </div>
    );
}

// export default withContext(Home);

// 라우터 먹는지 ㅡㅡ 테스트용
const Home2 = () => {
    return 'Home';
  }
export default Home2;

