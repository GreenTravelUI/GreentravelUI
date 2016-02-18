﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GreenTravel.Models;
using GreenTravel.App_DbService;
using PetaPoco;
using Newtonsoft.Json;
using System.Data;
using GreenTravel.Models.Comman;

namespace GreenTravel.Controllers
{
    public class WhitelabelAccessRightsController : Controller
    {
        GreenTravel.App_DbService.WhitelabelAccessRights _objWhitelabelAccessRights = new GreenTravel.App_DbService.WhitelabelAccessRights();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult BindDropdown_Base(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.BindDropdown_Base(CFP);
                List<CommanDropdown> Corporate = new List<CommanDropdown>();
                //List<CommanDropdown> Item = new List<CommanDropdown>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Corporate.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Corporatedrp = Corporate;
                return Json(new { Corp = Corporatedrp }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult BindDropdown_FormLoad(CommanFieldConditionalPara CFP)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.BindDropdown_FormLoad(CFP);
                List<CommanDropdown> List = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        List.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var data = List;
                return Json(new { data = List }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult insert_Data(UserMaster UM)
        {
            try
            {
                DataSet result = _objWhitelabelAccessRights.insert_data(UM);
                if (result != null)
                {
                    ViewBag.Message = result.Tables[0].Rows[0]["msg"].ToString();
                    if (result.Tables[0].Rows[0]["Help"].ToString() == "Save" || result.Tables[0].Rows[0]["Help"].ToString() == "Update")
                    { ViewBag.Event = "success"; }
                    else if (result.Tables[0].Rows[0]["Help"].ToString() == "Duplicate")
                    { ViewBag.Event = "error"; }
                    ViewBag.Srno = result.Tables[0].Rows[0]["SrNo"].ToString();
                }
                var result1 = ViewBag.Message;
                var Srno = ViewBag.Srno;
                return Json(new { success = result1, Event = ViewBag.Event, Srno = Srno }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ActionResult BindGrid(GridParamater GP)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.BindGrid(GP);
                List<UserMaster> items = new List<UserMaster>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new UserMaster
                        {
                            RowNumber = @dr["RowNumber"].ToString(),
                            srno = @dr["srno"].ToString(),
                            Email = @dr["Email"].ToString(),
                            Name = @dr["Name"].ToString(),
                            Corporate = @dr["Corporate"].ToString(),
                            Unit = @dr["Unit"].ToString(),
                            Location = @dr["Location"].ToString(),
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

        public ActionResult Edit_Data(UserMaster UM)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.Edit_data(UM);
                List<UserMaster> UserMaster = new List<UserMaster>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        UserMaster.Add(new UserMaster
                        {
                            srno = @dr["srno"].ToString(),
                            FirstName = @dr["FirstName"].ToString(),
                            LastName = @dr["LastName"].ToString(),
                            Email = @dr["Email"].ToString(),
                            Password = @dr["Password"].ToString(),
                            Corporate = @dr["Corporate"].ToString(),
                            Unit = @dr["Unit"].ToString(),
                            Branch = @dr["Branch"].ToString(),
                            Location = @dr["Location"].ToString(),
                            BranchBy = @dr["BranchBy"].ToString(),
                            CreatedBy = @dr["CreatedBy"].ToString(),
                            UnitCorpBy = @dr["UnitCorpBy"].ToString(),

                        });
                    }
                }
                var result = UserMaster;

                return Json(new { UserMasterresjs = result }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }
        }

        // -------------------->> Tab-4 ( Create Access Rights )

        public ActionResult BindDropdown_FormLoadAccessRights(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.BindDropdown_FormLoadAccessRights(CFP);

                List<CommanDropdown> Corporate = new List<CommanDropdown>();
                List<CommanDropdown> Status = new List<CommanDropdown>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Corporate.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }

                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.Status = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.Status.Rows)
                    {
                        Status.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }

                var Corporatedrp = Corporate; var Status_Drp = Status;
                return Json(new { Corp = Corporatedrp, Status = Status_Drp }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult BindDropdown_BaseAccessRights(CommanFieldConditionalPara CFP)
        {
            try
            {
                DataSet ds = _objWhitelabelAccessRights.BindDropdown_BaseAccessRights(CFP);
                List<CommanDropdown> List = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        List.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var data = List;
                return Json(new { data = List }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult FillAll(CommanFieldConditionalPara CFP)
        {
            try
            {

                DataSet dsList = _objWhitelabelAccessRights.BindDropdown_BaseAccessRights(CFP);
                WhitelabelStep2 CV = new WhitelabelStep2();
                Grid _grid = new Grid();
                List<GridHearder> GridHearder = new List<GridHearder>();
                List<GridColumn> GridColumn = new List<GridColumn>();
                List<Grid> lstGrid = new List<Grid>();
                if (dsList.Tables[0].Rows.Count > 0)
                {
                    ViewBag.GridHearder = dsList.Tables[0];
                    ViewBag.GridColumn = dsList.Tables[1];


                    if (dsList.Tables[0] != null)
                    {
                        foreach (System.Data.DataRow dr in ViewBag.GridColumn.Rows)
                        {
                            GridColumn.Add(new GridColumn
                            {
                                xname = @dr["xname"].ToString(),
                                SrNo = @dr["xcode"].ToString(),
                                xlink = @dr["xlink"].ToString()
                            });
                        }
                    }

                    if (dsList.Tables[1] != null)
                    {
                        foreach (System.Data.DataRow dr in ViewBag.GridHearder.Rows)
                        {
                            GridHearder.Add(new GridHearder
                            {
                                xname = @dr["xname"].ToString(),
                                SrNo = @dr["xcode"].ToString()

                            });


                        }
                    }

                }

                _grid.GridColumn = GridColumn.ToList();
                _grid.GridHearder = GridHearder.ToList();

                lstGrid.Add(_grid);
                return Json(new { ColumnList = _grid.GridColumn, HeaderList = _grid.GridHearder }, JsonRequestBehavior.AllowGet);


            }
            catch (Exception)
            {

                throw;
            }


        }

        public ActionResult Insert(UserWiseRights _objUserWiseRights)
        {
            try
            {
                ViewBag.Message = "";
                ViewBag.Event = "";
                ViewBag.SrNo = "";
                DataSet result = _objWhitelabelAccessRights.Insert(_objUserWiseRights);
                if (result.Tables[0].Rows.Count > 0)
                {
                    ViewBag.Message = result.Tables[0].Rows[0]["msg"].ToString();
                    if (result.Tables[0].Rows[0]["Help"].ToString() == "Save" || result.Tables[0].Rows[0]["Help"].ToString() == "Update")
                    {
                        ViewBag.Event = "success";

                    }
                    ViewBag.SrNo = result.Tables[0].Rows[0]["SrNo"].ToString();
                }
                var result1 = ViewBag.Message;
                return Json(new { success = result1, Event = ViewBag.Event, SrNo = ViewBag.SrNo }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }


        }


        public ActionResult Edit_AccessRights(UserWiseRights _objUserWiseRights)
        {
            try
            {
                DataSet dsList = _objWhitelabelAccessRights.Edit_AccessRights(_objUserWiseRights);

                UserMaster CV = new UserMaster();
                GridRights _grid = new GridRights();
                List<GridColumnScreen> GridColumnScreen = new List<GridColumnScreen>();
                List<GridRights> lstGrid = new List<GridRights>();
                ViewBag.OtherData = "";
                if (dsList != null)
                {
                    if (dsList.Tables[1] != null)
                    {
                        if (dsList.Tables[1].Rows.Count > 0)
                        {
                            ViewBag.GridColumnScreen = dsList.Tables[1];
                            foreach (System.Data.DataRow dr in ViewBag.GridColumnScreen.Rows)
                            {
                                GridColumnScreen.Add(new GridColumnScreen
                                   {
                                       SrNo = @dr["Srno"].ToString(),
                                       SCR = @dr["Screencode"].ToString(),
                                       Module = @dr["Modulecode"].ToString(),
                                       view = @dr["Viewrights"].ToString(),
                                       update = @dr["Updaterights"].ToString(),
                                       deletee = @dr["Deleterights"].ToString(),
                                       create = @dr["Addrights"].ToString(),
                                       screen = @dr["Screencode"].ToString(),
                                   });
                            }
                        }
                    } if (dsList.Tables[0] != null)
                    {
                        if (dsList.Tables[0].Rows.Count > 0)
                        {
                            _objUserWiseRights.IsActive = dsList.Tables[0].Rows[0]["IsActive"].ToString();
                            _objUserWiseRights.EffectiveDate = dsList.Tables[0].Rows[0]["EffectiveDate"].ToString();
                            _objUserWiseRights.Status = dsList.Tables[0].Rows[0]["Isdefault"].ToString();
                            _objUserWiseRights.srno = dsList.Tables[0].Rows[0]["SrNo"].ToString();
                            //  ViewBag.OtherData = dsList.Tables[0];
                        }
                    }
                }
                // ViewBag.Columns = GridColumnScreen.ToList();

                return Json(new { IsActive = _objUserWiseRights.IsActive, EffectiveDate = _objUserWiseRights.EffectiveDate, Status = _objUserWiseRights.Status, Grid = GridColumnScreen.ToList(), Srno = _objUserWiseRights.srno }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
