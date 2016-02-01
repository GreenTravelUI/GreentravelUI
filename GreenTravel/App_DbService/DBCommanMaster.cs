using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using GreenTravel.Models;

namespace GreenTravel.App_DbService
{
    public class DBCommanMaster : Base
    {
        /* insert Basic details
           ADMIN_MASTER
         */
        public int insert_data(CommanMaster CM)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_adminmaster", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@xmaster", CM.xmaster);
                _cmd.Parameters.AddWithValue("@xname", CM.xname);
                _cmd.Parameters.AddWithValue("@drpCaption", CM.drpCaption);
                _cmd.Parameters.AddWithValue("@xlink", CM.xlink);
                _cmd.Parameters.AddWithValue("@xcross", CM.xcross);
                _cmd.Parameters.AddWithValue("@xcross1", CM.xcross1);
                _cmd.Parameters.AddWithValue("@xcross2", CM.xcross2);
                _cmd.Parameters.AddWithValue("@xcross3 ", CM.xcross3);
                _cmd.Parameters.AddWithValue("@xcross4", CM.xcross4);
                _cmd.Parameters.AddWithValue("@xreference1 ", CM.xreference1);
                _cmd.Parameters.AddWithValue("@xreference2 ", CM.xreference2);
                _cmd.Parameters.AddWithValue("@xreference3 ", CM.xreference3);
                _cmd.Parameters.AddWithValue("@xreference4 ", CM.xreference4);
                _cmd.Parameters.AddWithValue("@xreference5 ", CM.xreference5);
                _cmd.Parameters.AddWithValue("@xreference6 ", CM.xreference6);
                _cmd.Parameters.AddWithValue("@xdetail ", CM.xdetail);
                _cmd.Parameters.AddWithValue("@ENTRYCONTROL ", CM.ENTRYCONTROL);
                _cmd.Parameters.AddWithValue("@SEGMENT ", CM.SEGMENT);
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
                _cmd.Parameters.AddWithValue("@Rating1", CM.Rating1);
                _cmd.Parameters.AddWithValue("@Rating2", CM.Rating2);
                _cmd.Parameters.AddWithValue("@Rating3", CM.Rating3);

                _cmd.Parameters.AddWithValue("@Date1", CM.Date1);
                _cmd.Parameters.AddWithValue("@Date2", CM.Date2);
                _cmd.Parameters.AddWithValue("@Date3", CM.Date3);

                _cmd.Parameters.AddWithValue("@Email1", CM.Email1);
                _cmd.Parameters.AddWithValue("@Email2", CM.Email2);
                _cmd.Parameters.AddWithValue("@Email3", CM.Email3);
                _cmd.Parameters.AddWithValue("@Amount", CM.Amount);
                _cmd.Parameters.AddWithValue("@Amount2", CM.Amount2);
                _cmd.Parameters.AddWithValue("@Amount3", CM.Amount3);
                _cmd.Parameters.AddWithValue("@Time1", CM.Time1);
                _cmd.Parameters.AddWithValue("@Time2", CM.Time2);
                _cmd.Parameters.AddWithValue("@Html", CM.Html);
                _cmd.Parameters.AddWithValue("@Upload", CM.Upload);
                _cmd.Parameters.AddWithValue("@TextArea", CM.TextArea);
                _cmd.Parameters.AddWithValue("@MultiSelect1", CM.MultiSelect1);
                _cmd.Parameters.AddWithValue("@MultiSelect2", CM.MultiSelect2);
                _cmd.Parameters.AddWithValue("@MultiSelect3", CM.MultiSelect3);
                _cmd.Parameters.AddWithValue("@MultiSelect4", CM.MultiSelect4);
                _cmd.Parameters.AddWithValue("@MultiSelect5", CM.MultiSelect5);
                _cmd.Parameters.AddWithValue("@CreatedBy", CM.CreatedBy);
                if (CM.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CM.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", CM.EditedBy);

                if (CM.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CM.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CM.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CM.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CM.TerminalBy);
                _cmd.Parameters.AddWithValue("@language", CM.language);
                _cmd.Parameters.AddWithValue("@Corporate", CM.Corporate);
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
        public int insert_data_Caption(CommanMasterCaption CMC)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_usermaster_caption", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@xmaster", CMC.xmastercaption);
                _cmd.Parameters.AddWithValue("@SEGMENT", CMC.SEGMENTcaption);
                _cmd.Parameters.AddWithValue("@Field1", CMC.Field1caption);
                _cmd.Parameters.AddWithValue("@Field2", CMC.Field2caption);
                _cmd.Parameters.AddWithValue("@Field3", CMC.Field3caption);
                _cmd.Parameters.AddWithValue("@Field4", CMC.Field4caption);
                _cmd.Parameters.AddWithValue("@Field5", CMC.Field5caption);
                _cmd.Parameters.AddWithValue("@Field6", CMC.Field6caption);
                _cmd.Parameters.AddWithValue("@Field7 ", CMC.Field7caption);
                _cmd.Parameters.AddWithValue("@Field8", CMC.Field8caption);
                _cmd.Parameters.AddWithValue("@Field9", CMC.Field9caption);
                _cmd.Parameters.AddWithValue("@Field10", CMC.Field10caption);
                _cmd.Parameters.AddWithValue("@Field11", CMC.Field11caption);
                _cmd.Parameters.AddWithValue("@Field12", CMC.Field12caption);
                _cmd.Parameters.AddWithValue("@Field13", CMC.Field13caption);
                _cmd.Parameters.AddWithValue("@Field14", CMC.Field14caption);
                _cmd.Parameters.AddWithValue("@Field15", CMC.Field15caption);
                _cmd.Parameters.AddWithValue("@Field16", CMC.Field16caption);
                _cmd.Parameters.AddWithValue("@Field17", CMC.Field17caption);
                _cmd.Parameters.AddWithValue("@Field18", CMC.Field18caption);
                _cmd.Parameters.AddWithValue("@Field19", CMC.Field19caption);
                _cmd.Parameters.AddWithValue("@Field20", CMC.Field20caption);
                _cmd.Parameters.AddWithValue("@Language ", CMC.Languagecaption);
                _cmd.Parameters.AddWithValue("@Attribute1", CMC.Attribute1caption);
                _cmd.Parameters.AddWithValue("@Attribute2", CMC.Attribute2caption);
                _cmd.Parameters.AddWithValue("@Attribute3", CMC.Attribute3caption);
                _cmd.Parameters.AddWithValue("@Attribute4", CMC.Attribute4caption);
                _cmd.Parameters.AddWithValue("@Attribute5", CMC.Attribute5caption);
                _cmd.Parameters.AddWithValue("@Attribute6", CMC.Attribute6caption);
                _cmd.Parameters.AddWithValue("@Attribute7", CMC.Attribute7caption);
                _cmd.Parameters.AddWithValue("@Attribute8", CMC.Attribute8caption);
                _cmd.Parameters.AddWithValue("@Attribute9", CMC.Attribute9caption);
                _cmd.Parameters.AddWithValue("@Attribute10", CMC.Attribute10caption);
                _cmd.Parameters.AddWithValue("@Rating1", CMC.Rating1caption);
                _cmd.Parameters.AddWithValue("@Rating2", CMC.Rating2caption);
                _cmd.Parameters.AddWithValue("@Rating3", CMC.Rating3caption);

                _cmd.Parameters.AddWithValue("@Date1", CMC.Date1caption);
                _cmd.Parameters.AddWithValue("@Date2", CMC.Date2caption);
                _cmd.Parameters.AddWithValue("@Date3", CMC.Date3caption);

                _cmd.Parameters.AddWithValue("@Email1", CMC.Email1caption);
                _cmd.Parameters.AddWithValue("@Email2", CMC.Email2caption);
                _cmd.Parameters.AddWithValue("@Email3", CMC.Email3caption);
                _cmd.Parameters.AddWithValue("@Amount", CMC.Amountcaption);
                _cmd.Parameters.AddWithValue("@Amount2", CMC.Amount2caption);
                _cmd.Parameters.AddWithValue("@Amount3", CMC.Amount3caption);
                _cmd.Parameters.AddWithValue("@Time1", CMC.Time1caption);
                _cmd.Parameters.AddWithValue("@Time2", CMC.Time2caption);
                _cmd.Parameters.AddWithValue("@Html", CMC.Htmlcaption);
                _cmd.Parameters.AddWithValue("@Upload", CMC.Uploadcaption);
                _cmd.Parameters.AddWithValue("@TextArea", CMC.TextAreacaption);
                _cmd.Parameters.AddWithValue("@MultiSelect1", CMC.MultiSelect1caption);
                _cmd.Parameters.AddWithValue("@MultiSelect2", CMC.MultiSelect2caption);
                _cmd.Parameters.AddWithValue("@MultiSelect3", CMC.MultiSelect3caption);
                _cmd.Parameters.AddWithValue("@MultiSelect4", CMC.MultiSelect4caption);
                _cmd.Parameters.AddWithValue("@MultiSelect5", CMC.MultiSelect5caption);
                _cmd.Parameters.AddWithValue("@CreatedBy", CMC.CreatedBycaption);
                if (CMC.EntryDatetimecaption == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CMC.EntryDatetimecaption, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", CMC.EditedBycaption);

                if (CMC.EditDatetimecaption == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CMC.EditDatetimecaption, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CMC.CorpcentreBycaption);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CMC.UnitCorpBycaption);
                _cmd.Parameters.AddWithValue("@TerminalBy", CMC.TerminalBycaption);
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
        public int insert_data_Placeholder(CommanMasterPlaceholder CMP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_usermaster_placeholder", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@xmaster", CMP.xmaster);
                _cmd.Parameters.AddWithValue("@Field1", CMP.Field1);
                _cmd.Parameters.AddWithValue("@Field2", CMP.Field2);
                _cmd.Parameters.AddWithValue("@Field3", CMP.Field3);
                _cmd.Parameters.AddWithValue("@Field4", CMP.Field4);
                _cmd.Parameters.AddWithValue("@Field5", CMP.Field5);
                _cmd.Parameters.AddWithValue("@Field6", CMP.Field6);
                _cmd.Parameters.AddWithValue("@Field7 ", CMP.Field7);
                _cmd.Parameters.AddWithValue("@Field8", CMP.Field8);
                _cmd.Parameters.AddWithValue("@Field9", CMP.Field9);
                _cmd.Parameters.AddWithValue("@Field10", CMP.Field10);
                _cmd.Parameters.AddWithValue("@Field11", CMP.Field11);
                _cmd.Parameters.AddWithValue("@Field12", CMP.Field12);
                _cmd.Parameters.AddWithValue("@Field13", CMP.Field13);
                _cmd.Parameters.AddWithValue("@Field14", CMP.Field14);
                _cmd.Parameters.AddWithValue("@Field15", CMP.Field15);
                _cmd.Parameters.AddWithValue("@Field16", CMP.Field16);
                _cmd.Parameters.AddWithValue("@Field17", CMP.Field17);
                _cmd.Parameters.AddWithValue("@Field18", CMP.Field18);
                _cmd.Parameters.AddWithValue("@Field19", CMP.Field19);
                _cmd.Parameters.AddWithValue("@Field20", CMP.Field20);
                _cmd.Parameters.AddWithValue("@language", CMP.Language);
                _cmd.Parameters.AddWithValue("@Attribute1", CMP.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", CMP.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", CMP.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", CMP.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", CMP.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", CMP.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", CMP.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", CMP.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", CMP.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", CMP.Attribute10);
                _cmd.Parameters.AddWithValue("@Rating1", CMP.Rating1);
                _cmd.Parameters.AddWithValue("@Rating2", CMP.Rating2);
                _cmd.Parameters.AddWithValue("@Rating3", CMP.Rating3);

                _cmd.Parameters.AddWithValue("@Date1", CMP.Date1);
                _cmd.Parameters.AddWithValue("@Date2", CMP.Date2);
                _cmd.Parameters.AddWithValue("@Date3", CMP.Date3);

                _cmd.Parameters.AddWithValue("@Email1", CMP.Email1);
                _cmd.Parameters.AddWithValue("@Email2", CMP.Email2);
                _cmd.Parameters.AddWithValue("@Email3", CMP.Email3);
                _cmd.Parameters.AddWithValue("@Amount", CMP.Amount);
                _cmd.Parameters.AddWithValue("@Amount2", CMP.Amount2);
                _cmd.Parameters.AddWithValue("@Amount3", CMP.Amount3);
                _cmd.Parameters.AddWithValue("@Time1", CMP.Time1);
                _cmd.Parameters.AddWithValue("@Time2", CMP.Time2);
                _cmd.Parameters.AddWithValue("@Html", CMP.Html);
                _cmd.Parameters.AddWithValue("@Upload", CMP.Upload);
                _cmd.Parameters.AddWithValue("@TextArea", CMP.TextArea);
                _cmd.Parameters.AddWithValue("@MultiSelect1", CMP.MultiSelect1);
                _cmd.Parameters.AddWithValue("@MultiSelect2", CMP.MultiSelect2);
                _cmd.Parameters.AddWithValue("@MultiSelect3", CMP.MultiSelect3);
                _cmd.Parameters.AddWithValue("@MultiSelect4", CMP.MultiSelect4);
                _cmd.Parameters.AddWithValue("@MultiSelect5", CMP.MultiSelect5);
                _cmd.Parameters.AddWithValue("@CreatedBy", CMP.CreatedBy);
                if (CMP.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CMP.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", CMP.EditedBy);

                if (CMP.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CMP.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CMP.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CMP.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CMP.TerminalBy);
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
        public int insert_data_Validation(CommanMasterValidation CMV)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_usermaster_validation", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@xmaster", CMV.xmaster);
                _cmd.Parameters.AddWithValue("@Field1", CMV.Field1);
                _cmd.Parameters.AddWithValue("@Field2", CMV.Field2);
                _cmd.Parameters.AddWithValue("@Field3", CMV.Field3);
                _cmd.Parameters.AddWithValue("@Field4", CMV.Field4);
                _cmd.Parameters.AddWithValue("@Field5", CMV.Field5);
                _cmd.Parameters.AddWithValue("@Field6", CMV.Field6);
                _cmd.Parameters.AddWithValue("@Field7 ", CMV.Field7);
                _cmd.Parameters.AddWithValue("@Field8", CMV.Field8);
                _cmd.Parameters.AddWithValue("@Field9", CMV.Field9);
                _cmd.Parameters.AddWithValue("@Field10", CMV.Field10);
                _cmd.Parameters.AddWithValue("@Field11", CMV.Field11);
                _cmd.Parameters.AddWithValue("@Field12", CMV.Field12);
                _cmd.Parameters.AddWithValue("@Field13", CMV.Field13);
                _cmd.Parameters.AddWithValue("@Field14", CMV.Field14);
                _cmd.Parameters.AddWithValue("@Field15", CMV.Field15);
                _cmd.Parameters.AddWithValue("@Field16", CMV.Field16);
                _cmd.Parameters.AddWithValue("@Field17", CMV.Field17);
                _cmd.Parameters.AddWithValue("@Field18", CMV.Field18);
                _cmd.Parameters.AddWithValue("@Field19", CMV.Field19);
                _cmd.Parameters.AddWithValue("@Field20", CMV.Field20);
                _cmd.Parameters.AddWithValue("@Language ", CMV.Language);
                _cmd.Parameters.AddWithValue("@Attribute1", CMV.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", CMV.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", CMV.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", CMV.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", CMV.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", CMV.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", CMV.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", CMV.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", CMV.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", CMV.Attribute10);
                _cmd.Parameters.AddWithValue("@Rating1", CMV.Rating1);
                _cmd.Parameters.AddWithValue("@Rating2", CMV.Rating2);
                _cmd.Parameters.AddWithValue("@Rating3", CMV.Rating3);

                _cmd.Parameters.AddWithValue("@Date1", CMV.Date1);
                _cmd.Parameters.AddWithValue("@Date2", CMV.Date2);
                _cmd.Parameters.AddWithValue("@Date3", CMV.Date3);

                _cmd.Parameters.AddWithValue("@Email1", CMV.Email1);
                _cmd.Parameters.AddWithValue("@Email2", CMV.Email2);
                _cmd.Parameters.AddWithValue("@Email3", CMV.Email3);
                _cmd.Parameters.AddWithValue("@Amount", CMV.Amount);
                _cmd.Parameters.AddWithValue("@Amount2", CMV.Amount2);
                _cmd.Parameters.AddWithValue("@Amount3", CMV.Amount3);
                _cmd.Parameters.AddWithValue("@Time1", CMV.Time1);
                _cmd.Parameters.AddWithValue("@Time2", CMV.Time2);
                _cmd.Parameters.AddWithValue("@Html", CMV.Html);
                _cmd.Parameters.AddWithValue("@Upload", CMV.Upload);
                _cmd.Parameters.AddWithValue("@TextArea", CMV.TextArea);
                _cmd.Parameters.AddWithValue("@MultiSelect1", CMV.MultiSelect1);
                _cmd.Parameters.AddWithValue("@MultiSelect2", CMV.MultiSelect2);
                _cmd.Parameters.AddWithValue("@MultiSelect3", CMV.MultiSelect3);
                _cmd.Parameters.AddWithValue("@MultiSelect4", CMV.MultiSelect4);
                _cmd.Parameters.AddWithValue("@MultiSelect5", CMV.MultiSelect5);
                _cmd.Parameters.AddWithValue("@CreatedBy", CMV.CreatedBy);
                if (CMV.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CMV.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", CMV.EditedBy);

                if (CMV.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CMV.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CMV.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CMV.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CMV.TerminalBy);
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
        public int insert_data_help(CommanMasterHelp CMH)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_usermaster_help", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@xmaster", CMH.xmaster);
                _cmd.Parameters.AddWithValue("@Field1", CMH.Field1);
                _cmd.Parameters.AddWithValue("@Field2", CMH.Field2);
                _cmd.Parameters.AddWithValue("@Field3", CMH.Field3);
                _cmd.Parameters.AddWithValue("@Field4", CMH.Field4);
                _cmd.Parameters.AddWithValue("@Field5", CMH.Field5);
                _cmd.Parameters.AddWithValue("@Field6", CMH.Field6);
                _cmd.Parameters.AddWithValue("@Field7 ", CMH.Field7);
                _cmd.Parameters.AddWithValue("@Field8", CMH.Field8);
                _cmd.Parameters.AddWithValue("@Field9", CMH.Field9);
                _cmd.Parameters.AddWithValue("@Field10", CMH.Field10);
                _cmd.Parameters.AddWithValue("@Field11", CMH.Field11);
                _cmd.Parameters.AddWithValue("@Field12", CMH.Field12);
                _cmd.Parameters.AddWithValue("@Field13", CMH.Field13);
                _cmd.Parameters.AddWithValue("@Field14", CMH.Field14);
                _cmd.Parameters.AddWithValue("@Field15", CMH.Field15);
                _cmd.Parameters.AddWithValue("@Field16", CMH.Field16);
                _cmd.Parameters.AddWithValue("@Field17", CMH.Field17);
                _cmd.Parameters.AddWithValue("@Field18", CMH.Field18);
                _cmd.Parameters.AddWithValue("@Field19", CMH.Field19);
                _cmd.Parameters.AddWithValue("@Field20", CMH.Field20);
                _cmd.Parameters.AddWithValue("@Language ", CMH.Language);
                _cmd.Parameters.AddWithValue("@Attribute1", CMH.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", CMH.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", CMH.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", CMH.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", CMH.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", CMH.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", CMH.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", CMH.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", CMH.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", CMH.Attribute10);
                _cmd.Parameters.AddWithValue("@Rating1", CMH.Rating1);
                _cmd.Parameters.AddWithValue("@Rating2", CMH.Rating2);
                _cmd.Parameters.AddWithValue("@Rating3", CMH.Rating3);

                _cmd.Parameters.AddWithValue("@Date1", CMH.Date1);
                _cmd.Parameters.AddWithValue("@Date2", CMH.Date2);
                _cmd.Parameters.AddWithValue("@Date3", CMH.Date3);

                _cmd.Parameters.AddWithValue("@Email1", CMH.Email1);
                _cmd.Parameters.AddWithValue("@Email2", CMH.Email2);
                _cmd.Parameters.AddWithValue("@Email3", CMH.Email3);
                _cmd.Parameters.AddWithValue("@Amount", CMH.Amount);
                _cmd.Parameters.AddWithValue("@Amount2", CMH.Amount2);
                _cmd.Parameters.AddWithValue("@Amount3", CMH.Amount3);
                _cmd.Parameters.AddWithValue("@Time1", CMH.Time1);
                _cmd.Parameters.AddWithValue("@Time2", CMH.Time2);
                _cmd.Parameters.AddWithValue("@Html", CMH.Html);
                _cmd.Parameters.AddWithValue("@Upload", CMH.Upload);
                _cmd.Parameters.AddWithValue("@TextArea", CMH.TextArea);
                _cmd.Parameters.AddWithValue("@MultiSelect1", CMH.MultiSelect1);
                _cmd.Parameters.AddWithValue("@MultiSelect2", CMH.MultiSelect2);
                _cmd.Parameters.AddWithValue("@MultiSelect3", CMH.MultiSelect3);
                _cmd.Parameters.AddWithValue("@MultiSelect4", CMH.MultiSelect4);
                _cmd.Parameters.AddWithValue("@MultiSelect5", CMH.MultiSelect5);
                _cmd.Parameters.AddWithValue("@CreatedBy", CMH.CreatedBy);
                if (CMH.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CMH.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", CMH.EditedBy);

                if (CMH.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CMH.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CMH.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CMH.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CMH.TerminalBy);
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
        
        public int insert_data_UserMaster(CommanUserMaster CUH)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_save_usermaster", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@Srno", CUH.USrno);

                _cmd.Parameters.AddWithValue("@xmaster", CUH.Uxmaster);
                _cmd.Parameters.AddWithValue("@xcode", CUH.Uxcode);
                _cmd.Parameters.AddWithValue("@xname", CUH.Uxname);

                _cmd.Parameters.AddWithValue("@IsActive", CUH.UIsActive);
                _cmd.Parameters.AddWithValue("@Remark", CUH.URemark);

                _cmd.Parameters.AddWithValue("@xlink", CUH.Uxlink);
                _cmd.Parameters.AddWithValue("@xcross", CUH.Uxcross);
                _cmd.Parameters.AddWithValue("@xcross1", CUH.Uxcross1);
                _cmd.Parameters.AddWithValue("@xcross2", CUH.Uxcross2);
                _cmd.Parameters.AddWithValue("@xcross3 ", CUH.Uxcross3);
                _cmd.Parameters.AddWithValue("@xcross4", CUH.Uxcross4);

                _cmd.Parameters.AddWithValue("@xreference1 ", CUH.Uxreference1);
                _cmd.Parameters.AddWithValue("@xreference2 ", CUH.Uxreference2);
                _cmd.Parameters.AddWithValue("@xreference3 ", CUH.Uxreference3);
                _cmd.Parameters.AddWithValue("@xreference4 ", CUH.Uxreference4);
                _cmd.Parameters.AddWithValue("@xreference5 ", CUH.Uxreference5);
                _cmd.Parameters.AddWithValue("@xreference6 ", CUH.Uxreference6);

                _cmd.Parameters.AddWithValue("@xdetail ", CUH.Uxdetail);

                _cmd.Parameters.AddWithValue("@Attribute1", CUH.UAttribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", CUH.UAttribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", CUH.UAttribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", CUH.UAttribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", CUH.UAttribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", CUH.UAttribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", CUH.UAttribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", CUH.UAttribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", CUH.UAttribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", CUH.UAttribute10);

                _cmd.Parameters.AddWithValue("@Rating1", CUH.URating1);
                _cmd.Parameters.AddWithValue("@Rating2", CUH.URating2);
                _cmd.Parameters.AddWithValue("@Rating3", CUH.URating3);

                if (CUH.UDate1 == null)
                {
                    _cmd.Parameters.AddWithValue("@Date1", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@Date1", DateTime.ParseExact(CUH.UDate1, "dd/MM/yyyy", null));
                }

                if (CUH.UDate2 == null)
                {
                    _cmd.Parameters.AddWithValue("@Date2", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@Date2", DateTime.ParseExact(CUH.UDate2, "dd/MM/yyyy", null));
                }


                if (CUH.UDate3 == null)
                {
                    _cmd.Parameters.AddWithValue("@Date3", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@Date3", DateTime.ParseExact(CUH.UDate3, "dd/MM/yyyy", null));
                }


                _cmd.Parameters.AddWithValue("@Email1", CUH.UEmail1);
                _cmd.Parameters.AddWithValue("@Email2", CUH.UEmail2);
                _cmd.Parameters.AddWithValue("@Email3", CUH.UEmail3);

                _cmd.Parameters.AddWithValue("@Amount", CUH.UAmount);
                _cmd.Parameters.AddWithValue("@Amount2", CUH.UAmount2);
                _cmd.Parameters.AddWithValue("@Amount3", CUH.UAmount3);

                if (CUH.UTime1 == null)
                {
                    _cmd.Parameters.AddWithValue("@Time1", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@Time1", DateTime.ParseExact(CUH.UTime1, "dd/MM/yyyy", null));
                }


                if (CUH.UTime2 == null)
                {
                    _cmd.Parameters.AddWithValue("@Time2", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@Time2", DateTime.ParseExact(CUH.UTime2, "dd/MM/yyyy", null));
                }

                _cmd.Parameters.AddWithValue("@Html", CUH.UHtml);
                _cmd.Parameters.AddWithValue("@Upload", CUH.UUpload);
                _cmd.Parameters.AddWithValue("@TextArea", CUH.UTextArea);
                
                _cmd.Parameters.AddWithValue("@MultiSelect1", CUH.UMultiSelect1);
                _cmd.Parameters.AddWithValue("@MultiSelect2", CUH.UMultiSelect2);
                _cmd.Parameters.AddWithValue("@MultiSelect3", CUH.UMultiSelect3);
                _cmd.Parameters.AddWithValue("@MultiSelect4", CUH.UMultiSelect4);
                _cmd.Parameters.AddWithValue("@MultiSelect5", CUH.UMultiSelect5);
                
                _cmd.Parameters.AddWithValue("@CreatedBy", CUH.UCreatedBy);
                if (CUH.UEntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(CUH.UEntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", CUH.UEditedBy);

                if (CUH.UEditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(CUH.UEditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", CUH.UCorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", CUH.UUnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", CUH.UTerminalBy);
                _cmd.Parameters.AddWithValue("@BranchBy", CUH.UBranchBy);
                _cmd.Parameters.AddWithValue("@UserId", CUH.UUserId);

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
        
        public DataSet BindDropDown(commanbaseParamater CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_Adminmaster", _cn);
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
        public DataSet BindDropDownTab2(commanbaseParamater CBP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Base_UserMaster", _cn);
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
        public DataSet BindGrid(GridParamater GP)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("Sp_Grid_Adminmaster", _cn);
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
                SqlCommand _cmd = new SqlCommand("sp_Edit_Adminmaster", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@tablename", EA.tablename);
                _cmd.Parameters.AddWithValue("@Corporate", EA.Corporate);
                _cmd.Parameters.AddWithValue("@unit", EA.unit);
                _cmd.Parameters.AddWithValue("@Formcode", EA.Formcode);
                _cmd.Parameters.AddWithValue("@Formtabcode", EA.Formtabcode);
                _cmd.Parameters.AddWithValue("@Xmaster", EA.Xmaster);
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