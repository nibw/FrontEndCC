using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd.Controllers
{
    public class TransaksiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AddHousehold()
        {
            return View();
        }
        public IActionResult HouseholdCalc() 
        {
            return View();
        }

        public IActionResult ListCar()
        {
            return View();
        }

        public IActionResult AddCar()
        {
            return View();
        }

        public IActionResult ListTree()
        {
            return View();
        }

        public IActionResult AddTree()
        {
            return View();
        }
    }
}
