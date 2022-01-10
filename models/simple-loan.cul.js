export const v = () => (1 / (1 + i()));

export const v_pow_term = () => (Math.pow(v(), term()))

export const repayment = () => (principal() * i() / (1 - v_pow_term()))

// inputs:
export const principal = () => (principal_in)
export const i = () => (i_in)
export const term = () => (term_in)