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
using System.Data.SqlClient;

namespace GreenTravel.App_DbService
{
    public class WhitelabelAccessRights : Base
    {
        GreenTravel.Models.WhitelabelAccessRights _objWhitelabelAccessRights = new GreenTravel.Models.WhitelabelAccessRights();

        public DataSet BindDropdown_Base(CommanFieldPara CFP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload__User_Details_Master", _cn);
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
                _cmd.Parameters.AddWithValue("@Type", CFP.Type);
                _cmd.Parameters.AddWithValue("@Srno", CFP.Srno);
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
        public DataSet BindDropdown_FormLoad(CommanFieldConditionalPara CFCP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base__User_Details_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", CFCP.Module);
                _cmd.Parameters.AddWithValue("@screen", CFCP.screen);
                _cmd.Parameters.AddWithValue("@FormCode", CFCP.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", CFCP.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", CFCP.Corporate);
                _cmd.Parameters.AddWithValue("@unit", CFCP.unit);
                _cmd.Parameters.AddWithValue("@Branch", CFCP.Branch);
                _cmd.Parameters.AddWithValue("@userid", CFCP.userid);
                _cmd.Parameters.AddWithValue("@Ip", CFCP.Ip);
                _cmd.Parameters.AddWithValue("@Type", CFCP.Type);
                _cmd.Parameters.AddWithValue("@field1", CFCP.field1);
                _cmd.Parameters.AddWithValue("@field2", CFCP.field2);
                _cmd.Parameters.AddWithValue("@field3", CFCP.field3);
                _cmd.Parameters.AddWithValue("@field4", CFCP.field4);
                _cmd.Parameters.AddWithValue("@field5", CFCP.field5);
                _cmd.Parameters.AddWithValue("@Control", CFCP.Control);
                _cmd.Parameters.AddWithValue("@Srno", CFCP.Srno);
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