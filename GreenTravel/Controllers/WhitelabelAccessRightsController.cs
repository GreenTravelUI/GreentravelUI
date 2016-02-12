using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GreenTravel.Models;
using GreenTravel.App_DbService;
using PetaPoco;
using Newtonsoft.Json;
using System.Data;
using GreenTravel.Models.Comman;

namespace GreenTravel.Controllers
{
    public class WhitelabelAccessRightsController : Controller
    {
        GreenTravel.App_DbService.WhitelabelAccessRights _objWhitelabelAccessRights = new GreenTravel.App_DbService.WhitelabelAccessRights();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult BindDropdown_Base(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.BindDropdown_Base(CFP);
                List<CommanDropdown> Corporate = new List<CommanDropdown>();
                //List<CommanDropdown> Item = new List<CommanDropdown>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Corporate.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Corporatedrp = Corporate;
                return Json(new { Corp = Corporatedrp }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult BindDropdown_FormLoad(CommanFieldConditionalPara CFP)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.BindDropdown_FormLoad(CFP);
                List<CommanDropdown> List = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        List.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var data = List;
                return Json(new { data = List }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
