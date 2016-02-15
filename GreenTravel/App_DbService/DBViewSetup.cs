using GreenTravel.Models;
using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace GreenTravel.App_DbService
{
    public class DBViewSetup:Base
    {
        //Create View  Tab 
        public DataSet BindDropDownFormLoad(CommanFieldPara CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_ViewSetup", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", CBP.Module);
                _cmd.Parameters.AddWithValue("@screen", CBP.screen);
                _cmd.Parameters.AddWithValue("@FormCode", CBP.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", CBP.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", CBP.Corporate);
                _cmd.Parameters.AddWithValue("@unit", CBP.unit);
                _cmd.Parameters.AddWithValue("@Branch", CBP.Branch);
                _cmd.Parameters.AddWithValue("@userid", CBP.userid);
                _cmd.Parameters.AddWithValue("@Ip", CBP.Ip);
                _cmd.Parameters.AddWithValue("@Type", "DropDown");
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
        public DataSet BindDropDownBase(commanbaseParamater CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_ViewSetup", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", CBP.Module);
                _cmd.Parameters.AddWithValue("@screen", CBP.screen);
                _cmd.Parameters.AddWithValue("@FormCode", CBP.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", CBP.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", CBP.Corporate);
                _cmd.Parameters.AddWithValue("@unit", CBP.unit);
                _cmd.Parameters.AddWithValue("@Branch", CBP.Branch);
                _cmd.Parameters.AddWithValue("@userid", CBP.userid);
                _cmd.Parameters.AddWithValue("@Ip", CBP.Ip);
                _cmd.Parameters.AddWithValue("@Type", CBP.Type);
                _cmd.Parameters.AddWithValue("@field1", CBP.field1);
                _cmd.Parameters.AddWithValue("@field2", CBP.field2);
                _cmd.Parameters.AddWithValue("@field3", CBP.field3);
                _cmd.Parameters.AddWithValue("@field4", CBP.field4);
                _cmd.Parameters.AddWithValue("@field5", CBP.field5);
                _cmd.Parameters.AddWithValue("@Control", CBP.Control);
                _cmd.Parameters.AddWithValue("@Srno", CBP.Srno);
                _cmd.Parameters.AddWithValue("@Language", CBP.Language);
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
        public DataSet insertdata(ViewSetup _ViewSetup)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_ViewSetup", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@SrNo", _ViewSetup.srno);
                _cmd.Parameters.AddWithValue("@Corporate", _ViewSetup.Corporate);
                _cmd.Parameters.AddWithValue("@Module", _ViewSetup.Module);
                _cmd.Parameters.AddWithValue("@Screen", _ViewSetup.Screen);
                _cmd.Parameters.AddWithValue("@FormCode", _ViewSetup.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", _ViewSetup.TabCode);
                _cmd.Parameters.AddWithValue("@ViewName", _ViewSetup.ViewName);
                _cmd.Parameters.AddWithValue("@RecordCountQuery", _ViewSetup.RecordCountQuery);
                _cmd.Parameters.AddWithValue("@ColumnQuery", _ViewSetup.ColumnQuery);
                _cmd.Parameters.AddWithValue("@WhereQuery", _ViewSetup.WhereQuery);
                _cmd.Parameters.AddWithValue("@GroupQuery", _ViewSetup.GroupQuery);
                _cmd.Parameters.AddWithValue("@IsMasterView", _ViewSetup.IsMasterView);
                _cmd.Parameters.AddWithValue("@MasterTable", _ViewSetup.MasterTable);
                _cmd.Parameters.AddWithValue("@Attribute1", _ViewSetup.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", _ViewSetup.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", _ViewSetup.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", _ViewSetup.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", _ViewSetup.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", _ViewSetup.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", _ViewSetup.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", _ViewSetup.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", _ViewSetup.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", _ViewSetup.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", _ViewSetup.CreatedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", _ViewSetup.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", _ViewSetup.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", _ViewSetup.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", _ViewSetup.BranchBy);
                SqlDataAdapter adp = new SqlDataAdapter(_cmd);
                DataSet ds = new DataSet();
                adp.Fill(ds);
                adp.Dispose();
                _cmd.Dispose();
                return ds;
            }
            catch
            {
                throw;
            }
            finally
            {
                _cn.Close();
                _cn.Dispose();
            }

        }
        public DataSet BindGrid(Gridformsetup GP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("Sp_Grid_ViewSetup", _cn);
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
        public DataSet Edit_data(Edit_AdminMaster EA)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_ViewSetup", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", EA.tablename);
                _cmd.Parameters.AddWithValue("@Corporate", EA.Corporate);
                _cmd.Parameters.AddWithValue("@unit", EA.unit);
                _cmd.Parameters.AddWithValue("@Formcode", EA.Formcode);
                _cmd.Parameters.AddWithValue("@Formtabcode", EA.Formtabcode);
                _cmd.Parameters.AddWithValue("@srno", EA.Xmaster);
                _cmd.Parameters.AddWithValue("@Type", EA.Type);
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
    }
}