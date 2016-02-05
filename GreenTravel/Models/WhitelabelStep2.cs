using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class WhitelabelStep2
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
        public string Field1 { get; set; }
        public string Field2 { get; set; }
        public string control { get; set; }
        public List<GridHearder> GridHearder { get; set; }
        public List<GridColumn> GridColumn { get; set; }
        //public List<GridFeature> GridFeature { get; set; }

        public object srno { get; set; }
        public object FeaturesCategory { get; set; }
        public object FeatureGroup { get; set; }
        public object Feature { get; set; }
        public object Attribute1 { get; set; }
        public object Attribute2 { get; set; }
        public object Attribute3 { get; set; }
        public object Attribute4 { get; set; }
        public object Attribute5 { get; set; }
        public object Attribute6 { get; set; }
        public object Attribute7 { get; set; }
        public object Attribute8 { get; set; }
        public object Attribute9 { get; set; }
        public object Attribute10 { get; set; }
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchBy { get; set; }
    }

    public partial class Grid
    {
        public List<GridHearder> GridHearder { get; set; }
        public List<GridColumn> GridColumn { get; set; }
    }

    public class GridHearder
    {
        public string SrNo { get; set; } //xname
        public string xname { get; set; }

    }
    public class GridColumn
    {
        public string SrNo { get; set; } //xname
        public string xname { get; set; }
        public string xlink { get; set; }

    }

    //public class WholeGrid
    //{
    //    public string Corporate { get; set; }
    //    public List<GridHearder> GridHearder { get; set; }
    //    public List<GridColumn> GridColumn { get; set; }
    //}

    //   public List<Customerdetail> Customerdetail { get; set; }

}