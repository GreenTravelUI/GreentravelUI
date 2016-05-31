using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenTravel.Controllers
{
    public class TransportationController : Controller
    {
        //
        // GET: /Transportation/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FITTransferPVT()
        {
            return View();
        }

        public ActionResult GITTransfer()
        {
            return View();
        }
        
        public ActionResult TransferComponent()
        {
            return View();
        }

        public ActionResult TransferVehicle()
        {
            return View();
        }
    }
}
