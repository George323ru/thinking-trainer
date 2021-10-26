import './Button.css';

const Button = ({ onChange }) => {


  return (
    <button className="main__button"
      onClick={onChange} >Центрист</button>

  );
}

export default Button;
