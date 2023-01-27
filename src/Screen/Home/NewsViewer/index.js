import '../../style.css';


function NewsViewer(props) {
    return (
        <div className='boardcontainer' style={{ marginRight: '36px' }}>
            <table className='Newsboard'>
                <tbody>
                    {props.NewsData.map((Data) =>
                    (
                        <tr style={{ height: '35px' }}></tr>
                            
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NewsViewer;