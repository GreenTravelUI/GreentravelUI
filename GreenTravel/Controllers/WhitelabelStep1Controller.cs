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
        // GET: /WhitelabelStep1/
        public ActionResult Index()
        {
            if (Session["CreatedBy"] == null)
            {
                return RedirectToAction("Index", "Home", new { url = Request.Url.AbsolutePath.ToString() });
            }
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
        public ActionResult BindDropDown(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _objwl.BindDropDown(CFP);
                List<CommanDropdown> Industry = new List<CommanDropdown>();
                List<CommanDropdown> items = new List<CommanDropdown>();//company Type
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
                        Industry.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var Industrys = Industry;
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = items;
                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemservice.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var service = itemservice;
                if (ds.Tables[3].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[3];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        BMode.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var BussineMode = BMode;
                if (ds.Tables[4].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[4];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        CURRENCY.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var currency = CURRENCY;
                if (ds.Tables[5].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[5];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Language.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var language = Language;
                if (ds.Tables[6].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[6];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Corporate.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var corporate = Corporate;
                return Json(new { GTINDUTRYS = Industrys, GTIndutry = result, GTservice = service, GTBmode = BussineMode, GTcurrency = currency, GTlanguage = language, GTCorporate = corporate }, JsonRequestBehavior.AllowGet);
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
        public ActionResult Edit_Data(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.Edit_data(WR);
                List<WhitelabelReg> WhitelabelReg = new List<WhitelabelReg>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        WhitelabelReg.Add(new WhitelabelReg
                        {
                            srno = dr["srno"].ToString(),
                            CorpCoOfficialName = dr["CorpCoOfficialName"].ToString(),
                            CorpCompanyIndust = dr["CorpCompanyIndust"].ToString(),
                            CompanyType = dr["CompanyType"].ToString(),
                            Services = dr["Services"].ToString(),
                            BusinessMode = dr["BusinessMode"].ToString(),
                            AdminUserName = dr["AdminUserName"].ToString(),
                            Password = dr["Password"].ToString(),
                            ApplicationTheme = dr["ApplicationTheme"].ToString(),
                            ApplicationUrl = dr["ApplicationUrl"].ToString(),
                            WebTheme = dr["WebTheme"].ToString(),
                            WebUrl = dr["WebUrl"].ToString(),
                            BaseCurrency = dr["BaseCurrency"].ToString(),
                            BaseLanguage = dr["BaseLanguage"].ToString(),
                            Logo = dr["Logo"].ToString(),
                            Favicon = dr["Favicon"].ToString(),
                            OfficialEmail = dr["OfficialEmail"].ToString(),
                            OfficialPhone = dr["OfficialPhone"].ToString(),
                            FullSemiWhiteLbl = dr["FullSemiWhiteLbl"].ToString(),
                            CopyrightNote = dr["CopyrightNote"].ToString(),
                            CopyrightNoteFlag = dr["CopyrightNoteFlag"].ToString(),
                            RefCorpCompany = dr["RefCorpCompany"].ToString(),
                            OtherReference1 = dr["OtherReference1"].ToString(),
                            OtherReference2 = dr["OtherReference2"].ToString(),
                            Commision = dr["Commision"].ToString(),
                            OtherLanguage = dr["OtherLanguage"].ToString(),
                            Facebook = dr["Facebook"].ToString(),
                            Twitter = dr["Twitter"].ToString(),
                            GooglePlus = dr["GooglePlus"].ToString(),
                            WebPortal = dr["WebPortal"].ToString(),
                            BackgroundImg = dr["BackgroundImg"].ToString(),
                            LoginFrmCaption = dr["LoginFrmCaption"].ToString()
                        });
                    }
                }
                var result = WhitelabelReg;
                return Json(new { Whiteregjs = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        #region tab4 billing/Maintanace
        public ActionResult insert_BillingMaintencae(Billing_maintanence _Billing_maintanence)
        {
            try
            {
                DataSet ds = _objwl.insert_BillingMaintencae(_Billing_maintanence);
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
        public ActionResult Bindtab4dropdown(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.Bindtab4dropdown(WR);
                List<CommanDropdown> itemsdrp = new List<CommanDropdown>();
                List<CommanDropdown> itemsdrpcurrncy = new List<CommanDropdown>();
                List<CommanDropdown> itemcountry = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemsdrp.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = itemsdrp;
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemsdrpcurrncy.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result1 = itemsdrpcurrncy;
                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcountry.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result2 = itemcountry;
                return Json(new { UPdrpc = result1, UPdrp = result, Ucountry = result2 }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult Bindbillingcountry(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.Bindbillingcountry(WR);
                List<CommanDropdown> itemsdrp = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemsdrp.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = itemsdrp;
                return Json(new { UPdrp = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult Bindbillingstate(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.Bindbillingstate(WR);
                List<CommanDropdown> itemsdrp = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemsdrp.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = itemsdrp;
                return Json(new { UPdrp = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult Edit_data_billing(Billing_maintanence BM)
        {
            try
            {
                DataSet ds = _objwl.Edit_data_billing(BM);
                List<Billing_maintanence> Billingmaintanence = new List<Billing_maintanence>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Billingmaintanence.Add(new Billing_maintanence
                        {
                            srno = dr["srno"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            BillingName = dr["BillingName"].ToString(),
                            BillingContactPerson = dr["BillingContactPerson"].ToString(),
                            BillingAddress1 = dr["BillingAddress1"].ToString(),
                            BillingAddress2 = dr["BillingAddress2"].ToString(),
                            BillingCity = dr["BillingCity"].ToString(),
                            BillingState = dr["BillingState"].ToString(),
                            BillingCountry = dr["BillingCountry"].ToString(),
                            BillingZipCode = dr["BillingZipCode"].ToString(),
                            BillingEmail = dr["BillingEmail"].ToString(),
                            BillingPhone = dr["BillingPhone"].ToString(),
                            BillingContactMobile = dr["BillingContactMobile"].ToString(),
                            Currency = dr["Currency"].ToString(),
                            SupportMode = dr["SupportMode"].ToString(),
                            FreeSupportPeriod = dr["FreeSupportPeriod"].ToString(),
                            SupportCostPM = dr["SupportCostPM"].ToString(),
                        });
                    }
                }
                var result = Billingmaintanence;
                return Json(new { Whiteregjs = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }
        #endregion
        #region user preferance
        public ActionResult BindDropDownUserpreferanceCheckbox(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.BindDropDownUserpreferanceCheckbox(WR);
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
                return Json(new { WRcheckbox = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult BindDropDownUserpreferancedropdown(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.BindDropDownUserpreferancedropdown(WR);
                List<CommanDropdown> itemsdrp = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemsdrp.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = itemsdrp;
                return Json(new { UPdrp = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult insert_Data_user_preferance(UserPreferancestep1 UP)
        {
            try
            {
                DataSet ds = _objwl.insert_Data_user_preferance(UP);
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
        public ActionResult Edit_data_user_preferance(UserPreferancestep1 UP)
        {
            try
            {
                DataSet ds = _objwl.Edit_data_user_preferance(UP);
                List<UserPreferancestep1> UserPreferancestep1 = new List<UserPreferancestep1>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        UserPreferancestep1.Add(new UserPreferancestep1
                        {
                            srno = dr["srno"].ToString(),
                            GadgetPosition = dr["GadgetPosition"].ToString(),
                            OtherPreferences = dr["OtherPreferences"].ToString(),
                            pagerow = dr["pagerow"].ToString(),
                            Corporate = dr["Corporate"].ToString()
                        });
                    }
                }
                var result = UserPreferancestep1;
                return Json(new { UserPreferancestep1js = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
        public ActionResult Encry(WhitelabelStep2 CBP)
        {
            try
            {
                EncryptionDecryption enc_dec = new EncryptionDecryption();
                var data = HttpUtility.UrlEncode(enc_dec.UrlEncrypt(CBP.Corporate.ToString()));
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult Binddropdowntab3(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.Binddropdowntab3(WR);
                List<CommanDropdown> itemcloudprovider = new List<CommanDropdown>();
                List<CommanDropdown> itemcloudserver = new List<CommanDropdown>();
                List<CommanDropdown> itemcndprovider = new List<CommanDropdown>();
                List<CommanDropdown> itemcurrency = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcloudprovider.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = itemcloudprovider;
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcloudserver.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result1 = itemcloudserver;
                if (ds.Tables[2].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcndprovider.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result2 = itemcndprovider;
                if (ds.Tables[3].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[3];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcurrency.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result3 = itemcurrency;
                DataSet ds1 = _objwl.Binddropdowntab3sec2(WR);
                List<CommanDropdown> itemcloudprovider1 = new List<CommanDropdown>();
                List<CommanDropdown> itemcloudserver1 = new List<CommanDropdown>();
                List<CommanDropdown> itemcndprovider1 = new List<CommanDropdown>();
                List<CommanDropdown> itemcurrency1 = new List<CommanDropdown>();
                if (ds1.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds1.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcloudprovider1.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result4 = itemcloudprovider1;
                if (ds1.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds1.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcloudserver1.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result5 = itemcloudserver1;
                if (ds1.Tables[2].Rows.Count > 0)
                {
                    ViewBag.fname = ds1.Tables[2];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcndprovider1.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result6 = itemcndprovider1;
                if (ds1.Tables[3].Rows.Count > 0)
                {
                    ViewBag.fname = ds1.Tables[3];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemcurrency1.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result7 = itemcurrency1;
                return Json(new { UPdrpc = result1, UPdrp = result, Ucountry = result2, Ucurrency = result3, UPdrpc4 = result4, UPdrp5 = result5, Ucountry6 = result6, Ucurrency7 = result7 }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        #region hosting
        public ActionResult insert_Hosting(Hosting_Subscription HS)
        {
            try
            {
                DataSet ds = _objwl.insert_Hosting(HS);
                DataSet ds2 = _objwl.insert_Hosting_sub(HS);
                if (ds.Tables[0].Rows.Count > 0 && ds2.Tables[0].Rows.Count > 0)
                {
                    ViewBag.srno = ds.Tables[0].Rows[0]["Srno"];
                }
                if (ds.Tables.Count < 2)
                {
                    return Json(new { srno = ViewBag.srno, success = true, responseText = "Record Already Exist!" }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(new { srno = ViewBag.srno, success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult Edit_data_hosting(Hosting_Subscription HS)
        {
            try
            {
                DataSet ds = _objwl.Edit_data_hosting(HS);
                List<Hosting_Subscription> hosting = new List<Hosting_Subscription>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        hosting.Add(new Hosting_Subscription
                        {
                            srno = dr["srno"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            CloudProvider = dr["CloudProvider"].ToString(),
                            CloudServerIp = dr["CloudServerIp"].ToString(),
                            CloudDiskSpace = dr["CloudDiskSpace"].ToString(),
                            TransactionCount = dr["TransactionCount"].ToString(),
                            IpRestrictedAccess = dr["IpRestrictedAccess"].ToString(),
                            CdnProvider = dr["CdnProvider"].ToString(),
                            CdnSpace = dr["CdnSpace"].ToString(),
                            HostingCost = dr["HostingCost"].ToString(),
                            CostPerMonth = dr["CostPerMonth"].ToString(),
                            Currency = dr["Currency"].ToString(),
                            HostingCostPM = dr["HostingCostPM"].ToString()
                        });
                    }
                }
                var result = hosting;
                return Json(new { Whiteregjs = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult Edit_data_subcribe(Hosting_Subscription HS)
        {
            try
            {
                DataSet ds = _objwl.Edit_data_subcribe(HS);
                List<Hosting_Subscription> hosting = new List<Hosting_Subscription>();
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        hosting.Add(new Hosting_Subscription
                        {
                            srno = dr["srno"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            PlanName = dr["PlanName"].ToString(),
                            SubscriptionType = dr["SubscriptionType"].ToString(),
                            FreeFlag = dr["FreeFlag"].ToString(),
                            NumberOfUsers = dr["NumberOfUsers"].ToString(),
                            SubscriptionFromDate = dr["SubscriptionFromDate"].ToString(),
                            SubscriptionToDate = dr["SubscriptionToDate"].ToString(),
                            BillingCycle = dr["BillingCycle"].ToString(),
                            BillingFromCompany = dr["BillingFromCompany"].ToString(),
                            PaymentCurrency = dr["PaymentCurrency"].ToString(),
                            AmountPUPM = dr["AmountPUPM"].ToString(),
                            PaymentMode = dr["PaymentMode"].ToString(),
                            FirstPayDate = dr["FirstPayDate"].ToString(),
                            GracePeriod = dr["GracePeriod"].ToString()
                        });
                    }
                }
                var result = hosting;
                return Json(new { Whiteregjs = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
        #region password auth
        public ActionResult Binddropdowntab6(WhitelabelReg WR)
        {
            try
            {
                DataSet ds = _objwl.Binddropdowntab6(WR);
                List<CommanDropdown> itemsdrp = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        itemsdrp.Add(new CommanDropdown { Text = dr["xname"].ToString(), Value = dr["xcode"].ToString() });
                    }
                }
                var result = itemsdrp;
                return Json(new { UPdrp = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult insert_PasswordAuth(Password_Authentication PA)
        {
            try
            {
                DataSet ds = _objwl.insert_PasswordAuth(PA);
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
        public ActionResult Edit_data_password_authenticate(Password_Authentication PA)
        {
            try
            {
                DataSet ds = _objwl.Edit_data_password_authenticate(PA);
                List<Password_Authentication> Password_Authentication1 = new List<Password_Authentication>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Password_Authentication1.Add(new Password_Authentication
                        {
                            srno = dr["srno"].ToString(),
                            Corporate = dr["Corporate"].ToString(),
                            CapitalCharNumber = dr["CapitalCharNumber"].ToString(),
                            RequiredNumeric = dr["RequiredNumeric"].ToString(),
                            SpecialCharNumber = dr["SpecialCharNumber"].ToString(),
                            EncriptionKey = dr["EncriptionKey"].ToString(),
                            PasswordMinLength = dr["PasswordMinLength"].ToString(),
                            PasswordExpiryDays = dr["PasswordExpiryDays"].ToString(),
                            //  UserLoginDay = dr["UserLoginDay"].ToString(),
                            NumberOfAttempts = dr["NumberOfAttempts"].ToString(),
                            //  NumberOfAttemptsTime = dr["NumberOfAttemptsTime"].ToString(),
                            OTPExpiryTime = dr["OTPExpiryTime"].ToString(),
                            LastSamePassword = dr["LastSamePassword"].ToString(),
                            UnableCaptcha = dr["UnableCaptcha"].ToString(),
                            // AutoLockScreen = dr["AutoLockScreen"].ToString(),
                            UserUnlockMinut = dr["UserLockMinuts"].ToString(),
                            Continuenumber = dr["Continuenumber"].ToString()
                        });
                    }
                }
                var result = Password_Authentication1;
                return Json(new { UserPreferancestep1js = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

        public ActionResult CorporateBasicbasesp(commanbaseParamater CBP)
        {
            try
            {
                DataSet ds = _objwl.CorporateBasicbasesp(CBP);
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
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
