var l = require('./simple-loan.js');
var _ = require('underscore');

console.log(l.repayment_amount({ term_in: 10, i_in: 0.04, principal_in: 100000, missed_repayment_year_in:0, year_in:0 }));
/*
console.log(
  _.range(11).map(
    (year_in) =>
      +l
        .balance({ year_in, term_in: 10, i_in: 0.04, principal_in: 100000 })
        .toFixed(2)
  )
);
*/
/*
console.log(
  _.range(481).map(
    (year_in) =>
      +l
        .balance({ year_in, term_in: 480, i_in: 0.04, principal_in: 100000 })
        .toFixed(2)
  )
);*/

console.log(
  _.range(11).map(
    (year_in) =>
      +l
        .balance({ year_in, term_in: 10, i_in: 0, principal_in: 100000, missed_repayment_year_in:1 })
        .toFixed(2)
  )
);
