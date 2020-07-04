using AngularJSTypescriptCSharp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJSTypescriptCSharp.Controllers
{
    public class ProductsController : Controller
    {
        // GET: Products
        public ActionResult ShopingCart()
        {
            return View();
        }

        public ActionResult GetAllProducts()
        {
            var listData = new List<ProductModel>();
            listData.Add(new ProductModel() { Price = 23, ProductName = "Chocolate Hershays", Id = Guid.NewGuid() });
            listData.Add(new ProductModel() { Price = 31, ProductName = "Coca Cola 3lts", Id = Guid.NewGuid() });
            listData.Add(new ProductModel() { Price = 45, ProductName = "Ferrero", Id = Guid.NewGuid() });


            return GetJsonNetResult(listData);
        }

        [HttpPost]
        public ActionResult SaveCart(List<ShopingCartModel> shopingCart)
        {

            return null;
        }



        public JsonNetResult GetJsonNetResult(object data)
        {
            JsonNetResult jsonNetResult = new JsonNetResult();
            jsonNetResult.Formatting = Formatting.Indented;
            jsonNetResult.Data = data;
            return jsonNetResult;

        }
    }
}