﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenTravel.Models
{
    public class Login
    {
        public string Email { get; set; }
        public string password { get; set; }
        public string IsActive { get; set; }
    }
}