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
    public class FormControlSetupController : Controller
    {
        DataSet ds = new DataSet();
        DBFromControlSetup _objDCFS = new DBFromControlSetup();

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Insert_Data(FrmControlSetup FCS)
        {
            try
            {
                ds = _objDCFS.insert_data(FCS);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                    if (ds.Tables[0].Rows[0]["Help"].ToString() == "Save" || ds.Tables[0].Rows[0]["Help"].ToString() == "Update")
                    { ViewBag.Event = "success"; }
                    else if (ds.Tables[0].Rows[0]["Help"].ToString() == "Duplicate")
                    { ViewBag.Event = "error"; }
                }
                return Json(new { Event = ViewBag.Event, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult BindDropDown(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objDCFS.BindDropDown(CBP);
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
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult BindDropDownLoadColumn(CommanFieldPara _CBP)
        {
            try
            {
                DataSet ds = _objDCFS.BindDropDownLoad(_CBP);
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
        public ActionResult BindGridView(GridParamater GP)
        {
            try
            {
                DataSet ds = _objDCFS.BindGrid(GP);
                List<GridFromControlDisplay> items = new List<GridFromControlDisplay>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new GridFromControlDisplay
                        {
                            RowNumber = @dr["RowNumber"].ToString(),
                            corporate = @dr["corporate"].ToString(),
                            Features = @dr["Features"].ToString(),
                            Module = @dr["Module"].ToString(),
                            Form = @dr["Form"].ToString(),
                            Tab = @dr["Tab"].ToString(),
                            Section = @dr["Section"].ToString(),
                            Controls = @dr["Control"].ToString(),
                            Srno = @dr["Srno"].ToString()
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
        public ActionResult Edit_Data(Edit_AdminMaster EA)
        {
            try
            {
                DataSet ds = _objDCFS.Edit_data(EA);
                List<FrmControlSetup> frmsetup = new List<FrmControlSetup>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        frmsetup.Add(new FrmControlSetup
                        {
                            TabCode = @dr["TabCode"].ToString(),
                            SectionCode = @dr["SectionCode"].ToString(),
                            Corporate = @dr["Corporate"].ToString(),
                            FieldControlLabel = @dr["FieldControlLabel"].ToString(),
                            ControlId = @dr["ControlId"].ToString(),
                            FieldControlType = @dr["FieldControlType"].ToString(),
                            ValidationCode = @dr["ValidationCode"].ToString(),
                            PlaceholderText = @dr["PlaceholderText"].ToString(),
                            TooltipHelpText = @dr["TooltipHelpText"].ToString(),
                            RequiredField = @dr["RequiredField"].ToString(),
                            ReqValidationMsg = @dr["ReqValidationMsg"].ToString(),
                            ReglarExField = @dr["ReglarExField"].ToString(),
                            RegexValidationMsg = @dr["RegexValidationMsg"].ToString(),
                            GuidedTourText = @dr["GuidedTourText"].ToString(),
                            GuidedTourStepNo = @dr["GuidedTourStepNo"].ToString(),
                            FieldOrderNumber = @dr["FieldOrderNumber"].ToString(),
                            FieldCaptionName = @dr["FieldCaptionName"].ToString(),
                            Srno = @dr["Srno"].ToString()
                        });
                    }
                }
                var result = frmsetup;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult DeleteData(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objDCFS.BindDropDown(CBP);
                List<MessagePara> items = new List<MessagePara>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new MessagePara { SrNo = dr["SrNo"].ToString(), msg = dr["msg"].ToString(), help = dr["help"].ToString() });
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
