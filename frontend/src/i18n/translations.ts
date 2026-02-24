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
  | "projectDashboard.title"
  | "projectDashboard.summary.totalInv"
  | "projectDashboard.summary.applications"
  | "projectDashboard.summary.activeNow"
  | "projectDashboard.summary.pending"
  | "projectDashboard.summary.inReview"
  | "projectDashboard.card.applicationStatus.title"
  | "projectDashboard.card.applicationStatus.sub"
  | "projectDashboard.legend.pending"
  | "projectDashboard.legend.approved"
  | "projectDashboard.legend.rejected"
  | "projectDashboard.card.totalInvestment.title"
  | "projectDashboard.card.totalInvestment.sub"
  | "projectDashboard.card.avgApprovalTime.title"
  | "projectDashboard.card.avgApprovalTime.delta"
  | "projectDashboard.segment.projects"
  | "projectDashboard.segment.month"
  | "projectDashboard.month.jan"
  | "projectDashboard.month.feb"
  | "projectDashboard.month.mar"
  | "projectDashboard.month.apr"
  | "projectDashboard.month.may"
  | "projectDashboard.month.jun"
  | "projectDashboard.axis.100cr"
  | "projectDashboard.axis.50cr"
  | "projectDashboard.axis.0"
  | "projectDashboard.bar.textile"
  | "projectDashboard.bar.solar"
  | "projectDashboard.bar.agro"
  | "projectDashboard.bar.it"
  | "projectDashboard.bar.auto"
  | "contacts.title"
  | "contacts.searchPlaceholder"
  | "contacts.pill.all"
  | "contacts.pill.approvals"
  | "contacts.pill.utilities"
  | "contacts.pill.emergency"
  | "contacts.nodalOfficer"
  | "contacts.action.call"
  | "contacts.action.email"
  | "contacts.endOfDirectory"
  | "entityVault.title"
  | "entityVault.searchPlaceholder"
  | "entityVault.empty"
  | "entityVault.row.applicationId"
  | "entityVault.row.formName"
  | "entityVault.row.clearanceIssued"
  | "entityVault.row.senderName"
  | "entityVault.section.clearanceDocuments"
  | "entityVault.action.download"
  | "entityVault.label.ipin"
  | "regulatoryClearances.title"
  | "regulatoryClearances.tab.applyNew"
  | "regulatoryClearances.tab.applied"
  | "regulatoryClearances.tab.pending"
  | "regulatoryClearances.tab.issued"
  | "regulatoryClearances.tab.rejected"
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
  | "investmentProject.title"
  | "investmentProject.welcome"
  | "investmentProject.greetings"
  | "investmentProject.thankYouPrefix"
  | "investmentProject.punjab"
  | "investmentProject.thankYouSuffix"
  | "investmentProject.enterprisePrefix"
  | "investmentProject.msme"
  | "investmentProject.enterpriseOr"
  | "investmentProject.largeEnterprise"
  | "investmentProject.enterpriseSuffix"
  | "investmentProject.guideTo"
  | "investmentProject.card.rtba.title"
  | "investmentProject.card.rtba.desc"
  | "investmentProject.card.greenStamp.title"
  | "investmentProject.card.greenStamp.desc"
  | "investmentProject.card.singleWindow.title"
  | "investmentProject.card.singleWindow.desc"
  | "investmentProject.card.serviceCaf.title"
  | "investmentProject.card.serviceCaf.desc"
  | "investmentProject.msmeLandNote"
  | "investmentProject.msmeLandNoteSub"
  | "investmentProject.section.rtbaClearances"
  | "investmentProject.item"
  | "investmentProject.field.department"
  | "investmentProject.field.act"
  | "investmentProject.field.services"
  | "investmentProject.item1.departmentValue"
  | "investmentProject.item1.actValue"
  | "investmentProject.item1.service1"
  | "investmentProject.item1.service2"
  | "investmentProject.item1.service3"
  | "investmentProject.item2.departmentValue"
  | "investmentProject.item2.actValue"
  | "investmentProject.item2.service1"
  | "investmentProject.item2.service2"
  | "investmentProject.readFullRtba"
  | "investmentProject.msmeQuestion"
  | "investmentProject.yes"
  | "investmentProject.no"
  | "investmentProject.proceed"
  | "drawer.home"
  | "drawer.myProjects"
  | "drawer.myApplications"
  | "drawer.fiscalIncentives"
  | "drawer.fiscalRegistrations"
  | "drawer.eVault"
  | "drawer.knowYourApprovals"
  | "drawer.settings"
  | "drawer.logout"
  | "drawer.language"
  | "drawer.changePassword"
  | "drawer.myProfile"
  | "drawer.profile.name"
  | "drawer.profile.company"
  | "profile.title"
  | "profile.verified"
  | "profile.name"
  | "profile.company"
  | "profile.section.personalDetails"
  | "profile.section.companyDetails"
  | "profile.section.preferences"
  | "profile.field.fullName"
  | "profile.field.email"
  | "profile.field.mobile"
  | "profile.field.pan"
  | "profile.field.gstin"
  | "profile.field.registeredAddress"
  | "profile.preference.language"
  | "profile.preference.notifications"
  | "profile.preference.biometric"
  | "profile.logout"
  | "profile.emailValue"
  | "profile.mobileValue"
  | "profile.panValue"
  | "profile.gstinValue"
  | "profile.addressValue"
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
  | "myProjects.status.verified"
  | "myProjects.pin"
  | "myProjects.applicant"
  | "myProjects.action"
  | "myProjects.field.applicant"
  | "myProjects.field.date"
  | "myProjects.field.sector"
  | "myProjects.field.district"
  | "myProjects.field.mobile"
  | "myProjects.fab.addProjectWithCaf"
  | "myProjects.fab.applyForNewService"
  | "myProjects.action.addClearance"
  | "myProjects.action.updateApplicant"
  | "myProjects.action.updatePartners"
  | "myProjects.action.updateCompanyPan"
  | "myProjects.sector.manufacturing"
  | "myProjects.sector.otherService"
  | "myProjects.sector.otherServiceProjects"
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
  | "cafForm.action.viewAttachment"
  | "cafForm.common.select"
  | "cafForm.common.yes"
  | "cafForm.common.no"
  | "cafForm.common.datePlaceholder"
  | "cafForm.step1.title"
  | "cafForm.step1.field.title"
  | "cafForm.step1.field.firstName"
  | "cafForm.step1.field.middleName"
  | "cafForm.step1.field.lastName"
  | "cafForm.step1.field.designation"
  | "cafForm.step1.field.dob"
  | "cafForm.step1.field.photo"
  | "cafForm.step1.field.signature"
  | "cafForm.step1.field.aadhaarNo"
  | "cafForm.step1.field.aadhaarUpload"
  | "cafForm.step1.field.panNo"
  | "cafForm.step1.field.panUpload"
  | "cafForm.step1.field.phone"
  | "cafForm.step1.field.fax"
  | "cafForm.step1.field.mobile"
  | "cafForm.step1.field.email"
  | "cafForm.step1.field.country"
  | "cafForm.step1.field.state"
  | "cafForm.step1.field.district"
  | "cafForm.step1.field.tehsil"
  | "cafForm.step1.field.city"
  | "cafForm.step1.field.address1"
  | "cafForm.step1.field.address2"
  | "cafForm.step1.field.pinCode"
  | "cafForm.step1.field.authorizationLetter"
  | "cafForm.step2.title"
  | "cafForm.step2.field.entityName"
  | "cafForm.step2.field.entityType"
  | "cafForm.step2.field.country"
  | "cafForm.step2.field.state"
  | "cafForm.step2.field.district"
  | "cafForm.step2.field.tehsil"
  | "cafForm.step2.field.villageTown"
  | "cafForm.step2.field.address1"
  | "cafForm.step2.field.address2"
  | "cafForm.step2.field.pinCode"
  | "cafForm.step2.field.multiUnitsCheckbox"
  | "cafForm.step2.field.companyPan"
  | "cafForm.step2.field.companyPanUpload"
  | "cafForm.step2.field.udyamOptional"
  | "cafForm.step3.title"
  | "cafForm.step3.pageTitle"
  | "cafForm.step3.pageSub"
  | "cafForm.step3.field.sameAsEntity"
  | "cafForm.step3.field.projectName"
  | "cafForm.step3.field.projectPurpose"
  | "cafForm.step3.field.projectType"
  | "cafForm.step3.field.unitLocation"
  | "cafForm.step3.field.country"
  | "cafForm.step3.field.state"
  | "cafForm.step3.field.district"
  | "cafForm.step3.field.tehsil"
  | "cafForm.step3.field.city"
  | "cafForm.step3.field.address1"
  | "cafForm.step3.field.address2"
  | "cafForm.step3.field.pinCode"
  | "cafForm.step3.field.gstApplicable"
  | "cafForm.step4.title"
  | "cafForm.step4.field.certificateIncorporationUpload"
  | "cafForm.step5.title"
  | "cafForm.step5.field.landArea"
  | "cafForm.step5.field.landRegistrationType"
  | "cafForm.step5.field.landDocumentUpload"
  | "cafForm.step5.field.multipleCityInvolved"
  | "cafForm.step5.field.mcLimit"
  | "cafForm.step5.field.mcDistanceKm"
  | "cafForm.step5.field.sector"
  | "cafForm.step5.field.dprUpload"
  | "cafForm.step5.field.migrationFromFiipToIbdp"
  | "cafForm.step5.field.policyChapter"
  | "cafForm.step5.field.protectedMonument"
  | "cafForm.step5.field.nmaNocAvailable"
  | "cafForm.step6.title"
  | "cafForm.step6.note"
  | "cafForm.step6.field.landCost"
  | "cafForm.step6.field.buildingCost"
  | "cafForm.step6.field.plantMachineryCost"
  | "cafForm.step6.field.fci"
  | "cafForm.step6.field.otherCost"
  | "cafForm.step6.field.totalProjectCost"
  | "cafForm.step6.field.totalProjectCostHelp"
  | "cafForm.step6.field.commercialProduction"
  | "cafForm.step6.field.industryType"
  | "cafForm.step7.title"
  | "cafForm.step7.field.phaseName"
  | "cafForm.step7.field.fci"
  | "cafForm.step7.field.investDate"
  | "cafForm.step7.field.productionDate"
  | "cafForm.step7.field.fdiInvolved"
  | "cafForm.step8.title"
  | "cafForm.step8.field.financialYear"
  | "cafForm.step8.field.selectSkill"
  | "cafForm.step8.field.directMale"
  | "cafForm.step8.field.directFemale"
  | "cafForm.step8.field.indirectMale"
  | "cafForm.step8.field.indirectFemale"
  | "cafForm.step8.field.totalDirectMale"
  | "cafForm.step8.field.totalDirectFemale"
  | "cafForm.step8.field.totalIndirectMale"
  | "cafForm.step8.field.totalIndirectFemale"
  | "cafForm.step8.field.totalMale"
  | "cafForm.step8.field.totalFemale"
  | "cafForm.step9.title"
  | "cafForm.step9.field.regulatoryClearance"
  | "cafForm.step9.field.fiscalIncentive"
  | "cafForm.step9.field.croReport";

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

    "projectDashboard.title": "Insights & Analytics",
    "projectDashboard.summary.totalInv": "Total Inv.",
    "projectDashboard.summary.applications": "Applications",
    "projectDashboard.summary.activeNow": "Active Now",
    "projectDashboard.summary.pending": "Pending",
    "projectDashboard.summary.inReview": "In review",
    "projectDashboard.card.applicationStatus.title": "Application Status",
    "projectDashboard.card.applicationStatus.sub": "Current fiscal year breakdown",
    "projectDashboard.legend.pending": "Pending",
    "projectDashboard.legend.approved": "Approved",
    "projectDashboard.legend.rejected": "Rejected",
    "projectDashboard.card.totalInvestment.title": "Total Investment",
    "projectDashboard.card.totalInvestment.sub": "Broken down by project type",
    "projectDashboard.card.avgApprovalTime.title": "Avg. Approval Time",
    "projectDashboard.card.avgApprovalTime.delta": "-2.5 days",
    "projectDashboard.segment.projects": "Projects",
    "projectDashboard.segment.month": "Month",
    "projectDashboard.month.jan": "Jan",
    "projectDashboard.month.feb": "Feb",
    "projectDashboard.month.mar": "Mar",
    "projectDashboard.month.apr": "Apr",
    "projectDashboard.month.may": "May",
    "projectDashboard.month.jun": "Jun",
    "projectDashboard.axis.100cr": "₹100Cr",
    "projectDashboard.axis.50cr": "₹50Cr",
    "projectDashboard.axis.0": "₹0",
    "projectDashboard.bar.textile": "Textile",
    "projectDashboard.bar.solar": "Solar",
    "projectDashboard.bar.agro": "Agro",
    "projectDashboard.bar.it": "IT",
    "projectDashboard.bar.auto": "Auto",

    "contacts.title": "Contacts",
    "contacts.searchPlaceholder": "Search department, officer...",
    "contacts.pill.all": "All",
    "contacts.pill.approvals": "Approvals",
    "contacts.pill.utilities": "Utilities",
    "contacts.pill.emergency": "Emergency",
    "contacts.nodalOfficer": "Nodal Officer:",
    "contacts.action.call": "Call",
    "contacts.action.email": "Email",
    "contacts.endOfDirectory": "End of Directory",

    "entityVault.title": "Entity E-Vault",
    "entityVault.searchPlaceholder": "Search by IPIN or Application ID",
    "entityVault.empty": "No recent activities for this IPIN.",
    "entityVault.row.applicationId": "Application ID",
    "entityVault.row.formName": "Form Name",
    "entityVault.row.clearanceIssued": "Clearance Issued",
    "entityVault.row.senderName": "Sender Name",
    "entityVault.section.clearanceDocuments": "Clearance Documents",
    "entityVault.action.download": "Download",
    "entityVault.label.ipin": "IPIN",

    "regulatoryClearances.title": "Investment Project Applications",
    "regulatoryClearances.tab.applyNew": "Apply New",
    "regulatoryClearances.tab.applied": "Applied",
    "regulatoryClearances.tab.pending": "Pending",
    "regulatoryClearances.tab.issued": "Issued",
    "regulatoryClearances.tab.rejected": "Rejected",
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

    "investmentProject.title": "Investment Project",
    "investmentProject.welcome": "Welcome",
    "investmentProject.greetings": "Greetings from FastTrack Punjab!",
    "investmentProject.thankYouPrefix": "Thank you for choosing ",
    "investmentProject.punjab": "Punjab",
    "investmentProject.thankYouSuffix": " for your investment journey.",
    "investmentProject.enterprisePrefix": "Based on your enterprise category — ",
    "investmentProject.msme": "MSME",
    "investmentProject.enterpriseOr": " or ",
    "investmentProject.largeEnterprise": "Large Enterprise",
    "investmentProject.enterpriseSuffix": " — the system will guide you to:",
    "investmentProject.guideTo": "the system will guide you to:",
    "investmentProject.card.rtba.title": "Right to Business Act",
    "investmentProject.card.rtba.desc": "For eligible MSMEs (as per Punjab Right to Business Act 2020)",
    "investmentProject.card.greenStamp.title": "Green Stamp Paper Service",
    "investmentProject.card.greenStamp.desc": "If you have identified land and intend to purchase",
    "investmentProject.card.singleWindow.title": "Single Window Portal",
    "investmentProject.card.singleWindow.desc": "For other approvals and services through FastTrack Punjab",
    "investmentProject.card.serviceCaf.title": "Service-CAF",
    "investmentProject.card.serviceCaf.desc": "To obtain services for new or existing projects",
    "investmentProject.msmeLandNote": "MSMEs having land are eligible to obtain Certificate of In-principle Approval based on self-certification which will be valid for 3 years and 6 months.",
    "investmentProject.msmeLandNoteSub": "The enterprise is required to apply for applicable regular approvals not later than 3 years from the date of issue.",
    "investmentProject.section.rtbaClearances": "Clearances under RTBA *",
    "investmentProject.item": "Item",
    "investmentProject.field.department": "Department",
    "investmentProject.field.act": "Act",
    "investmentProject.field.services": "Services",
    "investmentProject.item1.departmentValue": "Local Government (LG)",
    "investmentProject.item1.actValue": "The Punjab Municipal Act, 1911 and Municipal Corporation Act, 1976",
    "investmentProject.item1.service1": "Sanction of Building Plans",
    "investmentProject.item1.service2": "Completion / Occupancy Certificate",
    "investmentProject.item1.service3": "Trade License Registration",
    "investmentProject.item2.departmentValue": "Housing and Urban Development (HUD)",
    "investmentProject.item2.actValue": "The Punjab Regional and Town Planning and Development Act, 1995",
    "investmentProject.item2.service1": "Sanction of Building Plans",
    "investmentProject.item2.service2": "Change of land use",
    "investmentProject.readFullRtba": "Read full RTBA 2020 detail",
    "investmentProject.msmeQuestion": "Does your project fall under MSME Category?",
    "investmentProject.yes": "Yes",
    "investmentProject.no": "No",
    "investmentProject.proceed": "Proceed to Application",
    "drawer.home": "Home",
    "drawer.myProfile": "My Profile",
    "drawer.myProjects": "My Projects",
    "drawer.myApplications": "My Applications",
    "drawer.fiscalIncentives": "Fiscal Incentives",
    "drawer.fiscalRegistrations": "Fiscal Registrations",
    "drawer.eVault": "E-Vault",
    "drawer.knowYourApprovals": "Know Your Approvals",
    "drawer.settings": "Settings",
    "drawer.logout": "Logout",
    "drawer.language": "Language",
    "drawer.changePassword": "Change Password",
    "drawer.profile.name": "Vikram Singh",
    "drawer.profile.company": "Tech Solutions Pvt Ltd",
    "profile.title": "Investor Profile",
    "profile.verified": "Verified",
    "profile.name": "Sandeep Singh",
    "profile.company": "Punjab Industrial Hub",
    "profile.section.personalDetails": "Personal Details",
    "profile.section.companyDetails": "Company Details",
    "profile.section.preferences": "Preferences",
    "profile.field.fullName": "Full Name",
    "profile.field.email": "Email Address",
    "profile.field.mobile": "Mobile Number",
    "profile.field.pan": "PAN Number",
    "profile.field.gstin": "GSTIN",
    "profile.field.registeredAddress": "Registered Address",
    "profile.preference.language": "Language",
    "profile.preference.notifications": "Notifications",
    "profile.preference.biometric": "Biometric Login",
    "profile.logout": "Log Out",
    "profile.emailValue": "sandeep.s@punjabihub.com",
    "profile.mobileValue": "+91 98765 43210",
    "profile.panValue": "ABCDE1234F",
    "profile.gstinValue": "03ABCDE1234F1Z5",
    "profile.addressValue": "Plot 45, Industrial Area Phase VIII, Mohali, Punjab 160071",
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
    "myProjects.status.verified": "Verified",
    "myProjects.pin": "PIN",
    "myProjects.applicant": "Applicant",
    "myProjects.action": "Action",
    "myProjects.field.applicant": "APPLICANT",
    "myProjects.field.date": "DATE",
    "myProjects.field.sector": "SECTOR",
    "myProjects.field.district": "DISTRICT",
    "myProjects.field.mobile": "Mobile No",
    "myProjects.fab.addProjectWithCaf": "Add New Project with CAF",
    "myProjects.fab.applyForNewService": "Apply For New Service",
    "myProjects.action.addClearance": "Add Clearance",
    "myProjects.action.updateApplicant": "Update Applicant",
    "myProjects.action.updatePartners": "Update Partners",
    "myProjects.action.updateCompanyPan": "Update Company PAN",
    "myProjects.sector.manufacturing": "Manufacturing",
    "myProjects.sector.otherService": "Other Service",
    "myProjects.sector.otherServiceProjects": "Other Service Projects",
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
    "cafForm.common.select": "Select",
    "cafForm.common.yes": "Yes",
    "cafForm.common.no": "No",
    "cafForm.common.datePlaceholder": "YYYY-MM-DD",
    "cafForm.step1.title": "Applicant Details",
    "cafForm.step1.field.title": "1.1 Title *",
    "cafForm.step1.field.firstName": "1.2 First Name *",
    "cafForm.step1.field.middleName": "1.3 Middle Name",
    "cafForm.step1.field.lastName": "1.4 Last Name *",
    "cafForm.step1.field.designation": "1.5 Designation *",
    "cafForm.step1.field.dob": "1.6 Date of Birth *",
    "cafForm.step1.field.photo": "1.7 Applicant Photo *",
    "cafForm.step1.field.signature": "1.8 Applicant Signature *",
    "cafForm.step1.field.aadhaarNo": "1.9 Aadhaar Document No. *",
    "cafForm.step1.field.aadhaarUpload": "1.10 Upload Aadhaar Document *",
    "cafForm.step1.field.panNo": "1.11 Pan Card No *",
    "cafForm.step1.field.panUpload": "1.12 Upload Pan Card *",
    "cafForm.step1.field.phone": "1.13 Applicant Phone Number",
    "cafForm.step1.field.fax": "1.14 Applicant Fax No.",
    "cafForm.step1.field.mobile": "1.15 Applicant Mobile No. *",
    "cafForm.step1.field.email": "1.16 Applicant Email ID *",
    "cafForm.step1.field.country": "1.17 Select Country *",
    "cafForm.step1.field.state": "1.18 Select State/UT *",
    "cafForm.step1.field.district": "1.19 Select District *",
    "cafForm.step1.field.tehsil": "1.20 Select Tehsil *",
    "cafForm.step1.field.city": "1.21 City/Town/Village *",
    "cafForm.step1.field.address1": "1.22 Address Line 1 *",
    "cafForm.step1.field.address2": "1.23 Address Line 2",
    "cafForm.step1.field.pinCode": "1.24 Pin Code *",
    "cafForm.step1.field.authorizationLetter": "1.25 Upload Authorization Letter *",
    "cafForm.step2.title": "Business Entity Information",
    "cafForm.step2.field.entityName": "2.1 Business Entity Name *",
    "cafForm.step2.field.entityType": "2.2 Business Entity Type *",
    "cafForm.step2.field.country": "2.3 Select Country *",
    "cafForm.step2.field.state": "2.4 Select State/UT *",
    "cafForm.step2.field.district": "2.5 Select District *",
    "cafForm.step2.field.tehsil": "2.6 Select Tehsil *",
    "cafForm.step2.field.villageTown": "2.7 Name of Village/Town *",
    "cafForm.step2.field.address1": "2.8 Address Line 1 *",
    "cafForm.step2.field.address2": "2.9 Address Line 2",
    "cafForm.step2.field.pinCode": "2.10 Pin Code *",
    "cafForm.step2.field.multiUnitsCheckbox": "If a business entity operates multiple units or projects under the same company PAN",
    "cafForm.step2.field.companyPan": "2.11 Company Pan No *",
    "cafForm.step2.field.companyPanUpload": "2.12 Upload Company Pan Card *",
    "cafForm.step2.field.udyamOptional": "2.13 Udyam Registration (optional)",
    "cafForm.step3.title": "Project Details",
    "cafForm.step3.pageTitle": "Project Details",
    "cafForm.step3.pageSub": "Fill in the details below to proceed with your application.",
    "cafForm.step3.field.sameAsEntity": "Same as Business Entity Information",
    "cafForm.step3.field.projectName": "3.1 Project Name *",
    "cafForm.step3.field.projectPurpose": "3.2 Project Purpose *",
    "cafForm.step3.field.projectType": "3.3 Project Type *",
    "cafForm.step3.field.unitLocation": "3.4 Unit Location *",
    "cafForm.step3.field.country": "3.5 Select Country *",
    "cafForm.step3.field.state": "3.6 Select State/UT *",
    "cafForm.step3.field.district": "3.7 Select District *",
    "cafForm.step3.field.tehsil": "3.8 Select Tehsil *",
    "cafForm.step3.field.city": "3.9 City/Town/Village *",
    "cafForm.step3.field.address1": "3.10 Address Line 1 *",
    "cafForm.step3.field.address2": "3.11 Address Line 2",
    "cafForm.step3.field.pinCode": "3.12 Pin Code *",
    "cafForm.step3.field.gstApplicable": "3.13 Whether GST Number applicable * :",
    "cafForm.step4.title": "Proprietor / Partners / Directors Details",
    "cafForm.step4.field.certificateIncorporationUpload": "4.1.16 Certificate Incorporation Registration Attachment *",
    "cafForm.step5.title": "Project Details",
    "cafForm.step5.field.landArea": "5.1 Land Area (in Acres) *",
    "cafForm.step5.field.landRegistrationType": "5.2 Select Type of Land Registration *",
    "cafForm.step5.field.landDocumentUpload": "5.3 Upload land related document *",
    "cafForm.step5.field.multipleCityInvolved": "5.4 Multiple City/Town/Village Involved ?",
    "cafForm.step5.field.mcLimit": "5.5 Does this site lies under MC Limit?",
    "cafForm.step5.field.mcDistanceKm": "If No, please mention distance from MC limit (in KMs)",
    "cafForm.step5.field.sector": "5.6 Sector *",
    "cafForm.step5.field.dprUpload": "5.7 Upload Detailed Project Report (DPR) *",
    "cafForm.step5.field.migrationFromFiipToIbdp": "5.8 Migration of Unit from FIIP (R) 2013 to IBDP 2017 *",
    "cafForm.step5.field.policyChapter": "5.9 Policy Chapter",
    "cafForm.step5.field.protectedMonument": "5.10 Is proposed construction site falling within the limit of any centrally protected monument?",
    "cafForm.step5.field.nmaNocAvailable": "5.11 Whether NMA NOC is available with you for the proposed construction site?",
    "cafForm.step6.title": "Investment Details",
    "cafForm.step6.note": "* FCI (as per Policy 2013) Building Cost and Plant & Machinery Cost,\n* FCI (as per Policy 2017) Land Cost, Building Cost and Plant & Machinery Cost.",
    "cafForm.step6.field.landCost": "6.1 Land Cost (in Lakhs) *",
    "cafForm.step6.field.buildingCost": "6.2 Building Cost (in Lakhs) *",
    "cafForm.step6.field.plantMachineryCost": "6.3 Plant and Machinery Cost (in Lakhs) *",
    "cafForm.step6.field.fci": "6.4 FCI (in Lakhs) *",
    "cafForm.step6.field.otherCost": "6.5 Other Cost (in Lakhs) *",
    "cafForm.step6.field.totalProjectCost": "6.6 Total Project Cost (in Lakhs) *",
    "cafForm.step6.field.totalProjectCostHelp": "Auto-calculated based on inputs above",
    "cafForm.step6.field.commercialProduction": "6.7 Is Unit in Commercial Production",
    "cafForm.step6.field.industryType": "6.8 Type of Industry *",
    "cafForm.step7.title": "Phase wise Investment as per Detailed Project Report (If Applicable)",
    "cafForm.step7.field.phaseName": "7.1 Name of the Phase",
    "cafForm.step7.field.fci": "7.2 FCI (in Lakhs)",
    "cafForm.step7.field.investDate": "7.3 Proposed date of Investment",
    "cafForm.step7.field.productionDate": "7.4 Proposed date of Production",
    "cafForm.step7.field.fdiInvolved": "7.5 Is FDI Involved",
    "cafForm.step8.title": "Proposed Employment Details",
    "cafForm.step8.field.financialYear": "Financial Year",
    "cafForm.step8.field.selectSkill": "Select Skill",
    "cafForm.step8.field.directMale": "Direct Male Employees",
    "cafForm.step8.field.directFemale": "Direct Female Employees",
    "cafForm.step8.field.indirectMale": "InDirect Male Employees",
    "cafForm.step8.field.indirectFemale": "InDirect Female Employees",
    "cafForm.step8.field.totalDirectMale": "8.1 Direct Male Employees *",
    "cafForm.step8.field.totalDirectFemale": "8.2 Direct Female Employees *",
    "cafForm.step8.field.totalIndirectMale": "8.3 Indirect Male Employees *",
    "cafForm.step8.field.totalIndirectFemale": "8.4 Indirect Female Employees *",
    "cafForm.step8.field.totalMale": "8.5 Total Male Employees *",
    "cafForm.step8.field.totalFemale": "8.6 Total Female Employees *",
    "cafForm.step9.title": "Already Obtained Clearances/Approvals",
    "cafForm.step9.field.regulatoryClearance": "9.1 Already have any Regulatory Clearance ?",
    "cafForm.step9.field.fiscalIncentive": "9.2 Already have any Fiscal Incentive ?",
    "cafForm.step9.field.croReport": "9.3 Do you have CRO Report ? *",
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

    "projectDashboard.title": "इनसाइट्स और एनालिटिक्स",
    "projectDashboard.summary.totalInv": "कुल निवेश",
    "projectDashboard.summary.applications": "आवेदन",
    "projectDashboard.summary.activeNow": "अभी सक्रिय",
    "projectDashboard.summary.pending": "लंबित",
    "projectDashboard.summary.inReview": "समीक्षा में",
    "projectDashboard.card.applicationStatus.title": "आवेदन स्थिति",
    "projectDashboard.card.applicationStatus.sub": "वर्तमान वित्तीय वर्ष का विवरण",
    "projectDashboard.legend.pending": "लंबित",
    "projectDashboard.legend.approved": "स्वीकृत",
    "projectDashboard.legend.rejected": "अस्वीकृत",
    "projectDashboard.card.totalInvestment.title": "कुल निवेश",
    "projectDashboard.card.totalInvestment.sub": "परियोजना प्रकार के अनुसार",
    "projectDashboard.card.avgApprovalTime.title": "औसत अनुमोदन समय",
    "projectDashboard.card.avgApprovalTime.delta": "-2.5 दिन",
    "projectDashboard.segment.projects": "परियोजनाएँ",
    "projectDashboard.segment.month": "महीना",
    "projectDashboard.month.jan": "जन",
    "projectDashboard.month.feb": "फर",
    "projectDashboard.month.mar": "मार्च",
    "projectDashboard.month.apr": "अप्रैल",
    "projectDashboard.month.may": "मई",
    "projectDashboard.month.jun": "जून",
    "projectDashboard.axis.100cr": "₹100Cr",
    "projectDashboard.axis.50cr": "₹50Cr",
    "projectDashboard.axis.0": "₹0",
    "projectDashboard.bar.textile": "टेक्सटाइल",
    "projectDashboard.bar.solar": "सोलर",
    "projectDashboard.bar.agro": "एग्रो",
    "projectDashboard.bar.it": "आईटी",
    "projectDashboard.bar.auto": "ऑटो",

    "contacts.title": "संपर्क",
    "contacts.searchPlaceholder": "विभाग, अधिकारी खोजें...",
    "contacts.pill.all": "सभी",
    "contacts.pill.approvals": "अनुमोदन",
    "contacts.pill.utilities": "यूटिलिटीज",
    "contacts.pill.emergency": "आपातकाल",
    "contacts.nodalOfficer": "नोडल अधिकारी:",
    "contacts.action.call": "कॉल",
    "contacts.action.email": "ईमेल",
    "contacts.endOfDirectory": "डायरेक्टरी समाप्त",

    "entityVault.title": "एंटिटी ई-वॉल्ट",
    "entityVault.searchPlaceholder": "IPIN या एप्लिकेशन आईडी से खोजें",
    "entityVault.empty": "इस IPIN के लिए हाल की कोई गतिविधि नहीं है।",
    "entityVault.row.applicationId": "एप्लिकेशन आईडी",
    "entityVault.row.formName": "फॉर्म नाम",
    "entityVault.row.clearanceIssued": "क्लीयरेंस जारी",
    "entityVault.row.senderName": "प्रेषक नाम",
    "entityVault.section.clearanceDocuments": "क्लीयरेंस दस्तावेज़",
    "entityVault.action.download": "डाउनलोड",
    "entityVault.label.ipin": "IPIN",

    "regulatoryClearances.title": "निवेश परियोजना आवेदन",
    "regulatoryClearances.tab.applyNew": "नया आवेदन",
    "regulatoryClearances.tab.applied": "आवेदित",
    "regulatoryClearances.tab.pending": "लंबित",
    "regulatoryClearances.tab.issued": "जारी",
    "regulatoryClearances.tab.rejected": "अस्वीकृत",
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

    "investmentProject.title": "निवेश परियोजना",
    "investmentProject.welcome": "स्वागत",
    "investmentProject.greetings": "फास्टट्रैक पंजाब से शुभकामनाएँ!",
    "investmentProject.thankYouPrefix": "अपने निवेश सफर के लिए ",
    "investmentProject.punjab": "पंजाब",
    "investmentProject.thankYouSuffix": " चुनने के लिए धन्यवाद।",
    "investmentProject.enterprisePrefix": "आपकी उद्यम श्रेणी — ",
    "investmentProject.msme": "MSME",
    "investmentProject.enterpriseOr": " या ",
    "investmentProject.largeEnterprise": "बड़ा उद्यम",
    "investmentProject.enterpriseSuffix": " — के आधार पर सिस्टम आपको मार्गदर्शन करेगा:",
    "investmentProject.guideTo": "सिस्टम आपको मार्गदर्शन करेगा:",
    "investmentProject.card.rtba.title": "राइट टू बिज़नेस एक्ट",
    "investmentProject.card.rtba.desc": "योग्य MSME के लिए (पंजाब राइट टू बिज़नेस एक्ट 2020 के अनुसार)",
    "investmentProject.card.greenStamp.title": "ग्रीन स्टाम्प पेपर सेवा",
    "investmentProject.card.greenStamp.desc": "यदि आपने भूमि चिन्हित की है और खरीदना चाहते हैं",
    "investmentProject.card.singleWindow.title": "सिंगल विंडो पोर्टल",
    "investmentProject.card.singleWindow.desc": "फास्टट्रैक पंजाब के माध्यम से अन्य अनुमोदन और सेवाओं के लिए",
    "investmentProject.card.serviceCaf.title": "Service-CAF",
    "investmentProject.card.serviceCaf.desc": "नई या मौजूदा परियोजनाओं के लिए सेवाएँ प्राप्त करने हेतु",
    "investmentProject.msmeLandNote": "जिन MSME के पास भूमि है वे स्व-प्रमाणीकरण के आधार पर 'इन-प्रिंसिपल अप्रूवल' प्रमाणपत्र प्राप्त कर सकते हैं, जो 3 वर्ष 6 माह तक मान्य होगा।",
    "investmentProject.msmeLandNoteSub": "उद्यम को जारी होने की तिथि से 3 वर्ष के भीतर लागू नियमित अनुमोदनों के लिए आवेदन करना आवश्यक है।",
    "investmentProject.section.rtbaClearances": "RTBA के अंतर्गत क्लीयरेंस *",
    "investmentProject.item": "आइटम",
    "investmentProject.field.department": "विभाग",
    "investmentProject.field.act": "अधिनियम",
    "investmentProject.field.services": "सेवाएँ",
    "investmentProject.item1.departmentValue": "स्थानीय सरकार (LG)",
    "investmentProject.item1.actValue": "पंजाब म्युनिसिपल अधिनियम, 1911 एवं म्युनिसिपल कॉरपोरेशन अधिनियम, 1976",
    "investmentProject.item1.service1": "बिल्डिंग प्लान की स्वीकृति",
    "investmentProject.item1.service2": "पूर्णता/ऑक्युपेंसी प्रमाणपत्र",
    "investmentProject.item1.service3": "ट्रेड लाइसेंस पंजीकरण",
    "investmentProject.item2.departmentValue": "हाउसिंग एवं अर्बन डेवलपमेंट (HUD)",
    "investmentProject.item2.actValue": "पंजाब रीजनल एवं टाउन प्लानिंग तथा डेवलपमेंट अधिनियम, 1995",
    "investmentProject.item2.service1": "बिल्डिंग प्लान की स्वीकृति",
    "investmentProject.item2.service2": "भूमि उपयोग में परिवर्तन",
    "investmentProject.readFullRtba": "RTBA 2020 का पूरा विवरण पढ़ें",
    "investmentProject.msmeQuestion": "क्या आपका प्रोजेक्ट MSME श्रेणी के अंतर्गत आता है?",
    "investmentProject.yes": "हाँ",
    "investmentProject.no": "नहीं",
    "investmentProject.proceed": "आवेदन पर आगे बढ़ें",
    "drawer.home": "होम",
    "drawer.myProfile": "मेरी प्रोफ़ाइल",
    "drawer.myProjects": "मेरे प्रोजेक्ट",
    "drawer.myApplications": "मेरे आवेदन",
    "drawer.fiscalIncentives": "वित्तीय प्रोत्साहन",
    "drawer.fiscalRegistrations": "वित्तीय पंजीकरण",
    "drawer.eVault": "ई-वॉल्ट",
    "drawer.knowYourApprovals": "अपने अनुमोदन जानें",
    "drawer.settings": "सेटिंग्स",
    "drawer.logout": "लॉगआउट",
    "drawer.language": "भाषा",
    "drawer.changePassword": "पासवर्ड बदलें",
    "drawer.profile.name": "विक्रम सिंह",
    "drawer.profile.company": "टेक सॉल्यूशंस प्रा. लि.",
    "profile.title": "निवेशक प्रोफ़ाइल",
    "profile.verified": "सत्यापित",
    "profile.name": "संदीप सिंह",
    "profile.company": "पंजाब इंडस्ट्रियल हब",
    "profile.section.personalDetails": "व्यक्तिगत विवरण",
    "profile.section.companyDetails": "कंपनी विवरण",
    "profile.section.preferences": "प्राथमिकताएँ",
    "profile.field.fullName": "पूरा नाम",
    "profile.field.email": "ईमेल पता",
    "profile.field.mobile": "मोबाइल नंबर",
    "profile.field.pan": "पैन नंबर",
    "profile.field.gstin": "जीएसटीआईएन",
    "profile.field.registeredAddress": "पंजीकृत पता",
    "profile.preference.language": "भाषा",
    "profile.preference.notifications": "सूचनाएँ",
    "profile.preference.biometric": "बायोमेट्रिक लॉगिन",
    "profile.logout": "लॉग आउट",
    "profile.emailValue": "sandeep.s@punjabihub.com",
    "profile.mobileValue": "+91 98765 43210",
    "profile.panValue": "ABCDE1234F",
    "profile.gstinValue": "03ABCDE1234F1Z5",
    "profile.addressValue": "प्लॉट 45, इंडस्ट्रियल एरिया फेज VIII, मोहाली, पंजाब 160071",
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
    "myProjects.status.verified": "सत्यापित",
    "myProjects.pin": "पिन",
    "myProjects.applicant": "आवेदक",
    "myProjects.action": "एक्शन",
    "myProjects.field.applicant": "आवेदक",
    "myProjects.field.date": "तारीख",
    "myProjects.field.sector": "क्षेत्र",
    "myProjects.field.district": "जिला",
    "myProjects.field.mobile": "मोबाइल नंबर",
    "myProjects.fab.addProjectWithCaf": "CAF के साथ नया प्रोजेक्ट जोड़ें",
    "myProjects.fab.applyForNewService": "नई सेवा के लिए आवेदन करें",
    "myProjects.action.addClearance": "क्लीयरेंस जोड़ें",
    "myProjects.action.updateApplicant": "आवेदक अपडेट करें",
    "myProjects.action.updatePartners": "पार्टनर्स अपडेट करें",
    "myProjects.action.updateCompanyPan": "कंपनी PAN अपडेट करें",
    "myProjects.sector.manufacturing": "विनिर्माण",
    "myProjects.sector.otherService": "अन्य सेवा",
    "myProjects.sector.otherServiceProjects": "अन्य सेवा परियोजनाएं",
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
    "cafForm.common.select": "चुनें",
    "cafForm.common.yes": "हाँ",
    "cafForm.common.no": "नहीं",
    "cafForm.common.datePlaceholder": "YYYY-MM-DD",
    "cafForm.step1.title": "1. आवेदक विवरण",
    "cafForm.step1.field.title": "1.1 शीर्षक *",
    "cafForm.step1.field.firstName": "1.2 पहला नाम *",
    "cafForm.step1.field.middleName": "1.3 मध्य नाम",
    "cafForm.step1.field.lastName": "1.4 अंतिम नाम *",
    "cafForm.step1.field.designation": "1.5 पदनाम *",
    "cafForm.step1.field.dob": "1.6 जन्म तिथि *",
    "cafForm.step1.field.photo": "1.7 आवेदक फोटो *",
    "cafForm.step1.field.signature": "1.8 आवेदक हस्ताक्षर *",
    "cafForm.step1.field.aadhaarNo": "1.9 आधार दस्तावेज़ नं. *",
    "cafForm.step1.field.aadhaarUpload": "1.10 आधार दस्तावेज़ अपलोड करें *",
    "cafForm.step1.field.panNo": "1.11 पैन कार्ड नं. *",
    "cafForm.step1.field.panUpload": "1.12 पैन कार्ड अपलोड करें *",
    "cafForm.step1.field.phone": "1.13 आवेदक फोन नंबर",
    "cafForm.step1.field.fax": "1.14 आवेदक फैक्स नं.",
    "cafForm.step1.field.mobile": "1.15 आवेदक मोबाइल नं. *",
    "cafForm.step1.field.email": "1.16 आवेदक ईमेल आईडी *",
    "cafForm.step1.field.country": "1.17 देश चुनें *",
    "cafForm.step1.field.state": "1.18 राज्य/केंद्र शासित प्रदेश चुनें *",
    "cafForm.step1.field.district": "1.19 जिला चुनें *",
    "cafForm.step1.field.tehsil": "1.20 तहसील चुनें *",
    "cafForm.step1.field.city": "1.21 शहर/कस्बा/गांव *",
    "cafForm.step1.field.address1": "1.22 पता पंक्ति 1 *",
    "cafForm.step1.field.address2": "1.23 पता पंक्ति 2",
    "cafForm.step1.field.pinCode": "1.24 पिन कोड *",
    "cafForm.step1.field.authorizationLetter": "1.25 प्राधिकरण पत्र अपलोड करें *",
    "cafForm.step2.title": "2. व्यवसाय इकाई जानकारी",
    "cafForm.step2.field.entityName": "2.1 व्यवसाय इकाई का नाम *",
    "cafForm.step2.field.entityType": "2.2 व्यवसाय इकाई प्रकार *",
    "cafForm.step2.field.country": "2.3 देश चुनें *",
    "cafForm.step2.field.state": "2.4 राज्य/केंद्र शासित प्रदेश चुनें *",
    "cafForm.step2.field.district": "2.5 जिला चुनें *",
    "cafForm.step2.field.tehsil": "2.6 तहसील चुनें *",
    "cafForm.step2.field.villageTown": "2.7 गांव/कस्बे का नाम *",
    "cafForm.step2.field.address1": "2.8 पता पंक्ति 1 *",
    "cafForm.step2.field.address2": "2.9 पता पंक्ति 2",
    "cafForm.step2.field.pinCode": "2.10 पिन कोड *",
    "cafForm.step2.field.multiUnitsCheckbox": "यदि एक व्यवसाय इकाई एक ही कंपनी PAN के तहत कई यूनिट/प्रोजेक्ट संचालित करती है",
    "cafForm.step2.field.companyPan": "2.11 कंपनी PAN नं. *",
    "cafForm.step2.field.companyPanUpload": "2.12 कंपनी PAN कार्ड अपलोड करें *",
    "cafForm.step2.field.udyamOptional": "2.13 उद्यम पंजीकरण (वैकल्पिक)",
    "cafForm.step3.title": "3. परियोजना विवरण",
    "cafForm.step3.pageTitle": "परियोजना विवरण",
    "cafForm.step3.pageSub": "अपना आवेदन आगे बढ़ाने के लिए नीचे विवरण भरें।",
    "cafForm.step3.field.sameAsEntity": "व्यवसाय इकाई जानकारी के समान",
    "cafForm.step3.field.projectName": "3.1 परियोजना नाम *",
    "cafForm.step3.field.projectPurpose": "3.2 परियोजना उद्देश्य *",
    "cafForm.step3.field.projectType": "3.3 परियोजना प्रकार *",
    "cafForm.step3.field.unitLocation": "3.4 यूनिट स्थान *",
    "cafForm.step3.field.country": "3.5 देश चुनें *",
    "cafForm.step3.field.state": "3.6 राज्य/केंद्र शासित प्रदेश चुनें *",
    "cafForm.step3.field.district": "3.7 जिला चुनें *",
    "cafForm.step3.field.tehsil": "3.8 तहसील चुनें *",
    "cafForm.step3.field.city": "3.9 शहर/कस्बा/गांव *",
    "cafForm.step3.field.address1": "3.10 पता पंक्ति 1 *",
    "cafForm.step3.field.address2": "3.11 पता पंक्ति 2",
    "cafForm.step3.field.pinCode": "3.12 पिन कोड *",
    "cafForm.step3.field.gstApplicable": "3.13 क्या GST नंबर लागू है * :",
    "cafForm.step4.title": "4. स्वामी / साझेदार / निदेशक विवरण",
    "cafForm.step4.field.certificateIncorporationUpload": "4.1.16 समावेशन/पंजीकरण प्रमाणपत्र संलग्नक *",
    "cafForm.step5.title": "5. परियोजना विवरण",
    "cafForm.step5.field.landArea": "5.1 भूमि क्षेत्र (एकड़ में) *",
    "cafForm.step5.field.landRegistrationType": "5.2 भूमि पंजीकरण प्रकार चुनें *",
    "cafForm.step5.field.landDocumentUpload": "5.3 भूमि संबंधी दस्तावेज़ अपलोड करें *",
    "cafForm.step5.field.multipleCityInvolved": "5.4 क्या कई शहर/कस्बे/गांव शामिल हैं?",
    "cafForm.step5.field.mcLimit": "5.5 क्या यह साइट MC सीमा के अंतर्गत आती है?",
    "cafForm.step5.field.mcDistanceKm": "यदि नहीं, तो MC सीमा से दूरी (किमी में) लिखें",
    "cafForm.step5.field.sector": "5.6 सेक्टर *",
    "cafForm.step5.field.dprUpload": "5.7 विस्तृत परियोजना रिपोर्ट (DPR) अपलोड करें *",
    "cafForm.step5.field.migrationFromFiipToIbdp": "5.8 यूनिट का FIIP (R) 2013 से IBDP 2017 में माइग्रेशन *",
    "cafForm.step5.field.policyChapter": "5.9 नीति अध्याय",
    "cafForm.step5.field.protectedMonument": "5.10 क्या प्रस्तावित निर्माण स्थल किसी केंद्रीय संरक्षित स्मारक की सीमा में आता है?",
    "cafForm.step5.field.nmaNocAvailable": "5.11 क्या प्रस्तावित निर्माण स्थल के लिए आपके पास NMA NOC उपलब्ध है?",
    "cafForm.step6.title": "6. निवेश विवरण",
    "cafForm.step6.note": "* FCI (नीति 2013 के अनुसार) भवन लागत और संयंत्र व मशीनरी लागत,\n* FCI (नीति 2017 के अनुसार) भूमि लागत, भवन लागत और संयंत्र व मशीनरी लागत।",
    "cafForm.step6.field.landCost": "6.1 भूमि लागत (लाख में) *",
    "cafForm.step6.field.buildingCost": "6.2 भवन लागत (लाख में) *",
    "cafForm.step6.field.plantMachineryCost": "6.3 संयंत्र और मशीनरी लागत (लाख में) *",
    "cafForm.step6.field.fci": "6.4 FCI (लाख में) *",
    "cafForm.step6.field.otherCost": "6.5 अन्य लागत (लाख में) *",
    "cafForm.step6.field.totalProjectCost": "6.6 कुल परियोजना लागत (लाख में) *",
    "cafForm.step6.field.totalProjectCostHelp": "ऊपर दिए इनपुट के आधार पर स्वचालित गणना",
    "cafForm.step6.field.commercialProduction": "6.7 क्या यूनिट वाणिज्यिक उत्पादन में है",
    "cafForm.step6.field.industryType": "6.8 उद्योग का प्रकार *",
    "cafForm.step7.title": "7. DPR के अनुसार चरणवार निवेश (यदि लागू हो)",
    "cafForm.step7.field.phaseName": "7.1 चरण का नाम",
    "cafForm.step7.field.fci": "7.2 FCI (लाख में)",
    "cafForm.step7.field.investDate": "7.3 निवेश की प्रस्तावित तिथि",
    "cafForm.step7.field.productionDate": "7.4 उत्पादन की प्रस्तावित तिथि",
    "cafForm.step7.field.fdiInvolved": "7.5 क्या FDI शामिल है",
    "cafForm.step8.title": "8. प्रस्तावित रोजगार विवरण",
    "cafForm.step8.field.financialYear": "वित्तीय वर्ष",
    "cafForm.step8.field.selectSkill": "कौशल चुनें",
    "cafForm.step8.field.directMale": "प्रत्यक्ष पुरुष कर्मचारी",
    "cafForm.step8.field.directFemale": "प्रत्यक्ष महिला कर्मचारी",
    "cafForm.step8.field.indirectMale": "अप्रत्यक्ष पुरुष कर्मचारी",
    "cafForm.step8.field.indirectFemale": "अप्रत्यक्ष महिला कर्मचारी",
    "cafForm.step8.field.totalDirectMale": "8.1 प्रत्यक्ष पुरुष कर्मचारी *",
    "cafForm.step8.field.totalDirectFemale": "8.2 प्रत्यक्ष महिला कर्मचारी *",
    "cafForm.step8.field.totalIndirectMale": "8.3 अप्रत्यक्ष पुरुष कर्मचारी *",
    "cafForm.step8.field.totalIndirectFemale": "8.4 अप्रत्यक्ष महिला कर्मचारी *",
    "cafForm.step8.field.totalMale": "8.5 कुल पुरुष कर्मचारी *",
    "cafForm.step8.field.totalFemale": "8.6 कुल महिला कर्मचारी *",
    "cafForm.step9.title": "9. पहले से प्राप्त क्लीयरेंस/अनुमोदन",
    "cafForm.step9.field.regulatoryClearance": "9.1 क्या कोई नियामक क्लीयरेंस पहले से है?",
    "cafForm.step9.field.fiscalIncentive": "9.2 क्या कोई वित्तीय प्रोत्साहन पहले से है?",
    "cafForm.step9.field.croReport": "9.3 क्या आपके पास CRO रिपोर्ट है? *",
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

    "projectDashboard.title": "ਇਨਸਾਈਟਸ ਅਤੇ ਐਨਾਲਿਟਿਕਸ",
    "projectDashboard.summary.totalInv": "ਕੁੱਲ ਨਿਵੇਸ਼",
    "projectDashboard.summary.applications": "ਅਰਜ਼ੀਆਂ",
    "projectDashboard.summary.activeNow": "ਹੁਣ ਸਰਗਰਮ",
    "projectDashboard.summary.pending": "ਬਾਕੀ",
    "projectDashboard.summary.inReview": "ਸਮੀਖਿਆ ਵਿੱਚ",
    "projectDashboard.card.applicationStatus.title": "ਅਰਜ਼ੀ ਸਥਿਤੀ",
    "projectDashboard.card.applicationStatus.sub": "ਮੌਜੂਦਾ ਵਿੱਤੀ ਸਾਲ ਦਾ ਵੇਰਵਾ",
    "projectDashboard.legend.pending": "ਬਾਕੀ",
    "projectDashboard.legend.approved": "ਮਨਜ਼ੂਰ",
    "projectDashboard.legend.rejected": "ਰੱਦ",
    "projectDashboard.card.totalInvestment.title": "ਕੁੱਲ ਨਿਵੇਸ਼",
    "projectDashboard.card.totalInvestment.sub": "ਪਰੋਜੈਕਟ ਕਿਸਮ ਅਨੁਸਾਰ",
    "projectDashboard.card.avgApprovalTime.title": "ਔਸਤ ਮਨਜ਼ੂਰੀ ਸਮਾਂ",
    "projectDashboard.card.avgApprovalTime.delta": "-2.5 ਦਿਨ",
    "projectDashboard.segment.projects": "ਪਰੋਜੈਕਟ",
    "projectDashboard.segment.month": "ਮਹੀਨਾ",
    "projectDashboard.month.jan": "ਜਨ",
    "projectDashboard.month.feb": "ਫਰ",
    "projectDashboard.month.mar": "ਮਾਰਚ",
    "projectDashboard.month.apr": "ਅਪ੍ਰੈਲ",
    "projectDashboard.month.may": "ਮਈ",
    "projectDashboard.month.jun": "ਜੂਨ",
    "projectDashboard.axis.100cr": "₹100Cr",
    "projectDashboard.axis.50cr": "₹50Cr",
    "projectDashboard.axis.0": "₹0",
    "projectDashboard.bar.textile": "ਟੈਕਸਟਾਈਲ",
    "projectDashboard.bar.solar": "ਸੋਲਰ",
    "projectDashboard.bar.agro": "ਐਗਰੋ",
    "projectDashboard.bar.it": "ਆਈਟੀ",
    "projectDashboard.bar.auto": "ਆਟੋ",

    "contacts.title": "ਸੰਪਰਕ",
    "contacts.searchPlaceholder": "ਵਿਭਾਗ, ਅਧਿਕਾਰੀ ਖੋਜੋ...",
    "contacts.pill.all": "ਸਾਰੇ",
    "contacts.pill.approvals": "ਮਨਜ਼ੂਰੀਆਂ",
    "contacts.pill.utilities": "ਯੂਟਿਲਿਟੀਜ਼",
    "contacts.pill.emergency": "ਐਮਰਜੈਂਸੀ",
    "contacts.nodalOfficer": "ਨੋਡਲ ਅਧਿਕਾਰੀ:",
    "contacts.action.call": "ਕਾਲ",
    "contacts.action.email": "ਈਮੇਲ",
    "contacts.endOfDirectory": "ਡਾਇਰੈਕਟਰੀ ਸਮਾਪਤ",

    "entityVault.title": "ਐਂਟਿਟੀ ਈ-ਵਾਲਟ",
    "entityVault.searchPlaceholder": "IPIN ਜਾਂ ਐਪਲੀਕੇਸ਼ਨ ਆਈਡੀ ਨਾਲ ਖੋਜੋ",
    "entityVault.empty": "ਇਸ IPIN ਲਈ ਕੋਈ ਹਾਲੀਆ ਗਤੀਵਿਧੀ ਨਹੀਂ ਹੈ।",
    "entityVault.row.applicationId": "ਐਪਲੀਕੇਸ਼ਨ ਆਈਡੀ",
    "entityVault.row.formName": "ਫਾਰਮ ਨਾਮ",
    "entityVault.row.clearanceIssued": "ਕਲੀਅਰੈਂਸ ਜਾਰੀ",
    "entityVault.row.senderName": "ਭੇਜਣ ਵਾਲਾ ਨਾਮ",
    "entityVault.section.clearanceDocuments": "ਕਲੀਅਰੈਂਸ ਦਸਤਾਵੇਜ਼",
    "entityVault.action.download": "ਡਾਊਨਲੋਡ",
    "entityVault.label.ipin": "IPIN",

    "regulatoryClearances.title": "ਨਿਵੇਸ਼ ਪਰੋਜੈਕਟ ਅਰਜ਼ੀਆਂ",
    "regulatoryClearances.tab.applyNew": "ਨਵੀਂ ਅਰਜ਼ੀ",
    "regulatoryClearances.tab.applied": "ਅਰਜ਼ੀ ਕੀਤੀ",
    "regulatoryClearances.tab.pending": "ਬਾਕੀ",
    "regulatoryClearances.tab.issued": "ਜਾਰੀ",
    "regulatoryClearances.tab.rejected": "ਰੱਦ",
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

    "investmentProject.title": "ਨਿਵੇਸ਼ ਪ੍ਰੋਜੈਕਟ",
    "investmentProject.welcome": "ਸੁਆਗਤ ਹੈ",
    "investmentProject.greetings": "ਫਾਸਟਟ੍ਰੈਕ ਪੰਜਾਬ ਵਲੋਂ ਸ਼ੁਭਕਾਮਨਾਵਾਂ!",
    "investmentProject.thankYouPrefix": "ਤੁਹਾਡੇ ਨਿਵੇਸ਼ ਸਫ਼ਰ ਲਈ ",
    "investmentProject.punjab": "ਪੰਜਾਬ",
    "investmentProject.thankYouSuffix": " ਚੁਣਨ ਲਈ ਧੰਨਵਾਦ।",
    "investmentProject.enterprisePrefix": "ਤੁਹਾਡੀ ਉਦਯੋਗ ਸ਼੍ਰੇਣੀ — ",
    "investmentProject.msme": "MSME",
    "investmentProject.enterpriseOr": " ਜਾਂ ",
    "investmentProject.largeEnterprise": "ਵੱਡਾ ਉਦਯੋਗ",
    "investmentProject.enterpriseSuffix": " — ਦੇ ਅਧਾਰ ‘ਤੇ ਸਿਸਟਮ ਤੁਹਾਨੂੰ ਰਾਹਦਾਰੀ ਦੇਵੇਗਾ:",
    "investmentProject.guideTo": "ਸਿਸਟਮ ਤੁਹਾਨੂੰ ਰਾਹਦਾਰੀ ਦੇਵੇਗਾ:",
    "investmentProject.card.rtba.title": "ਰਾਈਟ ਟੂ ਬਿਜ਼ਨਸ ਐਕਟ",
    "investmentProject.card.rtba.desc": "ਯੋਗ MSME ਲਈ (ਪੰਜਾਬ ਰਾਈਟ ਟੂ ਬਿਜ਼ਨਸ ਐਕਟ 2020 ਅਨੁਸਾਰ)",
    "investmentProject.card.greenStamp.title": "ਗ੍ਰੀਨ ਸਟੈਂਪ ਪੇਪਰ ਸੇਵਾ",
    "investmentProject.card.greenStamp.desc": "ਜੇ ਤੁਸੀਂ ਜ਼ਮੀਨ ਪਛਾਣ ਲਈ ਹੈ ਅਤੇ ਖਰੀਦਣਾ ਚਾਹੁੰਦੇ ਹੋ",
    "investmentProject.card.singleWindow.title": "ਸਿੰਗਲ ਵਿਂਡੋ ਪੋਰਟਲ",
    "investmentProject.card.singleWindow.desc": "ਫਾਸਟਟ੍ਰੈਕ ਪੰਜਾਬ ਰਾਹੀਂ ਹੋਰ ਮਨਜ਼ੂਰੀਆਂ ਅਤੇ ਸੇਵਾਵਾਂ ਲਈ",
    "investmentProject.card.serviceCaf.title": "Service-CAF",
    "investmentProject.card.serviceCaf.desc": "ਨਵੀਆਂ ਜਾਂ ਮੌਜੂਦਾ ਪਰੋਜੈਕਟਾਂ ਲਈ ਸੇਵਾਵਾਂ ਲੈਣ ਲਈ",
    "investmentProject.msmeLandNote": "ਜਿਨ੍ਹਾਂ MSME ਕੋਲ ਜ਼ਮੀਨ ਹੈ ਉਹ ਸਵੈ-ਪ੍ਰਮਾਣੀਕਰਨ ਦੇ ਆਧਾਰ ‘ਤੇ 'ਇਨ-ਪ੍ਰਿੰਸਿਪਲ ਅਪ੍ਰੂਵਲ' ਸਰਟੀਫਿਕੇਟ ਲੈ ਸਕਦੇ ਹਨ, ਜੋ 3 ਸਾਲ 6 ਮਹੀਨੇ ਲਈ ਵੈਧ ਹੋਵੇਗਾ।",
    "investmentProject.msmeLandNoteSub": "ਉਦਯੋਗ ਨੂੰ ਜਾਰੀ ਤਾਰੀਖ ਤੋਂ 3 ਸਾਲਾਂ ਦੇ ਅੰਦਰ ਲਾਗੂ ਨਿਯਮਿਤ ਮਨਜ਼ੂਰੀਆਂ ਲਈ ਅਰਜ਼ੀ ਦੇਣੀ ਲਾਜ਼ਮੀ ਹੈ।",
    "investmentProject.section.rtbaClearances": "RTBA ਅਧੀਨ ਕਲੀਅਰੈਂਸ *",
    "investmentProject.item": "ਆਈਟਮ",
    "investmentProject.field.department": "ਵਿਭਾਗ",
    "investmentProject.field.act": "ਐਕਟ",
    "investmentProject.field.services": "ਸੇਵਾਵਾਂ",
    "investmentProject.item1.departmentValue": "ਲੋਕਲ ਗਵਰਨਮੈਂਟ (LG)",
    "investmentProject.item1.actValue": "ਪੰਜਾਬ ਮਿਊਨਿਸਿਪਲ ਐਕਟ, 1911 ਅਤੇ ਮਿਊਨਿਸਿਪਲ ਕਾਰਪੋਰੇਸ਼ਨ ਐਕਟ, 1976",
    "investmentProject.item1.service1": "ਬਿਲਡਿੰਗ ਪਲਾਨ ਦੀ ਮਨਜ਼ੂਰੀ",
    "investmentProject.item1.service2": "ਕੰਪਲੀਸ਼ਨ/ਓਕਿਊਪੈਂਸੀ ਸਰਟੀਫਿਕੇਟ",
    "investmentProject.item1.service3": "ਟ੍ਰੇਡ ਲਾਇਸੈਂਸ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    "investmentProject.item2.departmentValue": "ਹਾਊਸਿੰਗ ਅਤੇ ਅਰਬਨ ਡਿਵੈਲਪਮੈਂਟ (HUD)",
    "investmentProject.item2.actValue": "ਪੰਜਾਬ ਰੀਜਨਲ ਅਤੇ ਟਾਊਨ ਪਲਾਨਿੰਗ ਅਤੇ ਡਿਵੈਲਪਮੈਂਟ ਐਕਟ, 1995",
    "investmentProject.item2.service1": "ਬਿਲਡਿੰਗ ਪਲਾਨ ਦੀ ਮਨਜ਼ੂਰੀ",
    "investmentProject.item2.service2": "ਜ਼ਮੀਨ ਦੀ ਵਰਤੋਂ ਵਿੱਚ ਤਬਦੀਲੀ",
    "investmentProject.readFullRtba": "RTBA 2020 ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ ਪੜ੍ਹੋ",
    "investmentProject.msmeQuestion": "ਕੀ ਤੁਹਾਡਾ ਪ੍ਰੋਜੈਕਟ MSME ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਆਉਂਦਾ ਹੈ?",
    "investmentProject.yes": "ਹਾਂ",
    "investmentProject.no": "ਨਹੀਂ",
    "investmentProject.proceed": "ਆਵেদন ਵੱਲ ਅੱਗੇ ਵਧੋ",
    "drawer.home": "ਹੋਮ",
    "drawer.myProfile": "ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ",
    "drawer.myProjects": "ਮੇਰੇ ਪ੍ਰੋਜੈਕਟ",
    "drawer.myApplications": "ਮੇਰੀਆਂ ਅਰਜ਼ੀਆਂ",
    "drawer.fiscalIncentives": "ਵਿੱਤੀ ਪ੍ਰੋਤਸਾਹਨ",
    "drawer.fiscalRegistrations": "ਵਿੱਤੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    "drawer.eVault": "ਈ-ਵਾਲਟ",
    "drawer.knowYourApprovals": "ਆਪਣੀਆਂ ਮਨਜ਼ੂਰੀਆਂ ਜਾਣੋ",
    "drawer.settings": "ਸੈਟਿੰਗਜ਼",
    "drawer.logout": "ਲੌਗਆਉਟ",
    "drawer.language": "ਭਾਸ਼ਾ",
    "drawer.changePassword": "ਪਾਸਵਰਡ ਬਦਲੋ",
    "drawer.profile.name": "ਵਿਕਰਮ ਸਿੰਘ",
    "drawer.profile.company": "ਟੈਕ ਸੋਲੂਸ਼ਨਜ਼ ਪ੍ਰਾਈਵੇਟ ਲਿਮਿਟੇਡ",

    "profile.title": "ਨਿਵੇਸ਼ਕ ਪ੍ਰੋਫਾਈਲ",
    "profile.verified": "ਸত্যਾਪਿਤ",
    "profile.name": "ਸੰਦੀਪ ਸਿੰਘ",
    "profile.company": "ਪੰਜਾਬ ਇੰਡਸਟਰੀਅਲ ਹੱਬ",
    "profile.section.personalDetails": "ਨਿੱਜੀ ਵੇਰਵੇ",
    "profile.section.companyDetails": "ਕੰਪਨੀ ਵੇਰਵੇ",
    "profile.section.preferences": "ਪਸੰਦਾਂ",
    "profile.field.fullName": "ਪੂਰਾ ਨਾਮ",
    "profile.field.email": "ਈਮੇਲ ਪਤਾ",
    "profile.field.mobile": "ਮੋਬਾਈਲ ਨੰਬਰ",
    "profile.field.pan": "ਪੈਨ ਨੰਬਰ",
    "profile.field.gstin": "ਜੀਐਸਟੀਐਨ",
    "profile.field.registeredAddress": "ਰਜਿਸਟਰਡ ਪਤਾ",
    "profile.preference.language": "ਭਾਸ਼ਾ",
    "profile.preference.notifications": "ਸੂਚਨਾਵਾਂ",
    "profile.preference.biometric": "ਬਾਇਓਮੈਟ੍ਰਿਕ ਲੌਗਿਨ",
    "profile.logout": "ਲੌਗ ਆਉਟ",
    "profile.emailValue": "sandeep.s@punjabihub.com",
    "profile.mobileValue": "+91 98765 43210",
    "profile.panValue": "ABCDE1234F",
    "profile.gstinValue": "03ABCDE1234F1Z5",
    "profile.addressValue": "ਪਲਾਟ 45, ਇੰਡਸਟਰੀਅਲ ਏਰੀਆ ਫੇਜ਼ VIII, ਮੋਹਾਲੀ, ਪੰਜਾਬ 160071",
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
    "myProjects.status.verified": "ਤਸਦੀਕ ਹੋਇਆ",
    "myProjects.pin": "ਪਿਨ",
    "myProjects.applicant": "ਆਵੇਦਕ",
    "myProjects.action": "ਐਕਸ਼ਨ",
    "myProjects.field.applicant": "ਆਵੇਦਕ",
    "myProjects.field.date": "ਤਾਰੀਖ",
    "myProjects.field.sector": "ਸੈਕਟਰ",
    "myProjects.field.district": "ਜ਼ਿਲ੍ਹਾ",
    "myProjects.field.mobile": "ਮੋਬਾਈਲ ਨੰਬਰ",
    "myProjects.fab.addProjectWithCaf": "CAF ਨਾਲ ਨਵਾਂ ਪ੍ਰੋਜੈਕਟ ਜੋੜੋ",
    "myProjects.fab.applyForNewService": "ਨਵੀਂ ਸੇਵਾ ਲਈ ਅਰਜ਼ੀ ਦਿਓ",
    "myProjects.action.addClearance": "ਕਲੀਅਰੈਂਸ ਜੋੜੋ",
    "myProjects.action.updateApplicant": "ਆਵੇਦਕ ਅਪਡੇਟ ਕਰੋ",
    "myProjects.action.updatePartners": "ਭਾਗੀਦਾਰ ਅਪਡੇਟ ਕਰੋ",
    "myProjects.action.updateCompanyPan": "ਕੰਪਨੀ PAN ਅਪਡੇਟ ਕਰੋ",
    "myProjects.sector.manufacturing": "ਮੈਨੂਫੈਕਚਰਿੰਗ",
    "myProjects.sector.otherService": "ਹੋਰ ਸੇਵਾ",
    "myProjects.sector.otherServiceProjects": "ਹੋਰ ਸੇਵਾ ਪ੍ਰੋਜੈਕਟ",
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
    "cafForm.common.select": "ਚੁਣੋ",
    "cafForm.common.yes": "ਹਾਂ",
    "cafForm.common.no": "ਨਹੀਂ",
    "cafForm.common.datePlaceholder": "YYYY-MM-DD",
    "cafForm.step1.title": "1. ਅਰਜ਼ੀਕਰਤਾ ਵੇਰਵੇ",
    "cafForm.step1.field.title": "1.1 ਟਾਈਟਲ *",
    "cafForm.step1.field.firstName": "1.2 ਪਹਿਲਾ ਨਾਂ *",
    "cafForm.step1.field.middleName": "1.3 ਮੱਧਲਾ ਨਾਂ",
    "cafForm.step1.field.lastName": "1.4 ਆਖਰੀ ਨਾਂ *",
    "cafForm.step1.field.designation": "1.5 ਅਹੁਦਾ *",
    "cafForm.step1.field.dob": "1.6 ਜਨਮ ਤਾਰੀਖ *",
    "cafForm.step1.field.photo": "1.7 ਅਰਜ਼ੀਕਰਤਾ ਫੋਟੋ *",
    "cafForm.step1.field.signature": "1.8 ਅਰਜ਼ੀਕਰਤਾ ਦਸਤਖ਼ਤ *",
    "cafForm.step1.field.aadhaarNo": "1.9 ਆਧਾਰ ਦਸਤਾਵੇਜ਼ ਨੰ. *",
    "cafForm.step1.field.aadhaarUpload": "1.10 ਆਧਾਰ ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ *",
    "cafForm.step1.field.panNo": "1.11 ਪੈਨ ਕਾਰਡ ਨੰ. *",
    "cafForm.step1.field.panUpload": "1.12 ਪੈਨ ਕਾਰਡ ਅਪਲੋਡ ਕਰੋ *",
    "cafForm.step1.field.phone": "1.13 ਅਰਜ਼ੀਕਰਤਾ ਫੋਨ ਨੰਬਰ",
    "cafForm.step1.field.fax": "1.14 ਅਰਜ਼ੀਕਰਤਾ ਫੈਕਸ ਨੰ.",
    "cafForm.step1.field.mobile": "1.15 ਅਰਜ਼ੀਕਰਤਾ ਮੋਬਾਈਲ ਨੰ. *",
    "cafForm.step1.field.email": "1.16 ਅਰਜ਼ੀਕਰਤਾ ਈਮੇਲ ਆਈਡੀ *",
    "cafForm.step1.field.country": "1.17 ਦੇਸ਼ ਚੁਣੋ *",
    "cafForm.step1.field.state": "1.18 ਰਾਜ/ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ ਚੁਣੋ *",
    "cafForm.step1.field.district": "1.19 ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ *",
    "cafForm.step1.field.tehsil": "1.20 ਤਹਿਸੀਲ ਚੁਣੋ *",
    "cafForm.step1.field.city": "1.21 ਸ਼ਹਿਰ/ਕਸਬਾ/ਪਿੰਡ *",
    "cafForm.step1.field.address1": "1.22 ਪਤਾ ਲਾਈਨ 1 *",
    "cafForm.step1.field.address2": "1.23 ਪਤਾ ਲਾਈਨ 2",
    "cafForm.step1.field.pinCode": "1.24 ਪਿਨ ਕੋਡ *",
    "cafForm.step1.field.authorizationLetter": "1.25 ਅਧਿਕਾਰ ਪੱਤਰ ਅਪਲੋਡ ਕਰੋ *",
    "cafForm.step2.title": "2. ਕਾਰੋਬਾਰੀ ਇਕਾਈ ਜਾਣਕਾਰੀ",
    "cafForm.step2.field.entityName": "2.1 ਕਾਰੋਬਾਰੀ ਇਕਾਈ ਨਾਂ *",
    "cafForm.step2.field.entityType": "2.2 ਕਾਰੋਬਾਰੀ ਇਕਾਈ ਕਿਸਮ *",
    "cafForm.step2.field.country": "2.3 ਦੇਸ਼ ਚੁਣੋ *",
    "cafForm.step2.field.state": "2.4 ਰਾਜ/ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ ਚੁਣੋ *",
    "cafForm.step2.field.district": "2.5 ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ *",
    "cafForm.step2.field.tehsil": "2.6 ਤਹਿਸੀਲ ਚੁਣੋ *",
    "cafForm.step2.field.villageTown": "2.7 ਪਿੰਡ/ਕਸਬਾ ਨਾਂ *",
    "cafForm.step2.field.address1": "2.8 ਪਤਾ ਲਾਈਨ 1 *",
    "cafForm.step2.field.address2": "2.9 ਪਤਾ ਲਾਈਨ 2",
    "cafForm.step2.field.pinCode": "2.10 ਪਿਨ ਕੋਡ *",
    "cafForm.step2.field.multiUnitsCheckbox": "ਜੇ ਇੱਕ ਕਾਰੋਬਾਰੀ ਇਕਾਈ ਇੱਕੋ ਕੰਪਨੀ PAN ਹੇਠ ਕਈ ਯੂਨਿਟ ਜਾਂ ਪ੍ਰੋਜੈਕਟ ਚਲਾਉਂਦੀ ਹੈ",
    "cafForm.step2.field.companyPan": "2.11 ਕੰਪਨੀ PAN ਨੰ. *",
    "cafForm.step2.field.companyPanUpload": "2.12 ਕੰਪਨੀ PAN ਕਾਰਡ ਅਪਲੋਡ ਕਰੋ *",
    "cafForm.step2.field.udyamOptional": "2.13 ਉਦਯਮ ਰਜਿਸਟ੍ਰੇਸ਼ਨ (ਚੋਣਵੀਂ)",
    "cafForm.step3.title": "3. ਪ੍ਰੋਜੈਕਟ ਵੇਰਵੇ",
    "cafForm.step3.pageTitle": "ਪ੍ਰੋਜੈਕਟ ਵੇਰਵੇ",
    "cafForm.step3.pageSub": "ਆਪਣੀ ਅਰਜ਼ੀ ਅੱਗੇ ਵਧਾਉਣ ਲਈ ਹੇਠਾਂ ਵੇਰਵੇ ਭਰੋ।",
    "cafForm.step3.field.sameAsEntity": "ਕਾਰੋਬਾਰੀ ਇਕਾਈ ਜਾਣਕਾਰੀ ਵਰਗਾ",
    "cafForm.step3.field.projectName": "3.1 ਪ੍ਰੋਜੈਕਟ ਨਾਂ *",
    "cafForm.step3.field.projectPurpose": "3.2 ਪ੍ਰੋਜੈਕਟ ਉਦੇਸ਼ *",
    "cafForm.step3.field.projectType": "3.3 ਪ੍ਰੋਜੈਕਟ ਕਿਸਮ *",
    "cafForm.step3.field.unitLocation": "3.4 ਯੂਨਿਟ ਸਥਾਨ *",
    "cafForm.step3.field.country": "3.5 ਦੇਸ਼ ਚੁਣੋ *",
    "cafForm.step3.field.state": "3.6 ਰਾਜ/ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ ਚੁਣੋ *",
    "cafForm.step3.field.district": "3.7 ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ *",
    "cafForm.step3.field.tehsil": "3.8 ਤਹਿਸੀਲ ਚੁਣੋ *",
    "cafForm.step3.field.city": "3.9 ਸ਼ਹਿਰ/ਕਸਬਾ/ਪਿੰਡ *",
    "cafForm.step3.field.address1": "3.10 ਪਤਾ ਲਾਈਨ 1 *",
    "cafForm.step3.field.address2": "3.11 ਪਤਾ ਲਾਈਨ 2",
    "cafForm.step3.field.pinCode": "3.12 ਪਿਨ ਕੋਡ *",
    "cafForm.step3.field.gstApplicable": "3.13 ਕੀ GST ਨੰਬਰ ਲਾਗੂ ਹੈ * :",
    "cafForm.step4.title": "4. ਮਾਲਿਕ / ਭਾਗੀਦਾਰ / ਡਾਇਰੈਕਟਰ ਵੇਰਵੇ",
    "cafForm.step4.field.certificateIncorporationUpload": "4.1.16 ਇੰਕਾਰਪੋਰੇਸ਼ਨ/ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਰਟੀਫਿਕੇਟ ਅਟੈਚਮੈਂਟ *",
    "cafForm.step5.title": "5. ਪ੍ਰੋਜੈਕਟ ਵੇਰਵੇ",
    "cafForm.step5.field.landArea": "5.1 ਜ਼ਮੀਨ ਖੇਤਰਫਲ (ਏਕੜ ਵਿੱਚ) *",
    "cafForm.step5.field.landRegistrationType": "5.2 ਜ਼ਮੀਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੀ ਕਿਸਮ ਚੁਣੋ *",
    "cafForm.step5.field.landDocumentUpload": "5.3 ਜ਼ਮੀਨ ਸੰਬੰਧੀ ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ *",
    "cafForm.step5.field.multipleCityInvolved": "5.4 ਕਈ ਸ਼ਹਿਰ/ਕਸਬਾ/ਪਿੰਡ ਸ਼ਾਮਲ ਹਨ?",
    "cafForm.step5.field.mcLimit": "5.5 ਕੀ ਇਹ ਸਾਈਟ MC ਸੀਮਾ ਅੰਦਰ ਆਉਂਦੀ ਹੈ?",
    "cafForm.step5.field.mcDistanceKm": "ਜੇ ਨਹੀਂ, ਤਾਂ MC ਸੀਮਾ ਤੋਂ ਦੂਰੀ (ਕਿਮੀ ਵਿੱਚ) ਦੱਸੋ",
    "cafForm.step5.field.sector": "5.6 ਸੈਕਟਰ *",
    "cafForm.step5.field.dprUpload": "5.7 ਡੀਟੇਲਡ ਪ੍ਰੋਜੈਕਟ ਰਿਪੋਰਟ (DPR) ਅਪਲੋਡ ਕਰੋ *",
    "cafForm.step5.field.migrationFromFiipToIbdp": "5.8 ਯੂਨਿਟ ਦਾ FIIP (R) 2013 ਤੋਂ IBDP 2017 ਵਿੱਚ ਮਾਈਗ੍ਰੇਸ਼ਨ *",
    "cafForm.step5.field.policyChapter": "5.9 ਪਾਲਿਸੀ ਚੈਪਟਰ",
    "cafForm.step5.field.protectedMonument": "5.10 ਕੀ ਪ੍ਰਸਤਾਵਿਤ ਨਿਰਮਾਣ ਸਾਈਟ ਕਿਸੇ ਕੇਂਦਰੀ ਸੁਰੱਖਿਅਤ ਸਮਾਰਕ ਦੀ ਸੀਮਾ ਵਿੱਚ ਆਉਂਦੀ ਹੈ?",
    "cafForm.step5.field.nmaNocAvailable": "5.11 ਕੀ ਪ੍ਰਸਤਾਵਿਤ ਨਿਰਮਾਣ ਸਾਈਟ ਲਈ ਤੁਹਾਡੇ ਕੋਲ NMA NOC ਉਪਲਬਧ ਹੈ?",
    "cafForm.step6.title": "6. ਨਿਵੇਸ਼ ਵੇਰਵੇ",
    "cafForm.step6.note": "* FCI (ਪਾਲਿਸੀ 2013 ਅਨੁਸਾਰ) ਬਿਲਡਿੰਗ ਲਾਗਤ ਅਤੇ ਪਲਾਂਟ ਤੇ ਮਸ਼ੀਨਰੀ ਲਾਗਤ,\n* FCI (ਪਾਲਿਸੀ 2017 ਅਨੁਸਾਰ) ਜ਼ਮੀਨ ਲਾਗਤ, ਬਿਲਡਿੰਗ ਲਾਗਤ ਅਤੇ ਪਲਾਂਟ ਤੇ ਮਸ਼ੀਨਰੀ ਲਾਗਤ।",
    "cafForm.step6.field.landCost": "6.1 ਜ਼ਮੀਨ ਲਾਗਤ (ਲੱਖ ਵਿੱਚ) *",
    "cafForm.step6.field.buildingCost": "6.2 ਬਿਲਡਿੰਗ ਲਾਗਤ (ਲੱਖ ਵਿੱਚ) *",
    "cafForm.step6.field.plantMachineryCost": "6.3 ਪਲਾਂਟ ਅਤੇ ਮਸ਼ੀਨਰੀ ਲਾਗਤ (ਲੱਖ ਵਿੱਚ) *",
    "cafForm.step6.field.fci": "6.4 FCI (ਲੱਖ ਵਿੱਚ) *",
    "cafForm.step6.field.otherCost": "6.5 ਹੋਰ ਲਾਗਤ (ਲੱਖ ਵਿੱਚ) *",
    "cafForm.step6.field.totalProjectCost": "6.6 ਕੁੱਲ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ (ਲੱਖ ਵਿੱਚ) *",
    "cafForm.step6.field.totalProjectCostHelp": "ਉਪਰਲੇ ਇਨਪੁੱਟ ਅਨੁਸਾਰ ਆਪਣੇ ਆਪ ਗਣਨਾ",
    "cafForm.step6.field.commercialProduction": "6.7 ਕੀ ਯੂਨਿਟ ਵਪਾਰਕ ਉਤਪਾਦਨ ਵਿੱਚ ਹੈ",
    "cafForm.step6.field.industryType": "6.8 ਉਦਯੋਗ ਦੀ ਕਿਸਮ *",
    "cafForm.step7.title": "7. DPR ਅਨੁਸਾਰ ਚਰਣ-ਵਾਰ ਨਿਵੇਸ਼ (ਜੇ ਲਾਗੂ ਹੋਵੇ)",
    "cafForm.step7.field.phaseName": "7.1 ਚਰਣ ਦਾ ਨਾਂ",
    "cafForm.step7.field.fci": "7.2 FCI (ਲੱਖ ਵਿੱਚ)",
    "cafForm.step7.field.investDate": "7.3 ਨਿਵੇਸ਼ ਦੀ ਪ੍ਰਸਤਾਵਿਤ ਤਾਰੀਖ",
    "cafForm.step7.field.productionDate": "7.4 ਉਤਪਾਦਨ ਦੀ ਪ੍ਰਸਤਾਵਿਤ ਤਾਰੀਖ",
    "cafForm.step7.field.fdiInvolved": "7.5 ਕੀ FDI ਸ਼ਾਮਲ ਹੈ",
    "cafForm.step8.title": "8. ਪ੍ਰਸਤਾਵਿਤ ਰੁਜ਼ਗਾਰ ਵੇਰਵੇ",
    "cafForm.step8.field.financialYear": "ਵਿੱਤੀ ਸਾਲ",
    "cafForm.step8.field.selectSkill": "ਸਕਿਲ ਚੁਣੋ",
    "cafForm.step8.field.directMale": "ਸਿੱਧੇ ਪੁਰਸ਼ ਕਰਮਚਾਰੀ",
    "cafForm.step8.field.directFemale": "ਸਿੱਧੀਆਂ ਮਹਿਲਾ ਕਰਮਚਾਰੀ",
    "cafForm.step8.field.indirectMale": "ਅਪਰੋক্ষ ਪੁਰਸ਼ ਕਰਮਚਾਰੀ",
    "cafForm.step8.field.indirectFemale": "ਅਪਰੋক্ষ ਮਹਿਲਾ ਕਰਮਚਾਰੀ",
    "cafForm.step8.field.totalDirectMale": "8.1 ਸਿੱਧੇ ਪੁਰਸ਼ ਕਰਮਚਾਰੀ *",
    "cafForm.step8.field.totalDirectFemale": "8.2 ਸਿੱਧੀਆਂ ਮਹਿਲਾ ਕਰਮਚਾਰੀ *",
    "cafForm.step8.field.totalIndirectMale": "8.3 ਅਪਰੋক্ষ ਪੁਰਸ਼ ਕਰਮਚਾਰੀ *",
    "cafForm.step8.field.totalIndirectFemale": "8.4 ਅਪਰੋক্ষ ਮਹਿਲਾ ਕਰਮਚਾਰੀ *",
    "cafForm.step8.field.totalMale": "8.5 ਕੁੱਲ ਪੁਰਸ਼ ਕਰਮਚਾਰੀ *",
    "cafForm.step8.field.totalFemale": "8.6 ਕੁੱਲ ਮਹਿਲਾ ਕਰਮਚਾਰੀ *",
    "cafForm.step9.title": "9. ਪਹਿਲਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਕਲੀਅਰੈਂਸ/ਮਨਜ਼ੂਰੀਆਂ",
    "cafForm.step9.field.regulatoryClearance": "9.1 ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਕੋਈ ਰੈਗੂਲਟਰੀ ਕਲੀਅਰੈਂਸ ਪਹਿਲਾਂ ਤੋਂ ਹੈ?",
    "cafForm.step9.field.fiscalIncentive": "9.2 ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਕੋਈ ਫਿਸਕਲ ਇਨਸੈਂਟਿਵ ਪਹਿਲਾਂ ਤੋਂ ਹੈ?",
    "cafForm.step9.field.croReport": "9.3 ਕੀ ਤੁਹਾਡੇ ਕੋਲ CRO ਰਿਪੋਰਟ ਹੈ? *",
  },
};
