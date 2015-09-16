using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC4Test.Models
{
    public class Asset
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
    }
}