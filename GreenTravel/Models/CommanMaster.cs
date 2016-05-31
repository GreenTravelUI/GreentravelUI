using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class ViewModel
    {
        public IEnumerable<CommanMaster> Masrters { get; set; }
        public IEnumerable<CommanMasterCaption> Caption { get; set; }

    }
    public class CommanMaster
    {
        public string Type { get; set; }
        public string xmaster { get; set; }
        public string xname { get; set; }
        public string Corporate { get; set; }
        public string drpCaption { get; set; }
        public string xlink { get; set; }
        public string xcross { get; set; }
        public string xcross1 { get; set; }
        public string xcross2 { get; set; }
        public string xcross3 { get; set; }
        public string xcross4 { get; set; }
        public string xreference1 { get; set; }
        public string xreference2 { get; set; }
        public string xreference3 { get; set; }
        public string xreference4 { get; set; }
        public string xreference5 { get; set; }
        public string xreference6 { get; set; }
        public string xdetail { get; set; }
        public string ENTRYCONTROL { get; set; }
        public string SEGMENT { get; set; }
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
        public string Rating1 { get; set; }
        public string Rating2 { get; set; }
        public string Rating3 { get; set; }
        public string Date1 { get; set; }
        public string Date2 { get; set; }
        public string Date3 { get; set; }
        public string Email1 { get; set; }
        public string Email2 { get; set; }
        public string Email3 { get; set; }
        public string Amount { get; set; }
        public string Amount2 { get; set; }
        public string Amount3 { get; set; }
        public string Time1 { get; set; }
        public string Time2 { get; set; }
        public string Html { get; set; }
        public string Upload { get; set; }
        public string TextArea { get; set; }
        public string MultiSelect1 { get; set; }
        public string MultiSelect2 { get; set; }
        public string MultiSelect3 { get; set; }
        public string MultiSelect4 { get; set; }
        public string MultiSelect5 { get; set; }
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchBy { get; set; }
        public string language { get; set; }
        public List<ViewsGridHearder> ViewsGridHearder { get; set; }
        public List<ViewsGridColumn> ViewsGridColumn { get; set; }
    }

    public class CommanMasterCaption
    {

        public string xmastercaption { get; set; }
        public string SEGMENTcaption { get; set; }
        public string Field1caption { get; set; }
        public string Field2caption { get; set; }
        public string Field3caption { get; set; }
        public string Field4caption { get; set; }
        public string Field5caption { get; set; }
        public string Field6caption { get; set; }
        public string Field7caption { get; set; }
        public string Field8caption { get; set; }
        public string Field9caption { get; set; }
        public string Field10caption { get; set; }
        public string Field11caption { get; set; }
        public string Field12caption { get; set; }
        public string Field13caption { get; set; }
        public string Field14caption { get; set; }
        public string Field15caption { get; set; }
        public string Field16caption { get; set; }
        public string Field17caption { get; set; }
        public string Field18caption { get; set; }
        public string Field19caption { get; set; }
        public string Field20caption { get; set; }
        public string Languagecaption { get; set; }
        public string Attribute1caption { get; set; }
        public string Attribute2caption { get; set; }
        public string Attribute3caption { get; set; }
        public string Attribute4caption { get; set; }
        public string Attribute5caption { get; set; }
        public string Attribute6caption { get; set; }
        public string Attribute7caption { get; set; }
        public string Attribute8caption { get; set; }
        public string Attribute9caption { get; set; }
        public string Attribute10caption { get; set; }
        public string Rating1caption { get; set; }
        public string Rating2caption { get; set; }
        public string Rating3caption { get; set; }
        public string Date1caption { get; set; }
        public string Date2caption { get; set; }
        public string Date3caption { get; set; }
        public string Email1caption { get; set; }
        public string Email2caption { get; set; }
        public string Email3caption { get; set; }
        public string Amountcaption { get; set; }
        public string Amount2caption { get; set; }
        public string Amount3caption { get; set; }
        public string Time1caption { get; set; }
        public string Time2caption { get; set; }
        public string Htmlcaption { get; set; }
        public string Uploadcaption { get; set; }
        public string TextAreacaption { get; set; }
        public string MultiSelect1caption { get; set; }
        public string MultiSelect2caption { get; set; }
        public string MultiSelect3caption { get; set; }
        public string MultiSelect4caption { get; set; }
        public string MultiSelect5caption { get; set; }
        public string CreatedBycaption { get; set; }
        public string EntryDatetimecaption { get; set; }
        public string EditedBycaption { get; set; }
        public string EditDatetimecaption { get; set; }
        public string CorpcentreBycaption { get; set; }
        public string UnitCorpBycaption { get; set; }
        public string TerminalBycaption { get; set; }
        public string BranchBycaption { get; set; }
    }

    public class CommanMasterPlaceholder
    {

        public string xmaster { get; set; }
        public string Field1 { get; set; }
        public string Field2 { get; set; }
        public string Field3 { get; set; }
        public string Field4 { get; set; }
        public string Field5 { get; set; }
        public string Field6 { get; set; }
        public string Field7 { get; set; }
        public string Field8 { get; set; }
        public string Field9 { get; set; }
        public string Field10 { get; set; }
        public string Field11 { get; set; }
        public string Field12 { get; set; }
        public string Field13 { get; set; }
        public string Field14 { get; set; }
        public string Field15 { get; set; }
        public string Field16 { get; set; }
        public string Field17 { get; set; }
        public string Field18 { get; set; }
        public string Field19 { get; set; }
        public string Field20 { get; set; }
        public string Language { get; set; }
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
        public string Rating1 { get; set; }
        public string Rating2 { get; set; }
        public string Rating3 { get; set; }
        public string Date1 { get; set; }
        public string Date2 { get; set; }
        public string Date3 { get; set; }
        public string Email1 { get; set; }
        public string Email2 { get; set; }
        public string Email3 { get; set; }
        public string Amount { get; set; }
        public string Amount2 { get; set; }
        public string Amount3 { get; set; }
        public string Time1 { get; set; }
        public string Time2 { get; set; }
        public string Html { get; set; }
        public string Upload { get; set; }
        public string TextArea { get; set; }
        public string MultiSelect1 { get; set; }
        public string MultiSelect2 { get; set; }
        public string MultiSelect3 { get; set; }
        public string MultiSelect4 { get; set; }
        public string MultiSelect5 { get; set; }
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchBy { get; set; }
    }

    public class CommanMasterValidation
    {

        public string xmaster { get; set; }
        public string Field1 { get; set; }
        public string Field2 { get; set; }
        public string Field3 { get; set; }
        public string Field4 { get; set; }
        public string Field5 { get; set; }
        public string Field6 { get; set; }
        public string Field7 { get; set; }
        public string Field8 { get; set; }
        public string Field9 { get; set; }
        public string Field10 { get; set; }
        public string Field11 { get; set; }
        public string Field12 { get; set; }
        public string Field13 { get; set; }
        public string Field14 { get; set; }
        public string Field15 { get; set; }
        public string Field16 { get; set; }
        public string Field17 { get; set; }
        public string Field18 { get; set; }
        public string Field19 { get; set; }
        public string Field20 { get; set; }
        public string Language { get; set; }
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
        public string Rating1 { get; set; }
        public string Rating2 { get; set; }
        public string Rating3 { get; set; }
        public string Date1 { get; set; }
        public string Date2 { get; set; }
        public string Date3 { get; set; }
        public string Email1 { get; set; }
        public string Email2 { get; set; }
        public string Email3 { get; set; }
        public string Amount { get; set; }
        public string Amount2 { get; set; }
        public string Amount3 { get; set; }
        public string Time1 { get; set; }
        public string Time2 { get; set; }
        public string Html { get; set; }
        public string Upload { get; set; }
        public string TextArea { get; set; }
        public string MultiSelect1 { get; set; }
        public string MultiSelect2 { get; set; }
        public string MultiSelect3 { get; set; }
        public string MultiSelect4 { get; set; }
        public string MultiSelect5 { get; set; }
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchBy { get; set; }
    }

    public class CommanMasterHelp
    {

        public string xmaster { get; set; }
        public string Field1 { get; set; }
        public string Field2 { get; set; }
        public string Field3 { get; set; }
        public string Field4 { get; set; }
        public string Field5 { get; set; }
        public string Field6 { get; set; }
        public string Field7 { get; set; }
        public string Field8 { get; set; }
        public string Field9 { get; set; }
        public string Field10 { get; set; }
        public string Field11 { get; set; }
        public string Field12 { get; set; }
        public string Field13 { get; set; }
        public string Field14 { get; set; }
        public string Field15 { get; set; }
        public string Field16 { get; set; }
        public string Field17 { get; set; }
        public string Field18 { get; set; }
        public string Field19 { get; set; }
        public string Field20 { get; set; }
        public string Language { get; set; }
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
        public string Rating1 { get; set; }
        public string Rating2 { get; set; }
        public string Rating3 { get; set; }
        public string Date1 { get; set; }
        public string Date2 { get; set; }
        public string Date3 { get; set; }
        public string Email1 { get; set; }
        public string Email2 { get; set; }
        public string Email3 { get; set; }
        public string Amount { get; set; }
        public string Amount2 { get; set; }
        public string Amount3 { get; set; }
        public string Time1 { get; set; }
        public string Time2 { get; set; }
        public string Html { get; set; }
        public string Upload { get; set; }
        public string TextArea { get; set; }
        public string MultiSelect1 { get; set; }
        public string MultiSelect2 { get; set; }
        public string MultiSelect3 { get; set; }
        public string MultiSelect4 { get; set; }
        public string MultiSelect5 { get; set; }
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchBy { get; set; }
    }

    public class CommanUserMaster : CommanPara
    {
        public string USrno { get; set; }
        public string Uxmaster { get; set; }
        public string Uxcode { get; set; }
        public string Uxname { get; set; }
        public string UIsActive { get; set; }
        public string URemark { get; set; }
        public string Uxlink { get; set; }
        public string Uxcross { get; set; }
        public string Uxcross1 { get; set; }
        public string Uxcross2 { get; set; }
        public string Uxcross3 { get; set; }
        public string Uxcross4 { get; set; }
        public string Uxreference1 { get; set; }
        public string Uxreference2 { get; set; }
        public string Uxreference3 { get; set; }
        public string Uxreference4 { get; set; }
        public string Uxreference5 { get; set; }
        public string Uxreference6 { get; set; }

        public string Uxdetail { get; set; }
        public string UAttribute1 { get; set; }
        public string UAttribute2 { get; set; }
        public string UAttribute3 { get; set; }
        public string UAttribute4 { get; set; }
        public string UAttribute5 { get; set; }
        public string UAttribute6 { get; set; }
        public string UAttribute7 { get; set; }
        public string UAttribute8 { get; set; }
        public string UAttribute9 { get; set; }
        public string UAttribute10 { get; set; }

        //public string UUserId { get; set; }
        //public string UCreatedBy { get; set; }
        //public string UEntryDatetime { get; set; }
        //public string UEditedBy { get; set; }
        //public string UEditDatetime { get; set; }
        //public string UCorpcentreBy { get; set; }
        //public string UUnitCorpBy { get; set; }
        //public string UTerminalBy { get; set; }
        //public string UBranchBy { get; set; }

        public string URating1 { get; set; }
        public string URating2 { get; set; }
        public string URating3 { get; set; }

        public string UDate1 { get; set; }
        public string UDate2 { get; set; }
        public string UDate3 { get; set; }

        public string UEmail1 { get; set; }
        public string UEmail2 { get; set; }
        public string UEmail3 { get; set; }

        public string UAmount { get; set; }
        public string UAmount2 { get; set; }
        public string UAmount3 { get; set; }

        public string UTime1 { get; set; }
        public string UTime2 { get; set; }

        public string UHtml { get; set; }
        public string UUpload { get; set; }
        public string UTextArea { get; set; }

        public string UMultiSelect1 { get; set; }
        public string UMultiSelect2 { get; set; }
        public string UMultiSelect3 { get; set; }
        public string UMultiSelect4 { get; set; }
        public string UMultiSelect5 { get; set; }
    }

    public class commanbaseParamater : CommanPara
    {
        public string Module { get; set; }
        public string screen { get; set; }
        public string FormCode { get; set; }
        public string TabCode { get; set; }
        public string Corporate { get; set; }
        public string unit { get; set; }
        public string Branch { get; set; }
        public string userid { get; set; }
        public string Ip { get; set; }
        public string Type { get; set; }
        public string field1 { get; set; }
        public string field2 { get; set; }
        public string field3 { get; set; }
        public string field4 { get; set; }
        public string field5 { get; set; }
        public string Control { get; set; }
        public string Language { get; set; }
        public string Srno { get; set; }
    }

    public class GridAdminparamater
    {
        public string name { get; set; } //xname
        public string Mastercode { get; set; } //xmaster
        public string Entry_Level { get; set; }
        public string segment { get; set; }
        public string RowNumber { get; set; }
    }

    public class Edit_AdminMaster
    {
        public string tablename { get; set; }
        public string Corporate { get; set; }
        public string unit { get; set; }
        public string Formcode { get; set; }
        public string Formtabcode { get; set; }
        public string Xmaster { get; set; }
        public string Type { get; set; }
    }

    public class GridUserMasterparamater
    {
        public string SrNo { get; set; } //xname
        public string xmaster { get; set; } //xmaster
        public string xname { get; set; }
        public string RowNumber { get; set; }
    }
    public class Edit_UserMaster
    {
        public string tablename { get; set; }
        public string Corporate { get; set; }
        public string unit { get; set; }
        public string Formcode { get; set; }
        public string Formtabcode { get; set; }
        public string Xmaster { get; set; }
        public string Type { get; set; }
        public string SrNo { get; set; }
    }


    public partial class Views
    {
        public List<ViewsGridHearder> ViewsGridHearder { get; set; }
        public List<ViewsGridColumn> ViewsGridColumn { get; set; }
    }


    public class ViewsGridColumn
    {
        public string column1 { get; set; }
        public string column2 { get; set; }
        public string column3 { get; set; }
        public string column4 { get; set; }
        public string column5 { get; set; }
        public string column6 { get; set; }
        public string column7 { get; set; }
        public string column8 { get; set; }
        public string column9 { get; set; }
        public string column10 { get; set; }
        public string column11 { get; set; }
        public string column12 { get; set; }
        public string column13 { get; set; }
        public string column14 { get; set; }
        public string column15 { get; set; }
        public string column16 { get; set; }
        public string column17 { get; set; }
        public string column18 { get; set; }
        public string column19 { get; set; }
        public string column20 { get; set; }

    }



    public class ViewsGridHearder
    {
        public string Header { get; set; }
        public string DisplayOrder { get; set; }
        public string Visibility { get; set; }
        public string TableColumn { get; set; }
        //public string column1 { get; set; }
       
    }

}