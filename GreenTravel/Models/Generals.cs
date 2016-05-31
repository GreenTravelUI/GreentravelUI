using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class Generals
    {
        public GeneralCorporateValues GeneralCorporateValues { get; set; }
        public GeneralLogo GeneralLogo { get; set; }
        public GeneralUserPreference GeneralUserPreference { get; set; }
        public GeneralPasswordConfiguration GeneralPasswordConfiguration { get; set; }

    }
}