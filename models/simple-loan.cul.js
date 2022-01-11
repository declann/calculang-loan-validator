export const v = () => 1 / (1 + i());

export const v_pow_term_left = () => Math.pow(v(), term() - year());

// automatic refinancing on:
// @ year=0 ans=0
export const repayment_amount = () => {
  if (i() == 0) return balance({ year_in: year() - 1 }) / (term() - year());
  else return (balance({ year_in: year() - 1 }) * i()) / (1 - v_pow_term_left());
};

export const interest = () => balance({ year_in: year() - 1 }) * i();

// modelling all repayments as being met, except for missed_repayment_year (if not 0):
export const repayment_made = () =>
  year() <= term() && year() != 0 && year() != missed_repayment_year();
export const repayment = () => repayment_made() * repayment_amount();

export const balance = () => {
  if (year() < 0) return 0;
  if (year() == 0) return principal();
  else return balance({ year_in: year() - 1 }) + interest() - repayment();
};

// inputs:
export const principal = () => principal_in;
export const i = () => i_in;
export const term = () => term_in;
export const year = () => year_in;
export const missed_repayment_year = () => missed_repayment_year_in;
