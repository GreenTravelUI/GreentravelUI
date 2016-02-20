using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class WhitelabelReg
    {


        public string srno { get; set; }
        public string Corporate { get; set; }
        public string CorpCoOfficialName { get; set; }
        public string CorpCompanyIndust { get; set; }
        public string CompanyType { get; set; }
        public string Services { get; set; }
        public string BusinessMode { get; set; }
        public string AdminUserName { get; set; }
        public string Password { get; set; }
        public string ApplicationTheme { get; set; }
        public string ApplicationUrl { get; set; }
        public string WebTheme { get; set; }
        public string WebUrl { get; set; }
        public string BaseCurrency { get; set; }
        public string BaseLanguage { get; set; }
        public string OtherLanguage { get; set; }
        public string Logo { get; set; }
        public string Favicon { get; set; }
        public string OfficialEmail { get; set; }
        public string OfficialPhone { get; set; }
        public string FullSemiWhiteLbl { get; set; }
        public string CopyrightNote { get; set; }
        public string CopyrightNoteFlag { get; set; }
        public string LoginFrmCaption { get; set; }
        public string DefaultLogo { get; set; }
        public string RefCorpCompany { get; set; }
        public string OtherReference1 { get; set; }
        public string OtherReference2 { get; set; }
        public string Commision { get; set; }
        public string Attribute1 { get; set; }
        public string Attribute2 { get; set; }
        public string Attribute3 { get; set; }
        public string Attribute4 { get; set; }
        public string Attribute5 { get; set; }
        public string Attribute6 { get; set; }
        public string Attribute7 { get; set; }
        public string Attribute8 { get; set; }
        public string Attribute9 { get; set; }
        public string Attribute10 { get; set; }
        public string EntryDatetime { get; set; }
        public string CretedBy { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchBy { get; set; }
        public string CreatedBy { get; set; }
        public string Module { get; set; }
        public string screen { get; set; }
        public string FormCode { get; set; }
        public string TabCode { get; set; }
        public string unit { get; set; }
        public string Branch { get; set; }
        public string userid { get; set; }
        public string Ip { get; set; }
        public string Type { get; set; }
        public string Field1 { get; set; }
        public string Field2 { get; set; }
        public string Field3 { get; set; }
        public string Field4 { get; set; }
        public string Field5 { get; set; }
        public string Control { get; set; }





    }

    public class UserPreferancestep1
    {
        public string srno { get; set; }
        public string Corporate { get; set; }

        public string GadgetPosition { get; set; }
        public string OtherPreferences { get; set; }
        public string pagerow { get; set; }

        public string Attribute1 { get; set; }
        public string Attribute2 { get; set; }
        public string Attribute3 { get; set; }
        public string Attribute4 { get; set; }
        public string Attribute5 { get; set; }
        public string Attribute6 { get; set; }
        public string Attribute7 { get; set; }
        public string Attribute8 { get; set; }
        public string Attribute9 { get; set; }
        public string Attribute10 { get; set; }
        public string EntryDatetime { get; set; }
        public string CretedBy { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchBy { get; set; }

        public string CreatedBy { get; set; }
        public string Module { get; set; }
        public string screen { get; set; }
        public string FormCode { get; set; }
        public string TabCode { get; set; }
        public string unit { get; set; }
        public string Branch { get; set; }
        public string userid { get; set; }
        public string Ip { get; set; }
        public string Type { get; set; }
    }



    public class GridFrmControlDisplay
    {

        public string CompanyName { get; set; } //xname

        public string CompanyIndustry { get; set; } //xmaster

        public string ApplicationURL { get; set; }

        public string RefferenceCompany { get; set; }

        public string Srno { get; set; }

        public string RowNumber { get; set; }
    }

    public class Billing_maintanence:CommanPara
    {
        public string srno { get; set; }
        public string Corporate { get; set; }
        public string BillingName { get; set; }
        public string BillingContactPerson { get; set; }
        public string BillingAddress1 { get; set; }
        public string BillingAddress2 { get; set; }
        public string BillingCity { get; set; }
        public string BillingState { get; set; }
        public string BillingCountry { get; set; }
        public string BillingArea { get; set; }
        public string BillingZipCode { get; set; }
        public string BillingEmail { get; set; }
        public string BillingPhone { get; set; }
        public string BillingContactMobile { get; set; }
        public string Currency { get; set; }
        public string SupportMode { get; set; }
        public string FreeSupportPeriod { get; set; }
        public string SupportCostPM { get; set; }
        public string Attribute1 { get; set; }
        public string Attribute2 { get; set; }
        public string Attribute3 { get; set; }
        public string Attribute4 { get; set; }
        public string Attribute5 { get; set; }
        public string Attribute6 { get; set; }
        public string Attribute7 { get; set; }
        public string Attribute8 { get; set; }
        public string Attribute9 { get; set; }
        public string Attribute10 { get; set; }
    }

    public class Hosting_Subscription:CommanPara
    {
        public string srno { get; set; }
        public string Corporate { get; set; }
        public string CloudProvider { get; set; }
        public string CloudServerIp { get; set; }
        public string CloudDiskSpace { get; set; }
        public string TransactionCount { get; set; }
        public string IpRestrictedAccess { get; set; }
        public string CdnProvider { get; set; }
        public string CdnSpace { get; set; }
        public string HostingCost { get; set; }
        public string CostPerMonth { get; set; }
        public string Currency { get; set; }

        public string PlanName { get; set; }
        public string SubscriptionType { get; set; }
        public string FreeFlag { get; set; }
        public string NumberOfUsers { get; set; }
        public string SubscriptionFromDate { get; set; }
        public string SubscriptionToDate { get; set; }
        public string BillingCycle { get; set; }
        public string BillingFromCompany { get; set; }
        public string PaymentCurrency { get; set; }
        public string AmountPUPM { get; set; }
        public string PaymentMode { get; set; }
        public string FirstPayDate { get; set; }
        public string GracePeriod { get; set; }

        public string Attribute1 { get; set; }
        public string Attribute2 { get; set; }
        public string Attribute3 { get; set; }
        public string Attribute4 { get; set; }
        public string Attribute5 { get; set; }
        public string Attribute6 { get; set; }
        public string Attribute7 { get; set; }
        public string Attribute8 { get; set; }
        public string Attribute9 { get; set; }
        public string Attribute10 { get; set; }
               
    }

    public class Password_Authentication : CommanPara
    {
        public string srno { get; set; }
        public string Corporate { get; set; }

        public string CapitalCharNumber { get; set; }
        public string RequiredNumeric { get; set; }
        public string SpecialCharNumber { get; set; }
        public string EncriptionKey { get; set; }
        public string PasswordMinLength { get; set; }
        public string PasswordExpiryDays { get; set; }
        public string UserLoginDay { get; set; }
        public string NumberOfAttempts { get; set; }
        public string NumberOfAttemptsTime { get; set; }
        public string OTPExpiryTime { get; set; }
        public string LastSamePassword { get; set; }
        public string UnableCaptcha { get; set; }
        public string AutoLockScreen { get; set; }

        public string UserUnlockMinut { get; set; }
        public string Continuenumber { get; set; }


        public string Attribute1 { get; set; }
        public string Attribute2 { get; set; }
        public string Attribute3 { get; set; }
        public string Attribute4 { get; set; }
        public string Attribute5 { get; set; }
        public string Attribute6 { get; set; }
        public string Attribute7 { get; set; }
        public string Attribute8 { get; set; }
        public string Attribute9 { get; set; }
        public string Attribute10 { get; set; }

    }

   

}