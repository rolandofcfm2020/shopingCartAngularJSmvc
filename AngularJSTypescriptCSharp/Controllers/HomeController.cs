using AngularJSTypescriptCSharp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace AngularJSTypescriptCSharp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult GetData()
        {
            var listData = new List<TestModel>();
            listData.Add(new TestModel() { Age = 23, Name = "Albert" });
            listData.Add(new TestModel() { Age = 31, Name = "Blanca" });

            return GetJsonNetResult(listData);
        }


        public JsonNetResult GetJsonNetResult(object data)
        {
            JsonNetResult jsonNetResult = new JsonNetResult();
            jsonNetResult.Formatting = Formatting.Indented;
            jsonNetResult.Data = data;
            return jsonNetResult;

        }

        public object SerializeJSONData(object data)
        {
            var result = JsonConvert.SerializeObject(data, Newtonsoft.Json.Formatting.None,
            new Newtonsoft.Json.JsonSerializerSettings
            {
                StringEscapeHandling =
                Newtonsoft.Json.StringEscapeHandling.EscapeHtml
            });

            return result;
        }
    }
}