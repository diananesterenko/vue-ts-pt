const ERROR__CODES={
    EMAIL_NOT_FOUND: 'Email not found',
    INVALID_PASSWORD: 'Invalid password',
    auth : 'Authentication is required',
}

export function error(code : string): string {
    return ERROR__CODES[code as keyof typeof ERROR__CODES] || 'INVALID_LOGIN'

}