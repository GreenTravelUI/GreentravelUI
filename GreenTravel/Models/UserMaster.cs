using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class UserMaster
    {
        public string srno { get; set; }
        public string UserCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
        public string CellPhone { get; set; }
        public string OfficePhone { get; set; }
        public string OfficePhoneExtension { get; set; }
        public string ResiedencePhone { get; set; }
        public string Qualification { get; set; }
        public string DrivingLicenceNumber { get; set; }
        public string BirthDate { get; set; }
        public string Nationality { get; set; }
        public string Status { get; set; }
        public string Designation { get; set; }
        public string SittingLocation { get; set; }
        public string Photo { get; set; }
        public string Signature { get; set; }
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
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public DataSet StoreAllData { get; set; }
        public string BranchBy { get; set; }
        public string RowNumber { get; set; }
        public string Name { get; set; }
        public string Corporate { get; set; }
        public string Unit { get; set; }
        public string Branch { get; set; }
        public string tablename { get; set; }
        public string Formcode { get; set; }
        public string Formtabcode { get; set; }
        public string Location { get; set; }

    }

    public class UserMaster_Formpara
    {
        public string type { get; set; }
        public string VouType { get; set; }
        public string FormType { get; set; }
        public string FormTabCode { get; set; }
        public string control { get; set; }
        public string corporate { get; set; }
        public string userid { get; set; }
        public string module { get; set; }
        public string ip { get; set; }
        public string field1 { get; set; }
        public string field2 { get; set; }
        public string field3 { get; set; }
        public string field4 { get; set; }
        public string field5 { get; set; }
        public string field6 { get; set; }
        public string field7 { get; set; }
        public string field8 { get; set; }
        public string field9 { get; set; }
        public string field10 { get; set; }
        public string field11 { get; set; }
        public string field12 { get; set; }
        public string field13 { get; set; }
        public string field14 { get; set; }
        public string field15 { get; set; }
        public string field16 { get; set; }
        public string field17 { get; set; }
        public string field18 { get; set; }
        public string field19 { get; set; }
        public string field20 { get; set; }
        public string field21 { get; set; }
        public string field22 { get; set; }
        public string field23 { get; set; }
        public string field24 { get; set; }
        public string field25 { get; set; }
        public string field26 { get; set; }
        public string field27 { get; set; }
        public string field28 { get; set; }
        public string field29 { get; set; }
        public string field30 { get; set; }
        public string field31 { get; set; }
        public string field32 { get; set; }
        public string field33 { get; set; }
        public string field34 { get; set; }
        public string field35 { get; set; }

    }


    public class UserMaster_AccessRight
    {
        public string srno { get; set; }
        public string UserCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
        public string CellPhone { get; set; }
        public string OfficePhone { get; set; }
        public string OfficePhoneExtension { get; set; }
        public string ResiedencePhone { get; set; }
        public string Qualification { get; set; }
        public string DrivingLicenceNumber { get; set; }
        public string BirthDate { get; set; }
        public string Nationality { get; set; }
        public string Status { get; set; }
        public string Designation { get; set; }
        public string SittingLocation { get; set; }
        public string Photo { get; set; }
        public string Signature { get; set; }
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
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public DataSet StoreAllData { get; set; }
        public string BranchBy { get; set; }

        public string RowNumber { get; set; }
        public string Name { get; set; }
        public string Corporate { get; set; }
        public string Unit { get; set; }
        public string Branch { get; set; }
        public string tablename { get; set; }
        public string Formcode { get; set; }
        public string Formtabcode { get; set; }

        public string Module { get; set; }
        public string Screen { get; set; }
        public string View { get; set; }
        public string Add { get; set; }
        public string Update { get; set; }
        public string Delete { get; set; }

    }

    public class UserWiseRights : CommanPara
    {
        public string srno { get; set; }
        public string UserId { get; set; }
        public string Corporate { get; set; }
        public string Unit { get; set; }
        public string Location { get; set; }
        public string Branch { get; set; }
        public string Role { get; set; }
        public string RoleType { get; set; }
        public string EffectiveDate { get; set; }
        public string IsActive { get; set; }
        public string IsDefault { get; set; }
        public string Status { get; set; }
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
        //public string CreatedBy { get; set; }
        public List<GridHearderModule> GridHearder { get; set; }
        public List<GridColumnScreen> GridColumn { get; set; }

    }
    public partial class GridRights
    {
        public List<GridHearderModule> GridHearder { get; set; }
        public List<GridColumnScreen> GridColumn { get; set; }
    }

    public class GridHearderModule
    {
        public string SrNo { get; set; } //xname
        public string xname { get; set; }

    }
    public class GridColumnScreen
    {
        public string SrNo { get; set; } //xname
        public string xname { get; set; }
        public string xlink { get; set; }

    }

}