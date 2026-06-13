/* Seed data for the Fabric workspace prototype. */
const LISTS = [
  { id: 'writing', label: 'Writing', color: 'var(--terracotta-500)' },
  { id: 'studio',  label: 'Studio',  color: 'var(--sage-500)' },
  { id: 'admin',   label: 'Admin',   color: 'var(--marsh-500)' },
  { id: 'reading', label: 'Reading', color: 'var(--ochre-600)' },
];

const SEED_TASKS = [
  { id: 't1', title: 'Draft the spring field notes', list: 'writing', estimate: '50m', view: 'today', done: false },
  { id: 't2', title: 'Review Mara’s loom studies', list: 'studio', estimate: '25m', view: 'today', done: false },
  { id: 't3', title: 'Reply to the residency invitation', list: 'admin', estimate: '10m', view: 'today', done: false },
  { id: 't4', title: 'Walk — leave the phone at home', list: 'reading', estimate: '30m', view: 'today', done: true },
  { id: 't5', title: 'Sketch three cover directions', list: 'studio', estimate: '45m', view: 'later', done: false },
  { id: 't6', title: 'Gather references for the dye essay', list: 'reading', estimate: '20m', view: 'later', done: false },
  { id: 't7', title: 'Send the quarter close to Theo', list: 'admin', estimate: '15m', view: 'later', done: false },
  { id: 't8', title: 'File the studio lease renewal', list: 'admin', estimate: '15m', view: 'done', done: true },
  { id: 't9', title: 'Finish reading the Morris chapter', list: 'reading', estimate: '40m', view: 'done', done: true },
  { id: 't10', title: 'Outline the natural-dye workshop', list: 'writing', estimate: '35m', view: 'done', done: true },
];

window.FabricApp = window.FabricApp || {};
window.FabricApp.LISTS = LISTS;
window.FabricApp.SEED_TASKS = SEED_TASKS;
window.FabricApp.listById = (id) => LISTS.find((l) => l.id === id) || LISTS[0];

const SEASONS = [
  { id: 'spring', label: 'Spring', icon: 'sprout',    texture: 'fabric-weave',  note: 'New growth' },
  { id: 'summer', label: 'Summer', icon: 'sun',       texture: 'fabric-ribbed', note: 'Long light' },
  { id: 'autumn', label: 'Autumn', icon: 'leaf',      texture: 'fabric-felt',   note: 'Turning leaves' },
  { id: 'winter', label: 'Winter', icon: 'snowflake', texture: 'fabric-frost',  note: 'Quiet frost' },
];
window.FabricApp.SEASONS = SEASONS;
window.FabricApp.seasonById = (id) => SEASONS.find((s) => s.id === id) || SEASONS[0];
