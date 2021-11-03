import './Button.css';

const Button = ({ onChange, color }) => {


  return (
    <button
      className="main__button"
      style={{ background: color }}
      onClick={onChange}>Центрист</button>
  );
}

export default Button;
