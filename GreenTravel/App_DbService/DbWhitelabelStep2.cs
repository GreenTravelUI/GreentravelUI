using GreenTravel.Models;
using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenTravel.App_DbService
{
    public class DbWhitelabelStep2 : Base
    {

        public DataSet Base(WhitelabelStep2 CFP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_White_Register_Step2", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", CFP.Module);
                _cmd.Parameters.AddWithValue("@screen", CFP.screen);
                _cmd.Parameters.AddWithValue("@FormCode", CFP.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", CFP.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", CFP.Corporate);
                _cmd.Parameters.AddWithValue("@unit", CFP.unit);
                _cmd.Parameters.AddWithValue("@Branch", CFP.Branch);
                _cmd.Parameters.AddWithValue("@userid", CFP.userid);
                _cmd.Parameters.AddWithValue("@Ip", CFP.Ip);
                _cmd.Parameters.AddWithValue("@control", CFP.control);
                _cmd.Parameters.AddWithValue("@Type", CFP.Type);
                _cmd.Parameters.AddWithValue("@field1", CFP.Field1);
                _cmd.Parameters.AddWithValue("@field2", CFP.Field2);
                _cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter _adp = new SqlDataAdapter(_cmd);
                DataSet _ds = new DataSet();
                _adp.Fill(_ds);
                _adp.Dispose();
                _cmd.Dispose();
                return _ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                _cn.Close();
                _cn.Dispose();
            }
        }
        public DataSet Basegrid(string id)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_White_Register_Step2", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", "0");
                _cmd.Parameters.AddWithValue("@screen","0");
                _cmd.Parameters.AddWithValue("@FormCode", "0");
                _cmd.Parameters.AddWithValue("@TabCode", "0");
                _cmd.Parameters.AddWithValue("@Corporate", "1");
                _cmd.Parameters.AddWithValue("@unit", "1");
                _cmd.Parameters.AddWithValue("@Branch", "0");
                _cmd.Parameters.AddWithValue("@userid", "0");
                _cmd.Parameters.AddWithValue("@Ip", "");
                _cmd.Parameters.AddWithValue("@control", "DrpFeatureGroup");
                _cmd.Parameters.AddWithValue("@Type", "Conditional");
                _cmd.Parameters.AddWithValue("@field1", id);
                _cmd.Parameters.AddWithValue("@field2", "");
                _cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter _adp = new SqlDataAdapter(_cmd);
                DataSet _ds = new DataSet();
                _adp.Fill(_ds);
                _adp.Dispose();
                _cmd.Dispose();
                return _ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                _cn.Close();
                _cn.Dispose();
            }
        }
      

    }
}