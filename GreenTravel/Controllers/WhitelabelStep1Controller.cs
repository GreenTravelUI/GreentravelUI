using GreenTravel.App_DbService;
using GreenTravel.Models;
using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Data;
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
                DataSet ds = _objwl.insert_data(WR);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.srno = ds.Tables[0].Rows[0]["Srno"];
                }
                return Json(new { success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public ActionResult BindDropDown(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _objwl.BindDropDown(CFP);
                List<CommanDropdown> items = new List<CommanDropdown>();
                List<CommanDropdown> itemservice = new List<CommanDropdown>();
                List<CommanDropdown> BMode = new List<CommanDropdown>();
                List<CommanDropdown> CURRENCY = new List<CommanDropdown>();
                List<CommanDropdown> Language = new List<CommanDropdown>();
                List<CommanDropdown> Corporate = new List<CommanDropdown>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var result = items;
                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemservice.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var service = itemservice;

                if (ds.Tables[3].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[3];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        BMode.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var BussineMode = BMode;

                if (ds.Tables[4].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[4];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        CURRENCY.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var currency = CURRENCY;

                if (ds.Tables[5].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[5];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Language.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var language = Language;

                if (ds.Tables[6].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[6];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Corporate.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var corporate = Corporate;


                return Json(new { GTIndutry = result, GTservice = service, GTBmode = BussineMode, GTcurrency = currency, GTlanguage = language, GTCorporate = corporate }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult BindGridView(GridParamater GP)
        {
            try
            {
                DataSet ds = _objwl.BindGrid(GP);
                List<GridFrmControlDisplay> items = new List<GridFrmControlDisplay>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new GridFrmControlDisplay
                        {
                            RowNumber = @dr["RowNumber"].ToString(),
                            CompanyName = @dr["CompanyName"].ToString(),
                            CompanyIndustry = @dr["CompanyIndustry"].ToString(),
                            ApplicationURL = @dr["ApplicationURL"].ToString(),
                            RefferenceCompany = @dr["ReferenceCompany"].ToString(),
                            Srno = @dr["Srno"].ToString(),

                        });
                    }
                }
                var result = items;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
