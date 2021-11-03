import './Button.css';

const Button = ({ onChange, color, nameButton }) => {


  return (
    <button
      className="main__button"
      style={{ background: color }}
      onClick={onChange}>{nameButton}</button>
  );
}

export default Button;
