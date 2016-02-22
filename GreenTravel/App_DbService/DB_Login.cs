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
    public class DB_Login : Base
    {
        public List<Login> GetUserData(string type, string Email, string url, string Password)
        {
            _petaDB.EnableAutoSelect = false;
            return _petaDB.Query<Login>("Exec SP_Login @Type,@Password,@Email,@module,@control,@corporate,@Unit,@Role,@userid,@ip,@url", new
            {
                Type = type,
                Password = Password,
                Email = Email,
                module = "null",
                control = "null",
                corporate = "null",
                Unit = "null",
                Role = "null",
                userid = "null",
                ip = "null",
                url = url
            }).ToList();
        }

        //public List<GeneralCorporateValues> GetPageLoad(string type, string Email, string url, string Password)
        //{
        //    _petaDB.EnableAutoSelect = false;

        //    return _petaDB.Query<GeneralCorporateValues>("Exec SP_Login @Type,@Password,@Email,@module,@control,@corporate,@Unit,@Role,@userid,@ip,@url", new
        //    {
        //        Type = type,
        //        Password = Password,
        //        Email = Email,
        //        module = "null",
        //        control = "null",
        //        corporate = "null",
        //        Unit = "null",
        //        Role = "null",
        //        userid = "null",
        //        ip = "null",
        //        url = url
        //    }).ToList();
        //}

        public DataSet GetPageLoad(string type, string Email, string url, string Password)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("SP_Login", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;
                _cmd.Parameters.AddWithValue("@Type", type);
                _cmd.Parameters.AddWithValue("@Password", Password);
                _cmd.Parameters.AddWithValue("@Email", Email);
                _cmd.Parameters.AddWithValue("@module", "null");
                _cmd.Parameters.AddWithValue("@control", "null");
                _cmd.Parameters.AddWithValue("@corporate", "null");
                _cmd.Parameters.AddWithValue("@Unit", "null");
                _cmd.Parameters.AddWithValue("@Role", "null");
                _cmd.Parameters.AddWithValue("@userid", "null");
                _cmd.Parameters.AddWithValue("@ip", "null");
                _cmd.Parameters.AddWithValue("@url", "null");
                _cmd.CommandType = CommandType.StoredProcedure;
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

        public DataSet GetLoginData(FormValidationPara _FormValidationPara)
        {
            try
            {
                _cn.Open();
                SqlCommand _cmd = new SqlCommand("SP_Login", _cn);
                _cmd.CommandType = CommandType.StoredProcedure;

                _cmd.Parameters.AddWithValue("@Type", _FormValidationPara.type);

                if (_FormValidationPara.Password != null && _FormValidationPara.Password != "")
                    _cmd.Parameters.AddWithValue("@Password", _FormValidationPara.Password);
                else
                    _cmd.Parameters.AddWithValue("@Password", DBNull.Value);
                if (_FormValidationPara.Email != null && _FormValidationPara.Email != "")
                    _cmd.Parameters.AddWithValue("@Email", _FormValidationPara.Email);
                else
                    _cmd.Parameters.AddWithValue("@Email", DBNull.Value);

                if (_FormValidationPara.Password != null && _FormValidationPara.module != "")
                    _cmd.Parameters.AddWithValue("@module", _FormValidationPara.module);
                else
                    _cmd.Parameters.AddWithValue("@module", DBNull.Value);

                if (_FormValidationPara.control != null && _FormValidationPara.control != "")
                    _cmd.Parameters.AddWithValue("@control", _FormValidationPara.control);
                else
                    _cmd.Parameters.AddWithValue("@control", DBNull.Value);

                if (_FormValidationPara.corporate != null && _FormValidationPara.corporate != "")
                    _cmd.Parameters.AddWithValue("@corporate", _FormValidationPara.corporate);
                else
                    _cmd.Parameters.AddWithValue("@corporate", DBNull.Value);

                if (_FormValidationPara.Unit != null && _FormValidationPara.Unit != "")
                    _cmd.Parameters.AddWithValue("@Unit", _FormValidationPara.Unit);
                else
                    _cmd.Parameters.AddWithValue("@Unit", DBNull.Value);

                if (_FormValidationPara.Role != null && _FormValidationPara.Role != "")
                    _cmd.Parameters.AddWithValue("@Role", _FormValidationPara.Role);
                else
                    _cmd.Parameters.AddWithValue("@Role", DBNull.Value);

                if (_FormValidationPara.userid != 0)
                    _cmd.Parameters.AddWithValue("@userid", _FormValidationPara.userid);
                else
                    _cmd.Parameters.AddWithValue("@userid", DBNull.Value);

                if (_FormValidationPara.ip != null && _FormValidationPara.ip != "")
                    _cmd.Parameters.AddWithValue("@ip", _FormValidationPara.ip);
                else
                    _cmd.Parameters.AddWithValue("@ip", DBNull.Value);

                if (_FormValidationPara.url != null && _FormValidationPara.url != "")
                    _cmd.Parameters.AddWithValue("@url", _FormValidationPara.url);
                else
                    _cmd.Parameters.AddWithValue("@url", DBNull.Value);

                _cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter _adp = new SqlDataAdapter(_cmd);
                DataSet _ds = new DataSet();
                _adp.Fill(_ds);
                _adp.Dispose();
                _cmd.Dispose();
                _cn.Close();
                _cn.Dispose();
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

        public DataSet GetSessionValue(FormValidationPara _FormValidationPara)
        {
            try
            {
                using (SqlConnection sconn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["gtcon"].ConnectionString))
                {
                    sconn.Open();
                    using (SqlCommand _cmd = new SqlCommand("SP_Login", sconn))
                    {
                        
                        _cmd.CommandType = CommandType.StoredProcedure;
                        _cmd.Parameters.AddWithValue("@Type", _FormValidationPara.type);
                        if (_FormValidationPara.Password != null && _FormValidationPara.Password != "")
                            _cmd.Parameters.AddWithValue("@Password", _FormValidationPara.Password);
                        else
                            _cmd.Parameters.AddWithValue("@Password", DBNull.Value);
                        if (_FormValidationPara.Email != null && _FormValidationPara.Email != "")
                            _cmd.Parameters.AddWithValue("@Email", _FormValidationPara.Email);
                        else
                            _cmd.Parameters.AddWithValue("@Email", DBNull.Value);

                        if (_FormValidationPara.Password != null && _FormValidationPara.module != "")
                            _cmd.Parameters.AddWithValue("@module", _FormValidationPara.module);
                        else
                            _cmd.Parameters.AddWithValue("@module", DBNull.Value);

                        if (_FormValidationPara.control != null && _FormValidationPara.control != "")
                            _cmd.Parameters.AddWithValue("@control", _FormValidationPara.control);
                        else
                            _cmd.Parameters.AddWithValue("@control", DBNull.Value);

                        if (_FormValidationPara.corporate != null && _FormValidationPara.corporate != "")
                            _cmd.Parameters.AddWithValue("@corporate", _FormValidationPara.corporate);
                        else
                            _cmd.Parameters.AddWithValue("@corporate", DBNull.Value);

                        if (_FormValidationPara.Unit != null && _FormValidationPara.Unit != "")
                            _cmd.Parameters.AddWithValue("@Unit", _FormValidationPara.Unit);
                        else
                            _cmd.Parameters.AddWithValue("@Unit", DBNull.Value);

                        if (_FormValidationPara.Role != null && _FormValidationPara.Role != "")
                            _cmd.Parameters.AddWithValue("@Role", _FormValidationPara.Role);
                        else
                            _cmd.Parameters.AddWithValue("@Role", DBNull.Value);

                        if (_FormValidationPara.userid != 0)
                            _cmd.Parameters.AddWithValue("@userid", _FormValidationPara.userid);
                        else
                            _cmd.Parameters.AddWithValue("@userid", DBNull.Value);

                        if (_FormValidationPara.ip != null && _FormValidationPara.ip != "")
                            _cmd.Parameters.AddWithValue("@ip", _FormValidationPara.ip);
                        else
                            _cmd.Parameters.AddWithValue("@ip", DBNull.Value);

                        if (_FormValidationPara.url != null && _FormValidationPara.url != "")
                            _cmd.Parameters.AddWithValue("@url", _FormValidationPara.url);
                        else
                            _cmd.Parameters.AddWithValue("@url", DBNull.Value);

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
            catch
            {
                throw;
            }
            finally
            {
            }

        }
    }
}