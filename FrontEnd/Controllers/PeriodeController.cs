﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd.Controllers
{
    public class PeriodeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
