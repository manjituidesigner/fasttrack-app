export type LanguageCode = "en" | "pa" | "hi";

export type TranslationKey =
  | "language.english"
  | "language.punjabi"
  | "language.hindi"
  | "home.appTitle"
  | "home.govt"
  | "home.bannerTitle"
  | "home.bannerSubtitle"
  | "home.heroTitle"
  | "home.heroTitleLink"
  | "home.heroSubtitle"
  | "home.loginToPortal"
  | "home.newInvestorRegistration"
  | "home.feature.instantFiling.title"
  | "home.feature.instantFiling.desc"
  | "home.feature.liveTracking.title"
  | "home.feature.liveTracking.desc"
  | "home.feature.eCertificates.title"
  | "home.feature.eCertificates.desc"
  | "home.feature.singleWindow.title"
  | "home.feature.singleWindow.desc"
  | "home.feature.secureTrusted.title"
  | "home.feature.secureTrusted.desc"
  | "login.title"
  | "login.usernameOrEmail"
  | "login.password"
  | "login.code"
  | "login.projectType"
  | "login.projectType.industries"
  | "login.projectType.housing"
  | "login.projectType.startup"
  | "login.login"
  | "login.loginWithStartupIndia"
  | "login.forgotPassword"
  | "login.noAccount"
  | "login.signup"
  | "login.footerDisclaimer"
  | "dashboard.title"
  | "menu.language"
  | "menu.changePassword"
  | "menu.logout"
  | "changePassword.title"
  | "changePassword.current"
  | "changePassword.new"
  | "changePassword.confirm"
  | "changePassword.save";

type Dictionary = Record<TranslationKey, string>;

export const translations: Record<LanguageCode, Dictionary> = {
  en: {
    "language.english": "English",
    "language.punjabi": "Punjabi",
    "language.hindi": "Hindi",

    "home.appTitle": "FastTrack Punjab",
    "home.govt": "Govt. of Punjab",
    "home.bannerTitle": "Punjab Industrial Portal",
    "home.bannerSubtitle": "FastTrack approvals for businesses",
    "home.heroTitle": "Invest. Build.",
    "home.heroTitleLink": "Grow.",
    "home.heroSubtitle": "Your single-window gateway for industrial approvals in Punjab.",
    "home.loginToPortal": "Login to Portal",
    "home.newInvestorRegistration": "New Investor Registration",

    "home.feature.instantFiling.title": "Instant Filing",
    "home.feature.instantFiling.desc": "Unified application for all clearances.",
    "home.feature.liveTracking.title": "Live Tracking",
    "home.feature.liveTracking.desc": "Monitor application status in real-time.",
    "home.feature.eCertificates.title": "E-Certificates",
    "home.feature.eCertificates.desc": "Download approved certificates instantly.",
    "home.feature.singleWindow.title": "Single Window",
    "home.feature.singleWindow.desc": "One portal, multiple departments.",
    "home.feature.secureTrusted.title": "Secure & Trusted",
    "home.feature.secureTrusted.desc": "Govt-grade security for your data.",

    "login.title": "Login",
    "login.usernameOrEmail": "Username / Email",
    "login.password": "Password",
    "login.code": "Code",
    "login.projectType": "Project Type",
    "login.projectType.industries": "Industries/Business",
    "login.projectType.housing": "Housing & Real Estate",
    "login.projectType.startup": "Startup",
    "login.login": "Login",
    "login.loginWithStartupIndia": "Login with Startup India",
    "login.forgotPassword": "Forgot Password",
    "login.noAccount": "Do not have an account?",
    "login.signup": "Signup",
    "login.footerDisclaimer": "The National Single Window System has access to over 100 Central level approvals and State Single Window Systems of 14 States/UTs with one user id and password.",

    "dashboard.title": "Dashboard",
    "menu.language": "Change Language",
    "menu.changePassword": "Change Password",
    "menu.logout": "Logout",
    "changePassword.title": "Change Password",
    "changePassword.current": "Current Password",
    "changePassword.new": "New Password",
    "changePassword.confirm": "Confirm Password",
    "changePassword.save": "Save"
  },

  hi: {
    "language.english": "अंग्रेज़ी",
    "language.punjabi": "पंजाबी",
    "language.hindi": "हिंदी",

    "home.appTitle": "फास्टट्रैक पंजाब",
    "home.govt": "पंजाब सरकार",
    "home.bannerTitle": "पंजाब औद्योगिक पोर्टल",
    "home.bannerSubtitle": "व्यवसायों के लिए फास्टट्रैक अनुमोदन",
    "home.heroTitle": "निवेश करें। बनाएँ।",
    "home.heroTitleLink": "बढ़ें।",
    "home.heroSubtitle": "पंजाब में औद्योगिक अनुमोदनों के लिए आपका सिंगल-विंडो गेटवे।",
    "home.loginToPortal": "पोर्टल में लॉगिन",
    "home.newInvestorRegistration": "नया निवेशक पंजीकरण",

    "home.feature.instantFiling.title": "तुरंत फाइलिंग",
    "home.feature.instantFiling.desc": "सभी मंज़ूरियों के लिए एकीकृत आवेदन।",
    "home.feature.liveTracking.title": "लाइव ट्रैकिंग",
    "home.feature.liveTracking.desc": "आवेदन की स्थिति रियल-टाइम में देखें।",
    "home.feature.eCertificates.title": "ई-प्रमाणपत्र",
    "home.feature.eCertificates.desc": "स्वीकृत प्रमाणपत्र तुरंत डाउनलोड करें।",
    "home.feature.singleWindow.title": "सिंगल विंडो",
    "home.feature.singleWindow.desc": "एक पोर्टल, कई विभाग।",
    "home.feature.secureTrusted.title": "सुरक्षित और भरोसेमंद",
    "home.feature.secureTrusted.desc": "आपके डेटा के लिए सरकारी-स्तर की सुरक्षा।",

    "login.title": "लॉगिन",
    "login.usernameOrEmail": "यूज़रनेम / ईमेल",
    "login.password": "पासवर्ड",
    "login.code": "कोड",
    "login.projectType": "परियोजना प्रकार",
    "login.projectType.industries": "उद्योग/व्यवसाय",
    "login.projectType.housing": "आवास और रियल एस्टेट",
    "login.projectType.startup": "स्टार्टअप",
    "login.login": "लॉगिन",
    "login.loginWithStartupIndia": "स्टार्टअप इंडिया के साथ लॉगिन",
    "login.forgotPassword": "पासवर्ड भूल गए",
    "login.noAccount": "खाता नहीं है?",
    "login.signup": "साइनअप",
    "login.footerDisclaimer": "नेशनल सिंगल विंडो सिस्टम के पास 100 से अधिक केंद्रीय स्तर की मंज़ूरियों और 14 राज्यों/केंद्र शासित प्रदेशों की स्टेट सिंगल विंडो सिस्टम तक एक ही यूज़र आईडी और पासवर्ड से पहुंच है।",

    "dashboard.title": "डैशबोर्ड",
    "menu.language": "भाषा बदलें",
    "menu.changePassword": "पासवर्ड बदलें",
    "menu.logout": "लॉगआउट",
    "changePassword.title": "पासवर्ड बदलें",
    "changePassword.current": "वर्तमान पासवर्ड",
    "changePassword.new": "नया पासवर्ड",
    "changePassword.confirm": "पासवर्ड की पुष्टि करें",
    "changePassword.save": "सेव करें"
  },

  pa: {
    "language.english": "ਅੰਗਰੇਜ਼ੀ",
    "language.punjabi": "ਪੰਜਾਬੀ",
    "language.hindi": "ਹਿੰਦੀ",

    "home.appTitle": "ਫਾਸਟਟ੍ਰੈਕ ਪੰਜਾਬ",
    "home.govt": "ਪੰਜਾਬ ਸਰਕਾਰ",
    "home.bannerTitle": "ਪੰਜਾਬ ਉਦਯੋਗਿਕ ਪੋਰਟਲ",
    "home.bannerSubtitle": "ਕਾਰੋਬਾਰਾਂ ਲਈ ਫਾਸਟਟ੍ਰੈਕ ਮਨਜ਼ੂਰੀਆਂ",
    "home.heroTitle": "ਨਿਵੇਸ਼ ਕਰੋ। ਬਣਾਓ।",
    "home.heroTitleLink": "ਵਧੋ।",
    "home.heroSubtitle": "ਪੰਜਾਬ ਵਿੱਚ ਉਦਯੋਗਿਕ ਮਨਜ਼ੂਰੀਆਂ ਲਈ ਤੁਹਾਡਾ ਸਿੰਗਲ-ਵਿੰਡੋ ਗੇਟਵੇ।",
    "home.loginToPortal": "ਪੋਰਟਲ ਵਿੱਚ ਲੌਗਿਨ",
    "home.newInvestorRegistration": "ਨਵਾਂ ਨਿਵੇਸ਼ਕ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",

    "home.feature.instantFiling.title": "ਤੁਰੰਤ ਫਾਈਲਿੰਗ",
    "home.feature.instantFiling.desc": "ਸਾਰੀਆਂ ਮਨਜ਼ੂਰੀਆਂ ਲਈ ਇਕਸਾਰ ਅਰਜ਼ੀ।",
    "home.feature.liveTracking.title": "ਲਾਈਵ ਟ੍ਰੈਕਿੰਗ",
    "home.feature.liveTracking.desc": "ਅਰਜ਼ੀ ਦੀ ਸਥਿਤੀ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਵੇਖੋ।",
    "home.feature.eCertificates.title": "ਈ-ਸਰਟੀਫਿਕੇਟ",
    "home.feature.eCertificates.desc": "ਮਨਜ਼ੂਰ ਸਰਟੀਫਿਕੇਟ ਤੁਰੰਤ ਡਾਊਨਲੋਡ ਕਰੋ।",
    "home.feature.singleWindow.title": "ਸਿੰਗਲ ਵਿਂਡੋ",
    "home.feature.singleWindow.desc": "ਇੱਕ ਪੋਰਟਲ, ਕਈ ਵਿਭਾਗ।",
    "home.feature.secureTrusted.title": "ਸੁਰੱਖਿਅਤ ਅਤੇ ਭਰੋਸੇਯੋਗ",
    "home.feature.secureTrusted.desc": "ਤੁਹਾਡੇ ਡਾਟਾ ਲਈ ਸਰਕਾਰ-ਸਤ੍ਹਾ ਦੀ ਸੁਰੱਖਿਆ।",

    "login.title": "ਲੌਗਿਨ",
    "login.usernameOrEmail": "ਯੂਜ਼ਰਨੇਮ / ਈਮੇਲ",
    "login.password": "ਪਾਸਵਰਡ",
    "login.code": "ਕੋਡ",
    "login.projectType": "ਪਰੋਜੈਕਟ ਕਿਸਮ",
    "login.projectType.industries": "ਉਦਯੋਗ/ਕਾਰੋਬਾਰ",
    "login.projectType.housing": "ਆਵਾਸ ਅਤੇ ਰੀਅਲ ਐਸਟੇਟ",
    "login.projectType.startup": "ਸਟਾਰਟਅੱਪ",
    "login.login": "ਲੌਗਿਨ",
    "login.loginWithStartupIndia": "ਸਟਾਰਟਅੱਪ ਇੰਡੀਆ ਨਾਲ ਲੌਗਿਨ",
    "login.forgotPassword": "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ",
    "login.noAccount": "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    "login.signup": "ਸਾਈਨਅੱਪ",
    "login.footerDisclaimer": "ਨੈਸ਼ਨਲ ਸਿੰਗਲ ਵਿੰਡੋ ਸਿਸਟਮ ਨੂੰ 100 ਤੋਂ ਵੱਧ ਕੇਂਦਰੀ ਪੱਧਰ ਦੀਆਂ ਮਨਜ਼ੂਰੀਆਂ ਅਤੇ 14 ਰਾਜਾਂ/ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ਾਂ ਦੇ ਸਟੇਟ ਸਿੰਗਲ ਵਿੰਡੋ ਸਿਸਟਮਾਂ ਤੱਕ ਇੱਕੋ ਯੂਜ਼ਰ ਆਈਡੀ ਅਤੇ ਪਾਸਵਰਡ ਨਾਲ ਪਹੁੰਚ ਹੈ।",

    "dashboard.title": "ਡੈਸ਼ਬੋਰਡ",
    "menu.language": "ਭਾਸ਼ਾ ਬਦਲੋ",
    "menu.changePassword": "ਪਾਸਵਰਡ ਬਦਲੋ",
    "menu.logout": "ਲੌਗਆਉਟ",
    "changePassword.title": "ਪਾਸਵਰਡ ਬਦਲੋ",
    "changePassword.current": "ਮੌਜੂਦਾ ਪਾਸਵਰਡ",
    "changePassword.new": "ਨਵਾਂ ਪਾਸਵਰਡ",
    "changePassword.confirm": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    "changePassword.save": "ਸੇਵ ਕਰੋ"
  }
};
