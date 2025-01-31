const FeatureCard = ({ logo, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-blue-200 transition-all duration-300 ease-in-out">
      <div className="mb-4">{logo}</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 md:text-lg">{description}</p>
    </div>
  );
};

export default FeatureCard;
