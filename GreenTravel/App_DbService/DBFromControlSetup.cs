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
    public class DBFromControlSetup : Base
    {
        public DataSet insert_data(FrmControlSetup FCS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_Form_Field_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Srno", FCS.Srno);
                _cmd.Parameters.AddWithValue("@Corporate", FCS.Corporate);
                _cmd.Parameters.AddWithValue("@FormCode", FCS.FormCode);
                _cmd.Parameters.AddWithValue("@TabCode", FCS.TabCode);
                _cmd.Parameters.AddWithValue("@SectionCode", FCS.SectionCode);
                _cmd.Parameters.AddWithValue("@FieldControlLabel", FCS.FieldControlLabel);
                _cmd.Parameters.AddWithValue("@ControlId", FCS.ControlId);
                _cmd.Parameters.AddWithValue("@FieldControlType ", FCS.FieldControlType);
                _cmd.Parameters.AddWithValue("@ValidationCode", FCS.ValidationCode);
                _cmd.Parameters.AddWithValue("@PlaceholderText ", FCS.PlaceholderText);
                _cmd.Parameters.AddWithValue("@TooltipHelpText ", FCS.TooltipHelpText);
                _cmd.Parameters.AddWithValue("@RequiredField ", FCS.RequiredField);
                _cmd.Parameters.AddWithValue("@ReqValidationMsg ", FCS.ReqValidationMsg);
                _cmd.Parameters.AddWithValue("@ReglarExField ", FCS.ReglarExField);
                _cmd.Parameters.AddWithValue("@RegexValidationMsg ", FCS.RegexValidationMsg);
                _cmd.Parameters.AddWithValue("@GuidedTourText ", FCS.GuidedTourText);
                _cmd.Parameters.AddWithValue("@GuidedTourStepNo ", FCS.GuidedTourStepNo);
                _cmd.Parameters.AddWithValue("@FieldOrderNumber ", FCS.FieldOrderNumber);
                _cmd.Parameters.AddWithValue("@Attribute1", FCS.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", FCS.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", FCS.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", FCS.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", FCS.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", FCS.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", FCS.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", FCS.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", FCS.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", FCS.Attribute10);
                _cmd.Parameters.AddWithValue("@FieldCaptionName", FCS.FieldCaptionName);
                _cmd.Parameters.AddWithValue("@ValidationMaxSize", FCS.ValidationMaxSize);
                _cmd.Parameters.AddWithValue("@ValidationDateType", FCS.ValidationDateType);

                _cmd.Parameters.AddWithValue("@InProcessValidation", FCS.InProcessValidation);
                _cmd.Parameters.AddWithValue("@Status", FCS.Status);
                _cmd.Parameters.AddWithValue("@Tags", FCS.Tags);

                _cmd.Parameters.AddWithValue("@CreatedBy", FCS.CreatedBy);
                _cmd.Parameters.AddWithValue("@CorpcentreBy", FCS.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", FCS.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", FCS.TerminalBy);
                //  _cmd.Parameters.AddWithValue("@Corporate", FCS.Corporate);
                SqlDataAdapter _adp = new SqlDataAdapter(_cmd);
                DataSet _ds = new DataSet();
                _adp.Fill(_ds);
                _adp.Dispose();
                _cmd.Dispose();
                return _ds;
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

        public DataSet BindDropDown(commanbaseParamater CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_Form_Field_Master", _cn);
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

        public DataSet BindGrid(GridParamater GP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("Sp_Grid_Form_Field_Master", _cn);
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

        public DataSet Edit_data(Edit_AdminMaster EA)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Edit_Form_Field_Master", _cn);
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

        public DataSet BindDropDownLoad(CommanFieldPara CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Formload_From_Field_Master", _cn);
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
    }
}