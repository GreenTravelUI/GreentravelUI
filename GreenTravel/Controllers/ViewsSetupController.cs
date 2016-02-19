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
                List<CommanDropdown> Master = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = items;

                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Master.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result1 = Master;
                return Json(new { GTCorporate = result, GTMaster = result1 }, JsonRequestBehavior.AllowGet);
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

        //Crate Column  Tab
        public ActionResult BindDropDownLoadColumn(CommanFieldPara _CBP)
        {
            try
            {
                DataSet ds = _objDBViewSetup.BindDropDownFormLoadColumn(_CBP);
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
        public ActionResult InsertDataColumn(ColumnView _ColumnView)
        {
            try
            {
                DataSet ds = _objDBViewSetup.insertdataColumn(_ColumnView);
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
        public ActionResult BindGridViewColumn(Gridformsetup GP)
        {
            try
            {
                DataSet ds = _objDBViewSetup.BindGridColumn(GP);
                List<ColumnGridDisplay> items = new List<ColumnGridDisplay>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new ColumnGridDisplay
                        {
                            RowNumber = dr["RowNumber"].ToString(),
                            ColumnCaption = dr["ColumnCaption"].ToString(),
                            ColumnName = dr["ColumnName"].ToString(),
                            UpdateControl = dr["UpdateControl"].ToString(),
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
        public ActionResult Edit_DataColumn(Edit_AdminMaster EA)
        {
            try
            {
                DataSet ds = _objDBViewSetup.Edit_dataColumn(EA);
                List<ColumnView> frmColumnView = new List<ColumnView>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        frmColumnView.Add(new ColumnView
                        {
                            srno = dr["SrNo"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            ColumnCaption = dr["ColumnCaption"].ToString(),
                            ColumnName = dr["ColumnName"].ToString(),
                            FixedOrder = dr["FixedOrder"].ToString(),
                            Visibility = dr["Visibility"].ToString(),
                            ColumnUpdate = dr["ColumnUpdate"].ToString(),
                            UpdateControl = dr["UpdateControl"].ToString(),
                            UpdateQuery1 = dr["UpdateQuery1"].ToString(),
                            UpdateQuery2 = dr["UpdateQuery2"].ToString(),
                            UpdateQuery3 = dr["UpdateQuery3"].ToString(),
                            UpdateQuery4 = dr["UpdateQuery4"].ToString(),
                            UpdateQuery5 = dr["UpdateQuery5"].ToString(),
                            Attribute1 = dr["Attribute1"].ToString()
                        });
                    }
                }
                var result = frmColumnView;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
