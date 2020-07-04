using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TypeLite;

namespace AngularJSTypescriptCSharp.Models
{
    [TsClass]
    public class ProductModel
    {
        public string ProductName { get; set; }
        public Guid Id { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
    }
}