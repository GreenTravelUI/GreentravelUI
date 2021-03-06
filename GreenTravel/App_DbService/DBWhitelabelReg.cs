﻿using GreenTravel.Models;
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
                _cmd.Parameters.AddWithValue("@Facebook", WR.Facebook);
                _cmd.Parameters.AddWithValue("@Twitter", WR.Twitter);
                _cmd.Parameters.AddWithValue("@GooglePlus", WR.GooglePlus);
                _cmd.Parameters.AddWithValue("@WebPortal", WR.WebPortal);
                _cmd.Parameters.AddWithValue("@BackgroundImg", WR.BackgroundImg);
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
                _cmd.Parameters.AddWithValue("@CretedBy", WR.CreatedBy);
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
                _cmd.Parameters.AddWithValue("@CreatedBy", _Billing_maintanence.CreatedBy);
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
                _cmd.Parameters.AddWithValue("@CreatedBy", UP.CreatedBy);
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
        public DataSet Bindtab4dropdown(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_White_Register_MaintanenceSupport", _cn);
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
        public DataSet Bindbillingcountry(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_White_Register_MaintanenceSupport", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@srno", WR.srno);
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
                _cmd.Parameters.AddWithValue("@field1", WR.Field1);
                _cmd.Parameters.AddWithValue("@field2", WR.Field2);
                _cmd.Parameters.AddWithValue("@field3", WR.Field3);
                _cmd.Parameters.AddWithValue("@field4", WR.Field4);
                _cmd.Parameters.AddWithValue("@field5", WR.Field5);
                _cmd.Parameters.AddWithValue("@Control", WR.Control);
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
        public DataSet Bindbillingstate(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_White_Register_MaintanenceSupport", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@srno", WR.srno);
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
                _cmd.Parameters.AddWithValue("@field1", WR.Field1);
                _cmd.Parameters.AddWithValue("@field2", WR.Field2);
                _cmd.Parameters.AddWithValue("@field3", WR.Field3);
                _cmd.Parameters.AddWithValue("@field4", WR.Field4);
                _cmd.Parameters.AddWithValue("@field5", WR.Field5);
                _cmd.Parameters.AddWithValue("@Control", WR.Control);
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
        public DataSet Edit_data_billing(Billing_maintanence BM)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_White_Register_MaintanenceSupport", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", "_White_Register_MaintanenceSupport");
                _cmd.Parameters.AddWithValue("@Corporate", BM.Corporate);
                _cmd.Parameters.AddWithValue("@unit", "0");
                _cmd.Parameters.AddWithValue("@Formcode", "0");
                _cmd.Parameters.AddWithValue("@Formtabcode", "0");
                _cmd.Parameters.AddWithValue("@srno", BM.srno);
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
        public DataSet Binddropdowntab3(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_White_Register_Hosting", _cn);
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
        public DataSet Binddropdowntab3sec2(WhitelabelReg WR)
        {
            try
            {
                using (SqlConnection sconn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["gtcon"].ConnectionString))
                {
                   sconn.Open();
                    using (SqlCommand _cmd = new SqlCommand("sp_Formload_White_Register_Subscription", sconn))
                    {
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
                        sconn.Close();
                        sconn.Dispose();
                        return _ds;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
            }
        }
        public DataSet insert_Hosting(Hosting_Subscription HS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_White_Register_Hosting", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", HS.srno);
                _cmd.Parameters.AddWithValue("@Corporate", HS.Corporate);
                _cmd.Parameters.AddWithValue("@CloudProvider", HS.CloudProvider);
                _cmd.Parameters.AddWithValue("@CloudServerIp", HS.CloudServerIp);
                _cmd.Parameters.AddWithValue("@CloudDiskSpace", HS.CloudDiskSpace);
                _cmd.Parameters.AddWithValue("@TransactionCount", HS.TransactionCount);
                _cmd.Parameters.AddWithValue("@IpRestrictedAccess", HS.IpRestrictedAccess);
                _cmd.Parameters.AddWithValue("@CdnProvider", HS.CdnProvider);
                _cmd.Parameters.AddWithValue("@CdnSpace", HS.CdnSpace);
                _cmd.Parameters.AddWithValue("@HostingCost", HS.HostingCost);
                _cmd.Parameters.AddWithValue("@CostPerMonth", HS.CostPerMonth);
                _cmd.Parameters.AddWithValue("@Currency", HS.Currency);                
                _cmd.Parameters.AddWithValue("@Attribute1", HS.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", HS.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", HS.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", HS.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", HS.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", HS.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", HS.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", HS.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", HS.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", HS.Attribute10);
                _cmd.Parameters.AddWithValue("@HostingCostPM", HS.HostingCostPM);
                _cmd.Parameters.AddWithValue("@CreatedBy", HS.CreatedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", HS.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", HS.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", HS.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", HS.BranchBy);
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
        public DataSet insert_Hosting_sub(Hosting_Subscription HS)
        {
            try
            {
                using (SqlConnection sconn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["gtcon"].ConnectionString))
                {
                    sconn.Open();

                    using (SqlCommand _cmd = new SqlCommand("sp_save_White_Register_Subscription", sconn))
                    {
                        // _cn.Open();
                        // SqlCommand _cmd = new SqlCommand("sp_save_White_Register_Subscription", _cn);
                        _cmd.CommandType = CommandType.StoredProcedure;
                        _cmd.Parameters.AddWithValue("@srno", HS.srno);
                        _cmd.Parameters.AddWithValue("@Corporate", HS.Corporate);

                        _cmd.Parameters.AddWithValue("@PlanName", HS.PlanName);
                        _cmd.Parameters.AddWithValue("@SubscriptionType", HS.SubscriptionType);
                        _cmd.Parameters.AddWithValue("@FreeFlag", HS.FreeFlag);
                        _cmd.Parameters.AddWithValue("@NumberOfUsers", HS.NumberOfUsers);
                        _cmd.Parameters.AddWithValue("@BillingCycle", HS.BillingCycle);
                        _cmd.Parameters.AddWithValue("@BillingFromCompany", HS.BillingFromCompany);
                        _cmd.Parameters.AddWithValue("@PaymentCurrency", HS.PaymentCurrency);
                        _cmd.Parameters.AddWithValue("@AmountPUPM", HS.AmountPUPM);
                        _cmd.Parameters.AddWithValue("@PaymentMode", HS.PaymentMode);

                        _cmd.Parameters.AddWithValue("@GracePeriod", HS.GracePeriod);

                        if (HS.SubscriptionFromDate == null)
                        {
                            _cmd.Parameters.AddWithValue("@SubscriptionFromDate", DBNull.Value);
                        }
                        else
                        {
                            _cmd.Parameters.AddWithValue("@SubscriptionFromDate", DateTime.ParseExact(HS.SubscriptionFromDate, "dd/MM/yyyy", null));
                        }

                        if (HS.SubscriptionToDate == null)
                        {
                            _cmd.Parameters.AddWithValue("@SubscriptionToDate", DBNull.Value);
                        }
                        else
                        {
                            _cmd.Parameters.AddWithValue("@SubscriptionToDate", DateTime.ParseExact(HS.SubscriptionToDate, "dd/MM/yyyy", null));
                        }

                        if (HS.FirstPayDate == null)
                        {
                            _cmd.Parameters.AddWithValue("@FirstPayDate", DBNull.Value);
                        }
                        else
                        {
                            _cmd.Parameters.AddWithValue("@FirstPayDate", DateTime.ParseExact(HS.FirstPayDate, "dd/MM/yyyy", null));
                        }

                        _cmd.Parameters.AddWithValue("@Attribute1", HS.Attribute1);
                        _cmd.Parameters.AddWithValue("@Attribute2", HS.Attribute2);
                        _cmd.Parameters.AddWithValue("@Attribute3", HS.Attribute3);
                        _cmd.Parameters.AddWithValue("@Attribute4", HS.Attribute4);
                        _cmd.Parameters.AddWithValue("@Attribute5", HS.Attribute5);
                        _cmd.Parameters.AddWithValue("@Attribute6", HS.Attribute6);
                        _cmd.Parameters.AddWithValue("@Attribute7", HS.Attribute7);
                        _cmd.Parameters.AddWithValue("@Attribute8", HS.Attribute8);
                        _cmd.Parameters.AddWithValue("@Attribute9", HS.Attribute9);
                        _cmd.Parameters.AddWithValue("@Attribute10", HS.Attribute10);

                        _cmd.Parameters.AddWithValue("@CreatedBy", HS.CreatedBy);
                        _cmd.Parameters.AddWithValue("@CorpcentreBy", HS.CorpcentreBy);
                        _cmd.Parameters.AddWithValue("@UnitCorpBy", HS.UnitCorpBy);
                        _cmd.Parameters.AddWithValue("@TerminalBy", HS.TerminalBy);
                        _cmd.Parameters.AddWithValue("@BranchBy", HS.BranchBy);
                        SqlDataAdapter adp = new SqlDataAdapter(_cmd);
                        DataSet ds = new DataSet();
                        adp.Fill(ds);
                        adp.Dispose();
                        _cmd.Dispose();
                        sconn.Close();
                        sconn.Dispose();
                        return ds;

                    }
                }
            }
            catch
            {
                throw;
            }
            finally
            {
                //_cn.Close();
               // _cn.Dispose();
            }

        }
        public DataSet Edit_data_hosting(Hosting_Subscription HS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_White_Register_Hosting_Subscription", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", "dbo._White_Register_Hosting");
                _cmd.Parameters.AddWithValue("@Corporate", HS.Corporate);
                _cmd.Parameters.AddWithValue("@unit", "0");
                _cmd.Parameters.AddWithValue("@Formcode", "0");
                _cmd.Parameters.AddWithValue("@Formtabcode", "0");
                _cmd.Parameters.AddWithValue("@srno",HS.srno);
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
        public DataSet Edit_data_subcribe(Hosting_Subscription HS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_White_Register_Hosting_Subscription", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", "dbo._White_Register_Hosting");
                _cmd.Parameters.AddWithValue("@Corporate", HS.Corporate);
                _cmd.Parameters.AddWithValue("@unit", "0");
                _cmd.Parameters.AddWithValue("@Formcode", "0");
                _cmd.Parameters.AddWithValue("@Formtabcode", "0");
                _cmd.Parameters.AddWithValue("@srno", HS.srno);
                //_cmd.Parameters.AddWithValue("@srno","0");
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
        public DataSet Binddropdowntab6(WhitelabelReg WR)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_PasswordConfiguration", _cn);
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
        public DataSet insert_PasswordAuth(Password_Authentication PA)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_PasswordConfiguration", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", PA.srno);
                _cmd.Parameters.AddWithValue("@Corporate", PA.Corporate);

                _cmd.Parameters.AddWithValue("@CapitalCharNumber", PA.CapitalCharNumber);
                _cmd.Parameters.AddWithValue("@RequiredNumeric", PA.RequiredNumeric);
                _cmd.Parameters.AddWithValue("@SpecialCharNumber", PA.SpecialCharNumber);
                _cmd.Parameters.AddWithValue("@EncriptionKey", PA.EncriptionKey);
                _cmd.Parameters.AddWithValue("@PasswordMinLength", PA.PasswordMinLength);
                _cmd.Parameters.AddWithValue("@PasswordExpiryDays", PA.PasswordExpiryDays);
                _cmd.Parameters.AddWithValue("@UserLoginDay", PA.UserLoginDay);      
                _cmd.Parameters.AddWithValue("@NumberOfAttempts", PA.NumberOfAttempts);
                _cmd.Parameters.AddWithValue("@NumberOfAttemptsTime", PA.NumberOfAttemptsTime);
                _cmd.Parameters.AddWithValue("@OTPExpiryTime", PA.OTPExpiryTime);
                _cmd.Parameters.AddWithValue("@LastSamePassword", PA.LastSamePassword);
                _cmd.Parameters.AddWithValue("@UnableCaptcha", PA.UnableCaptcha);
                _cmd.Parameters.AddWithValue("@AutoLockScreen", PA.AutoLockScreen);

                _cmd.Parameters.AddWithValue("@UserLockMinuts", PA.UserUnlockMinut);
                _cmd.Parameters.AddWithValue("@Continuenumber", PA.Continuenumber);

                _cmd.Parameters.AddWithValue("@Attribute1", PA.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", PA.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", PA.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", PA.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", PA.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", PA.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", PA.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", PA.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", PA.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", PA.Attribute10);

                _cmd.Parameters.AddWithValue("@CreatedBy", PA.CreatedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", PA.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", PA.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", PA.TerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", PA.BranchBy);

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
        public DataSet Edit_data_password_authenticate(Password_Authentication PA)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_PasswordConfiguration", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", "_PasswordConfiguration");
                _cmd.Parameters.AddWithValue("@Corporate", PA.Corporate);
                _cmd.Parameters.AddWithValue("@unit", "0");
                _cmd.Parameters.AddWithValue("@Formcode", "0");
                _cmd.Parameters.AddWithValue("@Formtabcode", "0");
                _cmd.Parameters.AddWithValue("@srno", PA.srno);
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

        public DataSet CorporateBasicbasesp(commanbaseParamater CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_White_Register_Basic", _cn);
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
                _cmd.Parameters.AddWithValue("@srno", CBP.Srno);
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