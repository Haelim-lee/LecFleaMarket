export const getQAboardData = (view) => {
    fetch('/SelectQA')
        .then(res => res.json())
        .then(msg => view.setState(prevState => ({ ...prevState, QA: msg })))
        .catch(err => alert('오류'));
}

export const getNewsboardData = (view) => {
    fetch('/SelectNews')
        .then(res => res.json())
        .then(msg => view.setState(prevState => ({ ...prevState, News: msg })))
        .catch(err => alert('오류'));
}