using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GreenTravel.Models;
using System.Data.SqlClient;
using System.Data;
using GreenTravel.Models.Comman;
namespace GreenTravel.App_DbService
{
    public class DBFormsetup : Base
    {
        public DataSet insertdata(Formsetup FS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@SrNo", FS.SrNo);
                _cmd.Parameters.AddWithValue("@FormName", FS.FormName);
                _cmd.Parameters.AddWithValue("@FormPrefixCode", FS.FormPrefixCode);
                _cmd.Parameters.AddWithValue("@Corporate", FS.Corporate);
                _cmd.Parameters.AddWithValue("@Module", FS.Module);
                _cmd.Parameters.AddWithValue("@Screen", FS.Screen);
                _cmd.Parameters.AddWithValue("@FeatureGroup", FS.FeatureGroup);
                _cmd.Parameters.AddWithValue("@Header", FS.Header);
                _cmd.Parameters.AddWithValue("@SubHeader", FS.SubHeader);
                _cmd.Parameters.AddWithValue("@Attribute1", FS.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", FS.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", FS.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", FS.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", FS.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", FS.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", FS.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", FS.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", FS.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", FS.Attribute10);

                if (FS.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(FS.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", FS.EditedBy);

                if (FS.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(FS.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", FS.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", FS.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", FS.TerminalBy);
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
                SqlCommand _cmd = new SqlCommand("Sp_Grid_Form_Master", _cn);
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

        public DataSet BindDropDown(commanbaseParamater CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_Form_Master", _cn);
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
                SqlCommand _cmd = new SqlCommand("sp_Edit_Form_Master", _cn);
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

        public DataSet insertdata_Formtab(FormTab FT)
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
                //_cmd.Parameters.AddWithValue("@EntryDatetime", FT.EntryDatetime);
                _cmd.Parameters.AddWithValue("@EditedBy", FT.EditedBy);
                //_cmd.Parameters.AddWithValue("@EditDatetime", FT.EditDatetime);

                if (FT.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(FT.EntryDatetime, "dd/MM/yyyy", null));
                }

                if (FT.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(FT.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", FT.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", FT.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", FT.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", FT.BranchBy);
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

        public DataSet BindDropDown(CommanFieldPara CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_From_Tab_Master", _cn);
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

        public int insertdata_Standardbutton(StandardButton STB)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_ButtonClass_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", STB.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", STB.CorporateId);
                _cmd.Parameters.AddWithValue("@TabCode", STB.TabCode);
                _cmd.Parameters.AddWithValue("@FormCode", STB.FormCode);
                _cmd.Parameters.AddWithValue("@SaveName", STB.SaveName);
                _cmd.Parameters.AddWithValue("@SaveClass", STB.SaveClass);
                _cmd.Parameters.AddWithValue("@SaveVisibility", STB.SaveVisibility);
                _cmd.Parameters.AddWithValue("@SaveNotification", STB.SaveNotification);
                _cmd.Parameters.AddWithValue("@SaveTask", STB.SaveTask);
                _cmd.Parameters.AddWithValue("@UpdateName", STB.UpdateName);
                _cmd.Parameters.AddWithValue("@UpdateClass", STB.UpdateClass);
                _cmd.Parameters.AddWithValue("@UpdateVisibility", STB.UpdateVisibility);
                _cmd.Parameters.AddWithValue("@UpdateNotification", STB.UpdateNotification);
                _cmd.Parameters.AddWithValue("@UpdateTask", STB.UpdateTask);
                _cmd.Parameters.AddWithValue("@DeleteName", STB.DeleteName);
                _cmd.Parameters.AddWithValue("@DeleteClass", STB.DeleteClass);
                _cmd.Parameters.AddWithValue("@DeleteVisibility", STB.DeleteVisibility);
                _cmd.Parameters.AddWithValue("@DeleteNotification", STB.DeleteNotification);
                _cmd.Parameters.AddWithValue("@DeleteTask", STB.DeleteTask);
                _cmd.Parameters.AddWithValue("@ClearName", STB.ClearName);
                _cmd.Parameters.AddWithValue("@ClearClass", STB.ClearClass);
                _cmd.Parameters.AddWithValue("@ClearVisibility", STB.ClearVisibility);
                _cmd.Parameters.AddWithValue("@ClearNotification", STB.ClearNotification);
                // _cmd.Parameters.AddWithValue("@ClearTask", STB.ClearTask);
                _cmd.Parameters.AddWithValue("@FormQuitName", STB.FormQuitName);
                _cmd.Parameters.AddWithValue("@FormQuitClass", STB.FormQuitClass);
                _cmd.Parameters.AddWithValue("@FormQuitVisibility", STB.FormQuitVisibility);
                _cmd.Parameters.AddWithValue("@FormQuitNotification", STB.FormQuitNotification);
                _cmd.Parameters.AddWithValue("@FormQuitTask", STB.FormQuitTask);
                _cmd.Parameters.AddWithValue("@Attribute1", STB.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", STB.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", STB.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", STB.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", STB.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", STB.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", STB.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", STB.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", STB.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", STB.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", STB.CreatedBy);
                if (STB.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(STB.EntryDatetime, "dd/MM/yyyy", null));
                }
                if (STB.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(STB.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", STB.EditedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", STB.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", STB.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", STB.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", STB.BranchBy);
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

        public DataSet BindGridFormTab(GridFormTab GFT)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("Sp_Grid_Form_Tab_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", GFT.tablename);
                _cmd.Parameters.AddWithValue("@Corporate", GFT.Corporate);
                _cmd.Parameters.AddWithValue("@unit", GFT.unit);
                _cmd.Parameters.AddWithValue("@userid", GFT.userid);
                _cmd.Parameters.AddWithValue("@WhereClause", GFT.WhereClause);
                _cmd.Parameters.AddWithValue("@Branch", GFT.Branch);
                _cmd.Parameters.AddWithValue("@PageNo", GFT.PageNo);
                _cmd.Parameters.AddWithValue("@RecordsPerPage", GFT.RecordsPerPage);
                _cmd.Parameters.AddWithValue("@Formcode", GFT.Formcode);
                _cmd.Parameters.AddWithValue("@Formtabcode", GFT.Formtabcode);
                _cmd.Parameters.AddWithValue("@type", GFT.type);
                _cmd.Parameters.AddWithValue("@Segment", GFT.Segment);
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

        public int insertdata_SectionMaster(Section_Master SM)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_Section_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", SM.srno);
                _cmd.Parameters.AddWithValue("@CorporateId", SM.CorporateId);
                _cmd.Parameters.AddWithValue("@TabCode", SM.TabCode);
                _cmd.Parameters.AddWithValue("@FormCode", SM.FormCode);
                _cmd.Parameters.AddWithValue("@SectionName", SM.SectionName);
                _cmd.Parameters.AddWithValue("@Attribute1", SM.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", SM.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", SM.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", SM.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", SM.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", SM.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", SM.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", SM.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", SM.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", SM.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", SM.CreatedBy);
                if (SM.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(SM.EntryDatetime, "dd/MM/yyyy", null));
                }
                if (SM.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(SM.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", SM.EditedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", SM.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", SM.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", SM.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", SM.BranchBy);
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

        public int insertdata_CustomMaster(Custom_Master CustomM)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_CustomButtons_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", CustomM.srno);
                _cmd.Parameters.AddWithValue("@Corporate", CustomM.Corporate);
                _cmd.Parameters.AddWithValue("@TabCode", CustomM.TabCode);
                _cmd.Parameters.AddWithValue("@FormCode", CustomM.FormCode);

                _cmd.Parameters.AddWithValue("@CustomName", CustomM.CustomName);
                _cmd.Parameters.AddWithValue("@CustomClass", CustomM.CustomClass);
                _cmd.Parameters.AddWithValue("@CustomVisibility", CustomM.CustomVisibility);
                _cmd.Parameters.AddWithValue("@CustomNotification", CustomM.CustomNotification);
                _cmd.Parameters.AddWithValue("@CustomTask", CustomM.CustomTask);
                
                _cmd.Parameters.AddWithValue("@Attribute1", CustomM.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", CustomM.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", CustomM.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", CustomM.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", CustomM.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", CustomM.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", CustomM.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", CustomM.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", CustomM.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", CustomM.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", CustomM.CreatedBy);
                if (CustomM.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CustomM.EntryDatetime, "dd/MM/yyyy", null));
                }
                if (CustomM.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CustomM.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", CustomM.EditedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CustomM.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CustomM.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CustomM.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", CustomM.BranchBy);
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

        public DataSet BindUtility(CommanFieldPara CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_Form_Utility_Master", _cn);
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

        public DataSet Edit_FormTab(Edit_AdminMaster EA)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_Form_Tab_Master", _cn);
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

        public int insertdata_Utility(Utility _Utility)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_Utility_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", _Utility.srno);
                _cmd.Parameters.AddWithValue("@Corporate", _Utility.CorporateId);
                _cmd.Parameters.AddWithValue("@TabCode", _Utility.TabCode);
                _cmd.Parameters.AddWithValue("@FormCode", _Utility.FormCode);
                _cmd.Parameters.AddWithValue("@Utilities", _Utility.Utilities);
                _cmd.Parameters.AddWithValue("@Attribute1", _Utility.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", _Utility.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", _Utility.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", _Utility.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", _Utility.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", _Utility.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", _Utility.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", _Utility.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", _Utility.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", _Utility.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", _Utility.CreatedBy);
                if (_Utility.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(_Utility.EntryDatetime, "dd/MM/yyyy", null));
                }
                if (_Utility.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(_Utility.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", _Utility.EditedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", _Utility.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", _Utility.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", _Utility.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", _Utility.BranchBy);
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

    }

}