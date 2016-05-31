using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models.Comman
{
    public class FormValidation
    {
        public string PlaceholderText { get; set; }
        public string FieldCaptionName { get; set; }
        public string TooltipHelpText { get; set; }
        public string ButtonIconClass { get; set; }
        //public string BtnText { get; set; }
        public string RequiredField { get; set; }
        public string FormSectionNumber { get; set; }
        public string FormSectionHeader { get; set; }
        public string FormTabCode { get; set; }
        public string FieldOrderNumber { get; set; }
        public string GuidedTourText { get; set; }
        public string GuidedTourOrder { get; set; }
        public string ValidationCode { get; set; }
        public string ValidationMaxSize { get; set; }
        public string ValidationDateType { get; set; }
        public string InProcessValidation { get; set; }
        public string SummaryControlName { get; set; }
    }
}