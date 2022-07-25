// -*- coding: utf-8, tab-width: 2 -*-


function upper(s) { return String(s).toUpperCase(); }


const EX = [

  function emptyMap(t) {
    t.plan(5);
    const m = t.makeMap();
    t.same(m.size, 0);
    t.same(Array.from(m.keys()), []);
    t.same(m.keyList(), []);
    t.same(Array.from(m.values()), []);
    t.same(m.valList(), []);
  },


  function updAndWeakUpd(t) {
    t.plan(6);
    const m = t.makeMap().upd({
      hi: 'hello',
      cu: 'goodbye',
    }).weakUpd({
      hi: 'welcome',
      re: 'back again',
    });
    t.same(m.size, 3);
    t.same(m.keyList(), ['hi', 'cu', 're']);
    t.same(m.valList(), ['hello', 'goodbye', 'back again']);
    t.same(m.get('hi'), 'hello');
    t.same(m.get('cu'), 'goodbye');
    t.same(m.get('re'), 'back again');
  },


  function simpleGetOrInit(t) {
    t.plan(5);
    const m = t.makeMap();
    t.same(m.toDict(), {});
    t.same(m.getOrInit('hi', 'hello'), 'hello');
    t.same(m.getOrInit('cu', 'goodbye', upper), 'GOODBYE');
    t.same(m.getOrInit('cu', 'farewell', upper), 'GOODBYE');
    t.same(m.toDict(), { hi: 'hello', cu: 'GOODBYE' });
  },


];

export default EX;
