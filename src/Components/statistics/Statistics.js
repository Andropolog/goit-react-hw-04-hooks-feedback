const Statistics = ({ good, neutral, bad, total, percentage }) => {
    
return (
        <section>
                <p>good: {good}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
                <p>total: {total}</p>
                <p>Good: {percentage}% </p>
        </section>
    );
}

export default Statistics;