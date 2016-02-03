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
    }

    public partial class Grid
    {
        public List<GridHearder> GridHearder { get; set; }
        public List<GridColumn> GridColumn { get; set; }
    }

    public  class GridHearder
    {
        public string SrNo { get; set; } //xname
        public string xname { get; set; }

    }
    public  class GridColumn
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