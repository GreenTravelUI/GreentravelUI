﻿using JQueryDataTables.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class GridParamater : JQueryDataTableParamModel
    {
        public string tablename { get; set; }
        public string Corporate { get; set; }
        public string unit { get; set; }
        public string userid { get; set; }
        public string WhereClause { get; set; }
        public string Branch { get; set; }
        public string PageNo { get; set; }
        public string RecordsPerPage { get; set; }
        public string Formcode { get; set; }
        public string Formtabcode { get; set; }
        public string type { get; set; }
        public string Segment { get; set; }
    }
}