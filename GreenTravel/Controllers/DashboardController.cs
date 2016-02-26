using GreenTravel.App_DbService;
using GreenTravel.Models;
using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace GreenTravel.Controllers
{
    public class DashboardController : Controller
    {
        //Variable and Object
        DB_Login _objDBLogin = new DB_Login();
        DataSet ds = new DataSet();
        FormValidationPara _FormValidationPara = new FormValidationPara();
       
        // GET: /Dashboard/

        public ActionResult Index()
        {
            //_FormValidationPara.corporate = Session["Corporate"].ToString();
            //_FormValidationPara.userid = Convert.ToInt32(Session["CreatedBy"].ToString());
            //_FormValidationPara.type="menu";
            //ds = _objDBLogin.GetLoginData(_FormValidationPara);
            //if (ds.Tables[0] != null)
            //{
            //    if (ds.Tables[0].Rows.Count > 0)
            //    {
            //        ViewBag.Menus = ds.Tables[0];
            //        foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
            //        {
            //            Module.Add(new Module
            //            {
            //                ModuleCode = @dr["modulecode"].ToString(),
            //                ModuleName = @dr["module"].ToString()
            //            });
            //        }
            //    }
            //}
            return View();
        }

        public ActionResult Sales()
        {
            return View();
        }

        public ActionResult Accounts()
        {
            return View();
        }

        public ActionResult WebPortal()
        {
            return View();
        }

        public ActionResult Calender()
        {
            return View();
        }

        public ActionResult Timeline()
        {
            return View();
        }

        public ActionResult ToDo()
        {
            return View();
        }

        public ActionResult SearchResult()
        {
            return View();
        }
        public ActionResult LogOut()
        {
            FormsAuthentication.SignOut();
            Session.Abandon(); // it will clear the session at the end of request
            return RedirectToAction("index", "Home");
        }
    }
}
