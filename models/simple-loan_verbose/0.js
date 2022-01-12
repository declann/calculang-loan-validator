
import memoize from 'lru-memoize';
import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { v_ as v$, v_pow_term_left_ as v_pow_term_left$, repayment_amount_ as repayment_amount$, interest_ as interest$, capital_repayment_ as capital_repayment$, interest_repayment_ as interest_repayment$, repayment_due_ as repayment_due$, repayment_ as repayment$, balance_ as balance$, interest_rate_ as interest_rate$, principal_ as principal$, i_ as i$, term_ as term$, year_ as year$, missed_repayment_year_ as missed_repayment_year$, skip_interest_ as skip_interest$, d_i_year_ as d_i_year$, d_i_ as d_i$ } from "./simple-loan.cul.js?+memoed&cul_scope_id=1&cul_parent_scope_id=0&location=ba21ed285072db421519963fabcd19e4"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start v memo-loader code //////////
const v$m = memoize(999999, isEqual)(v$);
export const v = (a) => {
  return v$m(a);
  v$({ year_in, d_i_year_in, i_in, d_i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end v memo-loader code //////////



////////// start v_pow_term_left memo-loader code //////////
const v_pow_term_left$m = memoize(999999, isEqual)(v_pow_term_left$);
export const v_pow_term_left = (a) => {
  return v_pow_term_left$m(a);
  v_pow_term_left$({ year_in, d_i_year_in, i_in, d_i_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end v_pow_term_left memo-loader code //////////



////////// start repayment_amount memo-loader code //////////
const repayment_amount$m = memoize(999999, isEqual)(repayment_amount$);
export const repayment_amount = (a) => {
  return repayment_amount$m(a);
  repayment_amount$({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end repayment_amount memo-loader code //////////



////////// start interest memo-loader code //////////
const interest$m = memoize(999999, isEqual)(interest$);
export const interest = (a) => {
  return interest$m(a);
  interest$({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end interest memo-loader code //////////



////////// start capital_repayment memo-loader code //////////
const capital_repayment$m = memoize(999999, isEqual)(capital_repayment$);
export const capital_repayment = (a) => {
  return capital_repayment$m(a);
  capital_repayment$({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end capital_repayment memo-loader code //////////



////////// start interest_repayment memo-loader code //////////
const interest_repayment$m = memoize(999999, isEqual)(interest_repayment$);
export const interest_repayment = (a) => {
  return interest_repayment$m(a);
  interest_repayment$({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end interest_repayment memo-loader code //////////



////////// start repayment_due memo-loader code //////////
const repayment_due$m = memoize(999999, isEqual)(repayment_due$);
export const repayment_due = (a) => {
  return repayment_due$m(a);
  repayment_due$({ year_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end repayment_due memo-loader code //////////



////////// start repayment memo-loader code //////////
const repayment$m = memoize(999999, isEqual)(repayment$);
export const repayment = (a) => {
  return repayment$m(a);
  repayment$({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end repayment memo-loader code //////////



////////// start balance memo-loader code //////////
const balance$m = memoize(999999, isEqual)(balance$);
export const balance = (a) => {
  return balance$m(a);
  balance$({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in }); // never run, but here to "trick" calculang graph logic
};
////////// end balance memo-loader code //////////



////////// start interest_rate memo-loader code //////////
const interest_rate$m = memoize(999999, isEqual)(interest_rate$);
export const interest_rate = (a) => {
  return interest_rate$m(a);
  interest_rate$({ year_in, d_i_year_in, i_in, d_i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end interest_rate memo-loader code //////////



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



////////// start missed_repayment_year memo-loader code //////////
const missed_repayment_year$m = memoize(999999, isEqual)(missed_repayment_year$);
export const missed_repayment_year = (a) => {
  return missed_repayment_year$m(a);
  missed_repayment_year$({ missed_repayment_year_in }); // never run, but here to "trick" calculang graph logic
};
////////// end missed_repayment_year memo-loader code //////////



////////// start skip_interest memo-loader code //////////
const skip_interest$m = memoize(999999, isEqual)(skip_interest$);
export const skip_interest = (a) => {
  return skip_interest$m(a);
  skip_interest$({ skip_interest_in }); // never run, but here to "trick" calculang graph logic
};
////////// end skip_interest memo-loader code //////////



////////// start d_i_year memo-loader code //////////
const d_i_year$m = memoize(999999, isEqual)(d_i_year$);
export const d_i_year = (a) => {
  return d_i_year$m(a);
  d_i_year$({ d_i_year_in }); // never run, but here to "trick" calculang graph logic
};
////////// end d_i_year memo-loader code //////////



////////// start d_i memo-loader code //////////
const d_i$m = memoize(999999, isEqual)(d_i$);
export const d_i = (a) => {
  return d_i$m(a);
  d_i$({ d_i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end d_i memo-loader code //////////