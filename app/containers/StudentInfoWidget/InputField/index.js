/*
 * InputField
 *
 * Displays credentials of the subject.
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';

import { Input } from 'nordnet-ui-kit';

import WorkOptions from '../WorkOptions';

export const styleSheet = createStyleSheet('InputField', () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    width: '48%',
    margin: '1%',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
  },
}));

class InputField extends React.Component {
  constructor(props, { styleManager }) {
    super(props, styleManager);
    this.styleManager = styleManager;
  }
  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div className={classes.container}>
        <Input className={classes.item} label="Name" placeholder="First and second name" />
        <Input className={classes.item} label="Email" placeholder="email@domain.com" />
        <Input className={classes.item} label="Phone" placeholder="+46 70 111 22 33" />
        <Input className={classes.item} label="Programme" placeholder="Your studies" />
        <Input className={classes.item} label="Graduation Year" placeholder="Expected graduation year" />
        <WorkOptions className={classes.item} />
      </div>
    );
  }
}

InputField.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default InputField;
