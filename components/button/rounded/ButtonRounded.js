const ButtonRounded = ({ children }) => {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold text-lg rounded-full font-body bg-gray-100 text-gray-800"
    >
      {children}
    </button>
  );
};

export default ButtonRounded;
