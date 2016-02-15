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
    public class ViewsSetupController : Controller
    {
        //
        // GET: /ViewsSetup/
        DBViewSetup _objDBViewSetup = new DBViewSetup();
        public ActionResult Index()
        {
            return View();
        }
        //Create View Tab
        public ActionResult BindDropDownbase(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objDBViewSetup.BindDropDownBase(CBP);
                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
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
        public ActionResult BindDropDownLoad(CommanFieldPara _CBP)
        {
            try
            {
                DataSet ds = _objDBViewSetup.BindDropDownFormLoad(_CBP);
                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = items;
                return Json(new { GTCorporate = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult InsertData(ViewSetup _ViewSetup)
        {
            try
            {
                DataSet ds = _objDBViewSetup.insertdata(_ViewSetup);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.srno = ds.Tables[0].Rows[0]["Srno"];
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                }
                return Json(new { srno = ViewBag.srno, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult BindGridView(Gridformsetup GP)
        {
            try
            {
                DataSet ds = _objDBViewSetup.BindGrid(GP);
                List<GridViewsetup> items = new List<GridViewsetup>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new GridViewsetup
                        {
                            RowNumber = dr["RowNumber"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            Screen = dr["Screen"].ToString(),
                            Module = dr["Module"].ToString(),
                            FormName = dr["FormCode"].ToString(),
                            Tab = dr["TabCode"].ToString(),
                            View = dr["ViewName"].ToString(),
                            srno = dr["Srno"].ToString(),
                        });
                    }
                }
                var result = items;
                var rJson = Json(result, JsonRequestBehavior.AllowGet);
                rJson.MaxJsonLength = int.MaxValue;
                return rJson;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult Edit_Data(Edit_AdminMaster EA)
        {
            try
            {
                DataSet ds = _objDBViewSetup.Edit_data(EA);
                List<ViewSetup> frmset = new List<ViewSetup>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        frmset.Add(new ViewSetup
                        {
                            srno = dr["SrNo"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            Module = dr["Module"].ToString(),
                            Screen = dr["Screen"].ToString(),
                            FormCode = dr["FormCode"].ToString(),
                            TabCode = dr["TabCode"].ToString(),
                            ViewName = dr["ViewName"].ToString(),
                            RecordCountQuery = dr["RecordCountQuery"].ToString(),
                            ColumnQuery = dr["ColumnQuery"].ToString(),
                            WhereQuery = dr["WhereQuery"].ToString(),
                            GroupQuery = dr["GroupQuery"].ToString(),
                            IsMasterView = dr["IsMasterView"].ToString(),
                            MasterTable = dr["MasterTable"].ToString(),

                        });
                    }
                }
                var result = frmset;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
