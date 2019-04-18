const svgIcons = require.context('./icons', false, /\.svg$/);
const list = {};

svgIcons.keys().forEach(icon => {
  const name = icon
    .replace('./rexicon-32-', '')
    .replace('-f.svg', '')
    .replace('-l.svg', '')
    .replace('.svg', '');

  const original = icon.replace('./rexicon-32-', '').replace('.svg', '');

  list[name] = {
    name,
    filled: '',
    isFilled: false,
    lined: '',
    isLined: false,
    original,
  };
});

svgIcons.keys().forEach(icon => {
  const name = icon
    .replace('./rexicon-32-', '')
    .replace('-f.svg', '')
    .replace('-l.svg', '')
    .replace('.svg', '');
  const iconClassName = icon.replace('./rexicon-32-', '').replace('.svg', '');

  if (icon.indexOf('-f.svg') !== -1) {
    list[name].isFilled = true;
    list[name].filled = iconClassName;
  } else if (icon.indexOf('-l.svg') !== -1) {
    list[name].isLined = true;
    list[name].lined = iconClassName;
  } else {
    list[name].isFilled = true;
    list[name].filled = iconClassName;
  }
});

const IconList = [];
// eslint-disable-next-line
for (const x in list) {
  IconList.push(list[x]);
}

export default IconList;
