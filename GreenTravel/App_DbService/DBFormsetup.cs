using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GreenTravel.Models;
using System.Data.SqlClient;
using System.Data;
namespace GreenTravel.App_DbService
{
    public class DBFormsetup : Base
    {
        public int insertdata(Formsetup CM)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@SrNo", CM.SrNo);
                _cmd.Parameters.AddWithValue("@FormName", CM.FormName);
                _cmd.Parameters.AddWithValue("@FormPrefixCode", CM.FormPrefixCode);
                _cmd.Parameters.AddWithValue("@Corporate", CM.Corporate);
                _cmd.Parameters.AddWithValue("@Module", CM.Module);
                _cmd.Parameters.AddWithValue("@Screen", CM.Screen);
                _cmd.Parameters.AddWithValue("@FeatureGroup", CM.FeatureGroup);
                _cmd.Parameters.AddWithValue("@Header", CM.Header);
                _cmd.Parameters.AddWithValue("@SubHeader", CM.SubHeader);
              
                _cmd.Parameters.AddWithValue("@Attribute1", CM.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", CM.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", CM.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", CM.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", CM.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", CM.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", CM.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", CM.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", CM.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", CM.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", CM.CreatedBy);
                _cmd.Parameters.AddWithValue("@EntryDatetime", CM.EntryDatetime);
                _cmd.Parameters.AddWithValue("@EditedBy", CM.EditedBy);

                _cmd.Parameters.AddWithValue("@EditDatetime", CM.EditDatetime);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CM.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CM.UnitCorpBy);

                _cmd.Parameters.AddWithValue("@TerminalBy", CM.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchId", CM.BranchId);
              
               
                //if (CM.EntryDatetime == null)
                //{
                //    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                //}
                //else
                //{
                //    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CM.EntryDatetime, "dd/MM/yyyy", null));
                //}
                //_cmd.Parameters.AddWithValue("@EditedBy", CM.EditedBy);

                //if (CM.EditDatetime == null)
                //{
                //    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                //}
                //else
                //{
                //    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CM.EditDatetime, "dd/MM/yyyy", null));
                //}
                //_cmd.Parameters.AddWithValue("@CorpcentreBy", CM.CorpcentreBy);
                //_cmd.Parameters.AddWithValue("@UnitCorpBy", CM.UnitCorpBy);
                //_cmd.Parameters.AddWithValue("@TerminalBy", CM.TerminalBy);

                //_cmd.Parameters.AddWithValue("@Corporate", CM.Corporate);
                int i = _cmd.ExecuteNonQuery();
                return i;
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


        public DataSet BindDropDown(Formlode Fl)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_Form_Master ", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", Fl.Module);
                _cmd.Parameters.AddWithValue("@screen", Fl.screen);
                _cmd.Parameters.AddWithValue("@FormCode", Fl.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", Fl.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", Fl.Corporate);
                _cmd.Parameters.AddWithValue("@unit", Fl.unit);
                _cmd.Parameters.AddWithValue("@Branch", Fl.Branch);
                _cmd.Parameters.AddWithValue("@userid", Fl.userid);
                _cmd.Parameters.AddWithValue("@Ip", Fl.Ip);
                _cmd.Parameters.AddWithValue("@Type", Fl.Type);
              
                _cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter _adp = new SqlDataAdapter(_cmd);
                DataSet _ds = new DataSet();
                _adp.Fill(_ds);
                //_adp.Dispose();
                //_cmd.Dispose();
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

        public DataSet BindDropDown1(Baseformsetup BFS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_Form_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", BFS.Module);
                _cmd.Parameters.AddWithValue("@screen", BFS.screen);
                _cmd.Parameters.AddWithValue("@FormCode", BFS.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", BFS.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", BFS.Corporate);
                _cmd.Parameters.AddWithValue("@unit", BFS.unit);
                _cmd.Parameters.AddWithValue("@Branch", BFS.Branch);
                _cmd.Parameters.AddWithValue("@userid", BFS.userid);
                _cmd.Parameters.AddWithValue("@Ip", BFS.Ip);
                _cmd.Parameters.AddWithValue("@Type", BFS.Type);
                _cmd.Parameters.AddWithValue("@field1", BFS.field1);
                _cmd.Parameters.AddWithValue("@field2", BFS.field2);
                _cmd.Parameters.AddWithValue("@field3", BFS.field3);
                _cmd.Parameters.AddWithValue("@field4", BFS.field4);
                _cmd.Parameters.AddWithValue("@field5", BFS.field5);
                _cmd.Parameters.AddWithValue("@Control", BFS.Control);
                _cmd.Parameters.AddWithValue("@Srno", BFS.Srno);
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


        public int insertdata_Formtab(FormTab FT)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_Tab_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@SrNo", FT.SrNo);
                _cmd.Parameters.AddWithValue("@Corporate", FT.Corporate);
                _cmd.Parameters.AddWithValue("@FormCode", FT.FormCode);
                _cmd.Parameters.AddWithValue("@TabNumber", FT.TabNumber);
                _cmd.Parameters.AddWithValue("@TabHeader", FT.TabHeader);
                _cmd.Parameters.AddWithValue("@TabClass", FT.TabClass);
                _cmd.Parameters.AddWithValue("@TooltipHelpText", FT.TooltipHelpText);
                _cmd.Parameters.AddWithValue("@MasterTable", FT.MasterTable);
                _cmd.Parameters.AddWithValue("@MasterTablePrefix", FT.MasterTablePrefix);
             
                _cmd.Parameters.AddWithValue("@TrxTable1", FT.TrxTable1);
                _cmd.Parameters.AddWithValue("@TrxTable2", FT.TrxTable2);
                _cmd.Parameters.AddWithValue("@TrxTable3", FT.TrxTable3);
                _cmd.Parameters.AddWithValue("@TrxTable4", FT.TrxTable4);
                _cmd.Parameters.AddWithValue("@TrxTable5", FT.TrxTable5);
                _cmd.Parameters.AddWithValue("@TrxTable6", FT.TrxTable6);
                _cmd.Parameters.AddWithValue("@TrxTable7", FT.TrxTable7);
                _cmd.Parameters.AddWithValue("@TrxTable8", FT.TrxTable8);
                _cmd.Parameters.AddWithValue("@TrxTable9", FT.TrxTable9);
                _cmd.Parameters.AddWithValue("@TrxTable10", FT.TrxTable10);
                _cmd.Parameters.AddWithValue("@SummeryLabel", FT.SummeryLabel);
                _cmd.Parameters.AddWithValue("@Attribute1", FT.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", FT.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", FT.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", FT.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", FT.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", FT.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", FT.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", FT.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", FT.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", FT.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", FT.CreatedBy);
                _cmd.Parameters.AddWithValue("@EntryDatetime", FT.EntryDatetime);
                _cmd.Parameters.AddWithValue("@EditedBy", FT.EditedBy);
                _cmd.Parameters.AddWithValue("@EditDatetime", FT.EditDatetime);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", FT.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", FT.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", FT.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", FT.BranchBy);

                int i = _cmd.ExecuteNonQuery();
                return i;
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


        public DataSet BindDropDown_formtab(Formlode Ft)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_From_Tab_Master ", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", Ft.Module);
                _cmd.Parameters.AddWithValue("@screen", Ft.screen);
                _cmd.Parameters.AddWithValue("@FormCode", Ft.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", Ft.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", Ft.Corporate);
                _cmd.Parameters.AddWithValue("@unit", Ft.unit);
                _cmd.Parameters.AddWithValue("@Branch", Ft.Branch);
                _cmd.Parameters.AddWithValue("@userid", Ft.userid);
                _cmd.Parameters.AddWithValue("@Ip", Ft.Ip);
                _cmd.Parameters.AddWithValue("@Type", Ft.Type);

                _cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter _adp = new SqlDataAdapter(_cmd);
                DataSet _ds = new DataSet();
                _adp.Fill(_ds);
                //_adp.Dispose();
                //_cmd.Dispose();
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


        public DataSet BindDropDown_Formtab(Baseformsetup BFTS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_Form_Tab_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", BFTS.Module);
                _cmd.Parameters.AddWithValue("@screen", BFTS.screen);
                _cmd.Parameters.AddWithValue("@FormCode", BFTS.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", BFTS.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", BFTS.Corporate);
                _cmd.Parameters.AddWithValue("@unit", BFTS.unit);
                _cmd.Parameters.AddWithValue("@Branch", BFTS.Branch);
                _cmd.Parameters.AddWithValue("@userid", BFTS.userid);
                _cmd.Parameters.AddWithValue("@Ip", BFTS.Ip);
                _cmd.Parameters.AddWithValue("@Type", BFTS.Type);
                _cmd.Parameters.AddWithValue("@field1", BFTS.field1);
                _cmd.Parameters.AddWithValue("@field2", BFTS.field2);
                _cmd.Parameters.AddWithValue("@field3", BFTS.field3);
                _cmd.Parameters.AddWithValue("@field4", BFTS.field4);
                _cmd.Parameters.AddWithValue("@field5", BFTS.field5);
                _cmd.Parameters.AddWithValue("@Control", BFTS.Control);
                _cmd.Parameters.AddWithValue("@Srno", BFTS.Srno);
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