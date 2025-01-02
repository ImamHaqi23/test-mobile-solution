/* eslint-disable react/prop-types */
const Button = ({ label, onClick, className }) => {
  return (
    <button
      className={`w-16 h-16 m-2 bg-gray-300 hover:bg-gray-400 text-xl rounded-lg ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
