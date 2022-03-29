const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export function isValidEmail(email: string): boolean {
    return EMAIL_REGEX.test(email); // TODO: Support + gmail accounts
}