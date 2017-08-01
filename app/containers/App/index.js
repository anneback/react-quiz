/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import { createStyleSheet } from 'jss-theme-reactor';
import styled from 'styled-components';

import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background-color: white;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Anno 2017"
        defaultTitle="Nordnet Quiz"
        meta={[
          { name: 'description', content: 'Nordnet Quiz App' },
        ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
