import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';

export const styleSheet = createStyleSheet('QuizCodeItem', () => ({
  container: {
    display: 'flex',
  },
  question: {
    display: 'flex',
  },
}));

function QuizCodeItem({ question, codeSnippet }, { styleManager }) {
  const classes = styleManager.render(styleSheet);

  return (
    <li className={classes.container}>
      <div className={classes.question}>
        {question}
      </div>
      <div className={classes.question}>
        {codeSnippet}
      </div>
    </li>
  );
}

QuizCodeItem.propTypes = {
  question: PropTypes.string,
  codeSnippet: PropTypes.string,
};

QuizCodeItem.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default QuizCodeItem;
