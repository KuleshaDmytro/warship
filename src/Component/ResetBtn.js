import '.././style.css'

export const ResetBtn = ({reset}) => {
return <button className="resetBtn" type='button' onClick={reset}>Почати гру заново</button>;
}