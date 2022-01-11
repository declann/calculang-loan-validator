export const v = () => 1 / (1 + i());

export const v_pow_term_left = () => Math.pow(v(), term() - year());

// automatic refinancing on:
// @ year=0 ans=0
export const repayment_amount = () => {
  if (Math.abs(balance({ year_in: year() - 1 })) < 0.01) return 0;
  if (i() == 0) return balance({ year_in: year() - 1 }) / (term() - year());
  else
    return (balance({ year_in: year() - 1 }) * i()) / (1 - v_pow_term_left());
};

// interest charged:
export const interest = () => balance({ year_in: year() - 1 }) * i();
// restrict cap repayment to repayment made..
export const capital_repayment = () => {
  return Math.max(0, repayment() - interest_repayment());
};
export const interest_repayment = () => Math.min(repayment(), interest());

// modelling all repayments as being met, except for missed_repayment_year (if not 0):
export const repayment_made = () =>
  year() <= term() && year() != 0 && year() != missed_repayment_year();
export const repayment = () => repayment_made() * repayment_amount();

export const balance = () => {
  if (year() < 0) return 0;
  if (year() == 0) return principal();
  else
    return (
      balance({ year_in: year() - 1 }) /*- capital_repayment()*/ +
      interest() -
      repayment()
    );
};

// inputs:
export const principal = () => principal_in;
export const i = () => i_in;
export const term = () => term_in;
export const year = () => year_in;
export const missed_repayment_year = () => missed_repayment_year_in;
