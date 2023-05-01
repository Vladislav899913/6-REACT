function Game({ step, question, onClickVariant, questions_length }) {
    const percentage = Math.round(step / questions_length * 100);
  
    return (
    <>
        <div className="progress">
            <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {question.variants.map((text, index) => {
                return <li onClick={() => onClickVariant(index)} key={index}>{text}</li>
            })}
        </ul>
    </>
  );
}

export default Game;