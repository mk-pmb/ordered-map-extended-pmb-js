// -*- coding: utf-8, tab-width: 2 -*-

import 'usnam-pmb';
import pTapeAllInList from 'p-tape-all-in-list';

import makeMap from '../omep.mjs';

import basicTests from './basics.mjs';

pTapeAllInList({
  extraApi: { makeMap },
}, [
  ...basicTests,
]);
