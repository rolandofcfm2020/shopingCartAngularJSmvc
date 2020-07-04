using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TypeLite;

namespace AngularJSTypescriptCSharp.Models
{
    [TsClass]
    public class TestModel
    {
        public int Age { get; set; }
        public string Name { get; set; }
        public Guid Id { get; set; }
    }
}