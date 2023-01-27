import * as service from './HomeViewService.js';

export const SelectNews = (view) => { service.getNewsboardData(view); }

export const SelectQA = (view) => { service.getQAboardData(view); }

export const InitializeScreen = (view) => {
    SelectNews(view);
    SelectQA(view);
}

