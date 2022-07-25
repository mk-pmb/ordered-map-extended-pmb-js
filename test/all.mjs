// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import 'usnam-pmb';

import test from 'p-tape';

import makeMap from '../omep.mjs';

import basicTests from './basics.mjs';

const allTests = [
  ...basicTests,
];

const extraApi = {
  makeMap,
};

allTests.forEach(f => test(f.name, t => f(Object.assign(t, extraApi))));
