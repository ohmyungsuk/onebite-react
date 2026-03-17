const Button = ({ text, color = "black" }) => {
  console.log(text, color);

  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

export default Button;