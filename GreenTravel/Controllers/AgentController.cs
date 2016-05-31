using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenTravel.Controllers
{
    public class AgentController : Controller
    {
        //
        // GET: /Agent/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Operation()
        {
            return View();
        }

        public ActionResult Address()
        {
            return View();
        }
    }
}
