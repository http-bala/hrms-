const Input = ({ className, ...props }) => {
    return (
      <input
        className={`w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  };
  
  export default Input;
  