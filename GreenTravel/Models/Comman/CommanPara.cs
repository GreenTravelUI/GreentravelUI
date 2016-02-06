using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models.Comman
{
    public class CommanPara
    {
        public string CreatedBy
        {
            get
            {
                try
                {
                    return HttpContext.Current.Session["UserId"].ToString();
                }
                catch
                {
                    return "-1";
                }
            }
            set { HttpContext.Current.Session["UserId"] = value; }
        }
        public string EntryDatetime
        {
            get
            {
                return DateTime.Now.ToString();
            }
            set { HttpContext.Current.Session["UserId"] = value; }
        }
        public string EditedBy
        {
            get
            {
                try
                {
                    return HttpContext.Current.Session["UserId"].ToString();
                }
                catch
                {
                    return "-1";
                }
            }
            set { HttpContext.Current.Session["UserId"] = value; }
        }
        public string EditDatetime
        {
            get
            {
                return HttpContext.Current.Session["UserId"].ToString();
            }
            set { HttpContext.Current.Session["UserId"] = value; }
        }
        public string CorpcentreBy
        {
            get
            {
                try
                {
                    return HttpContext.Current.Session["Corporate"].ToString();
                }
                catch
                {
                    return "-1";
                }
            }
            set { HttpContext.Current.Session["Corporate"] = value; }
        }
        public string UnitCorpBy
        {
            get
            {
                try
                {
                    return HttpContext.Current.Session["Unit"].ToString();
                }
                catch
                {
                    return "-1";
                }
            }
            set { HttpContext.Current.Session["Unit"] = value; }
        }
        public string TerminalBy
        {
            get
            {
                try
                {
                    return HttpContext.Current.Session["Location"].ToString();
                }
                catch
                {
                    return "-1";
                }
            }
            set { HttpContext.Current.Session["Location"] = value; }
        }
        public string BranchBy
        {
            get
            {
                try
                {
                    return HttpContext.Current.Session["Branch"].ToString();
                }
                catch
                {
                    return "-1";
                }
            }
            set { HttpContext.Current.Session["Branch"] = value; }
        }
    }
}