using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TypeLite;

namespace AngularJSTypescriptCSharp.Models
{
    [TsClass]
    public class ShopingCartModel
    {
        public Guid ProductId { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
    }
}