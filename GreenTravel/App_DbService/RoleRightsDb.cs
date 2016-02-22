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
    public class RoleRightsDb : Base
    {
        GreenTravel.Models.WhitelabelAccessRights _objWhitelabelAccessRights = new GreenTravel.Models.WhitelabelAccessRights();

        public DataSet BindDropdown_FormLoadAccessRights(CommanFieldPara CFP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_RoleMaster", _cn);
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
        public DataSet BindDropdown_BaseAccessRights(CommanFieldConditionalPara CFCP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_RoleMaster", _cn);
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
        public DataSet Insert(UserWiseRights _objUserWiseRights)
        {
            try
            {
                DataTable dt = new DataTable();
                if (dt.Columns.Count == 0)
                {
                    dt.Columns.Add("id", typeof(int));
                    dt.Columns.Add("Srno", typeof(string));
                    dt.Columns.Add("Modulecode", typeof(string));
                    dt.Columns.Add("Screencode", typeof(string));
                    dt.Columns.Add("Viewrights", typeof(string));
                    dt.Columns.Add("Addrights", typeof(string));
                    dt.Columns.Add("Updaterights", typeof(string));
                    dt.Columns.Add("Deleterights", typeof(string));
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
                    dt.Columns.Add("EditedBy", typeof(string));
                    dt.Columns.Add("CorpcentreBy", typeof(string));
                    dt.Columns.Add("TerminalBy", typeof(string));
                }
                string json = (_objUserWiseRights.GridAry);
                var items = JsonConvert.DeserializeObject<List<GridColumnScreen>>(json);
                var I = items.Count;

                foreach (GridColumnScreen item in items)
                {
                    DataRow dr = dt.NewRow();


                   // dr["Srno"] = item.Module.ToString();
                    dr["Modulecode"] = item.Module.ToString();
                    dr["Screencode"] = item.SCR.ToString();
                    dr["Viewrights"] = item.view.ToString();
                    dr["Addrights"] = item.create.ToString();
                    dr["Updaterights"] = item.update.ToString();
                    dr["Deleterights"] = item.deletee.ToString();
                    dr["Attribute1"] = _objUserWiseRights.Attribute1;
                    dr["Attribute2"] = _objUserWiseRights.Attribute2;
                    dr["Attribute3"] = _objUserWiseRights.Attribute3;
                    dr["Attribute4"] = _objUserWiseRights.Attribute4;
                    dr["Attribute5"] = _objUserWiseRights.Attribute5;
                    dr["Attribute6"] = _objUserWiseRights.Attribute6;
                    dr["Attribute7"] = _objUserWiseRights.Attribute7;
                    dr["Attribute8"] = _objUserWiseRights.Attribute8;
                    dr["Attribute9"] = _objUserWiseRights.Attribute9;
                    dr["Attribute10"] = _objUserWiseRights.Attribute10;
                    dr["UnitCorpBy"] = _objUserWiseRights.UnitCorpBy;
                    dr["BranchBy"] = _objUserWiseRights.BranchBy;
                    dr["CreatedBy"] = _objUserWiseRights.CreatedBy;
                    dr["EditedBy"] = _objUserWiseRights.CreatedBy;
                    dr["CorpcentreBy"] = _objUserWiseRights.UnitCorpBy;
                    dr["TerminalBy"] = _objUserWiseRights.UnitCorpBy;
                    dt.Rows.Add(dr);
                }

                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_RoleMaster", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", _objUserWiseRights.srno);
              //  _cmd.Parameters.AddWithValue("@UserId", _objUserWiseRights.UserId);
                _cmd.Parameters.AddWithValue("@Corporate", _objUserWiseRights.Corporate);
                _cmd.Parameters.AddWithValue("@Unit", _objUserWiseRights.Unit);
                _cmd.Parameters.AddWithValue("@Location", _objUserWiseRights.Location);
                _cmd.Parameters.AddWithValue("@Branch", _objUserWiseRights.Branch);
                _cmd.Parameters.AddWithValue("@Role", _objUserWiseRights.Role);
                _cmd.Parameters.AddWithValue("@RoleType", _objUserWiseRights.RoleType);
                if (_objUserWiseRights.EffectiveDate == null)
                {
                    _cmd.Parameters.AddWithValue("@EffectiveDate", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EffectiveDate", DateTime.ParseExact(_objUserWiseRights.EffectiveDate, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@IsActive", (_objUserWiseRights.IsActive));
               // _cmd.Parameters.AddWithValue("@IsDefault", bool.Parse(_objUserWiseRights.IsDefault));
                _cmd.Parameters.AddWithValue("@Status", _objUserWiseRights.Status);
                _cmd.Parameters.AddWithValue("@Attribute1", _objUserWiseRights.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", _objUserWiseRights.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", _objUserWiseRights.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", _objUserWiseRights.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", _objUserWiseRights.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", _objUserWiseRights.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", _objUserWiseRights.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", _objUserWiseRights.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", _objUserWiseRights.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", _objUserWiseRights.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", _objUserWiseRights.CreatedBy);
                _cmd.Parameters.AddWithValue("@EditedBy", _objUserWiseRights.CreatedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", _objUserWiseRights.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", _objUserWiseRights.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", _objUserWiseRights.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", _objUserWiseRights.BranchBy);
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
        public DataSet Edit_AccessRights(UserWiseRights _objUserWiseRights)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_RoleMaster", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", _objUserWiseRights.tablename);
                _cmd.Parameters.AddWithValue("@Corporate", _objUserWiseRights.Corporate);
                _cmd.Parameters.AddWithValue("@unit", _objUserWiseRights.Unit);
                _cmd.Parameters.AddWithValue("@Location", _objUserWiseRights.Location);
                _cmd.Parameters.AddWithValue("@Role", _objUserWiseRights.Role);
                _cmd.Parameters.AddWithValue("@UserId", _objUserWiseRights.UserId);
                _cmd.Parameters.AddWithValue("@Formcode", _objUserWiseRights.Formcode);
                _cmd.Parameters.AddWithValue("@Formtabcode", _objUserWiseRights.Formtabcode);
                _cmd.Parameters.AddWithValue("@srno", _objUserWiseRights.srno);
                _cmd.Parameters.AddWithValue("@Type", "EditMode");
                _cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter _adp = new SqlDataAdapter(_cmd);
                DataSet _ds = new DataSet();
                _adp.Fill(_ds);
                _adp.Dispose();
                _cmd.Dispose();
                return _ds;
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                _cn.Close();
                _cn.Dispose();
            }
        }
        public DataSet BindGrid(GridParamater GP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("Sp_Grid_RoleMaster", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", GP.tablename);
                _cmd.Parameters.AddWithValue("@Corporate", GP.Corporate);
                _cmd.Parameters.AddWithValue("@unit", GP.unit);
                _cmd.Parameters.AddWithValue("@userid", GP.userid);
                _cmd.Parameters.AddWithValue("@WhereClause", GP.WhereClause);
                _cmd.Parameters.AddWithValue("@Branch", GP.Branch);
                _cmd.Parameters.AddWithValue("@PageNo", GP.PageNo);
                _cmd.Parameters.AddWithValue("@RecordsPerPage", GP.RecordsPerPage);
                _cmd.Parameters.AddWithValue("@Formcode", GP.Formcode);
                _cmd.Parameters.AddWithValue("@Formtabcode", GP.Formtabcode);
                _cmd.Parameters.AddWithValue("@type", GP.type);
                _cmd.Parameters.AddWithValue("@Segment", GP.Segment);
                _cmd.Parameters.AddWithValue("@Field1", GP.Field1);
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