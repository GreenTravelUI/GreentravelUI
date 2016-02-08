    using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GreenTravel.App_DbService;
using GreenTravel.Models;
using System.Data;
using Newtonsoft.Json;
using GreenTravel.Models.Comman;

namespace GreenTravel.Controllers
{
    public class MastersController : Controller
    {
        DBCommanMaster _objCM = new DBCommanMaster();
        // GET: /Masters/
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Insert_Data(CommanMaster CM)
        {
            try
            {
                int result = _objCM.insert_data(CM);
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

        public ActionResult Insert_Data_Caption(CommanMasterCaption CMC)
        {
            try
            {
                int result1 = _objCM.insert_data_Caption(CMC);
                if (result1 == 1)
                {
                }
                return Json(new { success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ActionResult Insert_Data_PlaceHolder(CommanMasterPlaceholder CMP)
        {
            try
            {
                int result1 = _objCM.insert_data_Placeholder(CMP);
                if (result1 == 1)
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

        public ActionResult Insert_Data_Validation(CommanMasterValidation CMV)
        {
            try
            {
                int result1 = _objCM.insert_data_Validation(CMV);
                if (result1 == 1)
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

        public ActionResult Insert_Data_Help(CommanMasterHelp CMH)
        {
            try
            {
                int result1 = _objCM.insert_data_help(CMH);
                if (result1 == 1)
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

        public ActionResult BindDropDown(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.BindDropDown(CBP);
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

        public ActionResult BindGridView(GridParamater GP)
        {
            try
            {
                DataSet ds = _objCM.BindGrid(GP);
                List<GridAdminparamater> items = new List<GridAdminparamater>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new GridAdminparamater
                        {
                            RowNumber = @dr["RowNumber"].ToString(),
                            name = @dr["xname"].ToString(),
                            Mastercode = @dr["XMaster"].ToString(),
                            Entry_Level = @dr["ENTRYCONTROL"].ToString(),
                            segment = @dr["SEGMENT"].ToString()

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
                DataSet ds = _objCM.Edit_data(EA);
                List<CommanMaster> Master = new List<CommanMaster>();
                List<CommanMasterCaption> Caption = new List<CommanMasterCaption>();
                List<CommanMasterPlaceholder> Placeholder = new List<CommanMasterPlaceholder>();
                List<CommanMasterValidation> Validation = new List<CommanMasterValidation>();
                List<CommanMasterHelp> Tooltip = new List<CommanMasterHelp>();

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
                        Caption.Add(new CommanMasterCaption
                        {
                            xmastercaption = @dr["xmaster"].ToString(),
                            //SEGMENTcaption = @dr["SEGMENT"].ToString(),
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

                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.Placeholder = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.Placeholder.Rows)
                    {
                        Placeholder.Add(new CommanMasterPlaceholder
                        {
                            xmaster= @dr["xmaster"].ToString(),
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
                            Date1= @dr["Date1"].ToString(),
                            Date2= @dr["Date2"].ToString(),
                            Date3= @dr["Date3"].ToString(),
                            Email1= @dr["Email1"].ToString(),
                            Email2= @dr["Email2"].ToString(),
                            Email3= @dr["Email3"].ToString(),
                            Amount= @dr["Amount"].ToString(),
                            Amount2= @dr["Amount2"].ToString(),
                            Amount3= @dr["Amount3"].ToString(),
                            Time1 = @dr["Time1"].ToString(),
                            Time2 = @dr["Time2"].ToString(),
                            Html= @dr["Html"].ToString(),
                            Upload = @dr["Upload"].ToString(),
                            TextArea= @dr["TextArea"].ToString(),
                            MultiSelect1= @dr["MultiSelect1"].ToString(),
                            MultiSelect2= @dr["MultiSelect2"].ToString(),
                            MultiSelect3= @dr["MultiSelect3"].ToString(),
                            MultiSelect4= @dr["MultiSelect4"].ToString(),
                            MultiSelect5= @dr["MultiSelect5"].ToString(),
                        });
                    }
                }

                var placeholder = Placeholder;


                if (ds.Tables[3].Rows.Count > 0)
                {
                    ViewBag.avalidation = ds.Tables[3];
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

                if (ds.Tables[4].Rows.Count > 0)
                {
                    ViewBag.Tooltip = ds.Tables[4];
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
                return Json(new { AMaster = result, ACaption = caption, Aplaceholder = placeholder, AValidation = validation, Atooltip = tooltip }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ActionResult Delete_Data(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objCM.BindDropDown(CBP);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0].Rows[0][0].ToString();
                }
                var result = ViewBag.fname;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
