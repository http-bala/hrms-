const Card = ({ title, children, className }) => {
  return (
    <div className={`p-6 bg-gray-800 rounded-lg shadow-md ${className}`}>
      {title && <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
