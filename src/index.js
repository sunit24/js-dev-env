import './index.css'
import numeral from 'numeral';

const coarseValue = numeral(1000).format('$0.00');
console.log(`I would pay ${coarseValue} for this awesome course`); //eslint-disable-line no-console
