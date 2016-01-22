using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GreenTravel.Models;
using System.Data.SqlClient;
using System.Data;


namespace GreenTravel.App_DbService
{
    public class DBUserMaster : Base
    {

        public int insert_data(UserMaster UM)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("SP_SAVE_User_Details_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@srno", UM.srno);
                _cmd.Parameters.AddWithValue("@UserCode", UM.UserCode);
                _cmd.Parameters.AddWithValue("@FirstName", UM.FirstName);
                _cmd.Parameters.AddWithValue("@LastName", UM.LastName);
                _cmd.Parameters.AddWithValue("@Email", UM.Email);
                _cmd.Parameters.AddWithValue("@Password", UM.Password);
                _cmd.Parameters.AddWithValue("@Gender", UM.Gender);
                _cmd.Parameters.AddWithValue("@CellPhone ", UM.CellPhone);
                _cmd.Parameters.AddWithValue("@OfficePhone", UM.OfficePhone);
                _cmd.Parameters.AddWithValue("@OfficePhoneExtension ", UM.OfficePhoneExtension);
                _cmd.Parameters.AddWithValue("@ResiedencePhone ", UM.ResiedencePhone);
                _cmd.Parameters.AddWithValue("@Qualification ", UM.Qualification);
                _cmd.Parameters.AddWithValue("@DrivingLicenceNumber ", UM.DrivingLicenceNumber);

                if (UM.BirthDate == null)
                {
                    _cmd.Parameters.AddWithValue("@BirthDate", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@BirthDate", DateTime.ParseExact(UM.BirthDate, "dd/MM/yyyy", null));
                }

                _cmd.Parameters.AddWithValue("@Nationality", UM.Nationality);
                _cmd.Parameters.AddWithValue("@Status", UM.Status);
                _cmd.Parameters.AddWithValue("@Designation ", UM.Designation);
                _cmd.Parameters.AddWithValue("@SittingLocation ", UM.SittingLocation);
                _cmd.Parameters.AddWithValue("@Photo ", UM.Photo);
                _cmd.Parameters.AddWithValue("@Signature ", UM.Signature);
                _cmd.Parameters.AddWithValue("@Attribute1", UM.Attribute1);
                _cmd.Parameters.AddWithValue("@Attribute2", UM.Attribute2);
                _cmd.Parameters.AddWithValue("@Attribute3", UM.Attribute3);
                _cmd.Parameters.AddWithValue("@Attribute4", UM.Attribute4);
                _cmd.Parameters.AddWithValue("@Attribute5", UM.Attribute5);
                _cmd.Parameters.AddWithValue("@Attribute6", UM.Attribute6);
                _cmd.Parameters.AddWithValue("@Attribute7", UM.Attribute7);
                _cmd.Parameters.AddWithValue("@Attribute8", UM.Attribute8);
                _cmd.Parameters.AddWithValue("@Attribute9", UM.Attribute9);
                _cmd.Parameters.AddWithValue("@Attribute10", UM.Attribute10);
                _cmd.Parameters.AddWithValue("@CreatedBy", UM.CreatedBy);
                if (UM.EntryDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EntryDatetime", DateTime.ParseExact(UM.EntryDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@EditedBy", UM.EditedBy);

                if (UM.EditDatetime == null)
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DBNull.Value);
                }
                else
                {
                    _cmd.Parameters.AddWithValue("@EditDatetime", DateTime.ParseExact(UM.EditDatetime, "dd/MM/yyyy", null));
                }
                _cmd.Parameters.AddWithValue("@CorpcentreBy", UM.CorpcentreBy);
                _cmd.Parameters.AddWithValue("@UnitCorpBy", UM.UnitCorpBy);
                _cmd.Parameters.AddWithValue("@TerminalBy", UM.TerminalBy);
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

        public DataSet RetrieveAllUserData(UserMaster_Formpara UMFRM)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("sp_Form_User_Details_Master", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@module", UMFRM.module);
                _cmd.Parameters.AddWithValue("@control", UMFRM.control);
                _cmd.Parameters.AddWithValue("@corporate", UMFRM.corporate);
                _cmd.Parameters.AddWithValue("@userid", UMFRM.userid);
                _cmd.Parameters.AddWithValue("@ip", UMFRM.ip);
                _cmd.Parameters.AddWithValue("@field1", UMFRM.field1);
                _cmd.Parameters.AddWithValue("@field2", UMFRM.field2);
                _cmd.Parameters.AddWithValue("@field3", UMFRM.field3);
                _cmd.Parameters.AddWithValue("@field4", UMFRM.field4);
                _cmd.Parameters.AddWithValue("@field5", UMFRM.field5);
                _cmd.Parameters.AddWithValue("@field6", UMFRM.field6);
                _cmd.Parameters.AddWithValue("@field7", UMFRM.field7);
                _cmd.Parameters.AddWithValue("@field8", UMFRM.field8);
                _cmd.Parameters.AddWithValue("@field9", UMFRM.field9);
                _cmd.Parameters.AddWithValue("@field10", UMFRM.field10);
                _cmd.Parameters.AddWithValue("@field11", UMFRM.field11);
                _cmd.Parameters.AddWithValue("@field12", UMFRM.field12);
                _cmd.Parameters.AddWithValue("@field13", UMFRM.field13);
                _cmd.Parameters.AddWithValue("@field14", UMFRM.field14);
                _cmd.Parameters.AddWithValue("@field15", UMFRM.field15);
                _cmd.Parameters.AddWithValue("@field16", UMFRM.field16);
                _cmd.Parameters.AddWithValue("@field17", UMFRM.field17);
                _cmd.Parameters.AddWithValue("@field18", UMFRM.field18);
                _cmd.Parameters.AddWithValue("@field19", UMFRM.field19);
                _cmd.Parameters.AddWithValue("@field20", UMFRM.field20);
                _cmd.Parameters.AddWithValue("@field21", UMFRM.field21);
                _cmd.Parameters.AddWithValue("@field22", UMFRM.field22);
                _cmd.Parameters.AddWithValue("@field23", UMFRM.field23);
                _cmd.Parameters.AddWithValue("@field24", UMFRM.field24);
                _cmd.Parameters.AddWithValue("@field25", UMFRM.field25);
                _cmd.Parameters.AddWithValue("@field26", UMFRM.field26);
                _cmd.Parameters.AddWithValue("@field27", UMFRM.field27);
                _cmd.Parameters.AddWithValue("@field28", UMFRM.field28);
                _cmd.Parameters.AddWithValue("@field29", UMFRM.field29);
                _cmd.Parameters.AddWithValue("@field30", UMFRM.field30);
                _cmd.Parameters.AddWithValue("@field31", UMFRM.field31);
                _cmd.Parameters.AddWithValue("@field32", UMFRM.field32);
                _cmd.Parameters.AddWithValue("@field33", UMFRM.field33);
                _cmd.Parameters.AddWithValue("@field34", UMFRM.field34);
                _cmd.Parameters.AddWithValue("@field35", UMFRM.field35);
                _cmd.Parameters.AddWithValue("@type", UMFRM.type);
                _cmd.Parameters.AddWithValue("@VouType", UMFRM.VouType);
                _cmd.Parameters.AddWithValue("@FormType", UMFRM.FormType);
                _cmd.Parameters.AddWithValue("@FormTabCode", UMFRM.FormTabCode);
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
            //return ds;
        }

        //public string insert_data(UserMaster UM)
        //{

        //    _petaDB.EnableAutoSelect = false;
        //    var data = _petaDB.Query<UserMaster>(";exec SP_SAVE_User_Details_Master @srno,@UserCode,@FirstName ,@LastName ,@Email ,@Password,@Gender,@CellPhone,@OfficePhone,@OfficePhoneExtension,@ResiedencePhone,@Qualification,@DrivingLicenceNumber,@BirthDate ,@Nationality,@Status,@Designation,@SittingLocation,@Photo,@Signature,@Attribute1 ,@Attribute2 ,@Attribute3 ,@Attribute4 ,@Attribute5 ,@Attribute6 ,@Attribute7 ,@Attribute8 ,@Attribute9 ,@Attribute10,CreatedBy,@EntryDatetime ,@EditedBy,@EditDatetime ,@CorpcentreBy,@UnitCorpBy,@TerminalBy",
        //      new
        //      {
        //          srno = UM.srno,
        //          UserCode = UM.UserCode,
        //          FirstName = UM.FirstName,
        //          LastName = UM.LastName,
        //          Email = UM.Email,
        //          Password = UM.Password,
        //          Gender = "null",
        //          CellPhone = "null",
        //          OfficePhone = "null",
        //          OfficePhoneExtension = "null",
        //          ResiedencePhone = "null",
        //          Qualification = "null",
        //          DrivingLicenceNumber = "null",
        //          BirthDate = "null",
        //          Nationality = "null",
        //          Status = "null",
        //          Designation = "null",
        //          SittingLocation = "null",
        //          Photo = "null",
        //          Signature = "null",
        //          Attribute1 = "null",
        //          Attribute2 = "null",
        //          Attribute3 = "null",
        //          Attribute4 = "null",
        //          Attribute5 = "null",
        //          Attribute6 = "null",
        //          Attribute7 = "null",
        //          Attribute8 = "null",
        //          Attribute9 = "null",
        //          Attribute10 = "null",
        //          CreatedBy = "null",
        //          EntryDatetime = "null",
        //          EditedBy = "null",
        //          EditDatetime = "null",
        //          CorpcentreBy = "null",
        //          UnitCorpBy = "null",
        //          TerminalBy = "null"
        //      });

        //    return "0";
        //}


    }
}