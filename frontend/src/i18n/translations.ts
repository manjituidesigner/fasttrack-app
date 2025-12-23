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
  | "dashboard.card.investmentProject.title"
  | "dashboard.card.investmentProject.desc"
  | "dashboard.card.manageApplications.title"
  | "dashboard.card.manageApplications.desc"
  | "dashboard.card.myApplications.title"
  | "dashboard.card.myApplications.desc"
  | "dashboard.card.knowYourApprovals.title"
  | "dashboard.card.knowYourApprovals.desc"
  | "dashboard.card.entityVault.title"
  | "dashboard.card.entityVault.desc"
  | "dashboard.card.projectDashboard.title"
  | "dashboard.card.projectDashboard.desc"
  | "dashboard.investorsWalkthrough"
  | "dashboard.recentActivity"
  | "dashboard.viewLogs"
  | "dashboard.activity.caf.title"
  | "dashboard.activity.caf.desc"
  | "dashboard.activity.power.title"
  | "dashboard.activity.power.desc"
  | "dashboard.helpLine.label"
  | "dashboard.helpLine.number"
  | "dashboard.helpLine.hours"
  | "dashboard.bottomNav.home"
  | "dashboard.bottomNav.services"
  | "dashboard.bottomNav.docs"
  | "dashboard.bottomNav.profile"
  | "drawer.home"
  | "drawer.myProjects"
  | "drawer.myApplications"
  | "drawer.fiscalIncentives"
  | "drawer.fiscalRegistrations"
  | "drawer.eVault"
  | "drawer.knowYourApprovals"
  | "drawer.settings"
  | "drawer.logout"
  | "drawer.profile.name"
  | "drawer.profile.company"
  | "chatbot.title"
  | "chatbot.greeting"
  | "chatbot.placeholder"
  | "myProjects.title"
  | "myProjects.quickAction.addProjectWithCaf"
  | "myProjects.quickAction.applyNewServices"
  | "myProjects.quickAction.knowYourApproval"
  | "myProjects.section.rtbaCaf"
  | "myProjects.section.caf"
  | "myProjects.section.scaf"
  | "myProjects.status.pendingVerification"
  | "myProjects.status.filingInProcess"
  | "myProjects.status.accepted"
  | "myProjects.pin"
  | "myProjects.applicant"
  | "myProjects.action"
  | "myProjects.field.applicant"
  | "myProjects.field.date"
  | "myProjects.field.sector"
  | "myProjects.field.district"
  | "myProjects.sector.manufacturing"
  | "myProjects.sector.otherService"
  | "myProjects.empty"
  | "myProjects.bottomNav.projects"
  | "myProjects.bottomNav.services"
  | "myProjects.bottomNav.payments"
  | "myProjects.bottomNav.profile"
  | "menu.language"
  | "menu.changePassword"
  | "menu.logout"
  | "changePassword.title"
  | "changePassword.current"
  | "changePassword.new"
  | "changePassword.confirm"
  | "changePassword.save"
  | "myApplications.title"
  | "myApplications.tab.applyNew"
  | "myApplications.tab.applied"
  | "myApplications.tab.pending"
  | "myApplications.tab.issued"
  | "myApplications.tab.rejected"
  | "myApplications.tab.withdrawn"
  | "myApplications.info.line1"
  | "myApplications.info.serviceCaf"
  | "myApplications.info.line1b"
  | "myApplications.info.clickApply"
  | "myApplications.info.line2"
  | "myApplications.info.clickHere"
  | "myApplications.section.rtba"
  | "myApplications.section.caf"
  | "myApplications.section.scaf"
  | "myApplications.field.district"
  | "myApplications.field.sector"
  | "myApplications.field.pin"
  | "myApplications.menu.profile"
  | "myApplications.fab.fillCaf"
  | "cafForm.title"
  | "cafForm.progress.step"
  | "cafForm.progress.completed"
  | "cafForm.section.applicantDetails"
  | "cafForm.badge.verified"
  | "cafForm.field.name"
  | "cafForm.field.role"
  | "cafForm.field.aadhaar"
  | "cafForm.field.pan"
  | "cafForm.field.mobile"
  | "cafForm.field.phone"
  | "cafForm.value.na"
  | "cafForm.field.email"
  | "cafForm.section.addressDetails"
  | "cafForm.field.country"
  | "cafForm.value.india"
  | "cafForm.field.state"
  | "cafForm.value.punjab"
  | "cafForm.field.district"
  | "cafForm.field.tehsil"
  | "cafForm.field.villageTown"
  | "cafForm.field.address"
  | "cafForm.field.pinCode"
  | "cafForm.file.authorizationLetter"
  | "cafForm.file.meta"
  | "cafForm.section.businessEntityInfo"
  | "cafForm.section.businessEntityInfo.sub"
  | "cafForm.signature.authorizedSignatory"
  | "cafForm.action.cancel"
  | "cafForm.action.nextStep"
  | "cafForm.action.viewAttachment";

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
    "dashboard.card.investmentProject.title": "Investment Project",
    "dashboard.card.investmentProject.desc": "Apply New Project / Expansion",
    "dashboard.card.manageApplications.title": "Manage Applications",
    "dashboard.card.manageApplications.desc": "Clearance | Incentive | Service",
    "dashboard.card.myApplications.title": "My Applications",
    "dashboard.card.myApplications.desc": "View & Share Documents",
    "dashboard.card.knowYourApprovals.title": "Know Your Approvals",
    "dashboard.card.knowYourApprovals.desc": "View Status & Progress",
    "dashboard.card.entityVault.title": "Entity Vault",
    "dashboard.card.entityVault.desc": "Secure Document Storage",
    "dashboard.card.projectDashboard.title": "Project Dashboard",
    "dashboard.card.projectDashboard.desc": "Insights & Reports",
    "dashboard.investorsWalkthrough": "Investors Walkthrough",
    "dashboard.recentActivity": "Recent Activity",
    "dashboard.viewLogs": "View Logs",
    "dashboard.activity.caf.title": "CAF Application #4922",
    "dashboard.activity.caf.desc": "Status updated to 'Scrutiny Completed'",
    "dashboard.activity.power.title": "Power Connection #2101",
    "dashboard.activity.power.desc": "Action required: Site Map Clarification",
    "dashboard.helpLine.label": "Help Line:",
    "dashboard.helpLine.number": "0172-4866999",
    "dashboard.helpLine.hours": "9:00 AM TO 5:00 PM",
    "dashboard.bottomNav.home": "Home",
    "dashboard.bottomNav.services": "Services",
    "dashboard.bottomNav.docs": "Docs",
    "dashboard.bottomNav.profile": "Profile",
    "drawer.home": "Home",
    "drawer.myProjects": "My Projects",
    "drawer.myApplications": "My Applications",
    "drawer.fiscalIncentives": "Fiscal Incentives",
    "drawer.fiscalRegistrations": "Fiscal Registrations",
    "drawer.eVault": "E-Vault",
    "drawer.knowYourApprovals": "Know Your Approvals",
    "drawer.settings": "Settings",
    "drawer.logout": "Logout",
    "drawer.profile.name": "Vikram Singh",
    "drawer.profile.company": "Tech Solutions Pvt Ltd",
    "chatbot.title": "Chat Support",
    "chatbot.greeting": "Hi! How can I help you today?",
    "chatbot.placeholder": "Type a message…",

    "myProjects.title": "My Projects",
    "myProjects.quickAction.addProjectWithCaf": "Add Project\nwith CAF",
    "myProjects.quickAction.applyNewServices": "Apply New\nServices",
    "myProjects.quickAction.knowYourApproval": "Know Your\nApproval",
    "myProjects.section.rtbaCaf": "Right To Business Act (RTBA-CAF)",
    "myProjects.section.caf": "Common Application Form (CAF)",
    "myProjects.section.scaf": "Service - Common Application Form (S-CAF)",
    "myProjects.status.pendingVerification": "Pending Verification",
    "myProjects.status.filingInProcess": "Filing in Process",
    "myProjects.status.accepted": "Accepted",
    "myProjects.pin": "PIN",
    "myProjects.applicant": "Applicant",
    "myProjects.action": "Action",
    "myProjects.field.applicant": "APPLICANT",
    "myProjects.field.date": "DATE",
    "myProjects.field.sector": "SECTOR",
    "myProjects.field.district": "DISTRICT",
    "myProjects.sector.manufacturing": "Manufacturing",
    "myProjects.sector.otherService": "Other Service",
    "myProjects.empty": "No applications found.",
    "myProjects.bottomNav.projects": "Projects",
    "myProjects.bottomNav.services": "Services",
    "myProjects.bottomNav.payments": "Payments",
    "myProjects.bottomNav.profile": "Profile",
    "menu.language": "Change Language",
    "menu.changePassword": "Change Password",
    "menu.logout": "Logout",
    "changePassword.title": "Change Password",
    "changePassword.current": "Current Password",
    "changePassword.new": "New Password",
    "changePassword.confirm": "Confirm Password",
    "changePassword.save": "Save",
    "myApplications.title": "My Applications",
    "myApplications.tab.applyNew": "Apply New",
    "myApplications.tab.applied": "Applied",
    "myApplications.tab.pending": "Pending",
    "myApplications.tab.issued": "Issued",
    "myApplications.tab.rejected": "Rejected",
    "myApplications.tab.withdrawn": "Withdrawn",
    "myApplications.info.line1": "To avail Services, filing of",
    "myApplications.info.serviceCaf": "Service-CAF",
    "myApplications.info.line1b": "is mandatory for existing projects.",
    "myApplications.info.clickApply": "Click here to Apply",
    "myApplications.info.line2": "To view list of Services",
    "myApplications.info.clickHere": "Click here",
    "myApplications.section.rtba": "Right To Business Act (RTBA-CAF)",
    "myApplications.section.caf": "Common Application Form (CAF)",
    "myApplications.section.scaf": "Service - Common Application (S-CAF)",
    "myApplications.field.district": "District",
    "myApplications.field.sector": "Sector",
    "myApplications.field.pin": "PIN",
    "myApplications.menu.profile": "Profile",
    "myApplications.fab.fillCaf": "Fill CAF",

    "cafForm.title": "CAF Form",
    "cafForm.progress.step": "Step 1 of 5",
    "cafForm.progress.completed": "20% Completed",
    "cafForm.section.applicantDetails": "1. Applicant Details",
    "cafForm.badge.verified": "Verified",
    "cafForm.field.name": "Name",
    "cafForm.field.role": "Chief Executive Officer",
    "cafForm.field.aadhaar": "Aadhaar Card No",
    "cafForm.field.pan": "Pan Card No",
    "cafForm.field.mobile": "Mobile No.",
    "cafForm.field.phone": "Phone Number",
    "cafForm.value.na": "N/A",
    "cafForm.field.email": "Email ID",
    "cafForm.section.addressDetails": "Address Details",
    "cafForm.field.country": "Country",
    "cafForm.value.india": "India",
    "cafForm.field.state": "State",
    "cafForm.value.punjab": "Punjab",
    "cafForm.field.district": "District",
    "cafForm.field.tehsil": "Tehsil",
    "cafForm.field.villageTown": "Village/Town",
    "cafForm.field.address": "Address",
    "cafForm.field.pinCode": "Pin Code",
    "cafForm.file.authorizationLetter": "Authorization Letter",
    "cafForm.file.meta": "PDF • 2.4 MB",
    "cafForm.section.businessEntityInfo": "2. Business Entity Info",
    "cafForm.section.businessEntityInfo.sub": "ASD Company 1 • Private Limited",
    "cafForm.signature.authorizedSignatory": "Authorized Signatory",
    "cafForm.action.cancel": "Cancel",
    "cafForm.action.nextStep": "Next Step",
    "cafForm.action.viewAttachment": "View Attachment",
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
    "dashboard.card.investmentProject.title": "निवेश परियोजना",
    "dashboard.card.investmentProject.desc": "नई परियोजना / विस्तार के लिए आवेदन",
    "dashboard.card.manageApplications.title": "आवेदन प्रबंधित करें",
    "dashboard.card.manageApplications.desc": "क्लीयरेंस | इंसेंटिव | सेवा",
    "dashboard.card.myApplications.title": "मेरे आवेदन",
    "dashboard.card.myApplications.desc": "दस्तावेज़ देखें और साझा करें",
    "dashboard.card.knowYourApprovals.title": "अपने अनुमोदन जानें",
    "dashboard.card.knowYourApprovals.desc": "स्थिति और प्रगति देखें",
    "dashboard.card.entityVault.title": "एंटिटी वॉल्ट",
    "dashboard.card.entityVault.desc": "सुरक्षित दस्तावेज़ भंडारण",
    "dashboard.card.projectDashboard.title": "परियोजना डैशबोर्ड",
    "dashboard.card.projectDashboard.desc": "इनसाइट्स और रिपोर्ट",
    "dashboard.investorsWalkthrough": "निवेशक वॉकथ्रू",
    "dashboard.recentActivity": "हाल की गतिविधि",
    "dashboard.viewLogs": "लॉग देखें",
    "dashboard.activity.caf.title": "CAF आवेदन #4922",
    "dashboard.activity.caf.desc": "स्थिति अपडेट: 'स्क्रूटनी पूर्ण'",
    "dashboard.activity.power.title": "पावर कनेक्शन #2101",
    "dashboard.activity.power.desc": "कार्रवाई आवश्यक: साइट मैप स्पष्टीकरण",
    "dashboard.helpLine.label": "हेल्प लाइन:",
    "dashboard.helpLine.number": "0172-4866999",
    "dashboard.helpLine.hours": "9:00 AM से 5:00 PM",
    "dashboard.bottomNav.home": "होम",
    "dashboard.bottomNav.services": "सेवाएं",
    "dashboard.bottomNav.docs": "दस्तावेज़",
    "dashboard.bottomNav.profile": "प्रोफ़ाइल",
    "drawer.home": "होम",
    "drawer.myProjects": "मेरे प्रोजेक्ट",
    "drawer.myApplications": "मेरे आवेदन",
    "drawer.fiscalIncentives": "वित्तीय प्रोत्साहन",
    "drawer.fiscalRegistrations": "वित्तीय पंजीकरण",
    "drawer.eVault": "ई-वॉल्ट",
    "drawer.knowYourApprovals": "अपने अनुमोदन जानें",
    "drawer.settings": "सेटिंग्स",
    "drawer.logout": "लॉगआउट",
    "drawer.profile.name": "विक्रम सिंह",
    "drawer.profile.company": "टेक सॉल्यूशंस प्रा. लि.",
    "chatbot.title": "चैट सहायता",
    "chatbot.greeting": "नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूँ?",
    "chatbot.placeholder": "संदेश लिखें…",

    "myProjects.title": "मेरे प्रोजेक्ट",
    "myProjects.quickAction.addProjectWithCaf": "CAF के साथ\nप्रोजेक्ट जोड़ें",
    "myProjects.quickAction.applyNewServices": "नई\nसेवाओं के लिए आवेदन",
    "myProjects.quickAction.knowYourApproval": "अपने\nअनुमोदन जानें",
    "myProjects.section.rtbaCaf": "राइट टू बिज़नेस एक्ट (RTBA-CAF)",
    "myProjects.section.caf": "कॉमन एप्लिकेशन फॉर्म (CAF)",
    "myProjects.section.scaf": "सेवा - कॉमन एप्लिकेशन फॉर्म (S-CAF)",
    "myProjects.status.pendingVerification": "सत्यापन लंबित",
    "myProjects.status.filingInProcess": "फाइलिंग प्रक्रिया में",
    "myProjects.status.accepted": "स्वीकृत",
    "myProjects.pin": "पिन",
    "myProjects.applicant": "आवेदक",
    "myProjects.action": "एक्शन",
    "myProjects.field.applicant": "आवेदक",
    "myProjects.field.date": "तारीख",
    "myProjects.field.sector": "क्षेत्र",
    "myProjects.field.district": "जिला",
    "myProjects.sector.manufacturing": "विनिर्माण",
    "myProjects.sector.otherService": "अन्य सेवा",
    "myProjects.empty": "कोई आवेदन नहीं मिला।",
    "myProjects.bottomNav.projects": "प्रोजेक्ट",
    "myProjects.bottomNav.services": "सेवाएं",
    "myProjects.bottomNav.payments": "भुगतान",
    "myProjects.bottomNav.profile": "प्रोफ़ाइल",
    "menu.language": "भाषा बदलें",
    "menu.changePassword": "पासवर्ड बदलें",
    "menu.logout": "लॉगआउट",
    "changePassword.title": "पासवर्ड बदलें",
    "changePassword.current": "वर्तमान पासवर्ड",
    "changePassword.new": "नया पासवर्ड",
    "changePassword.confirm": "पासवर्ड की पुष्टि करें",
    "changePassword.save": "सेव करें",
    "myApplications.title": "मेरे आवेदन",
    "myApplications.tab.applyNew": "नया आवेदन",
    "myApplications.tab.applied": "आवेदित",
    "myApplications.tab.pending": "लंबित",
    "myApplications.tab.issued": "जारी",
    "myApplications.tab.rejected": "अस्वीकृत",
    "myApplications.tab.withdrawn": "वापस लिया",
    "myApplications.info.line1": "सेवाओं का लाभ उठाने हेतु",
    "myApplications.info.serviceCaf": "Service-CAF",
    "myApplications.info.line1b": "दाखिल करना मौजूदा परियोजनाओं के लिए अनिवार्य है।",
    "myApplications.info.clickApply": "आवेदन करने के लिए यहाँ क्लिक करें",
    "myApplications.info.line2": "सेवाओं की सूची देखने के लिए",
    "myApplications.info.clickHere": "यहाँ क्लिक करें",
    "myApplications.section.rtba": "राइट टू बिज़नेस एक्ट (RTBA-CAF)",
    "myApplications.section.caf": "कॉमन एप्लिकेशन फॉर्म (CAF)",
    "myApplications.section.scaf": "सेवा - कॉमन एप्लिकेशन (S-CAF)",
    "myApplications.field.district": "जिला",
    "myApplications.field.sector": "क्षेत्र",
    "myApplications.field.pin": "पिन",
    "myApplications.menu.profile": "प्रोफ़ाइल",
    "myApplications.fab.fillCaf": "CAF भरें",

    "cafForm.title": "CAF फ़ॉर्म",
    "cafForm.progress.step": "चरण 1 / 5",
    "cafForm.progress.completed": "20% पूर्ण",
    "cafForm.section.applicantDetails": "1. आवेदक विवरण",
    "cafForm.badge.verified": "सत्यापित",
    "cafForm.field.name": "नाम",
    "cafForm.field.role": "मुख्य कार्यकारी अधिकारी",
    "cafForm.field.aadhaar": "आधार कार्ड नं.",
    "cafForm.field.pan": "पैन कार्ड नं.",
    "cafForm.field.mobile": "मोबाइल नं.",
    "cafForm.field.phone": "फ़ोन नंबर",
    "cafForm.value.na": "उपलब्ध नहीं",
    "cafForm.field.email": "ईमेल आईडी",
    "cafForm.section.addressDetails": "पता विवरण",
    "cafForm.field.country": "देश",
    "cafForm.value.india": "भारत",
    "cafForm.field.state": "राज्य",
    "cafForm.value.punjab": "पंजाब",
    "cafForm.field.district": "जिला",
    "cafForm.field.tehsil": "तहसील",
    "cafForm.field.villageTown": "गांव/शहर",
    "cafForm.field.address": "पता",
    "cafForm.field.pinCode": "पिन कोड",
    "cafForm.file.authorizationLetter": "प्राधिकरण पत्र",
    "cafForm.file.meta": "PDF • 2.4 MB",
    "cafForm.section.businessEntityInfo": "2. व्यवसाय इकाई जानकारी",
    "cafForm.section.businessEntityInfo.sub": "ASD Company 1 • प्राइवेट लिमिटेड",
    "cafForm.signature.authorizedSignatory": "अधिकृत हस्ताक्षरकर्ता",
    "cafForm.action.cancel": "रद्द करें",
    "cafForm.action.nextStep": "अगला चरण",
    "cafForm.action.viewAttachment": "संलग्नक देखें",
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
    "dashboard.card.investmentProject.title": "ਨਿਵੇਸ਼ ਪ੍ਰੋਜੈਕਟ",
    "dashboard.card.investmentProject.desc": "ਨਵਾਂ ਪ੍ਰੋਜੈਕਟ / ਵਿਸਥਾਰ ਲਈ ਅਰਜ਼ੀ",
    "dashboard.card.manageApplications.title": "ਅਰਜ਼ੀਆਂ ਸੰਭਾਲੋ",
    "dashboard.card.manageApplications.desc": "ਕਲੀਅਰੈਂਸ | ਇੰਸੈਂਟਿਵ | ਸੇਵਾ",
    "dashboard.card.myApplications.title": "ਮੇਰੀਆਂ ਅਰਜ਼ੀਆਂ",
    "dashboard.card.myApplications.desc": "ਦਸਤਾਵੇਜ਼ ਵੇਖੋ ਅਤੇ ਸਾਂਝੇ ਕਰੋ",
    "dashboard.card.knowYourApprovals.title": "ਆਪਣੀਆਂ ਮਨਜ਼ੂਰੀਆਂ ਜਾਣੋ",
    "dashboard.card.knowYourApprovals.desc": "ਸਥਿਤੀ ਅਤੇ ਪ੍ਰਗਤੀ ਵੇਖੋ",
    "dashboard.card.entityVault.title": "ਐਂਟਿਟੀ ਵਾਲਟ",
    "dashboard.card.entityVault.desc": "ਸੁਰੱਖਿਅਤ ਦਸਤਾਵੇਜ਼ ਸਟੋਰੇਜ",
    "dashboard.card.projectDashboard.title": "ਪ੍ਰੋਜੈਕਟ ਡੈਸ਼ਬੋਡ",
    "dashboard.card.projectDashboard.desc": "ਇਨਸਾਈਟਸ ਅਤੇ ਰਿਪੋਰਟਾਂ",
    "dashboard.investorsWalkthrough": "ਨਿਵੇਸ਼ਕ ਵਾਕਥਰੂ",
    "dashboard.recentActivity": "ਹਾਲੀਆ ਗਤੀਵਿਧੀ",
    "dashboard.viewLogs": "ਲੌਗ ਵੇਖੋ",
    "dashboard.activity.caf.title": "CAF ਅਰਜ਼ੀ #4922",
    "dashboard.activity.caf.desc": "ਸਥਿਤੀ ਅਪਡੇਟ: 'ਸਕ੍ਰੂਟੀਨੀ ਪੂਰੀ'",
    "dashboard.activity.power.title": "ਪਾਵਰ ਕਨੈਕਸ਼ਨ #2101",
    "dashboard.activity.power.desc": "ਕਾਰਵਾਈ ਲੋੜੀਂਦੀ: ਸਾਈਟ ਮੈਪ ਸਪਸ਼ਟੀਕਰਣ",
    "dashboard.helpLine.label": "ਹੈਲਪ ਲਾਈਨ:",
    "dashboard.helpLine.number": "0172-4866999",
    "dashboard.helpLine.hours": "9:00 AM ਤੋਂ 5:00 PM",
    "dashboard.bottomNav.home": "ਹੋਮ",
    "dashboard.bottomNav.services": "ਸੇਵਾਵਾਂ",
    "dashboard.bottomNav.docs": "ਦਸਤਾਵੇਜ਼",
    "dashboard.bottomNav.profile": "ਪ੍ਰੋਫਾਈਲ",
    "drawer.home": "ਹੋਮ",
    "drawer.myProjects": "ਮੇਰੇ ਪ੍ਰੋਜੈਕਟ",
    "drawer.myApplications": "ਮੇਰੀਆਂ ਅਰਜ਼ੀਆਂ",
    "drawer.fiscalIncentives": "ਵਿੱਤੀ ਪ੍ਰੋਤਸਾਹਨ",
    "drawer.fiscalRegistrations": "ਵਿੱਤੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    "drawer.eVault": "ਈ-ਵਾਲਟ",
    "drawer.knowYourApprovals": "ਆਪਣੀਆਂ ਮਨਜ਼ੂਰੀਆਂ ਜਾਣੋ",
    "drawer.settings": "ਸੈਟਿੰਗਜ਼",
    "drawer.logout": "ਲੌਗਆਉਟ",
    "drawer.profile.name": "ਵਿਕਰਮ ਸਿੰਘ",
    "drawer.profile.company": "ਟੈਕ ਸੋਲੂਸ਼ਨਜ਼ ਪ੍ਰਾਈਵੇਟ ਲਿਮਿਟੇਡ",
    "chatbot.title": "ਚੈਟ ਸਹਾਇਤਾ",
    "chatbot.greeting": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
    "chatbot.placeholder": "ਸੁਨੇਹਾ ਲਿਖੋ…",

    "myProjects.title": "ਮੇਰੇ ਪ੍ਰੋਜੈਕਟ",
    "myProjects.quickAction.addProjectWithCaf": "CAF ਨਾਲ\nਪ੍ਰੋਜੈਕਟ ਜੋੜੋ",
    "myProjects.quickAction.applyNewServices": "ਨਵੀਆਂ\nਸੇਵਾਵਾਂ ਲਈ ਅਰਜ਼ੀ",
    "myProjects.quickAction.knowYourApproval": "ਆਪਣੀਆਂ\nਮਨਜ਼ੂਰੀਆਂ ਜਾਣੋ",
    "myProjects.section.rtbaCaf": "ਰਾਈਟ ਟੂ ਬਿਜ਼ਨਸ ਐਕਟ (RTBA-CAF)",
    "myProjects.section.caf": "ਕਾਮਨ ਐਪਲੀਕੇਸ਼ਨ ਫਾਰਮ (CAF)",
    "myProjects.section.scaf": "ਸੇਵਾ - ਕਾਮਨ ਐਪਲੀਕੇਸ਼ਨ ਫਾਰਮ (S-CAF)",
    "myProjects.status.pendingVerification": "ਤਸਦੀਕ ਬਾਕੀ",
    "myProjects.status.filingInProcess": "ਫਾਈਲਿੰਗ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ",
    "myProjects.status.accepted": "ਮਨਜ਼ੂਰ",
    "myProjects.pin": "ਪਿਨ",
    "myProjects.applicant": "ਆਵੇਦਕ",
    "myProjects.action": "ਐਕਸ਼ਨ",
    "myProjects.field.applicant": "ਆਵੇਦਕ",
    "myProjects.field.date": "ਤਾਰੀਖ",
    "myProjects.field.sector": "ਸੈਕਟਰ",
    "myProjects.field.district": "ਜ਼ਿਲ੍ਹਾ",
    "myProjects.sector.manufacturing": "ਮੈਨੂਫੈਕਚਰਿੰਗ",
    "myProjects.sector.otherService": "ਹੋਰ ਸੇਵਾ",
    "myProjects.empty": "ਕੋਈ ਅਰਜ਼ੀ ਨਹੀਂ ਮਿਲੀ।",
    "myProjects.bottomNav.projects": "ਪ੍ਰੋਜੈਕਟ",
    "myProjects.bottomNav.services": "ਸੇਵਾਵਾਂ",
    "myProjects.bottomNav.payments": "ਭੁਗਤਾਨ",
    "myProjects.bottomNav.profile": "ਪ੍ਰੋਫਾਈਲ",
    "menu.language": "ਭਾਸ਼ਾ ਬਦਲੋ",
    "menu.changePassword": "ਪਾਸਵਰਡ ਬਦਲੋ",
    "menu.logout": "ਲੌਗਆਉਟ",
    "changePassword.title": "ਪਾਸਵਰਡ ਬਦਲੋ",
    "changePassword.current": "ਮੌਜੂਦਾ ਪਾਸਵਰਡ",
    "changePassword.new": "ਨਵਾਂ ਪਾਸਵਰਡ",
    "changePassword.confirm": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    "changePassword.save": "ਸੇਵ ਕਰੋ",
    "myApplications.title": "ਮੇਰੀਆਂ ਅਰਜ਼ੀਆਂ",
    "myApplications.tab.applyNew": "ਨਵੀਂ ਅਰਜ਼ੀ",
    "myApplications.tab.applied": "ਅਰਜ਼ੀ ਕੀਤੀ",
    "myApplications.tab.pending": "ਬਾਕੀ",
    "myApplications.tab.issued": "ਜਾਰੀ",
    "myApplications.tab.rejected": "ਰੱਦ",
    "myApplications.tab.withdrawn": "ਵਾਪਸ ਲਈ",
    "myApplications.info.line1": "ਸੇਵਾਵਾਂ ਲਈ",
    "myApplications.info.serviceCaf": "Service-CAF",
    "myApplications.info.line1b": "ਦਾ ਫਾਇਲ ਕਰਨਾ ਮੌਜੂਦਾ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਲਾਜ਼ਮੀ ਹੈ।",
    "myApplications.info.clickApply": "ਅਰਜ਼ੀ ਦੇਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ",
    "myApplications.info.line2": "ਸੇਵਾਵਾਂ ਦੀ ਸੂਚੀ ਵੇਖਣ ਲਈ",
    "myApplications.info.clickHere": "ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ",
    "myApplications.section.rtba": "ਰਾਈਟ ਟੂ ਬਿਜ਼ਨਸ ਐਕਟ (RTBA-CAF)",
    "myApplications.section.caf": "ਕਾਮਨ ਐਪਲੀਕੇਸ਼ਨ ਫਾਰਮ (CAF)",
    "myApplications.section.scaf": "ਸੇਵਾ - ਕਾਮਨ ਐਪਲੀਕੇਸ਼ਨ (S-CAF)",
    "myApplications.field.district": "ਜ਼ਿਲ੍ਹਾ",
    "myApplications.field.sector": "ਸੈਕਟਰ",
    "myApplications.field.pin": "ਪਿਨ",
    "myApplications.menu.profile": "ਪ੍ਰੋਫਾਈਲ",
    "myApplications.fab.fillCaf": "CAF ਭਰੋ",

    "cafForm.title": "CAF ਫਾਰਮ",
    "cafForm.progress.step": "ਕਦਮ 1 / 5",
    "cafForm.progress.completed": "20% ਪੂਰਾ",
    "cafForm.section.applicantDetails": "1. ਅਰਜ਼ੀਕਰਤਾ ਵੇਰਵੇ",
    "cafForm.badge.verified": "ਤਸਦੀਕ ਹੋਇਆ",
    "cafForm.field.name": "ਨਾਂ",
    "cafForm.field.role": "ਚੀਫ਼ ਏਗਜ਼ੈਕਟਿਵ ਅਫ਼ਸਰ",
    "cafForm.field.aadhaar": "ਆਧਾਰ ਕਾਰਡ ਨੰ.",
    "cafForm.field.pan": "ਪੈਨ ਕਾਰਡ ਨੰ.",
    "cafForm.field.mobile": "ਮੋਬਾਈਲ ਨੰ.",
    "cafForm.field.phone": "ਫ਼ੋਨ ਨੰਬਰ",
    "cafForm.value.na": "ਲਾਗੂ ਨਹੀਂ",
    "cafForm.field.email": "ਈਮੇਲ ਆਈਡੀ",
    "cafForm.section.addressDetails": "ਪਤਾ ਵੇਰਵੇ",
    "cafForm.field.country": "ਦੇਸ਼",
    "cafForm.value.india": "ਭਾਰਤ",
    "cafForm.field.state": "ਰਾਜ",
    "cafForm.value.punjab": "ਪੰਜਾਬ",
    "cafForm.field.district": "ਜ਼ਿਲ੍ਹਾ",
    "cafForm.field.tehsil": "ਤਹਿਸੀਲ",
    "cafForm.field.villageTown": "ਪਿੰਡ/ਸ਼ਹਿਰ",
    "cafForm.field.address": "ਪਤਾ",
    "cafForm.field.pinCode": "ਪਿਨ ਕੋਡ",
    "cafForm.file.authorizationLetter": "ਅਧਿਕਾਰ ਪੱਤਰ",
    "cafForm.file.meta": "PDF • 2.4 MB",
    "cafForm.section.businessEntityInfo": "2. ਕਾਰੋਬਾਰੀ ਇਕਾਈ ਜਾਣਕਾਰੀ",
    "cafForm.section.businessEntityInfo.sub": "ASD Company 1 • ਪ੍ਰਾਈਵੇਟ ਲਿਮਿਟੇਡ",
    "cafForm.signature.authorizedSignatory": "ਅਧਿਕਾਰਤ ਦਸਤਖ਼ਤਕਾਰ",
    "cafForm.action.cancel": "ਰੱਦ ਕਰੋ",
    "cafForm.action.nextStep": "ਅਗਲਾ ਕਦਮ",
    "cafForm.action.viewAttachment": "ਅਟੈਚਮੈਂਟ ਵੇਖੋ",
  },
};
