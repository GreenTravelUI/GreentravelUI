using PetaPoco;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace GreenTravel.App_DbService
{
    public class Base
    {
        public SqlConnection _cn;

        public Database _petaDB;
        public Base()
        {
            _petaDB = new Database("gtcon");
            _cn = new SqlConnection(ConfigurationManager.ConnectionStrings["gtcon"].ToString());
        }

    }
}