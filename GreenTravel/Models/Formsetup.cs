using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class Formsetup : CommanPara
    {
        public int id { get; set; }
        public string SrNo { get; set; }
        public string FormName { get; set; }
        public string FormPrefixCode { get; set; }
        public string Corporate { get; set; }
        public string Module { get; set; }
        public string Screen { get; set; }
        public string FeatureGroup { get; set; }
        public string Header { get; set; }
        public string SubHeader { get; set; }
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
        //public string EntryDatetime { get; set; }
        //public string EditedBy { get; set; }
        //public string EditDatetime { get; set; }
        //public string CorpcentreBy { get; set; }
        //public string UnitCorpBy { get; set; }
        //public string TerminalBy { get; set; }
        //public string BranchId { get; set; }

    }

    public class GridFormparamater
    {
        public string Corporate { get; set; }
        public string FeatureGroup { get; set; }
        public string Module { get; set; }
        public string FormName { get; set; }
        public string RowNumber { get; set; }
        public string srno { get; set; }

    }

    public class FormTab : CommanPara
    {
        public string SrNo { get; set; }
        public string Corporate { get; set; }
        public string FormCode { get; set; }
        public string TabNumber { get; set; }
        public string TabHeader { get; set; }
        public string TabClass { get; set; }
        public string TooltipHelpText { get; set; }
        public string MasterTable { get; set; }
        public string MasterTablePrefix { get; set; }
        public string TrxTable1 { get; set; }
        public string TrxTable2 { get; set; }
        public string TrxTable3 { get; set; }
        public string TrxTable4 { get; set; }
        public string TrxTable5 { get; set; }
        public string TrxTable6 { get; set; }
        public string TrxTable7 { get; set; }
        public string TrxTable8 { get; set; }
        public string TrxTable9 { get; set; }
        public string TrxTable10 { get; set; }
        public string SummeryLabel { get; set; }
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

    public class GridFormTabparamater
    {
        public string FormCode { get; set; }
        public string Formname { get; set; }
        public string TabSrNo { get; set; }
        public string TabHeader { get; set; }
        public string TabClass { get; set; }
        public string SummeryLabel { get; set; }
        public string RowNumber { get; set; }



    }

    public class StandardButton : CommanPara
    {
        public string srno { get; set; }
        public string CorporateId { get; set; }
        public string TabCode { get; set; }
        public string FormCode { get; set; }
        public string SaveName { get; set; }
        public string SaveClass { get; set; }
        public string SaveVisibility { get; set; }
        public string SaveNotification { get; set; }
        public string SaveTask { get; set; }
        public string UpdateName { get; set; }
        public string UpdateClass { get; set; }
        public string UpdateVisibility { get; set; }
        public string UpdateNotification { get; set; }
        public string UpdateTask { get; set; }
        public string DeleteName { get; set; }
        public string DeleteClass { get; set; }
        public string DeleteVisibility { get; set; }
        public string DeleteNotification { get; set; }
        public string DeleteTask { get; set; }
        public string ClearName { get; set; }
        public string ClearClass { get; set; }
        public string ClearVisibility { get; set; }
        public string ClearNotification { get; set; }
        public string ClearTask { get; set; }
        public string FormQuitName { get; set; }
        public string FormQuitClass { get; set; }
        public string FormQuitVisibility { get; set; }
        public string FormQuitNotification { get; set; }
        public string FormQuitTask { get; set; }
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

    public class Utility : CommanPara
    {
        public string srno { get; set; }
        public string CorporateId { get; set; }
        public string TabCode { get; set; }
        public string FormCode { get; set; }
        public string Utilities { get; set; }
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
        //public string EntryDatetime { get; set; }
        //public string EditedBy { get; set; }
        //public string EditDatetime { get; set; }
        //public string CorpcentreBy { get; set; }
        //public string UnitCorpBy { get; set; }
        //public string TerminalBy { get; set; }
        //public string BranchBy { get; set; }
    }

    public class Section_Master : CommanPara
    {
        public string srno { get; set; }
        public string CorporateId { get; set; }
        public string TabCode { get; set; }
        public string FormCode { get; set; }
        public string SectionName { get; set; }
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
        //public string EntryDatetime { get; set; }
        //public string EditedBy { get; set; }
        //public string EditDatetime { get; set; }
        //public string CorpcentreBy { get; set; }
        //public string UnitCorpBy { get; set; }
        //public string TerminalBy { get; set; }
        //public string BranchBy { get; set; }
        public string rownumber { get; set; }
    }

    public class Custom_Master : CommanPara
    {
        public string srno { get; set; }
        public string Corporate { get; set; }
        public string TabCode { get; set; }
        public string FormCode { get; set; }
        public string CustomName { get; set; }
        public string CustomClass { get; set; }
        public string CustomVisibility { get; set; }
        public string CustomNotification { get; set; }
        public string CustomTask { get; set; }
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
        //public string EntryDatetime { get; set; }
        //public string EditedBy { get; set; }
        //public string EditDatetime { get; set; }
        //public string CorpcentreBy { get; set; }
        //public string UnitCorpBy { get; set; }
        //public string TerminalBy { get; set; }
        //public string BranchBy { get; set; }
        public string Rownumber { get; set; }
    }

    public class DataTableData
    {
        public int draw { get; set; }
        public int recordsTotal { get; set; }
        public int recordsFiltered { get; set; }
        public List<GridFormparamater> data { get; set; }
    }
}