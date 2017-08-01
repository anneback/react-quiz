/*
 * WorkOptions
 *
 * Displays the avaliable work types.
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';

import { Input } from 'nordnet-ui-kit';

export const styleSheet = createStyleSheet('WorkOptions', () => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  itemLable: {
    fontFamily: 'Open Sans',
    margin: 0,
  },
  workLable: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    margin: 0,
  },
}));

class WorkOptions extends React.Component {
  constructor(props, { styleManager }) {
    super(props, styleManager);
    this.styleManager = styleManager;
  }
  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div className={classes.container}>
        <span className={classes.workLable}>Work?</span>
        <Input className={classes.itemLable} label="Fulltime" type="checkbox" />
        <Input className={classes.itemLable} label="Internship" type="checkbox" />
        <Input className={classes.itemLable} label="Thesis" type="checkbox" />
      </div>
    );
  }
}

WorkOptions.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
//
// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }
//
// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(WorkOptions);
export default WorkOptions;
