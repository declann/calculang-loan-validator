import { skip_interest } from "./simple-loan.cul.js";import { missed_repayment_year } from "./simple-loan.cul.js";import { year } from "./simple-loan.cul.js";import { term } from "./simple-loan.cul.js";import { i } from "./simple-loan.cul.js";import { principal } from "./simple-loan.cul.js";import { balance } from "./simple-loan.cul.js";import { repayment } from "./simple-loan.cul.js";import { repayment_made } from "./simple-loan.cul.js";import { interest_repayment } from "./simple-loan.cul.js";import { capital_repayment } from "./simple-loan.cul.js";import { interest } from "./simple-loan.cul.js";import { repayment_amount } from "./simple-loan.cul.js";import { v_pow_term_left } from "./simple-loan.cul.js";import { v } from "./simple-loan.cul.js";export const v_ = ({ i_in }) => 1 / (1 + i({ i_in }));

export const v_pow_term_left_ = ({ i_in, term_in, year_in }) => Math.pow(v({ i_in }), term({ term_in }) - year({ year_in }));

// automatic refinancing on:
// @ year=0 ans=0
export const repayment_amount_ = ({ year_in, principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in }) => {
  if (Math.abs(balance({ principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 })) < 0.01) return 0;
  //if (term() == year()) ??
  if (i({ i_in }) == 0) return balance({ principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) / (term({ term_in }) - year({ year_in }));else

  return balance({ principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) * i({ i_in }) / (1 - v_pow_term_left({ i_in, term_in, year_in }));
};

// interest charged:
export const interest_ = ({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, i_in }) => balance({ principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) * i({ i_in });
// restrict cap repayment to repayment made..
export const capital_repayment_ = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, i_in, term_in }) => {
  return Math.max(0, repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, i_in, term_in }) - interest_repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, i_in, term_in }));
};
export const interest_repayment_ = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, i_in, term_in }) => Math.min(repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, i_in, term_in }), interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, i_in }));

// modelling all repayments as being met, except for missed_repayment_year (if not 0):
export const repayment_made_ = ({ year_in, term_in }) =>
year({ year_in }) <= term({ term_in }) && year({ year_in }) != 0; /*&& year() != missed_repayment_year()*/
export const repayment_ = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, i_in, term_in }) => {
  if (year({ year_in }) == missed_repayment_year({ missed_repayment_year_in })) {
    if (skip_interest({ skip_interest_in })) return 0;else
    return interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, i_in });
  } else return repayment_made({ year_in, term_in }) * repayment_amount({ year_in, principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in });
};

export const balance_ = ({ year_in, principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in }) => {
  if (year({ year_in }) < 0) return 0;
  if (year({ year_in }) == 0) return principal({ principal_in });else

  return (
    balance({ principal_in, i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) /*- capital_repayment()*/ +
    interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, i_in }) -
    repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, i_in, term_in }));

};

// inputs:
export const principal_ = ({ principal_in }) => principal_in;
export const i_ = ({ i_in }) => i_in;
export const term_ = ({ term_in }) => term_in;
export const year_ = ({ year_in }) => year_in;
export const missed_repayment_year_ = ({ missed_repayment_year_in }) => missed_repayment_year_in;
export const skip_interest_ = ({ skip_interest_in }) => skip_interest_in;