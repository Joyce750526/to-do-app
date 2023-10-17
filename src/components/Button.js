import ButtonIcon from "../assets/Add_Plus.png";

const Button = (props) => {
  return (
    <button onClick={props.func}>
      <img src={ButtonIcon} alt="Button Icon" />
    </button>
  );
};
export default Button;
