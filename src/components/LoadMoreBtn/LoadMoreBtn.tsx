import React from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;