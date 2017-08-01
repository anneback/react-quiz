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
    justifyContent: 'space-between',
  },
  workTitle: {
    display: 'flex',
    justifyContent: 'space-between',
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
        <div className={classes.workTitle}>Work?</div>
        <Input label="Fulltime" type="checkbox" />
        <Input label="Internship" type="checkbox" />
        <Input label="Thesis" type="checkbox" />
      </div>
    );
  }
}

WorkOptions.propTypes = {
  onSubmitForm: PropTypes.func,
};

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
