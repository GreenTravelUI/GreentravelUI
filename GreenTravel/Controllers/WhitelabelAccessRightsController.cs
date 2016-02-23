using System;
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

        DBUserMaster _obj_db_UM = new DBUserMaster();

        public ActionResult Index()
        {
            //UserMaster UM = new UserMaster();
            //UserMaster_Formpara UMFRM = new UserMaster_Formpara();
            //UMFRM.type = "Grid_Data";
            //UMFRM.corporate = "1";
            //UMFRM.FormType = "1";
            //UMFRM.FormTabCode = "1";
            //UM.StoreAllData = _obj_db_UM.RetrieveAllUserData(UMFRM);
            return View();
            //   return View();
        }
        public ActionResult AccessRights()
        {
            return View();
        }
        [HttpPost]
        public ActionResult ShowAllMobileDetails(UserMaster_Formpara UMFRM)
        {
            UserMaster UM = new UserMaster();
            UMFRM.type = "Grid_Data";
            UMFRM.corporate = "1";
            UMFRM.FormType = "1";
            UMFRM.FormTabCode = "1";
            UM.StoreAllData = _obj_db_UM.RetrieveAllUserData(UMFRM);
            return View(UM);
        }
        public ActionResult BindGridView(GridParamater GP)
        {
            try
            {
                DataSet ds = _obj_db_UM.BindGrid(GP);
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
        // insert_Data
        public ActionResult insert_Data(UserMaster UM)
        {
            try
            {
                DataSet ds = _obj_db_UM.insert_data(UM);
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
        public ActionResult Edit_Data(UserMaster UM)
        {
            try
            {
                DataSet ds = _obj_db_UM.Edit_data(UM);
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
        public ActionResult BindDropdownUnit(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _obj_db_UM.BindDropdownUnit(CFP);
                List<CommanDropdown> Industry = new List<CommanDropdown>();
                List<CommanDropdown> Item = new List<CommanDropdown>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Industry.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Unitdrp = Industry;
                return Json(new { UNITDRPJS = Unitdrp }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult BindDropdownLocation(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _obj_db_UM.BindDropdownLocation(CFP);
                List<CommanDropdown> Industry = new List<CommanDropdown>();


                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Industry.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Unitdrp = Industry;


                return Json(new { UNITDRPJS = Unitdrp }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult BindDropdownUserrole(CommanFieldPara CFP)
        {
            try
            {
                DataSet ds = _obj_db_UM.BindDropdownUserrole(CFP);
                List<CommanDropdown> Industry = new List<CommanDropdown>();
                List<CommanDropdown> Item = new List<CommanDropdown>();

                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Industry.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Unitdrp = Industry;

                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        Item.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }
                var Locationdrp = Item;

                return Json(new { UNITDRPJS = Unitdrp, USERDRPJS = Locationdrp }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ActionResult BindAccessgrid(GridParamater GP)
        {
            try
            {
                DataSet ds = _obj_db_UM.BindAccessgrid(GP);
                List<UserMaster_AccessRight> items = new List<UserMaster_AccessRight>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        items.Add(new UserMaster_AccessRight
                        {
                            //  Module = @dr["Module"].ToString(),
                            //   Screen = @dr["Screen"].ToString(),
                            //  srno = @dr["srno"].ToString(),
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







        //public ActionResult Index()
        //{
        //    if (Session["CreatedBy"] == null)
        //    {
        //        return RedirectToAction("Index", "Home", new { url = Request.Url.AbsolutePath.ToString() });
        //    }
        //    return View();
        //}
        //public ActionResult BindDropdown_Base(CommanFieldPara CFP)
        //{
        //    try
        //    {
        //        DataSet ds = _objWhitelabelAccessRights.BindDropdown_Base(CFP);
        //        List<CommanDropdown> Corporate = new List<CommanDropdown>();
        //        //List<CommanDropdown> Item = new List<CommanDropdown>();

        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                Corporate.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }
        //        var Corporatedrp = Corporate;
        //        return Json(new { Corp = Corporatedrp }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        //public ActionResult BindDropdown_FormLoad(CommanFieldConditionalPara CFP)
        //{
        //    try
        //    {
        //        DataSet ds = _objWhitelabelAccessRights.BindDropdown_FormLoad(CFP);
        //        List<CommanDropdown> List = new List<CommanDropdown>();
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                List.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }
        //        var data = List;
        //        return Json(new { data = List }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        //public ActionResult insert_Data(UserMaster UM)
        //{
        //    try
        //    {
        //        DataSet result = _objWhitelabelAccessRights.insert_data(UM);
        //        if (result != null)
        //        {
        //            ViewBag.Message = result.Tables[0].Rows[0]["msg"].ToString();
        //            if (result.Tables[0].Rows[0]["Help"].ToString() == "Save" || result.Tables[0].Rows[0]["Help"].ToString() == "Update")
        //            { ViewBag.Event = "success"; }
        //            else if (result.Tables[0].Rows[0]["Help"].ToString() == "Duplicate")
        //            { ViewBag.Event = "error"; }
        //            ViewBag.Srno = result.Tables[0].Rows[0]["SrNo"].ToString();
        //        }
        //        var result1 = ViewBag.Message;
        //        var Srno = ViewBag.Srno;
        //        return Json(new { success = result1, Event = ViewBag.Event, Srno = Srno }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}
        //public ActionResult BindGrid(GridParamater GP)
        //{
        //    try
        //    {
        //        DataSet ds = _objWhitelabelAccessRights.BindGrid(GP);
        //        List<UserMaster> items = new List<UserMaster>();
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                items.Add(new UserMaster
        //                {
        //                    RowNumber = @dr["RowNumber"].ToString(),
        //                    srno = @dr["srno"].ToString(),
        //                    Email = @dr["Email"].ToString(),
        //                    Name = @dr["Name"].ToString(),
        //                    Corporate = @dr["Corporate"].ToString(),
        //                    Unit = @dr["Unit"].ToString(),
        //                    Location = @dr["Location"].ToString(),
        //                });
        //            }
        //        }
        //        var result = items;
        //        return Json(result, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        //public ActionResult Edit_Data(UserMaster UM)
        //{
        //    try
        //    {
        //        DataSet ds = _objWhitelabelAccessRights.Edit_data(UM);
        //        List<UserMaster> UserMaster = new List<UserMaster>();
        //        List<UserWiseRights> UserWiseRights = new List<UserWiseRights>();



        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                UserMaster.Add(new UserMaster
        //                {
        //                    srno = @dr["srno"].ToString(),
        //                    FirstName = @dr["FirstName"].ToString(),
        //                    LastName = @dr["LastName"].ToString(),
        //                    Email = @dr["Email"].ToString(),
        //                    Password = @dr["Password"].ToString(),
        //                    Corporate = @dr["Corporate"].ToString(),
        //                    Unit = @dr["Unit"].ToString(),
        //                    Branch = @dr["Branch"].ToString(),
        //                    Location = @dr["Location"].ToString(),
        //                    BranchBy = @dr["BranchBy"].ToString(),
        //                    CreatedBy = @dr["CreatedBy"].ToString(),
        //                    UnitCorpBy = @dr["UnitCorpBy"].ToString(),

        //                });
        //            }
        //        }
        //        if (ds.Tables[1].Rows.Count > 0)
        //        {
        //            ViewBag.UserWiseRights = ds.Tables[1];
        //            foreach (System.Data.DataRow dr in ViewBag.UserWiseRights.Rows)
        //            {
        //                UserWiseRights.Add(new UserWiseRights
        //                  {
        //                      srno = @dr["srno"].ToString(),
        //                      Corporate = @dr["Corporate"].ToString(),
        //                      Unit = @dr["Unit"].ToString(),
        //                      Branch = @dr["Branch"].ToString(),
        //                      Location = @dr["Location"].ToString(),
        //                      Role = @dr["Role"].ToString(),
        //                      UserId = @dr["UserId"].ToString(),
        //                  });
        //            }
        //        }



        //        var result = UserMaster;
        //        var result2 = UserWiseRights;
        //        return Json(new { UserMasterresjs = result, UserWiseRights = UserWiseRights }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}
        //// -------------------->> Tab-4 ( Create Access Rights )
        //public ActionResult BindDropdown_FormLoadAccessRights(CommanFieldPara CFP)
        //{
        //    try
        //    {
        //        DataSet ds = _objWhitelabelAccessRights.BindDropdown_FormLoadAccessRights(CFP);

        //        List<CommanDropdown> Corporate = new List<CommanDropdown>();
        //        List<CommanDropdown> Status = new List<CommanDropdown>();

        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                Corporate.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }

        //        if (ds.Tables[1].Rows.Count > 0)
        //        {
        //            ViewBag.Status = ds.Tables[1];
        //            foreach (System.Data.DataRow dr in ViewBag.Status.Rows)
        //            {
        //                Status.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }

        //        var Corporatedrp = Corporate; var Status_Drp = Status;
        //        return Json(new { Corp = Corporatedrp, Status = Status_Drp }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        //public ActionResult BindDropdown_BaseAccessRights(CommanFieldConditionalPara CFP)
        //{
        //    try
        //    {
        //        DataSet ds = _objWhitelabelAccessRights.BindDropdown_BaseAccessRights(CFP);
        //        List<CommanDropdown> List = new List<CommanDropdown>();
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.fname = ds.Tables[0];
        //            foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
        //            {
        //                List.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
        //            }
        //        }
        //        var data = List;
        //        return Json(new { data = List }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        //public ActionResult FillAll(CommanFieldConditionalPara CFP)
        //{
        //    try
        //    {

        //        DataSet dsList = _objWhitelabelAccessRights.BindDropdown_BaseAccessRights(CFP);
        //        WhitelabelStep2 CV = new WhitelabelStep2();
        //        Grid _grid = new Grid();
        //        List<GridHearder> GridHearder = new List<GridHearder>();
        //        List<GridColumn> GridColumn = new List<GridColumn>();
        //        List<Grid> lstGrid = new List<Grid>();
        //        if (dsList.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.GridHearder = dsList.Tables[0];
        //            ViewBag.GridColumn = dsList.Tables[1];


        //            if (dsList.Tables[0] != null)
        //            {
        //                foreach (System.Data.DataRow dr in ViewBag.GridColumn.Rows)
        //                {
        //                    GridColumn.Add(new GridColumn
        //                    {
        //                        xname = @dr["xname"].ToString(),
        //                        SrNo = @dr["xcode"].ToString(),
        //                        xlink = @dr["xlink"].ToString()
        //                    });
        //                }
        //            }

        //            if (dsList.Tables[1] != null)
        //            {
        //                foreach (System.Data.DataRow dr in ViewBag.GridHearder.Rows)
        //                {
        //                    GridHearder.Add(new GridHearder
        //                    {
        //                        xname = @dr["xname"].ToString(),
        //                        SrNo = @dr["xcode"].ToString()

        //                    });


        //                }
        //            }

        //        }

        //        _grid.GridColumn = GridColumn.ToList();
        //        _grid.GridHearder = GridHearder.ToList();

        //        lstGrid.Add(_grid);
        //        return Json(new { ColumnList = _grid.GridColumn, HeaderList = _grid.GridHearder }, JsonRequestBehavior.AllowGet);


        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }


        //}
        //public ActionResult Insert(UserWiseRights _objUserWiseRights)
        //{
        //    try
        //    {
        //        ViewBag.Message = "";
        //        ViewBag.Event = "";
        //        ViewBag.SrNo = "";
        //        DataSet result = _objWhitelabelAccessRights.Insert(_objUserWiseRights);
        //        if (result.Tables[0].Rows.Count > 0)
        //        {
        //            ViewBag.Message = result.Tables[0].Rows[0]["msg"].ToString();
        //            if (result.Tables[0].Rows[0]["Help"].ToString() == "Save" || result.Tables[0].Rows[0]["Help"].ToString() == "Update")
        //            {
        //                ViewBag.Event = "success";
        //            }
        //            else if (result.Tables[0].Rows[0]["Help"].ToString() == "Duplicate")
        //            { ViewBag.Event = "error"; }
        //            ViewBag.Srno = result.Tables[0].Rows[0]["SrNo"].ToString();
        //            //ViewBag.SrNo = result.Tables[0].Rows[0]["SrNo"].ToString();
        //        }
        //        var result1 = ViewBag.Message;
        //        return Json(new { success = result1, Event = ViewBag.Event, SrNo = ViewBag.SrNo }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }


        //}
        //public ActionResult Edit_AccessRights(UserWiseRights _objUserWiseRights)
        //{
        //    try
        //    {
        //        DataSet dsList = _objWhitelabelAccessRights.Edit_AccessRights(_objUserWiseRights);

        //        UserMaster CV = new UserMaster();
        //        GridRights _grid = new GridRights();
        //        List<GridColumnScreen> GridColumnScreen = new List<GridColumnScreen>();
        //        List<GridRights> lstGrid = new List<GridRights>();
        //        ViewBag.OtherData = "";
        //        if (dsList != null)
        //        {
        //            if (dsList.Tables[1] != null)
        //            {
        //                if (dsList.Tables[1].Rows.Count > 0)
        //                {
        //                    ViewBag.GridColumnScreen = dsList.Tables[1];
        //                    foreach (System.Data.DataRow dr in ViewBag.GridColumnScreen.Rows)
        //                    {
        //                        GridColumnScreen.Add(new GridColumnScreen
        //                           {
        //                               SrNo = @dr["Srno"].ToString(),
        //                               SCR = @dr["Screencode"].ToString(),
        //                               Module = @dr["Modulecode"].ToString(),
        //                               view = @dr["Viewrights"].ToString(),
        //                               update = @dr["Updaterights"].ToString(),
        //                               deletee = @dr["Deleterights"].ToString(),
        //                               create = @dr["Addrights"].ToString(),
        //                               screen = @dr["Screencode"].ToString(),
        //                           });
        //                    }
        //                }
        //            } if (dsList.Tables[0] != null)
        //            {
        //                if (dsList.Tables[0].Rows.Count > 0)
        //                {
        //                    _objUserWiseRights.IsActive = dsList.Tables[0].Rows[0]["IsActive"].ToString();
        //                    _objUserWiseRights.EffectiveDate = dsList.Tables[0].Rows[0]["EffectiveDate"].ToString();
        //                    _objUserWiseRights.Status = dsList.Tables[0].Rows[0]["Isdefault"].ToString();
        //                    _objUserWiseRights.srno = dsList.Tables[0].Rows[0]["SrNo"].ToString();
        //                    //  ViewBag.OtherData = dsList.Tables[0];
        //                }
        //            }
        //        }
        //        // ViewBag.Columns = GridColumnScreen.ToList();

        //        return Json(new { IsActive = _objUserWiseRights.IsActive, EffectiveDate = _objUserWiseRights.EffectiveDate, Status = _objUserWiseRights.Status, Grid = GridColumnScreen.ToList(), Srno = _objUserWiseRights.srno }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
    }
}
