using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class Formsetup
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
        public string CreatedBy { get; set; }
        public string EntryDatetime { get; set; }
        public string EditedBy { get; set; }
        public string EditDatetime { get; set; }
        public string CorpcentreBy { get; set; }
        public string UnitCorpBy { get; set; }
        public string TerminalBy { get; set; }
        public string BranchId { get; set; }
        
    }
    public class Formlode
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
      
    }
    public class Baseformsetup
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
        public string Srno { get; set; }
    }

    public class GridFormparamater
    {
        public string Corporate { get; set; }
        public string FeatureGroup { get; set; }
        public string Module { get; set; }
        public string FormName { get; set; }
        public string RowNumber { get; set; }
       
    }
}