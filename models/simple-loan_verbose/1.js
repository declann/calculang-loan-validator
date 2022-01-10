import { year } from "./simple-loan.cul.js";import { term } from "./simple-loan.cul.js";import { i } from "./simple-loan.cul.js";import { principal } from "./simple-loan.cul.js";import { balance } from "./simple-loan.cul.js";import { repayment } from "./simple-loan.cul.js";import { repayment_made } from "./simple-loan.cul.js";import { interest } from "./simple-loan.cul.js";import { repayment_amount } from "./simple-loan.cul.js";import { v_pow_term } from "./simple-loan.cul.js";import { v } from "./simple-loan.cul.js";export const v_ = ({ i_in }) => 1 / (1 + i({ i_in }));

export const v_pow_term_ = ({ i_in, term_in }) => Math.pow(v({ i_in }), term({ term_in }));

export const repayment_amount_ = ({ principal_in, i_in, term_in }) => principal({ principal_in }) * i({ i_in }) / (1 - v_pow_term({ i_in, term_in }));

export const interest_ = ({ year_in, principal_in, term_in, i_in }) => balance({ principal_in, i_in, term_in, year_in: year({ year_in }) - 1 }) * i({ i_in });

// modelling all repayments as being met:
export const repayment_made_ = ({ year_in, term_in }) => year({ year_in }) <= term({ term_in }) && year({ year_in }) != 0;
export const repayment_ = ({ year_in, term_in, principal_in, i_in }) => repayment_made({ year_in, term_in }) * repayment_amount({ principal_in, i_in, term_in });

export const balance_ = ({ year_in, principal_in, i_in, term_in }) => {
  if (year({ year_in }) == 0) return principal({ principal_in });else
  return balance({ principal_in, i_in, term_in, year_in: year({ year_in }) - 1 }) + interest({ year_in, principal_in, term_in, i_in }) - repayment({ year_in, term_in, principal_in, i_in });
};

// inputs:
export const principal_ = ({ principal_in }) => principal_in;
export const i_ = ({ i_in }) => i_in;
export const term_ = ({ term_in }) => term_in;
export const year_ = ({ year_in }) => year_in;