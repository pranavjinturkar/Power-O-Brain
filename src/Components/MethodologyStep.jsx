const MethodologyStep = ({ logo, title, description }) => {
  return (
    <div className="flex space-x-4">
      <div className="bg-white p-3 rounded-full shadow-md">{logo}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MethodologyStep;
