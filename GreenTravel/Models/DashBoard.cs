using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class DashBoard : CommanPara
    {

    }
    public class Module : CommanPara
    {
        public string ModuleCode { get; set; }
        public string ModuleName { get; set; }
        public string Role { get; set; }

    }
    public class Screen : CommanPara
    {
        public string ModuleCode { get; set; }
        public string ModuleName { get; set; }
        public string ScreenName { get; set; }
        public string Screencode { get; set; }
        public string VieWright { get; set; }
        public string AddRights { get; set; }
        public string updaterights { get; set; }
        public string Deleterights { get; set; }
        public string Roletype { get; set; }


    }

}