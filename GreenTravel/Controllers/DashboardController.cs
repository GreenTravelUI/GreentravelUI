using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace GreenTravel.Controllers
{
    public class DashboardController : Controller
    {
        //
        // GET: /Dashboard/

        public ActionResult Index()
        {
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
