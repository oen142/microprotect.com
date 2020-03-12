/* @jsx jsx */

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { jsx } from '@emotion/core';

import Home from './Home';
import AboutUsPage from './AboutUsPage';
import PartnersPage from './PartnersPage';
import InsurancePage from './InsurancePage';
import ApplicationPage from './ApplicationPage';
import ChatBubble from '../ChatBubble';

import {
  BASE_MQ,
  backgroundColor,
} from '../../styles/constants-v5';

const styles = {
  container: {
    backgroundColor,
    fontFamily: 'Noto Sans KR',
    fontSize: '4vw',
    '& a': {
      textDecoration: 'none',
    },
    [BASE_MQ]: {
      fontSize: '1.5em',
    },
  },
};

export default function Root({ t }) {
  return (
    <div css={styles.container}>
      <Router>
        <Switch>
          <Route path="/about-us">
            <AboutUsPage t={t} />
          </Route>
          <Route path="/partners">
            <PartnersPage t={t} />
          </Route>
          <Route path="/insurances/care-discover">
            <InsurancePage t={t} product="carediscover" />
          </Route>
          <Route path="/insurances/care-college">
            <InsurancePage t={t} product="carecollege" />
          </Route>
          <Route path="/insurances/private-insurance">
            <InsurancePage t={t} product="privateinsurance" />
          </Route>
          <Route path="/applications/new">
            <ApplicationPage t={t} product="carediscover" />
          </Route>
          <Route path="/">
            <Home t={t} />
          </Route>
        </Switch>
      </Router>
      <ChatBubble />
    </div>
  );
}
