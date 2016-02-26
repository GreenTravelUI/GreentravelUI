using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GreenTravel.App_DbService;
using GreenTravel.Models.Comman;
using GreenTravel.Models;
using Newtonsoft.Json;
using System.Data;

namespace GreenTravel.Controllers
{

    public class HomeController : Controller
    {
        Comman _objcomman = new Comman();
        DB_Login _objDBLogin = new DB_Login();

        FormValidationPara frm_para = new FormValidationPara();

        public ActionResult Index(string url = "")
        {
            /* Uncomment it for already login case */
            /*
            if (Session["CreatedBy"] != null)
            {
                return RedirectToAction("Index", "Dashboard");
            }
            */

            #region Get Form Data
            ViewBag.CurrentURL = Request.Url.Scheme + "://" + Request.Url.Authority;
            if (ViewBag.CurrentURL == "http://localhost:9359")
            {
                //ViewBag.CurrentURL = "http://gt.techpure.co.uk";
                ViewBag.CurrentURL = "http://tu.techpure.co.uk";
            }

            frm_para.FormType = "LoginPage"; //from_code
            frm_para.corporate = "--None--";
            frm_para.type = "Caption";
            frm_para.FormTabCode = "--None--";
            var form_val = _objcomman.GetFormData(frm_para);
            //url = "https://agent.travelzunlimited.com/crm"
            //string url = Request.Url.ToString();
            FormValidationPara _FormValidationPara = new FormValidationPara()
            {
                type = "PageLoad",
                //url = "http://gt.techpure.co.uk"
                url = ViewBag.CurrentURL
            };
            if (url == "")
            {
                ViewBag.RedirectUrl = "/Dashboard";
            }
            else
            {
                ViewBag.RedirectUrl = url;
            }



            DataSet ds = ds = _objDBLogin.GetLoginData(_FormValidationPara);
            if (ds.Tables[0] != null)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Corporate = ds.Tables[0].Rows[0]["Corporate"];
                    if (ds.Tables[0].Rows[0]["Facebook"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["Facebook"].ToString() != "--None--" && ds.Tables[0].Rows[0]["Facebook"].ToString() != "")
                            ViewBag.Facebook = ds.Tables[0].Rows[0]["Facebook"];
                        else
                            ViewBag.Facebook = "";
                    }
                    else
                    {
                        ViewBag.Facebook = "";
                    }

                    if (ds.Tables[0].Rows[0]["Twitter"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["Twitter"].ToString() != "--None--" && ds.Tables[0].Rows[0]["Twitter"].ToString() != "")
                            ViewBag.Twitter = ds.Tables[0].Rows[0]["Twitter"];
                        else
                            ViewBag.Twitter = "";
                    }
                    else
                    {
                        ViewBag.Twitter = "";
                    }

                    if (ds.Tables[0].Rows[0]["GooglePlus"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["GooglePlus"].ToString() != "--None--" && ds.Tables[0].Rows[0]["GooglePlus"].ToString() != "")
                            ViewBag.GooglePlus = ds.Tables[0].Rows[0]["GooglePlus"];
                        else
                            ViewBag.GooglePlus = "";
                    }
                    else
                    {
                        ViewBag.GooglePlus = "";
                    }

                    if (ds.Tables[0].Rows[0]["WebPortal"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["WebPortal"].ToString() != "--None--" && ds.Tables[0].Rows[0]["WebPortal"].ToString() != "")
                            ViewBag.WebPortal = ds.Tables[0].Rows[0]["WebPortal"];
                        else
                            ViewBag.WebPortal = "";
                    }
                    else
                    {
                        ViewBag.WebPortal = "";
                    }



                    if (ds.Tables[0].Rows[0]["BackgroundImg"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["BackgroundImg"].ToString() != "" && ds.Tables[0].Rows[0]["BackgroundImg"].ToString() != "--None--")
                            Session["BackgroundImg"] = ds.Tables[0].Rows[0]["BackgroundImg"];
                        else
                            Session["BackgroundImg"] = "/assets/images/login-bg.jpg";
                    }
                    else
                    {
                        Session["BackgroundImg"] = "/assets/images/login-bg.jpg";
                    }

                    if (ds.Tables[0].Rows[0]["Logo"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["Logo"].ToString() != "" && ds.Tables[0].Rows[0]["Logo"].ToString() != "--None--")
                            Session["Logo"] = ds.Tables[0].Rows[0]["Logo"];
                        else
                            Session["Logo"] = "/assets/images/Logo-green.png";
                    }
                    else
                    {
                        Session["Logo"] = "/assets/images/Logo-green.png";
                    }

                    if (ds.Tables[0].Rows[0]["LoginFrmCaption"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["LoginFrmCaption"].ToString() != "" && ds.Tables[0].Rows[0]["LoginFrmCaption"].ToString() != "--None--")
                            ViewBag.LoginFrmCaption = ds.Tables[0].Rows[0]["LoginFrmCaption"];
                        else
                            ViewBag.LoginFrmCaption = "";
                    }
                    else
                    {
                        ViewBag.LoginFrmCaption = "";
                    }

                    if (ds.Tables[0].Rows[0]["Favicon"] != null)
                    {
                        if (ds.Tables[0].Rows[0]["Favicon"].ToString() != "" && ds.Tables[0].Rows[0]["Favicon"].ToString() != "--None--")
                            Session["Favicon"] = ds.Tables[0].Rows[0]["Favicon"];
                        else
                            Session["Favicon"] = "/assets/images/favicon.ico";
                    }
                    else
                    {
                        Session["Favicon"] = "/assets/images/favicon.ico";
                    }

                    Session["Corporate"] = ds.Tables[0].Rows[0]["Corporate"];
                    //Session["Logo"] = ds.Tables[0].Rows[0]["Logo"];
                    Session["TerminalBy"] = Request.UserHostAddress.ToString();
                    Session["Indsutry"] = ds.Tables[0].Rows[0]["corpCompanyIndust"];

                }
            }
            #endregion

            return View(form_val);
            //return View();
        }

        public string LoginUser(FormValidationPara _FormValidationPara)
        {
            Session["Corporate"] = "5";

            if (Session["Corporate"].ToString() != String.Empty)
            {
                _FormValidationPara.corporate = Session["Corporate"].ToString();

            }
            DataSet ds = _objDBLogin.GetLoginData(_FormValidationPara);
            if (ds.Tables.Count > 0)
            {
                if (ds.Tables[0].Rows[0]["NOS"].ToString() != "0")
                {
                    _FormValidationPara.type = "Session_Values";
                    ds = _objDBLogin.GetSessionValue(_FormValidationPara);
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        Session["UserName"] = ds.Tables[0].Rows[0]["xname"].ToString();
                        Session["CreatedBy"] = ds.Tables[0].Rows[0]["xcode"].ToString();
                        Session["UnitCorpBy"] = ds.Tables[0].Rows[0]["Unit"].ToString();
                        Session["BranchBy"] = ds.Tables[0].Rows[0]["branch"].ToString();
                        Session["Location"] = ds.Tables[0].Rows[0]["Location"].ToString();
                    }
                    return "1";
                }
                else
                {
                    return "0";
                }
            }
            else
            {
                return "0";
            }


        }

        public ActionResult PageLoad(FormValidationPara _FormValidationPara)
        {

            DataSet ds = _objDBLogin.GetLoginData(_FormValidationPara);
            if (ds.Tables[0].Rows.Count > 0)
            {
                if (ds.Tables[0] != null)
                {
                    Session["Corporate"] = ds.Tables[0].Rows[0]["Corporate"];
                    Session["Logo"] = ds.Tables[0].Rows[0]["Logo"];
                    Session["TerminalBy"] = Request.UserHostAddress.ToString();
                    Session["Indsutry"] = ds.Tables[0].Rows[0]["corpCompanyIndust"];
                }
            }
            var lst = JsonConvert.SerializeObject(ds.Tables[0], Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore });
            return Content(lst, "application/json");

        }

        //public void LoadSessions(string Type, string url)
        //{
        //    DataSet ds = _objDBLogin.GetLoginData(Type, "", url, "");
        //}
    }
}
