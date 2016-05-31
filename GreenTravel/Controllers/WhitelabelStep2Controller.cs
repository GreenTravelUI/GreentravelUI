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
    public class WhitelabelStep2Controller : Controller
    {




        DbWhitelabelStep2 _objw2 = new DbWhitelabelStep2();

        //
        // GET: /WhitelabelStep2/

        public ActionResult Index()
        {
            if (Session["CreatedBy"] == null)
            {

                return RedirectToAction("Index", "Home", new { url = Request.Url.AbsolutePath.ToString() });

            }

            return View();

        }

        public ActionResult BindDropDown(WhitelabelStep2 CBP)
        {
            try
            {
                DataSet ds = _objw2.Base(CBP);
                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    ViewBag.category = ds.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.category.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }

                var result = items;
                return Json(result, JsonRequestBehavior.AllowGet);
                // return Json(new SelectList(result, "Text", "Value"));

            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult BindDropDown_Corporate(WhitelabelStep2 CBP)
        {
            try
            {
                DataSet ds = _objw2.Base(CBP);
                List<CommanDropdown> items = new List<CommanDropdown>();
                if (ds.Tables[1].Rows.Count > 0)
                {
                    ViewBag.category = ds.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.category.Rows)
                    {
                        items.Add(new CommanDropdown { Text = @dr["xname"].ToString(), Value = @dr["xcode"].ToString() });
                    }
                }

                var result = items;
                return Json(result, JsonRequestBehavior.AllowGet);
                // return Json(new SelectList(result, "Text", "Value"));

            }
            catch (Exception)
            {
                throw;
            }
        }



        public ActionResult BindGridBase(WhitelabelStep2 CBP)
        {
            try
            {
                DataSet dsList = _objw2.Base(CBP);
                WhitelabelStep2 CV = new WhitelabelStep2();

                List<GridHearder> GridHearder = new List<GridHearder>();

                if (dsList.Tables[0].Rows.Count > 0)
                {
                    ViewBag.GridHearder = dsList.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.GridHearder.Rows)
                    {
                        GridHearder.Add(new GridHearder { xname = @dr["xname"].ToString(), SrNo = @dr["xcode"].ToString() });
                    }
                }
                var Header = GridHearder;
                CV.GridHearder = GridHearder;
                // return View(CV);
                // return Json(result, JsonRequestBehavior.AllowGet);
                return Json(new SelectList(Header, "xname", "SrNo"));

            }
            catch (Exception)
            {
                throw;
            }
        }

        public PartialViewResult _DisplayGridData(string id)
        {
            DataSet dsList = _objw2.Basegrid(id);
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

                        //   var gf = GridColumn.Where(s => s.SrNo == dr["xcode"].ToString()).ToList();
                    }
                }

            }

            _grid.GridColumn = GridColumn.ToList();
            _grid.GridHearder = GridHearder.ToList();

            lstGrid.Add(_grid);
            return PartialView(lstGrid);
        }

        public ActionResult Insert(WhitelabelStep2 CBP)
        {
            try
            {
                ViewBag.Message = "";
                ViewBag.Event = "";
                ViewBag.SrNo = "";
                DataSet result = _objw2.Insert(CBP);
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

        public ActionResult Edit(WhitelabelStep2 CBP)
        {
            try
            {
                DataSet result = _objw2.Edit(CBP);
                List<WhitelabelStep2> WhitelabelStep2 = new List<WhitelabelStep2>();
                if (result.Tables[0].Rows.Count > 0)
                {
                    ViewBag.fname = result.Tables[0];
                    foreach (System.Data.DataRow dr in ViewBag.fname.Rows)
                    {
                        WhitelabelStep2.Add(new WhitelabelStep2
                        {
                            srno = @dr["srno"].ToString(),
                            Corporate = @dr["Corporate"].ToString(),
                            FeaturesCategory = @dr["FeaturesCategory"].ToString(),
                        });
                    }
                }
                List<WhitelabelStep2> Obj_WhitelabelStep2 = new List<WhitelabelStep2>();
                if (result.Tables[1].Rows.Count > 0)
                {
                    ViewBag.Grid = result.Tables[1];
                    foreach (System.Data.DataRow dr in ViewBag.Grid.Rows)
                    {
                        Obj_WhitelabelStep2.Add(new WhitelabelStep2
                        {
                            srno = @dr["srno"].ToString(),
                            FeatureGroup = @dr["FeatureGroup"].ToString(),
                            Feature = @dr["Feature"].ToString(),
                        });
                    }
                }
                return Json(new { Dropdown = WhitelabelStep2, Grid = Obj_WhitelabelStep2 }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {

                throw;
            }


        }

        public ActionResult FillAll(WhitelabelStep2 CBP)
        {
            try
            {

                DataSet dsList = _objw2.Basegrid(CBP.Field1);
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

    }
}
