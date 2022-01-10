
import memoize from 'lru-memoize';
import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { v_ as v$, v_pow_term_ as v_pow_term$, repayment_amount_ as repayment_amount$, interest_ as interest$, repayment_made_ as repayment_made$, repayment_ as repayment$, balance_ as balance$, principal_ as principal$, i_ as i$, term_ as term$, year_ as year$ } from "./simple-loan.cul.js?+memoed&cul_scope_id=1&cul_parent_scope_id=0&location=ba21ed285072db421519963fabcd19e4"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start v memo-loader code //////////
const v$m = memoize(999999, isEqual)(v$);
export const v = (a) => {
  return v$m(a);
  v$({ i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end v memo-loader code //////////



////////// start v_pow_term memo-loader code //////////
const v_pow_term$m = memoize(999999, isEqual)(v_pow_term$);
export const v_pow_term = (a) => {
  return v_pow_term$m(a);
  v_pow_term$({ i_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end v_pow_term memo-loader code //////////



////////// start repayment_amount memo-loader code //////////
const repayment_amount$m = memoize(999999, isEqual)(repayment_amount$);
export const repayment_amount = (a) => {
  return repayment_amount$m(a);
  repayment_amount$({ i_in, principal_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end repayment_amount memo-loader code //////////



////////// start interest memo-loader code //////////
const interest$m = memoize(999999, isEqual)(interest$);
export const interest = (a) => {
  return interest$m(a);
  interest$({ year_in, principal_in, term_in, i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end interest memo-loader code //////////



////////// start repayment_made memo-loader code //////////
const repayment_made$m = memoize(999999, isEqual)(repayment_made$);
export const repayment_made = (a) => {
  return repayment_made$m(a);
  repayment_made$({ year_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end repayment_made memo-loader code //////////



////////// start repayment memo-loader code //////////
const repayment$m = memoize(999999, isEqual)(repayment$);
export const repayment = (a) => {
  return repayment$m(a);
  repayment$({ year_in, term_in, i_in, principal_in }); // never run, but here to "trick" calculang graph logic
};
////////// end repayment memo-loader code //////////



////////// start balance memo-loader code //////////
const balance$m = memoize(999999, isEqual)(balance$);
export const balance = (a) => {
  return balance$m(a);
  balance$({ year_in, principal_in, i_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end balance memo-loader code //////////



////////// start principal memo-loader code //////////
const principal$m = memoize(999999, isEqual)(principal$);
export const principal = (a) => {
  return principal$m(a);
  principal$({ principal_in }); // never run, but here to "trick" calculang graph logic
};
////////// end principal memo-loader code //////////



////////// start i memo-loader code //////////
const i$m = memoize(999999, isEqual)(i$);
export const i = (a) => {
  return i$m(a);
  i$({ i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end i memo-loader code //////////



////////// start term memo-loader code //////////
const term$m = memoize(999999, isEqual)(term$);
export const term = (a) => {
  return term$m(a);
  term$({ term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end term memo-loader code //////////



////////// start year memo-loader code //////////
const year$m = memoize(999999, isEqual)(year$);
export const year = (a) => {
  return year$m(a);
  year$({ year_in }); // never run, but here to "trick" calculang graph logic
};
////////// end year memo-loader code //////////