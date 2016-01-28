using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GreenTravel.Models;
using GreenTravel.App_DbService;
using Newtonsoft.Json;
using System.Data;
namespace GreenTravel.Controllers
{
    public class FormSetupController : Controller
    {
        DBFormsetup _objfs = new DBFormsetup();
        //
        // GET: /FormSetup/

        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult InsertData(Formsetup CM)
        {
            try
            {
                int result = _objfs.insertdata(CM);
                if (result == 1)
                {
                    ViewBag.Message = "Record Save Sucessfully !";
                }
                return Json(new { success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception)
            {

                throw;
            }
          
        }


        public ActionResult BindDropDown(Formlode FL)
        {
            try
            {
                DataSet ds = _objfs.BindDropDown(FL);

                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var result = items;
                return Json(result, JsonRequestBehavior.AllowGet);
                //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

                //return result;
            }
            catch (Exception)
            {

                throw;
            }


        }



        public ActionResult BindDropDownfeature(Baseformsetup BS)
        {
            try
            {
                DataSet ds = _objfs.BindDropDown1(BS);

                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var result = items;
                return Json(result, JsonRequestBehavior.AllowGet);
                //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

                //return result;
            }
            catch (Exception)
            {

                throw;
            }


        }


        [HttpPost]
        public ActionResult InsertData_Formtab(FormTab FT)
        {
            try
            {
                int result = _objfs.insertdata_Formtab(FT);
                if (result == 1)
                {
                    ViewBag.Message = "Record Save Sucessfully !";
                }
                return Json(new { success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception)
            {

                throw;
            }

        }

        public ActionResult BindDropDown_Formtab(Formlode Ft)
        {
            try
            {
                DataSet ds = _objfs.BindDropDown(Ft);

                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var result = items;
                return Json(result, JsonRequestBehavior.AllowGet);
                //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

                //return result;
            }
            catch (Exception)
            {

                throw;
            }


        }


        public ActionResult BindDropDown1_Formtab(Baseformsetup BtS)
        {
            try
            {
                DataSet ds = _objfs.BindDropDown_Formtab(BtS);

                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var result = items;
                return Json(result, JsonRequestBehavior.AllowGet);
                //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

                //return result;
            }
            catch (Exception)
            {

                throw;
            }


        }

    }
}
