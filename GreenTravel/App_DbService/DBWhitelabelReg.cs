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
    public class DBWhitelabelReg : Base
    {
        public DataSet insert_data(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_White_Register_Basic", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", WR.srno);
                _cmd.Parameters.AddWithValue("@Corporate", WR.Corporate);
                _cmd.Parameters.AddWithValue("@CorpCoOfficialName", WR.CorpCoOfficialName);
                _cmd.Parameters.AddWithValue("@CorpCompanyIndust", WR.CorpCompanyIndust);
                _cmd.Parameters.AddWithValue("@CompanyType", WR.CompanyType);
                _cmd.Parameters.AddWithValue("@Services", WR.Services);
                _cmd.Parameters.AddWithValue("@BusinessMode", WR.BusinessMode);
                _cmd.Parameters.AddWithValue("@AdminUserName", WR.AdminUserName);
                _cmd.Parameters.AddWithValue("@Password", WR.Password);
                _cmd.Parameters.AddWithValue("@ApplicationTheme", WR.ApplicationTheme);
                _cmd.Parameters.AddWithValue("@ApplicationUrl", WR.ApplicationUrl);
                _cmd.Parameters.AddWithValue("@WebTheme", WR.WebTheme);
                _cmd.Parameters.AddWithValue("@WebUrl", WR.WebUrl);
                _cmd.Parameters.AddWithValue("@BaseCurrency", WR.BaseCurrency);
                _cmd.Parameters.AddWithValue("@BaseLanguage", WR.BaseLanguage);
                _cmd.Parameters.AddWithValue("@OtherLanguage", WR.OtherLanguage);
                _cmd.Parameters.AddWithValue("@Logo", WR.Logo);
                _cmd.Parameters.AddWithValue("@Favicon", WR.Favicon);
                _cmd.Parameters.AddWithValue("@OfficialEmail", WR.OfficialEmail);
                _cmd.Parameters.AddWithValue("@OfficialPhone", WR.OfficialPhone);
                _cmd.Parameters.AddWithValue("@FullSemiWhiteLbl", WR.FullSemiWhiteLbl);
                _cmd.Parameters.AddWithValue("@CopyrightNote", WR.CopyrightNote);
                _cmd.Parameters.AddWithValue("@CopyrightNoteFlag", WR.CopyrightNoteFlag);
                _cmd.Parameters.AddWithValue("@LoginFrmCaption", WR.LoginFrmCaption);
                _cmd.Parameters.AddWithValue("@DefaultLogo", WR.DefaultLogo);
                _cmd.Parameters.AddWithValue("@RefCorpCompany", WR.RefCorpCompany);
                _cmd.Parameters.AddWithValue("@OtherReference1", WR.OtherReference1);
                _cmd.Parameters.AddWithValue("@OtherReference2", WR.OtherReference2);
                _cmd.Parameters.AddWithValue("@Commision", WR.Commision);

                _cmd.Parameters.AddWithValue("@Attribute1", WR.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", WR.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", WR.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", WR.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", WR.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", WR.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", WR.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", WR.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", WR.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", WR.Attribute10);

                if (WR.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(WR.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", WR.EditedBy);
                _cmd.Parameters.AddWithValue("@CretedBy", WR.CretedBy);

                if (WR.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(WR.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", WR.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", WR.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", WR.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", WR.BranchBy);
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

        public DataSet BindDropDown(CommanFieldPara CFP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_White_Register_Basic", _cn);
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

        public DataSet BindGrid(GridParamater GP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("Sp_Grid_White_Register_Basic", _cn);
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

        public DataSet Edit_data(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_White_Register_Basic", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", "0");
                _cmd.Parameters.AddWithValue("@Corporate", WR.Corporate);
                _cmd.Parameters.AddWithValue("@unit", "0");
                _cmd.Parameters.AddWithValue("@Formcode", "0");
                _cmd.Parameters.AddWithValue("@Formtabcode", "0");
                _cmd.Parameters.AddWithValue("@srno", WR.srno);
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

        public DataSet insert_BillingMaintencae(Billing_maintanence _Billing_maintanence)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_White_Register_MaintanenceSupport", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", _Billing_maintanence.srno);
                _cmd.Parameters.AddWithValue("@Corporate", _Billing_maintanence.Corporate);
                _cmd.Parameters.AddWithValue("@BillingName", _Billing_maintanence.BillingName);
                _cmd.Parameters.AddWithValue("@BillingContactPerson", _Billing_maintanence.BillingContactPerson);
                _cmd.Parameters.AddWithValue("@BillingAddress1", _Billing_maintanence.BillingAddress1);
                _cmd.Parameters.AddWithValue("@BillingAddress2", _Billing_maintanence.BillingAddress2);
                _cmd.Parameters.AddWithValue("@BillingCity", _Billing_maintanence.BillingCity);
                _cmd.Parameters.AddWithValue("@BillingState", _Billing_maintanence.BillingState);
                _cmd.Parameters.AddWithValue("@BillingCountry", _Billing_maintanence.BillingCountry);
                _cmd.Parameters.AddWithValue("@BillingArea", _Billing_maintanence.BillingArea);
                _cmd.Parameters.AddWithValue("@BillingZipCode", _Billing_maintanence.BillingZipCode);
                _cmd.Parameters.AddWithValue("@BillingEmail", _Billing_maintanence.BillingEmail);
                _cmd.Parameters.AddWithValue("@BillingPhone", _Billing_maintanence.BillingPhone);
                _cmd.Parameters.AddWithValue("@BillingContactMobile", _Billing_maintanence.BillingContactMobile);
                _cmd.Parameters.AddWithValue("@Currency", _Billing_maintanence.Currency);
                _cmd.Parameters.AddWithValue("@SupportMode", _Billing_maintanence.SupportMode);
                _cmd.Parameters.AddWithValue("@FreeSupportPeriod", _Billing_maintanence.FreeSupportPeriod);
                _cmd.Parameters.AddWithValue("@SupportCostPM", _Billing_maintanence.SupportCostPM);
                _cmd.Parameters.AddWithValue("@Attribute1", _Billing_maintanence.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", _Billing_maintanence.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", _Billing_maintanence.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", _Billing_maintanence.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", _Billing_maintanence.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", _Billing_maintanence.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", _Billing_maintanence.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", _Billing_maintanence.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", _Billing_maintanence.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", _Billing_maintanence.Attribute10);
                _cmd.Parameters.AddWithValue("@CretedBy", _Billing_maintanence.CreatedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", _Billing_maintanence.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", _Billing_maintanence.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", _Billing_maintanence.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", _Billing_maintanence.BranchBy);
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


        public DataSet BindDropDownUserpreferanceCheckbox(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_White_Register_UserPreferences", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Module", WR.Module);
                _cmd.Parameters.AddWithValue("@screen", WR.screen);
                _cmd.Parameters.AddWithValue("@FormCode", WR.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", WR.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", WR.Corporate);
                _cmd.Parameters.AddWithValue("@unit", WR.unit);
                _cmd.Parameters.AddWithValue("@Branch", WR.Branch);
                _cmd.Parameters.AddWithValue("@userid", WR.userid);
                _cmd.Parameters.AddWithValue("@Ip", WR.Ip);
                _cmd.Parameters.AddWithValue("@Type", WR.Type);
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

        public DataSet BindDropDownUserpreferancedropdown(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_White_Register_UserPreferences", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@Module", WR.Module);
                _cmd.Parameters.AddWithValue("@screen", WR.screen);
                _cmd.Parameters.AddWithValue("@FormCode", WR.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", WR.TabCode);
                _cmd.Parameters.AddWithValue("@Corporate", WR.Corporate);
                _cmd.Parameters.AddWithValue("@unit", WR.unit);
                _cmd.Parameters.AddWithValue("@Branch", WR.Branch);
                _cmd.Parameters.AddWithValue("@userid", WR.userid);
                _cmd.Parameters.AddWithValue("@Ip", WR.Ip);
                _cmd.Parameters.AddWithValue("@Type", WR.Type);
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

        // insert_Data_user_preferance

        public DataSet insert_Data_user_preferance(UserPreferancestep1 UP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_White_Register_UserPreferences", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", UP.srno);
                _cmd.Parameters.AddWithValue("@Corporate", UP.Corporate);
                _cmd.Parameters.AddWithValue("@UserId", UP.userid);
                _cmd.Parameters.AddWithValue("@GadgetPosition", UP.GadgetPosition);
                _cmd.Parameters.AddWithValue("@OtherPreferences", UP.OtherPreferences);
                _cmd.Parameters.AddWithValue("@pagerow", UP.pagerow);

                _cmd.Parameters.AddWithValue("@Attribute1", UP.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", UP.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", UP.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", UP.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", UP.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", UP.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", UP.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", UP.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", UP.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", UP.Attribute10);

                if (UP.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(UP.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", UP.EditedBy);
                _cmd.Parameters.AddWithValue("@CreatedBy", UP.CreatedBy);

                if (UP.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(UP.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", UP.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", UP.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", UP.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", UP.BranchBy);
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

        public DataSet Edit_data_user_preferance(UserPreferancestep1 UP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_White_Register_UserPreferences", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", "dbo._White_Register_UserPreferences");
                _cmd.Parameters.AddWithValue("@Corporate", UP.Corporate);
                _cmd.Parameters.AddWithValue("@unit", "0");
                _cmd.Parameters.AddWithValue("@Formcode", "0");
                _cmd.Parameters.AddWithValue("@Formtabcode", "0");
                _cmd.Parameters.AddWithValue("@srno", UP.srno);
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
    }
}