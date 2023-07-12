export default {
    successfulLogin: 'Logged in successfully',
    fetchingDataFailed: 'Failed to Fetch Data',
    usePersianKeyboard: 'Please change your keyboard layout to Persian.',
    pleaseLoginToUseThisFeature: 'Please log into your account to use this feature.',
    localStorageUnavailable: 'Your web browser does not support storing data locally. The most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.',

    validation: {
        // Login Registration
        email: 'Please use a valid email.',
        emailOrMobile: 'Please use a valid email or phone number.',
        password: 'Password must contain at least one letter and at least 8 characters.',
        rePassword: 'Repeating the password is not equal to the password.',
        usernameEmail: 'Wrong username or password.',
        signupError: 'There was a problem registering.',
        forgetPassword: 'There was a problem with the recovery operation.',
        emailNotFound: 'Sorry, the email could not be found.',
        invalidTfaRemoval: 'Invalid values entered',
        successRecoveryPassword: 'A password recovery {type} was sent to you.',
        resetPasswordError: 'There was a problem registering the new password.',
        networkError: 'There is a problem with the server.',
        tryAgainLater: 'Please try again later.',
        pleaseTryAgain: 'Please try again.',
        captcha: 'No captcha, evaluating based on IP reputation.',
        captchaVerification: 'Captcha not approved correctly',
        captchaExpired: 'The captcha has been expired. Please verify again.',
        LoginIranOnly: 'You can login only from Iran.',
        LoginDisabled: 'Login is temporarily not possible, please try again later',
        // required
        required: {
            twoFA: 'Please enter your 2fa code',
            captcha: 'Complete the recap first.',
            general: 'This field is required.',
            field: '{field} is required.'
        },
        exactNumLength: 'The number of confirmed digits for the {field} is {number} digits.',
        minLength: '{field} is at least {number} characters.',
        maxLength: '{field} is at least {number} characters.',
        minLengthGeneral: 'Minimum character length is not observed.',
        notValid: '{field} is not valid!',
        between: '{field} must be between {min} and {max} {unit}.',
        onlyInteger: 'Only integers are allowed.',
        onlyNumber: 'Please just enter a number.',
        onlyPersian: 'Please use only Persian letters.',
        decimal: 'Please just enter a number.',
        minAmount: 'The amount you requested is less than allowed.',
        maxAmount: 'The amount you requested is more than allowed.',
        minOrderValue: 'The minimum order value is not observed. ({min})',
        insufficientBalance: 'Balance is not sufficient.',
        insufficientMarketCurrency: 'Insufficient Balance Available For Your Request.',
        invalidOTP: 'Can not verify code. Please try again.',
        inactiveTfaAccount: 'Two factor authentication is not available for your account',
        wrongData: '{item} is incorrect.',
        loginRedundantRequest: 'Your login requests exceeded the limit. Please try again in 30 seconds.',
        unsuccessGoogleLogin: 'Google Login failed',
        popup_closed_by_user: 'popup closed by user.',
        googleSigninError: 'Google Sign in error',
        maxImageSize: 'The maximum acceptable size for each photo is {size} MB',
        invalidPhoneNumberPattern: 'The mobile number format is incorrect.',
        priceCanNotBeEmpty: 'Price can not be empty',
        amountCanNotBeEmpty: 'Amount can not be empty',
        marginLimitError: 'The quantity exceeds the salable quantity.',
        ExceedLiability: 'Order amount exceeds your remaining purchase obligation.'
    },
    apiResponses: {
        TooManyRequest: 'Please try an other time.',
        CategoryValidationFailed: 'Please use a valid category.',
        MobileValidationFailed: 'Please use a valid phone number.',
        EmailValidationFailed: 'Please use a valid email.',
        NameValidationFailed: 'Please use a valid name.',
        DescriptionValidationFailed: 'Entered description is not correct.',
        gatewayConnectionFailed: 'Connection to payment gateway failed, please try again.',
        gatewayValidationFailed: 'The request validation failed. Please read the description carefully and contact support if there is a problem.',
        SaymentConnectionFailed: 'Connection to Sayment gateway failed.',
        RialDepositLimitation: 'The deposit amount is more than the allowable limit of your user level.',
        ShetabDespoitUnavailable: 'Unfortunately Shetab deposit is not available now.', // todo: remove this one after back has fixed the spell.
        ShetabDepositUnavailable: 'Unfortunately Shetab deposit is not available now.',
        InvalidAmount: 'Entered amount is not valid.',
        InvalidCurrency: 'Selected currency is not valid.',
        DepositNotAvailable: 'Deposit on the desired network is not supported. Avoid making deposits on this network.',
        MissingWallet: 'Wallet info not sent.',
        NotAvailable: 'Not Available!',
        ParseError: 'Submitted parameters are not correct!',
        addressGenerationFailed: 'Address Generation Failed!',
        invoiceGenerationFailed: 'Invoice Generation Failed!',
        invoiceDecodeFailed: 'Invoice Decoding Failed!',
        InvalidInvoice: 'Invoice is Invalid or not Supported.',
        resetPasswordFailed: 'Request password change failed. Please try again.',
        currentPasswordIncorrect: 'Current password is incorrect.',
        resetPasswordSuccessful: 'Your password changed successfully. Please log in again.',
        resetPasswordSuccessful2: 'Your password changed successfully.',
        FeatureUnavailable: 'This feature is currently not available for you',
        PleaseEnable2FA: 'Please enable two-factor authentication for your account first.',
        InvalidTargetAddress: 'Destination address is invalid. Please enter the address carefully.',
        msgInvalid2FA: 'The two-factor code entered is invalid.',
        pleaseTryLater: 'There is a problem. Please try again later.',
        pleaseTryAgain: 'There is a problem. Please try again.',
        serverError: 'Server Error.',
        RegistrationFailed: 'An error occurred. Please try again.',
        invalidCredential: 'Unable to log in with provided credentials.',
        msgAmountTooHigh: 'Amount too high.',
        msgAmountTooLow: 'Amount too low.',
        msgSaved: 'Changes saved successfully',
        ExchangeRequiredTag: 'exchanges deposit addresses required tag.',
        loginFailed: 'Login error, please try again',
        PortfolioDisabled: 'Sorry, portfolio is not available for you.',
        msgOrderAdded: 'Order created successfully.',
        msgOrderFailed: 'As change of orders and prices in market, Order creation failed. Please try again',
        orderCanceled: 'order was canceled',
        orderCanceledFailed: 'order was not canceled',
        ordersCanceled: 'Orders were canceled',
        ordersCanceledFailed: 'Orders were not canceled',
        InvalidOrderPrice: 'The order price is unspecified or incorrect',
        BadPrice: 'The price set for the order is very different from the current market price',
        InvalidExecutionType: 'The type of order (limit or market) is not specified',
        InvalidOrderType: 'The type of order (buy or sell) is not specified',
        OverValueOrder: 'The total value of the order is less than your available balance',
        DuplicateOrder: 'Duplicate order, please try again later',
        MarketClosed: 'The target market is currently temporarily closed',
        TradingUnavailable: 'You are not allowed to trade, please complete the authentication process',
        TradeLimitation: 'To trade in this order, please complete your account verification',
        InvalidMarketPair: 'Invalid Market',
        PlanAlreadyActivated: 'This plan is already activated for you.',
        NoSuchActivePlan: 'You have no active plan of this type.',
        NotEligibleToActivatePlan: 'Not eligible to activate, please consult plan rules.',
        NotEligibleToDeactivatePlan: 'Not eligible to deactivate, please consult plan rules.',
        DuplicatedCard: 'This card number has already been entered.',
        DuplicatedShaba: 'This Sheba number has already been entered.',
        createPriceAlertsSuccessful: 'Price alert registered successfully',
        InvalidSymbol: 'The entered currency pair is invalid',
        ValidationError: 'The information entered is incorrect',
        msgSaveError: 'Error in saving data, please try again later or contact support.',
        msgDeleteError: 'Error deleting banking information, please try again later.',
        msgPriceAlertDeleted: 'The price alert was successfully deleted.',
        invalidReferralCode: 'Invalid identifier code',
        ReferralCodeExists: 'An error occurred while entering the invitation code.',
        ReferralCodeUnavailable: 'Unable to create invitation code at this time.',
        TooManyReferralLinks: 'The quota of 30 customizable invitation codes for each user has expired.',
        InvalidGivebackShare: 'Friend fee contribution is not acceptable.',
        ReferrerChangeUnavailable: 'More than 24 hours have passed since you registered.',
        Invalid2FA: 'Invalid two factor authentication Code',
        InvalidPassword: 'Password Is Invalid',
        InvalidCaptcha: 'Captcha Is Invalid',
        CaptchaTypeUnacceptable: 'Please solve the captcha again',
        InvalidOTP: 'OTP Is Invalid',
        msgBankDepositSuccess: 'Bank Deposit Successful',
        InvalidDate: 'Invalid date',
        msgVerificationSmsSent: 'A verification code was sent to your mobile number.',
        MobileAlreadyRegistered: 'This mobile number is already registered.',
        MobileUneditable: 'You can not edit your mobile Number',
        msgMobileConfirmed: 'Mobile number confirmed',
        verifiedPhone: 'Your mobile number has already been verified',
        pendingPhone: 'Your mobile number is being checked',
        notRegisteredPhone: 'Mobile number is not registered for you',
        msgVerificationEmailSent: 'A verification code was sent to your email.',
        UserLevelRestriction: 'User level restriction',
        msgVerificationLandlineConfirmation: 'You will be contacted soon.',
        msgVerificationSent: 'Verification request sent. Please wait for approval.',
        msgTelephoneConfirmed: 'Your home number has been verified',
        NationalCodeValidationFailed: 'Entered national code is invalid',
        NationalCodeAlreadyRegistered: 'This national code is already registered',
        InvalidPhoneNumber: 'Invalid phone number',
        smallOrder: 'The order value is less than the limit.',
        SmallOrder: 'The order value is less than the limit.',
        ReceiptAlreadyExist: 'This receipt number has already been registered.',
        creatTicketSuccessful: 'The ticket was created successfully',
        creatFeedbackSuccessful: 'Your suggestion is submitted successfully',
        invalidTicket: 'Your ticket was not validated.',
        invalidComment: 'Your message was not approved.',
        invalidTicketId: 'ticket does not exist',
        commentSent: 'Your Comment Sent',
        successfullyCloseTicket: 'The cancellation of the ticket has been registered successfully',
        ratingSent: 'Your comment was successfully registered',
        featureUnavailable: "This feature isn't available for your account.",
        msgEmailConfirmed: 'Your email has been verified',
        msgSessionTerminated: 'Session terminated successfully.',
        msgAllSessionsTerminated: 'All sessions terminated successfully.',
        NotOwnedByUser: 'The mobile number entered is not owned by you',
        UnsupportedPair: 'Unsupported pair',
        PairClosed: 'Pair is closed',
        InvalidPriceGuaranteeToken: 'Invalid price guarantee token',
        UnexpectedPrice: 'Unexpected price',
        HighTotalPrice: 'Total price is high',
        LowTotalPrice: 'Total price is low',
        HighAmount: 'Amount is high',
        LowAmount: 'Amount is low',
        InsufficientBalance: 'Insufficient balance',
        InvalidTransactions: 'Invalid transactions',
        LiquidityPoolHasNotFilled: 'Liquidity Pool Has Not Filled',
        UnfilledCapacityAlertExist: 'Unfilled Capacity Alert Exist',
        UnfilledCapacityAlertDoesNotExist: 'Unfilled Capacity Alert Does Not Exist',
        msgCreateDepositIdSuccess: 'Deposit ID successfully created',
        NoOpenPosition: 'There is no active selling position.',
        ExceedLiability: 'Order amount exceeds your remaining purchase obligation.',
        ExceedTotalAsset: 'The total value of the order exceeds your total free assets.',
        InvalidIBAN: 'Invalid IBAN',
        UnknownIBAN: 'Unknown IBAN',
        InvalidPlanId: 'The Plan ID submitted is not correct.',
        RecentlyCanceled: 'Request restriction due to a recent cancellation.',
        TooLate: 'The opportunity to provide service is not possible at this moment.',
        TooSoon: 'It is not possible to execute your request at this moment.',
        LowPlanCapacity: 'The plan capacity is not enough for your requested amount.',
        FailedAssetTransfer: 'Balance transfer was not successful.',
        NoStaking: 'There is no stacking on this plan.',
        RequestAccumulationInvalidAmount: 'You currently have a cancellation request on the selected plan. The amount allowed for cancellation is equal to your staking amount minus the amount for which you registered a cancellation request.',
        LowMarginRatio: 'The reduction of the collateral is less than the allowed Max Sale ratio (2)',
        JibitAPIFailed: 'JibitAPI Failed',
        JibitAPIInvalid: 'JibitAPI Invalid',
        ShahkarError: 'The inquiry systems are not responding at the moment, please try again later',
        ShaparakLimitation: 'The deposit limit for each bank portal transaction is 25 million tomans',
        PriceConditionFailed: 'Price Condition Failed. Please try again.',
        PhoneValidationError: 'Invalid phone number',
        InvalidOTPCode: 'Invalid OTP code',
        NotFound: 'There is no active pool with the submitted ID. (or the pool is private).',
        PermissionDenied: 'The user is not allowed to participate.',
        ExceedPoolCapacity: 'The amount is greater than the free capacity of the pool.',
        LowDelegationAmount: 'The amount is less than the minimum of delegation.',
        HighDelegationAmount: 'The amount is more than the maximum of delegation.',
        InsufficientWalletBalance: 'The amount is more than the wallet balance.',
        DelegateWhenRevokeInProgress: 'There is currently an active (unpaid) cancellation request for this pool and this user.',
        LowDelegationAmountException: 'The requested amount is less than the minimum delegation to the fund.',
        HighDelegationAmountException: 'The requested amount is greater than the maximum contribution to the fund.',
        InvalidDelegationAmount: 'The requested amount exceeds the maximum user delegation.',
        msgAddressBookAdded: 'The address was successfully added.',
        Inactive2FA: 'Two factor authentication is not active.',
        DuplicatedAddress: 'This address has already been entered.',
        InvalidAddress: 'This address is not acceptable in this network.',
        msgAddressBookDeleted: 'The address was successfully deleted.',
        LargeOrder: 'Order value is temporarily limited to below 1,000,000,000.'
    }
}
