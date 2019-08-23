/*
 * @Author: Rain120
 * @Date: 2019-08-11 18:40:08
 * @LastEditTime: 2019-08-11 22:22:10
 */
import warning from 'warning';
let warned = {};
export function resetWarned() {
    warned = {};
}
export default (valid, component, message) => {
    if (!valid && !warned[message]) {
        warning(false, `[rmc-ui: ${component}] ${message}`);
        warned[message] = true;
    }
};
//# sourceMappingURL=warning.js.map