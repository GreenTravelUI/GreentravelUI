using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenTravel.Controllers
{
    public class ExpenseBookController : Controller
    {
        //
        // GET: /ExpenseBook/

        public ActionResult Index()
        {
            return View();
        }

    }
}
