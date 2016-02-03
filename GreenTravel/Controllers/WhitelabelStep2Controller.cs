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
        [HttpGet]
        public ActionResult Index()
        {

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



        [HttpPost]
        public ActionResult Index(FormCollection fc)
        {

            //  string CountriesID = Convert.ToString(objcv.SelectedCountriesId); //tightly coupled
            string StateID = fc["drpFeatureCategory"];
            ViewData["Category"] = StateID;
            WhitelabelStep2 CV = new WhitelabelStep2();
            CV.GridColumn = null;
            CV.GridHearder = null;
            return View(CV.GridHearder.ToList());



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
                        { xname = @dr["xname"].ToString(),
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


    }
}
