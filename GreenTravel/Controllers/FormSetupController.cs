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
                }
                return Json(new { srno = ViewBag.srno, success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);
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
                DataSet ds = _objfs.Edit_data(EA);
                List<Formsetup> frmset = new List<Formsetup>();
                List<StandardButton> frmStandardbtn = new List<StandardButton>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        frmset.Add(new Formsetup
                        {
                            SrNo = @dr["SrNo"].ToString(),
                            FormName = @dr["FormName"].ToString(),
                            FormPrefixCode = @dr["FormPrefixCode"].ToString(),
                            Corporate = @dr["Corporate"].ToString(),
                            Module = @dr["Module"].ToString(),
                            Screen = @dr["Screen"].ToString(),
                            FeatureGroup = @dr["FeatureGroup"].ToString(),
                            Header = @dr["Header"].ToString(),
                            SubHeader = @dr["SubHeader"].ToString(),

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
                //, GTservice = service, GTBmode = BussineMode, GTcurrency = currency, GTlanguage = language, GTCorporate = corporate

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
                }
                return Json(new { Tab_srno = ViewBag.Tabsrno, success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);
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
                int result = _objfs.insertdata_Standardbutton(SB);
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

                return Json(new { AFrmStandardbtn = FrmStandardbtn, ACustomMaster = CustomMas }, JsonRequestBehavior.AllowGet);
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
                int result = _objfs.insertdata_SectionMaster(SM);
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


        public ActionResult InsertData_CustomMaster(Custom_Master Custm)
        {
            try
            {
                int result = _objfs.insertdata_CustomMaster(Custm);
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
                return Json(new { GTUtility = Utility}, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
