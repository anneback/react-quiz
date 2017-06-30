/*
 * StudentInfoWidget
 *
 * Where the student inputs its credentials.
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import { Input, Button, Icon } from 'nordnet-ui-kit';

import WorkOptions from './WorkOptions';

export const styleSheet = createStyleSheet('StudentInfoWidget', () => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

class StudentInfoWidget extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, { styleManager }) {
    super(props, styleManager);
    this.handleClick = this.handleClick.bind(this);
    this.styleManager = styleManager;
  }

  // onClick() {
  //   this.setState({ active: capType });
  //   this.props.onClick(console.log('dasdasdd'));
  // }
  handleClick(e) {
    e.preventDefault();
    console.log('clicking');
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div>
        <Input label="Name" placeholder="First and second name" />
        <Input label="Email" placeholder="email@domain.com" />
        <Input label="Phone" placeholder="+46 70 111 22 33" />
        <Input label="Programme" placeholder="Your studies" />
        <Input label="Graduation Year" placeholder="Expected graduation year." />
        <WorkOptions />
        <div className={classes.buttonContainer}>
          <Button variant="primary" modifier="action" onClick={this.handleClick} >
            Go To Quiz
            <Icon.Balloon fill="white" stroke="white" />
          </Button>
        </div>
      </div>
    );
  }
}

StudentInfoWidget.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

StudentInfoWidget.defaultProps = {
  quizIsOn: false,
};

StudentInfoWidget.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
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
export default StudentInfoWidget;
