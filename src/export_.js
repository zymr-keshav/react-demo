export const ALPHA = 'alpha';
export const BETA = 'beta';
const gm = (num) => console.log(`Good Morning # ${num}`);

const gn = () => console.log('Good Night');

export { gm as nm }; // send as whatever alias
export { gn as default }; // or  export default gm
