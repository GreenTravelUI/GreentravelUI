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
    public class AllMasterController : Controller
    {
        DBCommanMaster _objCM = new DBCommanMaster();

        public ActionResult Index()
        {
            if (Session["CreatedBy"] == null)
            {
                return RedirectToAction("Index", "Home", new { url = Request.Url.AbsolutePath.ToString() });
            }
            return View();
        }

        public ActionResult BindDropDown(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.BindDropDownBase_Tab2(CBP);
                List<CommanDropdown> Segment = new List<CommanDropdown>();
                List<CommanDropdown> Corporate = new List<CommanDropdown>();
                List<CommanDropdown> RATING = new List<CommanDropdown>();
                List<CommanDropdown> Master = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Segment.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.Corporate = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.Corporate.Rows)
                    {
                        Corporate.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.RATING = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.RATING.Rows)
                    {
                        RATING.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                if (ds.Tables[3].Rows.Count > 0)
                {
                    ViewBag.Master = ds.Tables[3];
                    foreach (System.Data.DataRow dr in ViewBag.Master.Rows)
                    {
                        Master.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }


                var result = Segment;
                // return Json(result, JsonRequestBehavior.AllowGet);
                return Json(new { Segment = Segment, Corporate = Corporate, RATING = RATING, Master = Master }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }


        }

        public ActionResult BindDropDown_Multiselect(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.BindDropDownTab2(CBP);
                List<CommanDropdown> Mul = new List<CommanDropdown>();
                if (ds != null)
                {
                    if (ds.Tables.Count > 0)
                    {
                        // Mul = null;
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            Mul.Clear();
                            ViewBag.fname = "";
                            ViewBag.fname = ds.Tables[0];
                            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                            {
                                Mul.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                            }

                        }
                    }
                }

                var result = Mul;
                return Json(new { AMul = result }, JsonRequestBehavior.AllowGet); ;
            }
            catch (Exception)
            {

                throw;
            }


        }

        public ActionResult BindDropDownTab(commanbaseParamater CBP)
        {
            try
            {
                DataSet dstable = _objCM.BindDropDownTab2(CBP);
                List<CommanDropdown> items = new List<CommanDropdown>();
                if (dstable.Tables[0] != null)
                {
                    if (dstable.Tables[0].Rows.Count > 0)
                    {
                        ViewBag.fname = dstable.Tables[0];
                        foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                        {
                            items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                        }
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

        public ActionResult FormLoad(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.FormLoad(CBP);

                List<CommanMasterCaption> itemsFormLoad = new List<CommanMasterCaption>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemsFormLoad.Add(new CommanMasterCaption
                        {
                            Field1caption = @dr["Field1"].ToString(),
                            Field2caption = @dr["Field2"].ToString(),
                            Field3caption = @dr["Field3"].ToString(),
                            Field4caption = @dr["Field4"].ToString(),
                            Field5caption = @dr["Field5"].ToString(),
                            Field6caption = @dr["Field6"].ToString(),
                            Field7caption = @dr["Field7"].ToString(),
                            Field8caption = @dr["Field8"].ToString(),
                            Field9caption = @dr["Field9"].ToString(),
                            Field10caption = @dr["Field10"].ToString(),
                            Field11caption = @dr["Field11"].ToString(),
                            Field12caption = @dr["Field12"].ToString(),
                            Field13caption = @dr["Field13"].ToString(),
                            Field14caption = @dr["Field14"].ToString(),
                            Field15caption = @dr["Field15"].ToString(),
                            Field16caption = @dr["Field16"].ToString(),
                            Field17caption = @dr["Field17"].ToString(),
                            Field18caption = @dr["Field18"].ToString(),
                            Field19caption = @dr["Field19"].ToString(),
                            Field20caption = @dr["Field20"].ToString(),
                            Rating1caption = @dr["Rating1"].ToString(),
                            Rating2caption = @dr["Rating2"].ToString(),
                            Rating3caption = @dr["Rating3"].ToString(),
                            Date1caption = @dr["Date1"].ToString(),
                            Date2caption = @dr["Date2"].ToString(),
                            Date3caption = @dr["Date3"].ToString(),
                            Email1caption = @dr["Email1"].ToString(),
                            Email2caption = @dr["Email2"].ToString(),
                            Email3caption = @dr["Email3"].ToString(),
                            Amountcaption = @dr["Amount"].ToString(),
                            Amount2caption = @dr["Amount2"].ToString(),
                            Amount3caption = @dr["Amount3"].ToString(),
                            Time1caption = @dr["Time1"].ToString(),
                            Time2caption = @dr["Time2"].ToString(),
                            Htmlcaption = @dr["Html"].ToString(),
                            Uploadcaption = @dr["Upload"].ToString(),
                            TextAreacaption = @dr["Textarea"].ToString(),
                            MultiSelect1caption = @dr["Multiselect1"].ToString(),
                            MultiSelect2caption = @dr["Multiselect2"].ToString(),
                            MultiSelect3caption = @dr["Multiselect3"].ToString(),
                            MultiSelect4caption = @dr["Multiselect4"].ToString(),
                            MultiSelect5caption = @dr["Multiselect5"].ToString()
                        });
                    }
                }


                var result = itemsFormLoad;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }


        }

        public ActionResult FormLoadPlaceholder(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.FormLoadPlaceholder(CBP);
                List<CommanMasterPlaceholder> itemsPlaceholder = new List<CommanMasterPlaceholder>();

                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.Placeholder = ds.Tables[1];

                    //   DataRow dr1 = ViewBag.fname.Rows;

                    foreach (System.Data.DataRow dr in ViewBag.Placeholder.Rows)
                    {
                        itemsPlaceholder.Add(new CommanMasterPlaceholder
                        {
                            Field1 = @dr["Field1"].ToString(),
                            Field2 = @dr["Field2"].ToString(),
                            Field3 = @dr["Field3"].ToString(),
                            Field4 = @dr["Field4"].ToString(),
                            Field5 = @dr["Field5"].ToString(),
                            Field6 = @dr["Field6"].ToString(),
                            Field7 = @dr["Field7"].ToString(),
                            Field8 = @dr["Field8"].ToString(),
                            Field9 = @dr["Field9"].ToString(),
                            Field10 = @dr["Field10"].ToString(),
                            Field11 = @dr["Field11"].ToString(),
                            Field12 = @dr["Field12"].ToString(),
                            Field13 = @dr["Field13"].ToString(),
                            Field14 = @dr["Field14"].ToString(),
                            Field15 = @dr["Field15"].ToString(),
                            Field16 = @dr["Field16"].ToString(),
                            Field17 = @dr["Field17"].ToString(),
                            Field18 = @dr["Field18"].ToString(),
                            Field19 = @dr["Field19"].ToString(),
                            Field20 = @dr["Field20"].ToString(),
                            Rating1 = @dr["Rating1"].ToString(),
                            Rating2 = @dr["Rating2"].ToString(),
                            Rating3 = @dr["Rating3"].ToString(),
                            Date1 = @dr["Date1"].ToString(),
                            Date2 = @dr["Date2"].ToString(),
                            Date3 = @dr["Date3"].ToString(),
                            Email1 = @dr["Email1"].ToString(),
                            Email2 = @dr["Email2"].ToString(),
                            Email3 = @dr["Email3"].ToString(),
                            Amount = @dr["Amount"].ToString(),
                            Amount2 = @dr["Amount2"].ToString(),
                            Amount3 = @dr["Amount3"].ToString(),
                            Time1 = @dr["Time1"].ToString(),
                            Time2 = @dr["Time2"].ToString(),
                            Html = @dr["Html"].ToString(),
                            Upload = @dr["Upload"].ToString(),
                            TextArea = @dr["Textarea"].ToString(),
                            MultiSelect1 = @dr["Multiselect1"].ToString(),
                            MultiSelect2 = @dr["Multiselect2"].ToString(),
                            MultiSelect3 = @dr["Multiselect3"].ToString(),
                            MultiSelect4 = @dr["Multiselect4"].ToString(),
                            MultiSelect5 = @dr["Multiselect5"].ToString()
                        });
                    }
                }

                var result = itemsPlaceholder;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }


        }

        public ActionResult FormLoadHelp(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.FormLoadHelp(CBP);

                List<CommanMasterPlaceholder> itemsHelp = new List<CommanMasterPlaceholder>();

                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.Placeholder = ds.Tables[2];

                    foreach (System.Data.DataRow dr in ViewBag.Placeholder.Rows)
                    {
                        itemsHelp.Add(new CommanMasterPlaceholder
                        {
                            Field1 = @dr["Field1"].ToString(),
                            Field2 = @dr["Field2"].ToString(),
                            Field3 = @dr["Field3"].ToString(),
                            Field4 = @dr["Field4"].ToString(),
                            Field5 = @dr["Field5"].ToString(),
                            Field6 = @dr["Field6"].ToString(),
                            Field7 = @dr["Field7"].ToString(),
                            Field8 = @dr["Field8"].ToString(),
                            Field9 = @dr["Field9"].ToString(),
                            Field10 = @dr["Field10"].ToString(),
                            Field11 = @dr["Field11"].ToString(),
                            Field12 = @dr["Field12"].ToString(),
                            Field13 = @dr["Field13"].ToString(),
                            Field14 = @dr["Field14"].ToString(),
                            Field15 = @dr["Field15"].ToString(),
                            Field16 = @dr["Field16"].ToString(),
                            Field17 = @dr["Field17"].ToString(),
                            Field18 = @dr["Field18"].ToString(),
                            Field19 = @dr["Field19"].ToString(),
                            Field20 = @dr["Field20"].ToString(),
                            Rating1 = @dr["Rating1"].ToString(),
                            Rating2 = @dr["Rating2"].ToString(),
                            Rating3 = @dr["Rating3"].ToString(),
                            Date1 = @dr["Date1"].ToString(),
                            Date2 = @dr["Date2"].ToString(),
                            Date3 = @dr["Date3"].ToString(),
                            Email1 = @dr["Email1"].ToString(),
                            Email2 = @dr["Email2"].ToString(),
                            Email3 = @dr["Email3"].ToString(),
                            Amount = @dr["Amount"].ToString(),
                            Amount2 = @dr["Amount2"].ToString(),
                            Amount3 = @dr["Amount3"].ToString(),
                            Time1 = @dr["Time1"].ToString(),
                            Time2 = @dr["Time2"].ToString(),
                            Html = @dr["Html"].ToString(),
                            Upload = @dr["Upload"].ToString(),
                            TextArea = @dr["Textarea"].ToString(),
                            MultiSelect1 = @dr["Multiselect1"].ToString(),
                            MultiSelect2 = @dr["Multiselect2"].ToString(),
                            MultiSelect3 = @dr["Multiselect3"].ToString(),
                            MultiSelect4 = @dr["Multiselect4"].ToString(),
                            MultiSelect5 = @dr["Multiselect5"].ToString()
                        });
                    }
                }

                var result = itemsHelp;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }


        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Insert_Data(CommanUserMaster CUH)
        {
            try
            {
                ViewBag.Message = "";
                ViewBag.Event = "";
                DataSet result = _objCM.insert_data_UserMaster(CUH);
                if (result != null)
                {
                    ViewBag.Message = result.Tables[0].Rows[0]["msg"].ToString();
                    if (result.Tables[0].Rows[0]["Help"].ToString() == "Save" || result.Tables[0].Rows[0]["Help"].ToString() == "Update")
                    { ViewBag.Event = "success"; }
                    else if (result.Tables[0].Rows[0]["Help"].ToString() == "Duplicate")
                    { ViewBag.Event = "error"; }

                }
                var result1 = ViewBag.Message;

                return Json(new { success = result1, Event = ViewBag.Event }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception)
            {

                throw;
            }


        }

        public ActionResult BindGridUser(GridParamater GP)
        {
            try
            {
                DataSet ds = _objCM.BindGridUser(GP);
                List<GridUserMasterparamater> items = new List<GridUserMasterparamater>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new GridUserMasterparamater
                        {
                            RowNumber = @dr["RowNumber"].ToString(),
                            xmaster = @dr["xmaster"].ToString(),
                            xname = @dr["xname"].ToString(),
                            SrNo = @dr["SrNo"].ToString(),
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

        public ActionResult Edit_DataUser(Edit_UserMaster EA)
        {
            try
            {
                DataSet ds = _objCM.Edit_DataUser(EA);
                List<CommanMaster> Master = new List<CommanMaster>();
                List<CommanUserMaster> Caption = new List<CommanUserMaster>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Master.Add(new CommanMaster
                        {
                            xmaster = @dr["xmaster"].ToString(),
                            xname = @dr["xname"].ToString(),
                            Corporate = @dr["Corporate"].ToString(),
                            drpCaption = @dr["drpCaption"].ToString(),
                            xlink = @dr["xlink"].ToString(),
                            xcross = @dr["xcross"].ToString(),
                            xcross1 = @dr["xcross1"].ToString(),
                            xcross2 = @dr["xcross2"].ToString(),
                            xcross3 = @dr["xcross3"].ToString(),
                            xcross4 = @dr["xcross4"].ToString(),
                            xreference1 = @dr["xreference1"].ToString(),
                            xreference2 = @dr["xreference2"].ToString(),
                            xreference3 = @dr["xreference3"].ToString(),
                            xreference4 = @dr["xreference4"].ToString(),
                            xreference5 = @dr["xreference5"].ToString(),
                            xreference6 = @dr["xreference6"].ToString(),
                            xdetail = @dr["xdetail"].ToString(),
                            ENTRYCONTROL = @dr["ENTRYCONTROL"].ToString(),
                            SEGMENT = @dr["SEGMENT"].ToString(),
                            MultiSelect1 = @dr["MultiSelect1"].ToString(),
                            MultiSelect2 = @dr["MultiSelect2"].ToString(),
                            MultiSelect3 = @dr["MultiSelect3"].ToString(),
                            MultiSelect4 = @dr["MultiSelect4"].ToString(),
                            MultiSelect5 = @dr["MultiSelect5"].ToString()
                        });
                    }
                }
                var result = Master;

                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.Caption = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.Caption.Rows)
                    {
                        Caption.Add(new CommanUserMaster
                        {
                            USrno = @dr["Srno"].ToString(),
                            Uxmaster = @dr["Xmaster"].ToString(),
                            Uxcode = @dr["Xcode"].ToString(),
                            Uxname = @dr["Xname"].ToString(),
                            UIsActive = @dr["Isactive"].ToString(),
                            URemark = @dr["Remark"].ToString(),
                            Uxlink = @dr["Xlink"].ToString(),
                            Uxcross = @dr["Xcross"].ToString(),
                            Uxcross1 = @dr["Xcross1"].ToString(),
                            Uxcross2 = @dr["Xcross2"].ToString(),
                            Uxcross3 = @dr["Xcross3"].ToString(),
                            Uxcross4 = @dr["Xcross4"].ToString(),
                            Uxreference1 = @dr["Xreference1"].ToString(),
                            Uxreference2 = @dr["Xreference2"].ToString(),
                            Uxreference3 = @dr["Xreference3"].ToString(),
                            Uxreference4 = @dr["Xreference4"].ToString(),
                            Uxreference5 = @dr["Xreference5"].ToString(),
                            Uxreference6 = @dr["Xreference6"].ToString(),

                            Uxdetail = @dr["Xdetail"].ToString(),
                            UAttribute1 = @dr["Attribute1"].ToString(),
                            UAttribute2 = @dr["Attribute2"].ToString(),
                            UAttribute3 = @dr["Attribute3"].ToString(),
                            UAttribute4 = @dr["Attribute4"].ToString(),
                            UAttribute5 = @dr["Attribute5"].ToString(),
                            UAttribute6 = @dr["Attribute6"].ToString(),
                            UAttribute7 = @dr["Attribute7"].ToString(),
                            UAttribute8 = @dr["Attribute8"].ToString(),
                            UAttribute9 = @dr["Attribute9"].ToString(),
                            UAttribute10 = @dr["Attribute10"].ToString(),

                            //UUserId = @dr["Userid"].ToString(),
                            //UCreatedBy = @dr["CreatedBy"].ToString(),
                            //UEntryDatetime = @dr["EntryDatetime"].ToString(),
                            //UEditedBy = @dr["EditedBy"].ToString(),
                            //UEditDatetime = @dr["EditDatetime"].ToString(),
                            //UCorpcentreBy = @dr["CorpcentreBy"].ToString(),
                            //// UUnitCorpBy = @dr["UnitCorpBy "].ToString(),
                            ////  UTerminalBy = @dr["TerminalBy"].ToString(),
                            //UBranchBy = @dr["BranchBy"].ToString(),

                            URating1 = @dr["Rating1"].ToString(),
                            URating2 = @dr["Rating2"].ToString(),
                            URating3 = @dr["Rating3"].ToString(),

                            UDate1 = @dr["Date1"].ToString(),
                            UDate2 = @dr["Date2"].ToString(),
                            UDate3 = @dr["Date3"].ToString(),

                            UEmail1 = @dr["Email1"].ToString(),
                            UEmail2 = @dr["Email2"].ToString(),
                            UEmail3 = @dr["Email3"].ToString(),

                            UAmount = @dr["Amount"].ToString(),
                            UAmount2 = @dr["Amount2"].ToString(),
                            UAmount3 = @dr["Amount3"].ToString(),

                            UTime1 = @dr["Time1"].ToString(),
                            UTime2 = @dr["Time2"].ToString(),

                            UHtml = @dr["Html"].ToString(),
                            UUpload = @dr["Upload"].ToString(),
                            UTextArea = @dr["Textarea"].ToString(),

                            UMultiSelect1 = @dr["Multiselect1"].ToString(),
                            UMultiSelect2 = @dr["Multiselect2"].ToString(),
                            UMultiSelect3 = @dr["Multiselect3"].ToString(),
                            UMultiSelect4 = @dr["Multiselect4"].ToString(),
                            UMultiSelect5 = @dr["Multiselect5"].ToString(),
                        });
                    }
                }

                var Data = Caption;

                return Json(new { AMaster = result, AUserMasterData = Data }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ActionResult ALL_Data_Field(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.FormLoadHelp(CBP);
                //DataSet ds = _objCM.Edit_data(EA);
                // DataSet ds = _objCM.FormLoadHelp(CUH);
                //List<CommanMaster> Master = new List<CommanMaster>();
                List<CommanMasterCaption> Caption = new List<CommanMasterCaption>();
                List<CommanMasterPlaceholder> Placeholder = new List<CommanMasterPlaceholder>();
                List<CommanMasterValidation> Validation = new List<CommanMasterValidation>();
                List<CommanMasterHelp> Tooltip = new List<CommanMasterHelp>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Caption = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.Caption.Rows)
                    {
                        Caption.Add(new CommanMasterCaption
                        {
                            xmastercaption = @dr["xmaster"].ToString(),
                            SEGMENTcaption = @dr["SEGMENT"].ToString(),
                            Field1caption = @dr["Field1"].ToString(),
                            Field2caption = @dr["Field2"].ToString(),
                            Field3caption = @dr["Field3"].ToString(),
                            Field4caption = @dr["Field4"].ToString(),
                            Field5caption = @dr["Field5"].ToString(),
                            Field6caption = @dr["Field6"].ToString(),
                            Field7caption = @dr["Field7"].ToString(),
                            Field8caption = @dr["Field8"].ToString(),
                            Field9caption = @dr["Field9"].ToString(),
                            Field10caption = @dr["Field10"].ToString(),
                            Field11caption = @dr["Field11"].ToString(),
                            Field12caption = @dr["Field12"].ToString(),
                            Field13caption = @dr["Field13"].ToString(),
                            Field14caption = @dr["Field14"].ToString(),
                            Field15caption = @dr["Field15"].ToString(),
                            Field16caption = @dr["Field16"].ToString(),
                            Field17caption = @dr["Field17"].ToString(),
                            Field18caption = @dr["Field18"].ToString(),
                            Field19caption = @dr["Field19"].ToString(),
                            Field20caption = @dr["Field20"].ToString(),
                            Rating1caption = @dr["Rating1"].ToString(),
                            Rating2caption = @dr["Rating2"].ToString(),
                            Rating3caption = @dr["Rating3"].ToString(),
                            Date1caption = @dr["Date1"].ToString(),
                            Date2caption = @dr["Date2"].ToString(),
                            Date3caption = @dr["Date3"].ToString(),
                            Email1caption = @dr["Email1"].ToString(),
                            Email2caption = @dr["Email2"].ToString(),
                            Email3caption = @dr["Email3"].ToString(),
                            Amountcaption = @dr["Amount"].ToString(),
                            Amount2caption = @dr["Amount2"].ToString(),
                            Amount3caption = @dr["Amount3"].ToString(),
                            Time1caption = @dr["Time1"].ToString(),
                            Time2caption = @dr["Time2"].ToString(),
                            Htmlcaption = @dr["Html"].ToString(),
                            Uploadcaption = @dr["Upload"].ToString(),
                            TextAreacaption = @dr["TextArea"].ToString(),
                            MultiSelect1caption = @dr["MultiSelect1"].ToString(),
                            MultiSelect2caption = @dr["MultiSelect2"].ToString(),
                            MultiSelect3caption = @dr["MultiSelect3"].ToString(),
                            MultiSelect4caption = @dr["MultiSelect4"].ToString(),
                            MultiSelect5caption = @dr["MultiSelect5"].ToString(),
                        });
                    }
                }
                var caption = Caption;

                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.Placeholder = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.Placeholder.Rows)
                    {
                        Placeholder.Add(new CommanMasterPlaceholder
                        {
                            xmaster = @dr["xmaster"].ToString(),
                            Field1 = @dr["Field1"].ToString(),
                            Field2 = @dr["Field2"].ToString(),
                            Field3 = @dr["Field3"].ToString(),
                            Field4 = @dr["Field4"].ToString(),
                            Field5 = @dr["Field5"].ToString(),
                            Field6 = @dr["Field6"].ToString(),
                            Field7 = @dr["Field7"].ToString(),
                            Field8 = @dr["Field8"].ToString(),
                            Field9 = @dr["Field9"].ToString(),
                            Field10 = @dr["Field10"].ToString(),
                            Field11 = @dr["Field11"].ToString(),
                            Field12 = @dr["Field12"].ToString(),
                            Field13 = @dr["Field13"].ToString(),
                            Field14 = @dr["Field14"].ToString(),
                            Field15 = @dr["Field15"].ToString(),
                            Field16 = @dr["Field16"].ToString(),
                            Field17 = @dr["Field17"].ToString(),
                            Field18 = @dr["Field18"].ToString(),
                            Field19 = @dr["Field19"].ToString(),
                            Field20 = @dr["Field20"].ToString(),
                            Rating1 = @dr["Rating1"].ToString(),
                            Rating2 = @dr["Rating2"].ToString(),
                            Rating3 = @dr["Rating3"].ToString(),
                            Date1 = @dr["Date1"].ToString(),
                            Date2 = @dr["Date2"].ToString(),
                            Date3 = @dr["Date3"].ToString(),
                            Email1 = @dr["Email1"].ToString(),
                            Email2 = @dr["Email2"].ToString(),
                            Email3 = @dr["Email3"].ToString(),
                            Amount = @dr["Amount"].ToString(),
                            Amount2 = @dr["Amount2"].ToString(),
                            Amount3 = @dr["Amount3"].ToString(),
                            Time1 = @dr["Time1"].ToString(),
                            Time2 = @dr["Time2"].ToString(),
                            Html = @dr["Html"].ToString(),
                            Upload = @dr["Upload"].ToString(),
                            TextArea = @dr["TextArea"].ToString(),
                            MultiSelect1 = @dr["MultiSelect1"].ToString(),
                            MultiSelect2 = @dr["MultiSelect2"].ToString(),
                            MultiSelect3 = @dr["MultiSelect3"].ToString(),
                            MultiSelect4 = @dr["MultiSelect4"].ToString(),
                            MultiSelect5 = @dr["MultiSelect5"].ToString(),
                        });
                    }
                }

                var placeholder = Placeholder;


                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.avalidation = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.avalidation.Rows)
                    {
                        Validation.Add(new CommanMasterValidation
                        {
                            xmaster = @dr["xmaster"].ToString(),
                            Field1 = @dr["Field1"].ToString(),
                            Field2 = @dr["Field2"].ToString(),
                            Field3 = @dr["Field3"].ToString(),
                            Field4 = @dr["Field4"].ToString(),
                            Field5 = @dr["Field5"].ToString(),
                            Field6 = @dr["Field6"].ToString(),
                            Field7 = @dr["Field7"].ToString(),
                            Field8 = @dr["Field8"].ToString(),
                            Field9 = @dr["Field9"].ToString(),
                            Field10 = @dr["Field10"].ToString(),
                            Field11 = @dr["Field11"].ToString(),
                            Field12 = @dr["Field12"].ToString(),
                            Field13 = @dr["Field13"].ToString(),
                            Field14 = @dr["Field14"].ToString(),
                            Field15 = @dr["Field15"].ToString(),
                            Field16 = @dr["Field16"].ToString(),
                            Field17 = @dr["Field17"].ToString(),
                            Field18 = @dr["Field18"].ToString(),
                            Field19 = @dr["Field19"].ToString(),
                            Field20 = @dr["Field20"].ToString(),
                            Rating1 = @dr["Rating1"].ToString(),
                            Rating2 = @dr["Rating2"].ToString(),
                            Rating3 = @dr["Rating3"].ToString(),
                            Date1 = @dr["Date1"].ToString(),
                            Date2 = @dr["Date2"].ToString(),
                            Date3 = @dr["Date3"].ToString(),
                            Email1 = @dr["Email1"].ToString(),
                            Email2 = @dr["Email2"].ToString(),
                            Email3 = @dr["Email3"].ToString(),
                            Amount = @dr["Amount"].ToString(),
                            Amount2 = @dr["Amount2"].ToString(),
                            Amount3 = @dr["Amount3"].ToString(),
                            Time1 = @dr["Time1"].ToString(),
                            Time2 = @dr["Time2"].ToString(),
                            Html = @dr["Html"].ToString(),
                            Upload = @dr["Upload"].ToString(),
                            TextArea = @dr["TextArea"].ToString(),
                            MultiSelect1 = @dr["MultiSelect1"].ToString(),
                            MultiSelect2 = @dr["MultiSelect2"].ToString(),
                            MultiSelect3 = @dr["MultiSelect3"].ToString(),
                            MultiSelect4 = @dr["MultiSelect4"].ToString(),
                            MultiSelect5 = @dr["MultiSelect5"].ToString(),
                        });
                    }
                }

                var validation = Validation;

                if (ds.Tables[3].Rows.Count > 0)
                {
                    ViewBag.Tooltip = ds.Tables[3];
                    foreach (System.Data.DataRow dr in ViewBag.Tooltip.Rows)
                    {
                        Tooltip.Add(new CommanMasterHelp
                        {
                            xmaster = @dr["xmaster"].ToString(),
                            Field1 = @dr["Field1"].ToString(),
                            Field2 = @dr["Field2"].ToString(),
                            Field3 = @dr["Field3"].ToString(),
                            Field4 = @dr["Field4"].ToString(),
                            Field5 = @dr["Field5"].ToString(),
                            Field6 = @dr["Field6"].ToString(),
                            Field7 = @dr["Field7"].ToString(),
                            Field8 = @dr["Field8"].ToString(),
                            Field9 = @dr["Field9"].ToString(),
                            Field10 = @dr["Field10"].ToString(),
                            Field11 = @dr["Field11"].ToString(),
                            Field12 = @dr["Field12"].ToString(),
                            Field13 = @dr["Field13"].ToString(),
                            Field14 = @dr["Field14"].ToString(),
                            Field15 = @dr["Field15"].ToString(),
                            Field16 = @dr["Field16"].ToString(),
                            Field17 = @dr["Field17"].ToString(),
                            Field18 = @dr["Field18"].ToString(),
                            Field19 = @dr["Field19"].ToString(),
                            Field20 = @dr["Field20"].ToString(),
                            Rating1 = @dr["Rating1"].ToString(),
                            Rating2 = @dr["Rating2"].ToString(),
                            Rating3 = @dr["Rating3"].ToString(),
                            Date1 = @dr["Date1"].ToString(),
                            Date2 = @dr["Date2"].ToString(),
                            Date3 = @dr["Date3"].ToString(),
                            Email1 = @dr["Email1"].ToString(),
                            Email2 = @dr["Email2"].ToString(),
                            Email3 = @dr["Email3"].ToString(),
                            Amount = @dr["Amount"].ToString(),
                            Amount2 = @dr["Amount2"].ToString(),
                            Amount3 = @dr["Amount3"].ToString(),
                            Time1 = @dr["Time1"].ToString(),
                            Time2 = @dr["Time2"].ToString(),
                            Html = @dr["Html"].ToString(),
                            Upload = @dr["Upload"].ToString(),
                            TextArea = @dr["TextArea"].ToString(),
                            MultiSelect1 = @dr["MultiSelect1"].ToString(),
                            MultiSelect2 = @dr["MultiSelect2"].ToString(),
                            MultiSelect3 = @dr["MultiSelect3"].ToString(),
                            MultiSelect4 = @dr["MultiSelect4"].ToString(),
                            MultiSelect5 = @dr["MultiSelect5"].ToString(),
                        });
                    }
                }

                var tooltip = Tooltip;
                //return Json(result, JsonRequestBehavior.AllowGet);
                return Json(new { ACaption = caption, Aplaceholder = placeholder, AValidation = validation, Atooltip = tooltip }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ActionResult FillViewsControls(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.FillViewsControls(CBP);
                List<CommanDropdown> Mul = new List<CommanDropdown>();
                if (ds != null)
                {
                    if (ds.Tables.Count > 0)
                    {
                        // Mul = null;
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            Mul.Clear();
                            ViewBag.fname = "";
                            ViewBag.fname = ds.Tables[0];
                            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                            {
                                Mul.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                            }

                        }
                    }
                }

                var result = Mul;
                return Json(new { AMul = result }, JsonRequestBehavior.AllowGet); ;
            }
            catch (Exception)
            {

                throw;
            }


        }

        public PartialViewResult _PartialCountry(string ViewId, string MasterCode, string corporate, string Unit, string Location, string Branch, string UserId, string Type)
        {
            DataSet dsList = _objCM.bindViewsControls(ViewId, MasterCode, corporate, Unit, Location, Branch, UserId, Type);
            CommanMaster CV = new CommanMaster();
            Views _grid = new Views();
            List<ViewsGridHearder> GridHearder = new List<ViewsGridHearder>();
            List<ViewsGridColumn> GridColumn = new List<ViewsGridColumn>();
            List<Views> lstGrid = new List<Views>();
            if (dsList.Tables[0].Rows.Count > 0)
            {
                ViewBag.GridHearder = dsList.Tables[0];
                ViewBag.GridColumn = dsList.Tables[1];


                if (dsList.Tables[0] != null)
                {
                    foreach (System.Data.DataRow dr in ViewBag.GridColumn.Rows)
                    {
                        GridColumn.Add(new ViewsGridColumn
                        {
                            column1 = @dr["column1"].ToString(),
                            column2 = @dr["column2"].ToString(),
                            column3 = @dr["column3"].ToString(),
                            column4 = @dr["column4"].ToString()
                        });
                    }
                }

                if (dsList.Tables[1] != null)
                {
                    foreach (System.Data.DataRow dr in ViewBag.GridHearder.Rows)
                    {
                        GridHearder.Add(new ViewsGridHearder
                        {
                            Header = @dr["Header"].ToString(),
                            DisplayOrder = @dr["DisplayOrder"].ToString(),
                            Visibility = @dr["Visibility"].ToString(),
                            TableColumn = @dr["TableColumn"].ToString()

                        });

                        //   var gf = GridColumn.Where(s => s.SrNo == dr["xcode"].ToString()).ToList();
                    }
                }

            }

            _grid.ViewsGridColumn = GridColumn.ToList();
            _grid.ViewsGridHearder = GridHearder.ToList();

            lstGrid.Add(_grid);
            return PartialView(lstGrid);
        }
       
    }
}
