using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GreenTravel.Models;
using GreenTravel.App_DbService;
using Newtonsoft.Json;
using System.Data;
using GreenTravel.Models.Comman;
namespace GreenTravel.Controllers
{
    public class FormSetupController : Controller
    {
        DBFormsetup _objfs = new DBFormsetup();
        //
        // GET: /FormSetup/

        public ActionResult Index()
        {
            if (Session["CreatedBy"] == null)
            {
                return RedirectToAction("index", "Home");
            }
            return View();
        }
        #region Tab FromSetup
        public ActionResult InsertData(Formsetup FS)
        {
            try
            {
                DataSet ds = _objfs.insertdata(FS);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.srno = ds.Tables[0].Rows[0]["Srno"];
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                    if (ds.Tables[0].Rows[0]["Help"].ToString() == "Save" || ds.Tables[0].Rows[0]["Help"].ToString() == "Update")
                    { ViewBag.Event = "success"; }
                    else if (ds.Tables[0].Rows[0]["Help"].ToString() == "Duplicate")
                    { ViewBag.Event = "error"; }
                }
                return Json(new { srno = ViewBag.srno, Event = ViewBag.Event, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
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
                DataSet ds = _objfs.BindGrid(GP);
                List<GridFormparamater> items = new List<GridFormparamater>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new GridFormparamater
                        {
                            RowNumber = dr["RowNumber"].ToString(),
                            Corporate = dr["CorporateName"].ToString(),
                            FeatureGroup = dr["FeatureName"].ToString(),
                            Module = dr["ModuleName"].ToString(),
                            FormName = dr["FormName"].ToString(),
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
                DataSet ds = _objfs.Edit_data(EA);
                List<Formsetup> frmset = new List<Formsetup>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        frmset.Add(new Formsetup
                        {
                            SrNo = dr["SrNo"].ToString(),
                            FormName = dr["FormName"].ToString(),
                            FormPrefixCode = dr["FormPrefixCode"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            //Module = dr["Module"].ToString(),
                            Screen = dr["Screen"].ToString(),
                            //FeatureGroup = dr["FeatureGroup"].ToString(),
                            Header = dr["Header"].ToString(),
                            SubHeader = dr["SubHeader"].ToString(),

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
        #endregion

        #region  Tab2 FromTab
        public ActionResult BindDropDown(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _objfs.BindDropDown(CFP);
                List<CommanDropdown> items = new List<CommanDropdown>();
                List<CommanDropdown> Forms = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Corporate = items;
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Forms.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Form = Forms;
                return Json(new { GTCorporate = Corporate, GTFrom = Form }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult InsertData_Formtab(FormTab FT)
        {
            try
            {
                DataSet ds = _objfs.insertdata_Formtab(FT);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Tabsrno = ds.Tables[0].Rows[0]["Srno"];
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                    if (ds.Tables[0].Rows[0]["Help"].ToString() == "Save" || ds.Tables[0].Rows[0]["Help"].ToString() == "Update")
                    { ViewBag.Event = "success"; }
                    else if (ds.Tables[0].Rows[0]["Help"].ToString() == "Duplicate")
                    { ViewBag.Event = "error"; }
                }
                return Json(new { Tab_srno = ViewBag.Tabsrno, Event = ViewBag.Event, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }

        }

        public ActionResult Edit_FormTab(Edit_AdminMaster EA)
        {
            try
            {
                DataSet ds = _objfs.Edit_FormTab(EA);
                List<FormTab> frmTab = new List<FormTab>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        frmTab.Add(new FormTab
                        {
                            SrNo = @dr["SrNo"].ToString(),
                            FormCode = @dr["FormCode"].ToString(),
                            TabNumber = @dr["TabNumber"].ToString(),
                            Corporate = @dr["Corporate"].ToString(),
                            TabHeader = @dr["TabHeader"].ToString(),
                            TabClass = @dr["TabClass"].ToString(),
                            TooltipHelpText = @dr["TooltipHelpText"].ToString(),
                            MasterTable = @dr["MasterTable"].ToString(),
                            MasterTablePrefix = @dr["MasterTablePrefix"].ToString(),
                            TrxTable1 = @dr["TrxTable1"].ToString(),
                            TrxTable2 = @dr["TrxTable2"].ToString(),
                            TrxTable3 = @dr["TrxTable3"].ToString(),
                            TrxTable4 = @dr["TrxTable4"].ToString(),
                            TrxTable5 = @dr["TrxTable5"].ToString(),
                            TrxTable6 = @dr["TrxTable6"].ToString(),
                            TrxTable7 = @dr["TrxTable7"].ToString(),
                            TrxTable8 = @dr["TrxTable8"].ToString(),
                            TrxTable9 = @dr["TrxTable9"].ToString(),
                            TrxTable10 = @dr["TrxTable10"].ToString()
                        });
                    }
                }
                var result = frmTab;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        #region  Tab 3 Section and  button
        public ActionResult InsertData_StandardButton(StandardButton SB)
        {
            try
            {
                DataSet ds = _objfs.insertdata_Standardbutton(SB);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                }
                return Json(new { success = true, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult BindGridViewFormsetup(GridFormTab GP)
        {
            try
            {
                DataSet ds = _objfs.BindGridFormTab(GP);
                List<GridFormTabparamater> items = new List<GridFormTabparamater>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new GridFormTabparamater
                        {
                            RowNumber = @dr["RowNumber"].ToString(),
                            FormCode = @dr["FormCode"].ToString(),
                            TabSrNo = @dr["Srno"].ToString(),
                            Formname = @dr["FormName"].ToString(),
                            TabHeader = @dr["TabHeader"].ToString(),
                            TabClass = @dr["TabClass"].ToString(),
                            SummeryLabel = @dr["SummeryLabel"].ToString(),
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

        public ActionResult Edit_Data_icon(Edit_AdminMaster EA)
        {
            try
            {
                DataSet ds = _objfs.Edit_data(EA);
                List<StandardButton> frmStandardbtn = new List<StandardButton>();
                List<Custom_Master> CustomMaster = new List<Custom_Master>();
                List<Utility> _Utility = new List<Utility>();
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.Standardbtn = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.Standardbtn.Rows)
                    {
                        frmStandardbtn.Add(new StandardButton
                        {
                            SaveName = @dr["SaveName"].ToString(),
                            SaveClass = @dr["SaveClass"].ToString(),
                            SaveVisibility = @dr["SaveVisibility"].ToString(),
                            SaveNotification = @dr["SaveNotification"].ToString(),
                            SaveTask = @dr["SaveTask"].ToString(),
                            UpdateName = @dr["UpdateName"].ToString(),
                            UpdateClass = @dr["UpdateClass"].ToString(),
                            UpdateVisibility = @dr["UpdateVisibility"].ToString(),
                            UpdateNotification = @dr["UpdateNotification"].ToString(),
                            UpdateTask = @dr["UpdateTask"].ToString(),
                            DeleteName = @dr["DeleteName"].ToString(),
                            DeleteClass = @dr["DeleteClass"].ToString(),
                            DeleteVisibility = @dr["DeleteVisibility"].ToString(),
                            DeleteNotification = @dr["DeleteNotification"].ToString(),
                            DeleteTask = @dr["DeleteTask"].ToString(),
                            ClearName = @dr["ClearName"].ToString(),
                            ClearClass = @dr["ClearClass"].ToString(),
                            ClearVisibility = @dr["ClearVisibility"].ToString(),
                            ClearNotification = @dr["ClearNotification"].ToString(),
                            ClearTask = @dr["ClearTask"].ToString(),
                            FormQuitName = @dr["FormQuitName"].ToString(),
                            FormQuitClass = @dr["FormQuitClass"].ToString(),
                            FormQuitVisibility = @dr["FormQuitVisibility"].ToString(),
                            FormQuitNotification = @dr["FormQuitNotification"].ToString(),
                            FormQuitTask = @dr["FormQuitTask"].ToString(),

                        });
                    }
                }
                var FrmStandardbtn = frmStandardbtn;


                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.Section = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.Section.Rows)
                    {
                        CustomMaster.Add(new Custom_Master
                        {
                            srno = dr["Srno"].ToString(),
                            CustomName = dr["CustomName"].ToString(),
                            CustomClass = dr["CustomClass"].ToString(),
                            CustomVisibility = dr["CustomVisibility"].ToString(),
                            CustomNotification = dr["CustomNotification"].ToString(),
                            CustomTask = dr["CustomTask"].ToString(),
                            Rownumber = dr["RowNumber"].ToString(),
                        });
                    }
                }
                var CustomMas = CustomMaster;

                if (ds.Tables[3].Rows.Count > 0)
                {
                    ViewBag.Utility = ds.Tables[3];
                    foreach (System.Data.DataRow dr in ViewBag.Utility.Rows)
                    {
                        _Utility.Add(new Utility
                        {
                            srno = dr["Srno"].ToString(),
                            Utilities = dr["Utilities"].ToString(),
                            Rownumber = dr["RowNumber"].ToString(),
                        });
                    }
                }
                var CustUtility = _Utility;

                return Json(new { AFrmStandardbtn = FrmStandardbtn, ACustomMaster = CustomMas, AUtility = CustUtility }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ActionResult Edit_Data_Section(Edit_AdminMaster EA)
        {
            try
            {
                DataSet ds = _objfs.Edit_data(EA);
                List<Section_Master> Section_Master = new List<Section_Master>();
                if (ds.Tables[4].Rows.Count > 0)
                {
                    ViewBag.Section = ds.Tables[4];
                    foreach (System.Data.DataRow dr in ViewBag.Section.Rows)
                    {
                        Section_Master.Add(new Section_Master
                        {
                            srno = @dr["Srno"].ToString(),
                            SectionName = @dr["SectionName"].ToString(),
                            rownumber = @dr["RowNumber"].ToString(),
                        });
                    }
                }
                var SectionMaster = Section_Master;

                return Json(new { ASectionMaster = SectionMaster }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult InsertData_SectionMaster(Section_Master SM)
        {
            try
            {
                DataSet ds = _objfs.insertdata_SectionMaster(SM);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                }
                return Json(new { success = true, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult InsertData_CustomMaster(Custom_Master Custm)
        {
            try
            {
                DataSet ds = _objfs.insertdata_CustomMaster(Custm);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                }
                return Json(new { success = true, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult InsertData_Utility(Utility _Utility)
        {
            try
            {
                DataSet ds = _objfs.insertdata_Utility(_Utility);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                }
                return Json(new { success = true, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult Base_Form_Custom_Button(CommanFieldConditionalPara _CFCP)
        {
            try
            {
                DataSet ds = _objfs.BaseFormCustomButton(_CFCP);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                }
                return Json(new { success = true, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult Base_Form_Section_Master(CommanFieldConditionalPara _CFCP)
        {
            try
            {
                DataSet ds = _objfs.BaseFormSectionMaster(_CFCP);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                }
                return Json(new { success = true, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult Base_Form_Tab_Master(CommanFieldConditionalPara _CFCP)
        {
            try
            {
                DataSet ds = _objfs.BaseFormTabMaster(_CFCP);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.ComapanyName = "1";
                }
                else
                {
                    ViewBag.ComapanyName = "0";
                }
                var result = ViewBag.ComapanyName;
                return Json(new { Duplicate = result }, JsonRequestBehavior.AllowGet);
                //if (ds.Tables[0].Rows.Count > 0)
                //{
                //    ViewBag.Message = ds.Tables[0].Rows[0]["msg"];
                //}
                //return Json(new { success = true, responseText = ViewBag.Message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
       
        #endregion

        public ActionResult BindDropDownbase(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objfs.BindDropDown(CBP);
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

        public ActionResult BindUtility(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _objfs.BindUtility(CFP);
                List<CommanDropdown> Utility = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Utility = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.Utility.Rows)
                    {
                        Utility.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                return Json(new { GTUtility = Utility }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
