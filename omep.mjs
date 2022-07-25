// -*- coding: utf-8, tab-width: 2 -*-

const extraApi = {

  // Unfortunately, we cannot work with a prototype and Object.create():
  // "Method get Map.prototype.size called on incompatible receiver #<Map>"

  getOrInit(key, initVal, initFunc) {
    if (this.has(key)) { return this.get(key); }
    let val = initVal;
    if (initFunc) { val = initFunc(val); }
    this.set(key, val);
    return val;
  },


  async getOrInitPr(key, initVal, initFunc) {
    if (this.has(key)) { return this.get(key); }
    let val = await initVal;
    if (initFunc && (!this.has(key))) { val = await initFunc(val); }
    if (this.has(key)) {
      const err = new Error('Race condition while inizializing key ' + key);
      err.name = 'EMapInitRaceCondition';
      err.key = key;
      err.lostVal = val;
      throw err;
    }
    this.set(key, val);
    return val;
  },


  del(key) { return this.delete(key); },
  keyList() { return Array.from(this.keys()); },
  valList() { return Array.from(this.values()); },
  toDict() { return Object.fromEntries(this.entries()); },


  upd(dict) {
    const map = this;
    if (!dict) { return map; }
    Object.entries(dict).forEach(([k, v]) => map.set(k, v));
    return map;
  },


  weakSet(k, v) {
    if (!this.has(k)) { this.set(k, v); }
    return this;
  },


  weakUpd(dict) {
    const map = this;
    if (!dict) { return map; }
    Object.entries(dict).forEach(([k, v]) => (map.has(k) || map.set(k, v)));
    return map;
  },


};


const EX = function upgradeMap(origMap) {
  const map = (origMap || new Map());
  Object.assign(map, extraApi);
  return map;
};


Object.assign(EX, {
  extraApi,
});


export default EX;
