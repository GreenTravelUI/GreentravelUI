using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace GreenTravel.Models
{
    public class WhitelabelStep2 : CommanPara

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

        public string srno { get; set; }
        public string FeaturesCategory { get; set; }
        public string FeatureGroup { get; set; }
        public string Feature { get; set; }
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
       // public string CreatedBy { get; set; }
        //public string EntryDatetime { get; set; }
        //public string EditedBy { get; set; }
        //public string EditDatetime { get; set; }
        //public string CorpcentreBy { get; set; }
        //public string UnitCorpBy { get; set; }
        //public string TerminalBy { get; set; }
        //public string BranchBy { get; set; }
        public object groupAry { get; set; }
        public object FeatureAry { get; set; }


        public string tablename { get; set; }

      //  public string Formcode { get; set; }

        public string Formtabcode { get; set; }
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