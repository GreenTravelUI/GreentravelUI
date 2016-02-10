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
    public class UserController : Controller
    {
        DBUserMaster _obj_db_UM = new DBUserMaster();
        // GET: /User/
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
                // return Json(new { success = true, responseText = "Record Save Sucessfully!" }, JsonRequestBehavior.AllowGet);

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

                //if (ds.Tables[1].Rows.Count > 0)
                //{
                //    ViewBag.fname = ds.Tables[1];
                //    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                //    {
                //        Item.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                //    }
                //}
                //var Locationdrp = Item;

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


        //public PartialViewResult _PartialDisplayGridData(string id)
        //{
        //    DataSet dsList = _obj_db_UM.BindAccessgrid(id);
        //    WhitelabelStep2 CV = new WhitelabelStep2();
        //    return PartialView(lstGrid);
        //}


    }
}
