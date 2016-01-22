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
        public ActionResult Create(UserMaster UM)
        {
            try
            {
                //string Result = _obj_db_UM.insert_data(UM);
                int result = _obj_db_UM.insert_data(UM);
                ViewData["result"] = result;
                return View();
            }
            catch (Exception)
            {
                throw;
            }
            //return View();
        }
        public ActionResult ShowAllMobileDetails(UserMaster_Formpara UMFRM)
        {
            UserMaster UM = new UserMaster();
            UMFRM.type="Grid_Data";
            UMFRM.corporate = "1";
            UMFRM.FormType = "1";
            UMFRM.FormTabCode = "1";
            UM.StoreAllData = _obj_db_UM.RetrieveAllUserData(UMFRM);
            return View(UM);
        }

        public DataTable FillGrid(string Type, string Email, string url, string Pword)
        {
            UserMaster_Formpara UMFRM = new UserMaster_Formpara()
            {
                type = "Grid_Data",
                corporate = "1",
                FormType = "1",
                FormTabCode = "1"
            };

            DataSet ds = ds = _obj_db_UM.RetrieveAllUserData(UMFRM);

            return ds.Tables[0];
            //var lst = JsonConvert.SerializeObject(ds.Tables[0], Formatting.None, new JsonSerializerSettings() { ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore });
            ////return Content(lst, "application/json"); 
            //return new
            //{
            //    sEcho = 4,
            //    iTotalRecords = 5,
            //    iTotalDisplayRecords = 5,
            //    aaData = lst
            //};

        }
    }
}
