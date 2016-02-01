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
                            RowNumber = @dr["RowNumber"].ToString(),
                            Corporate = @dr["CorporateName"].ToString(),
                            FeatureGroup = @dr["FeatureGroup"].ToString(),
                            Module = @dr["Module"].ToString(),
                            FormName = @dr["FormName"].ToString(),
                            srno = @dr["Srno"].ToString(),
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
        #endregion


        

        //public ActionResult BindDropDown(Formlode FL)
        //{
        //    try
        //    {
        //        DataSet ds = _objfs.BindDropDown(FL);

        //        List<CommanDropdown> items = new List<CommanDropdown>();
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }
        //        var result = items;
        //        return Json(result, JsonRequestBehavior.AllowGet);
        //        //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

        //        //return result;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }


        //}

        //public ActionResult BindDropDownfeature(Baseformsetup BS)
        //{
        //    try
        //    {
        //        DataSet ds = _objfs.BindDropDown1(BS);

        //        List<CommanDropdown> items = new List<CommanDropdown>();
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }
        //        var result = items;
        //        return Json(result, JsonRequestBehavior.AllowGet);
        //        //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

        //        //return result;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }


        //}

        //public ActionResult BindDropDown_Formtab(Formlode Ft)
        //{
        //    try
        //    {
        //        DataSet ds = _objfs.BindDropDown(Ft);

        //        List<CommanDropdown> items = new List<CommanDropdown>();
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }
        //        var result = items;
        //        return Json(result, JsonRequestBehavior.AllowGet);
        //        //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

        //        //return result;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }


        //}

        //public ActionResult BindDropDown1_Formtab(Baseformsetup BtS)
        //{
        //    try
        //    {
        //        DataSet ds = _objfs.BindDropDown_Formtab(BtS);

        //        List<CommanDropdown> items = new List<CommanDropdown>();
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }
        //        var result = items;
        //        return Json(result, JsonRequestBehavior.AllowGet);
        //        //return Json(items.ToArray(), JsonRequestBehavior.AllowGet);

        //        //return result;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }


        //}






    }
}
