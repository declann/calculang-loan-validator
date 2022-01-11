export const v = () => 1 / (1 + interest_rate());

export const v_pow_term_left = () => Math.pow(v(), term() - year());

// automatic refinancing on:
// @ year=0 ans=0
export const repayment_amount = () => {
  if (Math.abs(balance({ year_in: year() - 1 })) < 0.01) return 0;
  //if (term() == year()) ??
  if (interest_rate() == 0) return balance({ year_in: year() - 1 }) / (term() - year());
  else
    return (balance({ year_in: year() - 1 }) * interest_rate()) / (1 - v_pow_term_left());
};

// interest charged:
export const interest = () => balance({ year_in: year() - 1 }) * interest_rate();
// restrict cap repayment to repayment made..
export const capital_repayment = () => {
  return Math.max(0, repayment() - interest_repayment());
};
export const interest_repayment = () => Math.min(repayment(), interest());

// modelling all repayments as being met, except for missed_repayment_year (if not 0):
export const repayment_made = () =>
  year() <= term() && year() != 0; /*&& year() != missed_repayment_year()*/
export const repayment = () => {
  if (year() == missed_repayment_year()) {
    if (skip_interest()) return 0;
    else return interest();
  } else return repayment_made() * repayment_amount();
};

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


export const interest_rate = () => (year() >= d_i_year() ? (i() + d_i()) : i());

// inputs:
export const principal = () => principal_in;
export const i = () => i_in;
export const term = () => term_in;
export const year = () => year_in;
export const missed_repayment_year = () => missed_repayment_year_in;
export const skip_interest = () => skip_interest_in;
export const d_i_year = () => d_i_year_in;
export const d_i = () => d_i_in;
