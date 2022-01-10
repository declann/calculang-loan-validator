var l = require('./simple-loan.js');

console.log(l.repayment({ term_in: 10, i_in: 0.04, principal_in: 100000 }));