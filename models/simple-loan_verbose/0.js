export const v = ({ i_in }) => 1 / (1 + i({ i_in }));

export const v_pow_term = ({ i_in }) => Math.pow(v({ i_in }), term({}));

export const repayment_amount = ({ principal_in, i_in }) => principal({ principal_in }) * i({ i_in }) / (1 - v_pow_term({ i_in }));

export const balance = ({ year_in, principal_in, i_in }) => {
  if (year({ year_in }) == 0) return principal({ principal_in });else
  return balance({ principal_in, i_in, year_in: year({ year_in }) - 1 }) + interest({ year_in, principal_in, i_in }) - repayment({ year_in, principal_in, i_in });
};

export const repayment_made = ({ year_in }) => year({ year_in }) <= term({}) && year({ year_in }) != 0;
export const repayment = ({ year_in, principal_in, i_in }) => repayment_made({ year_in }) * repayment_amount({ principal_in, i_in });

export const interest = ({ year_in, principal_in, i_in }) => balance({ principal_in, i_in, year_in: year({ year_in }) - 1 }) * i({ i_in });

// inputs:
export const principal = ({ principal_in }) => principal_in;
export const i = ({ i_in }) => i_in;
export const term = ({}) => 1;
export const year = ({ year_in }) => year_in;