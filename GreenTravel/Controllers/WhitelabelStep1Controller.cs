using GreenTravel.App_DbService;
using GreenTravel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenTravel.Controllers
{
    public class WhitelabelStep1Controller : Controller
    {
        DBWhitelabelReg _objwl = new DBWhitelabelReg();
        //
        // GET: /WhitelabelStep1/

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult insert_Data(WhitelabelReg WR)
        {
            try
            {
                int result = _objwl.insert_data(WR);
                if (result == 1)
                {
                }
                return Json(new { success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception)
            {
                
                throw;
            }
            return View(); 
        }
       
    }
}
