import React from "react";

const CounterWithIconAndText = (data) => {
    data = data.data;
  var iconpath =
    "M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z";
  return (
    <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
      <svg width="20" height="20" fill="currentColor" className="text-indigo-600">
        <path d={iconpath} />
      </svg>
      <div className="ml-1">
        {data.average && <span className="text-black">{data.average}</span>}
        {data.count && <span className="sm:hidden md:inline"> ({data.count})</span>}
      </div>
      <div className="text-base font-normal mx-2">·</div>
      <div>{data.text}</div>
    </div>
  );
};

export default CounterWithIconAndText;
