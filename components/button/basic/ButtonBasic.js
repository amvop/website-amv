const ButtonBasic = ({ children }) => {
  return (
    <button
      type="button"
      className="px-8 py-3 font-medium text-lg rounded font-body bg-gray-100 text-gray-800"
    >
      {children}
    </button>
  );
};

export default ButtonBasic;
