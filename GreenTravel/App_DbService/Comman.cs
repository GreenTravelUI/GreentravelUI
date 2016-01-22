using GreenTravel.Models.Comman;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.App_DbService
{
    public class Comman:Base
    {
        public List<FormValidation> GetFormData(FormValidationPara frmpara)
        {
            _petaDB.EnableAutoSelect=false;
            return _petaDB.Query<FormValidation>("Exec Form_Caption @FormType,@FormTabCode,@corporate,@type", new {
                FormType=frmpara.FormType,
                FormTabCode=frmpara.FormTabCode,
                corporate=frmpara.corporate,
                type=frmpara.type
            }).ToList();
        }
    }
}