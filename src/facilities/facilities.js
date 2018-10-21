import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HiContentScreening from './__hcs/facilities__hcs';
import HiThroughputScreening from './__hts/facilities__hts';
import Home from './facilities__home';
import IntegratedDataAnalysis from './__ida/facilities__ida';
import NextGenSequencing from './__ngs/facilities__ngs';
import RouteNotFound from '../router/route-not-found';
import Proteomics from './__proteomics/facilities__proteomics';

const Facilities = () => (
  <Switch>
    <Route
      exact
      path="/facilities"
      component={Home}
    />
    <Route
      exact
      path="/facilities/hi-content-screening"
      component={HiContentScreening}
    />
    <Route
      exact
      path="/facilities/hi-throughput-screening"
      component={HiThroughputScreening}
    />
    <Route
      exact
      path="/facilities/next-gen-sequencing"
      component={NextGenSequencing}
    />
    <Route
      exact
      path="/facilities/data-analysis"
      component={IntegratedDataAnalysis}
    />
    <Route
      exact
      path="/facilities/proteomics"
      component={Proteomics}
    />
    <RouteNotFound />
  </Switch>
);

export default Facilities;
