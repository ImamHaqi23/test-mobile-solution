/* eslint-disable react/prop-types */
const Display = ({ value }) => {
  return (
    <div className="w-full h-20 bg-gray-200 flex items-center justify-end px-4 text-3xl font-semibold">
      {value}
    </div>
  );
};

export default Display;
