export const v = ({ i_in }) => 1 / (1 + i({ i_in }));

export const v_pow_term = ({ i_in, term_in }) => Math.pow(v({ i_in }), term({ term_in }));

export const repayment = ({ i_in, term_in }) => principle() * i({ i_in }) / (1 - v_pow_term({ i_in, term_in }));

// inputs:
export const principal = ({ principal_in }) => principal_in;
export const i = ({ i_in }) => i_in;
export const term = ({ term_in }) => term_in;