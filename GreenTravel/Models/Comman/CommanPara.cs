using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models.Comman
{
    public class CommanPara
    {
        //public string _ip = HttpContext.Current.Request.UserHostAddress;
        //public string _Userid="1";
        //public string _Corporate="2";
        //public string _Unit="1";
        //public string _Branch="11";
        public string CreatedBy
        {
            get;
            set;
        }
        public string CorpcentreBy
        {
            get;
            set;
        }
        public string UnitCorpBy
        {
            get;
            set;
        }
        public string BranchBy
        {
            get;
            set;

        }
        public string TerminalBy
        {
            get;
            set;
        }
        public string Location
        {
            get;
            set;
        }
        public string LocationBy
        {
            get;
            set;
        }

        public CommanPara()
        {
            // CreatedBy = "1";
            CreatedBy = HttpContext.Current.Session["CreatedBy"].ToString();
            // CorpcentreBy ="2";
            CorpcentreBy = HttpContext.Current.Session["Corporate"].ToString();
            //UnitCorpBy = "1";
            UnitCorpBy = HttpContext.Current.Session["UnitCorpBy"].ToString();
            //BranchBy = "11";
            BranchBy = HttpContext.Current.Session["BranchBy"].ToString();
            TerminalBy = "103.11.29.22";
            Location = HttpContext.Current.Session["Location"].ToString();
            LocationBy = HttpContext.Current.Session["Location"].ToString();
            //TerminalBy = HttpContext.Current.Session["TerminalBy"].ToString();


        }

    }
}