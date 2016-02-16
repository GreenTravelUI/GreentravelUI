using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class FrmControlSetup : CommanPara
    {
        public string Srno { get; set; }
        public string Corporate { get; set; }
        public string FormCode { get; set; }
        public string TabCode { get; set; }
        public string SectionCode { get; set; }
        public string FieldControlLabel { get; set; }
        public string ControlId { get; set; }
        public string FieldControlType { get; set; }
        public string ValidationCode { get; set; }
        public string PlaceholderText { get; set; }
        public string TooltipHelpText { get; set; }
        public string RequiredField { get; set; }
        public string ReqValidationMsg { get; set; }
        public string ReglarExField { get; set; }
        public string RegexValidationMsg { get; set; }
        public string GuidedTourText { get; set; }
        public string GuidedTourStepNo { get; set; }
        public string FieldOrderNumber { get; set; }
        public string FieldCaptionName { get; set; }
        public string ValidationMaxSize { get; set; }
        public string ValidationDateType { get; set; }
        public string InProcessValidation { get; set; }
        public string Status { get; set; }
        public string Tags { get; set; }
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


    public class GridFromControlDisplay
    {
        public string corporate { get; set; }
        public string Features { get; set; }
        public string Module { get; set; }
        public string Form { get; set; }
        public string Tab { get; set; }
        public string Section { get; set; }
        public string Controls { get; set; }
        public string RowNumber { get; set; }
        public string Srno { get; set; }
    }
    //public class GridFrmControlDisplay
    //{
    //    public string CompanyName { get; set; } //xname
    //    public string CompanyIndustry { get; set; } //xmaster
    //    public string ApplicationURL { get; set; }
    //    public string RefferenceCompany { get; set; }
    //    public string Srno { get; set; }
    //    public string RowNumber { get; set; }
    //}

}