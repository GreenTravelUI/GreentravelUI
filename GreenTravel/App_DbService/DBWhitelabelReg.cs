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
                int i = _cmd.ExecuteNonQuery();
                //  string i = _cmd.ExecuteScalar().ToString();
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

    }
}