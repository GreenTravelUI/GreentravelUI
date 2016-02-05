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
                _cmd.Parameters.AddWithValue("@screen", "0");
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
        public DataSet Insert(WhitelabelStep2 CFP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_White_feature_mapping", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@srno", CFP.srno);
                _cmd.Parameters.AddWithValue("@Corporate", CFP.Corporate);
                //_cmd.Parameters.AddWithValue("@Module", CFP.Module);
                //_cmd.Parameters.AddWithValue("@Screen", CFP.screen);
                _cmd.Parameters.AddWithValue("@FeaturesCategory", CFP.FeaturesCategory);
                _cmd.Parameters.AddWithValue("@FeatureGroup", CFP.FeatureGroup);
                _cmd.Parameters.AddWithValue("@Feature", CFP.Feature);
                //_cmd.Parameters.AddWithValue("@Attribute1", CFP.Attribute1);
                //_cmd.Parameters.AddWithValue("@Attribute2", CFP.Attribute2);
                //_cmd.Parameters.AddWithValue("@Attribute3", CFP.Attribute3);
                //_cmd.Parameters.AddWithValue("@Attribute4", CFP.Attribute4);
                //_cmd.Parameters.AddWithValue("@Attribute5", CFP.Attribute5);
                //_cmd.Parameters.AddWithValue("@Attribute6", CFP.Attribute6);
                //_cmd.Parameters.AddWithValue("@Attribute7", CFP.Attribute7);
                //_cmd.Parameters.AddWithValue("@Attribute8", CFP.Attribute8);
                //_cmd.Parameters.AddWithValue("@Attribute9", CFP.Attribute9);
                //_cmd.Parameters.AddWithValue("@Attribute10", CFP.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", CFP.CreatedBy);
                _cmd.Parameters.AddWithValue("@EntryDatetime", CFP.EntryDatetime);
                _cmd.Parameters.AddWithValue("@EditedBy", CFP.EditedBy);
                _cmd.Parameters.AddWithValue("@EditDatetime", CFP.EditDatetime);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CFP.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CFP.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CFP.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", CFP.BranchBy);
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