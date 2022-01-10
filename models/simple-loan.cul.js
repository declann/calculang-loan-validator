export const v = () => 1 / (1 + i());

export const v_pow_term = () => Math.pow(v(), term());

export const repayment_amount = () => (principal() * i()) / (1 - v_pow_term());

export const balance = () => {
  if (year() == 0) return principal();
  else return balance({ year_in: year() - 1 }) + interest() - repayment();
};

export const repayment_made = () => year() <= term() && year() != 0;
export const repayment = () => repayment_made() * repayment_amount();

export const interest = () => balance({ year_in: year() - 1 }) * i();

// inputs:
export const principal = () => principal_in;
export const i = () => i_in;
export const term = () => term_in;
export const year = () => year_in;
