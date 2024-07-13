import React from 'react';
import { RevolvingDot } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <RevolvingDot
      visible={true}
      height="60"
      width="60"
      color="blue"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;