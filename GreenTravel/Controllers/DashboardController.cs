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
        //DB_Login _objDBLogin = new DB_Login();
        //DataSet ds = new DataSet();
        //FormValidationPara _FormValidationPara = new FormValidationPara();
        // GET: /Dashboard/
        public ActionResult Index()
        {
            //if (Session["CreatedBy"] == null)
            //{
            //    return RedirectToAction("index", "Home");
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
        //public ActionResult LogOut()
        //{
        //    FormsAuthentication.SignOut();
        //    Session.Abandon(); // it will clear the session at the end of request
        //    return RedirectToAction("index", "Home");
        //}
    }
}
