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

        //Login _objlogin = new Login();

        FormValidationPara frm_para = new FormValidationPara();

        public ActionResult Index()
        {
            //frm_para.FormType = "LoginPage"; //from_code
            //frm_para.corporate = "--None--";
            //frm_para.type = "Caption";
            //frm_para.FormTabCode = "--None--";
            //var form_val = _objcomman.GetFormData(frm_para);

            //string url = Request.Url.ToString();
            //FormValidationPara _FormValidationPara = new FormValidationPara()
            //{
            //    type = "PageLoad",
            //    url = "https://agent.travelzunlimited.com/crm"
            //};

            //Session["logo"] = "assets/images/logo-green.png";
            //Session["backgroundImage"] = "/assets/images/login-bg.jpg";
            //Session["Favicon"] = "assets/images/favicon.ico";
            //DataSet ds = ds = _objDBLogin.GetLoginData(_FormValidationPara);
            //if (ds.Tables[0] != null)
            //{
            //    if (ds.Tables[0].Rows.Count > 0)
            //    {
            //        ViewBag.Corporate = ds.Tables[0].Rows[0]["Corporate"];
            //        if (ds.Tables[0].Rows[0]["Facebook"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["Facebook"].ToString() != "--None--" && ds.Tables[0].Rows[0]["Facebook"].ToString() != "")
            //                ViewBag.Facebook = ds.Tables[0].Rows[0]["Facebook"];
            //            else
            //                ViewBag.Facebook = "";
            //        }
            //        else
            //        {
            //            ViewBag.Facebook = "";
            //        }

            //        if (ds.Tables[0].Rows[0]["Twitter"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["Twitter"].ToString() != "--None--" && ds.Tables[0].Rows[0]["Twitter"].ToString() != "")
            //                ViewBag.Twitter = ds.Tables[0].Rows[0]["Twitter"];
            //            else
            //                ViewBag.Twitter = "";
            //        }
            //        else
            //        {
            //            ViewBag.Twitter = "";
            //        }

            //        if (ds.Tables[0].Rows[0]["GooglePlus"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["GooglePlus"].ToString() != "--None--" && ds.Tables[0].Rows[0]["GooglePlus"].ToString() != "")
            //                ViewBag.GooglePlus = ds.Tables[0].Rows[0]["GooglePlus"];
            //            else
            //                ViewBag.GooglePlus = "";
            //        }
            //        else
            //        {
            //            ViewBag.GooglePlus = "";
            //        }

            //        if (ds.Tables[0].Rows[0]["WebPortal"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["WebPortal"].ToString() != "--None--" && ds.Tables[0].Rows[0]["WebPortal"].ToString() != "")
            //                ViewBag.WebPortal = ds.Tables[0].Rows[0]["WebPortal"];
            //            else
            //                ViewBag.WebPortal = "";
            //        }
            //        else
            //        {
            //            ViewBag.WebPortal = "";
            //        }



            //        if (ds.Tables[0].Rows[0]["backgroundImage"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["backgroundImage"].ToString() != "" && ds.Tables[0].Rows[0]["backgroundImage"].ToString() != "--None--")
            //                Session["backgroundImage"] = ds.Tables[0].Rows[0]["backgroundImage"];
            //        }

            //        if (ds.Tables[0].Rows[0]["logo"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["logo"].ToString() != "" && ds.Tables[0].Rows[0]["logo"].ToString() != "--None--")
            //                Session["logo"] = ds.Tables[0].Rows[0]["logo"];
            //        }

            //        if (ds.Tables[0].Rows[0]["LoginFrmCaption"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["LoginFrmCaption"].ToString() != "" && ds.Tables[0].Rows[0]["LoginFrmCaption"].ToString() != "--None--")
            //                ViewBag.LoginFrmCaption = ds.Tables[0].Rows[0]["LoginFrmCaption"];
            //            else
            //                ViewBag.LoginFrmCaption = "";
            //        }
            //        else
            //        {
            //            ViewBag.LoginFrmCaption = "";
            //        }

            //        if (ds.Tables[0].Rows[0]["Favicon"] != null)
            //        {
            //            if (ds.Tables[0].Rows[0]["Favicon"].ToString() != "" && ds.Tables[0].Rows[0]["Favicon"].ToString() != "--None--")
            //                Session["Favicon"] = ds.Tables[0].Rows[0]["Favicon"];
            //        }


            //    }
            //}
            //return View(form_val);
            return View();
        }

        public string LoginUser(string Type, string Email, string url, string Pword)
        {
            var login_Data = _objDBLogin.GetUserData(Type, Email, url, Pword);
            if (login_Data != null)
            {
                return "1";
            }
            else
            {
                return "0";

            }
            // List<Login> li = _objDBLogin.GetUserData(Type, Email, url);
            //if (li.Count > 0)
            //{
            //}

        }

        public ActionResult PageLoad(string Type, string Email, string url, string Pword)
        {
            FormValidationPara _FormValidationPara = new FormValidationPara()
            {
                type = Type,
                Email = Email,
                url = url,
                Password = Pword
            };
            DataSet ds = ds = _objDBLogin.GetLoginData(_FormValidationPara);

            if (ds.Tables[0] != null)
            {
                Session["Corporate"] = ds.Tables[0].Rows[0]["Corporate"];
                Session["logo"] = ds.Tables[0].Rows[0]["logo"];
            }

            var lst = JsonConvert.SerializeObject(ds.Tables[0], Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore });
            return Content(lst, "application/json");

        }

        public void LoadSessions(string Type, string url)
        {
            var load_sessions = _objDBLogin.GetUserData(Type, "", url, "");
        }

    }
}
