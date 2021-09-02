const FeedbackOptions = ({ fn }) => {
    return (
        <>
            <div>
                <button type="button" onClick={() => fn('good')}>good</button>
                <button type="button" onClick={() => fn('neutral')}>neutral</button> 
                <button type="button" onClick={() => fn('bad')}>bad</button>
            </div>
        </>
    );
}

export default FeedbackOptions;