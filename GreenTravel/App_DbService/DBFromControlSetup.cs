using GreenTravel.Models;
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
        public int insert_data(FrmControlSetup FCS)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_adminmaster", _cn);
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
                if (FCS.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(FCS.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", FCS.EditedBy);

                if (FCS.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(FCS.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", FCS.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", FCS.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", FCS.TerminalBy);
                _cmd.Parameters.AddWithValue("@Corporate", FCS.Corporate);
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