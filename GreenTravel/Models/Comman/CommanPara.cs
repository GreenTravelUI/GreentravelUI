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
            //get
            //{
            //    return _Userid;
            //}
            //set
            //{
            //    _Userid = value;
            //}
        }

        public string CorpcentreBy
        {
            get;
            set;
            //get
            //{
            //    return _Corporate;
            //}
            //set
            //{
            //    _Corporate = value;
            //}
        }

        public string UnitCorpBy
        {
            get;
            set;
            //get
            //{
            //    return _Unit;
            //}
            //set
            //{
            //    _Unit = value;
            //}
        }

        public string BranchBy
        {
            get;
            set;
            //get
            //{
            //    return _Branch;
            //}
            //set
            //{
            //    _Branch = value;
            //}
        }
        public string TerminalBy
        {
            get;
            set;
            //get
            //{
            //    return _ip;
            //}
            //set
            //{
            //    _ip = value;
            //}
        }

        public CommanPara()
        {
            CreatedBy = "1";
          //  CorpcentreBy = HttpContext.Current.Session["Corporate"].ToString();
            CorpcentreBy ="2";
            UnitCorpBy = "1";
            BranchBy = "11";
            TerminalBy = "103.11.29.22";
        }

    }
}