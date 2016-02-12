using GreenTravel.Models;
using GreenTravel.Models.Comman;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

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
                DataTable dt = new DataTable();
                if (dt.Columns.Count == 0)
                {
                    dt.Columns.Add("id", typeof(int));
                    dt.Columns.Add("Srno", typeof(string));
                    dt.Columns.Add("Featuregroup", typeof(string));
                    dt.Columns.Add("Feature", typeof(string));
                    dt.Columns.Add("Attribute1", typeof(string));
                    dt.Columns.Add("Attribute2", typeof(string));
                    dt.Columns.Add("Attribute3", typeof(string));
                    dt.Columns.Add("Attribute4", typeof(string));
                    dt.Columns.Add("Attribute5", typeof(string));
                    dt.Columns.Add("Attribute6", typeof(string));
                    dt.Columns.Add("Attribute7", typeof(string));
                    dt.Columns.Add("Attribute8", typeof(string));
                    dt.Columns.Add("Attribute9", typeof(string));
                    dt.Columns.Add("Attribute10", typeof(string));
                    dt.Columns.Add("UnitCorpBy", typeof(string));
                    dt.Columns.Add("BranchBy", typeof(string));
                    dt.Columns.Add("CreatedBy", typeof(string));
                    dt.Columns.Add("EntryDatetime", typeof(DateTime));
                    dt.Columns.Add("EditedBy", typeof(string));
                    dt.Columns.Add("EditDatetime", typeof(DateTime));
                    dt.Columns.Add("CorpcentreBy", typeof(string));
                    dt.Columns.Add("TerminalBy", typeof(string));

                }
                var arrGroup = ((string[])(CFP.groupAry))[0];
                arrGroup = arrGroup.Replace("[", String.Empty);
                arrGroup = arrGroup.Replace("]", String.Empty);
                arrGroup = arrGroup.Replace("\"", String.Empty);
                var arrGroups = arrGroup.Split(',');

                string[] arr = (string[])CFP.groupAry;
                object[] arr1 = (object[])CFP.FeatureAry;

                var arrFeature = ((string[])(CFP.FeatureAry))[0];
                arrFeature = arrFeature.Replace("[", String.Empty);
                arrFeature = arrFeature.Replace("]", String.Empty);
                arrFeature = arrFeature.Replace("\"", String.Empty);
                var arrFeatures = arrFeature.Split(',');
                 int Count = 0;
                foreach (object item in arrGroups)
                {
                    DataRow dr = dt.NewRow();
                    dr["Featuregroup"] = item.ToString();
                    //dr["Feature"] = "";
                    int count2 = 0;
                    foreach (object Index in arrFeatures)
                    {
                        if (Count == count2)
                        { 
                            dr["Feature"] = Index.ToString(); 
                        }
                        count2++;
                    }
                  //  dr["Feature"] = "";
                    dr["Attribute1"] = CFP.Attribute1;
                    dr["Attribute2"] = CFP.Attribute2;
                    dr["Attribute3"] = CFP.Attribute3;
                    dr["Attribute4"] = CFP.Attribute4;
                    dr["Attribute5"] = CFP.Attribute5;
                    dr["Attribute6"] = CFP.Attribute6;
                    dr["Attribute7"] = CFP.Attribute7;
                    dr["Attribute8"] = CFP.Attribute8;
                    dr["Attribute9"] = CFP.Attribute9;
                    dr["Attribute10"] = CFP.Attribute10;
                    dr["Unitcorpby"] = CFP.UnitCorpBy;
                    dr["Branchby"] = CFP.BranchBy;
                    dr["CreatedBy"] = CFP.CreatedBy;
                    dr["EntryDatetime"] = DBNull.Value;
                    dr["EditedBy"] = CFP.CreatedBy;
                    dr["EditDatetime"] = DBNull.Value; ;
                    dr["CorpcentreBy"] = CFP.CorpcentreBy;
                    dr["TerminalBy"] = CFP.TerminalBy;
                    dt.Rows.Add(dr);
                    Count++;
                }

                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_White_feature_mapping", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@srno", CFP.srno);
                _cmd.Parameters.AddWithValue("@Corporate", CFP.Corporate);
                _cmd.Parameters.AddWithValue("@Module", CFP.Module);
                _cmd.Parameters.AddWithValue("@Screen", CFP.screen);
                _cmd.Parameters.AddWithValue("@FeaturesCategory", CFP.FeaturesCategory);
                _cmd.Parameters.AddWithValue("@Attribute1", CFP.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", CFP.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", CFP.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", CFP.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", CFP.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", CFP.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", CFP.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", CFP.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", CFP.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", CFP.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", CFP.CreatedBy);
                _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                _cmd.Parameters.AddWithValue("@EditedBy", CFP.CreatedBy);
                _cmd.Parameters.AddWithValue("@EditDatetime",DBNull.Value);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CFP.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CFP.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CFP.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", CFP.BranchBy);
                if (dt != null)
                {
                    SqlParameter parameter = new SqlParameter();
                    parameter.ParameterName = "@TYPE";
                    parameter.SqlDbType = System.Data.SqlDbType.Structured;
                    parameter.Value = dt;
                    _cmd.Parameters.Add(parameter);
                }
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

        public DataSet Edit(WhitelabelStep2 CFP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_White_feature_mapping", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", CFP.tablename);
                _cmd.Parameters.AddWithValue("@Corporate", CFP.Corporate);
                _cmd.Parameters.AddWithValue("@unit", CFP.unit);
                _cmd.Parameters.AddWithValue("@Formcode", CFP.FormCode);
                _cmd.Parameters.AddWithValue("@Formtabcode", DBNull.Value);
                _cmd.Parameters.AddWithValue("@srno", CFP.srno);
                _cmd.Parameters.AddWithValue("@Type", CFP.Type);
               
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