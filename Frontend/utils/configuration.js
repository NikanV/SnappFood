export const supportedCaptcha = [ // client's supported captcha types will be intersected with server acceptable captcha types
    'recaptcha',
    'hcaptcha',
    'arcaptcha',
    'django-captcha'
]

export const signupMethods = {
    email: true,
    mobile: false
}

export const loginMethods = { // it is also used in forget password
    email: true,
    mobile: true
}

export const FALLBACK_CAPTCHA = 'django-captcha' // fallback captcha in case of failure
