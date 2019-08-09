/* tslint:disable:max-line-length */
import { icons } from './svgLists';
const svgSprite = (contents, type) => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="__RMC_MOBILE_SVG_SPRITE_NODE_${type}__"
    style="display:none;overflow:hidden;width:0;height:0"
  >
    <defs>
      ${contents}
    </defs>
  </svg>
`;
const renderSvgSprite = (type) => {
    const svgContent = icons[type].split('svg')[1];
    const symbol = `<symbol id=${type}${svgContent}symbol>`;
    return svgSprite(symbol, type);
};
const loadSprite = (type) => {
    if (!document) {
        return;
    }
    const existing = document.getElementById(`__RMC_MOBILE_SVG_SPRITE_NODE_${type}__`);
    const mountNode = document.body;
    if (!existing) {
        mountNode.insertAdjacentHTML('afterbegin', renderSvgSprite(type));
    }
};
export default loadSprite;
//# sourceMappingURL=IconSvg.js.map