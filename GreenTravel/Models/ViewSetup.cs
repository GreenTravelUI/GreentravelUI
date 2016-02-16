using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class ViewSetup : CommanPara
    {
        public string srno { get; set; }
        public string Corporate { get; set; }
        public string Module { get; set; }
        public string Screen { get; set; }
        public string FormCode { get; set; }
        public string TabCode { get; set; }
        public string ViewName { get; set; }
        public string RecordCountQuery { get; set; }
        public string ColumnQuery { get; set; }
        public string WhereQuery { get; set; }
        public string GroupQuery { get; set; }
        public string IsMasterView { get; set; }
        public string MasterTable { get; set; }
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

    public class GridViewsetup
    {
        public string Corporate { get; set; }
        public string Screen { get; set; }
        public string Module { get; set; }
        public string FormName { get; set; }
        public string Tab { get; set; }
        public string View { get; set; }
        public string RowNumber { get; set; }
        public string srno { get; set; }
    }

    public class ColumnView : CommanPara
    {
        public string srno { get; set; }
        public string ViewCode { get; set; }
        public string Corporate { get; set; }
        public string ColumnCaption { get; set; }
        public string ColumnName { get; set; }
        public string FixedOrder { get; set; }
        public string Visibility { get; set; }
        public string ColumnUpdate { get; set; }
        public string UpdateControl { get; set; }
        public string UpdateQuery1 { get; set; }
        public string UpdateQuery2 { get; set; }
        public string UpdateQuery3 { get; set; }
        public string UpdateQuery4 { get; set; }
        public string UpdateQuery5 { get; set; }
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

    public class ColumnGridDisplay
    {
        public string RowNumber { get; set; }
        public string srno { get; set; }
        public string ColumnCaption { get; set; }
        public string ColumnName { get; set; }
        public string UpdateControl { get; set; }
    }

}