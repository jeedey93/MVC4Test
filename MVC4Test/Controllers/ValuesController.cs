using MVC4Test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MVC4Test.Controllers
{
    public class ValuesController : ApiController
    {

        private static List<string> data = initList();
        private static List<Asset> assets = initList2();


        private static List<string> initList()
        {
            var ret = new List<string>();
            ret.Add("value1");
            ret.Add("value2");
            return ret;
        }

        private static List<Asset> initList2()
        {
            var ret = new List<Asset>();
            ret.Add(new Asset() { Id = 1 , Category = "Inventory1", Name = "ACable1", Price = 10});
            ret.Add(new Asset() { Id = 2, Category = "Inventory2", Name = "BCable2", Price = 32 });
            ret.Add(new Asset() { Id = 3, Category = "Inventory3", Name = "CCable3", Price = 54 });
            ret.Add(new Asset() { Id = 4, Category = "Inventory4", Name = "DCable4", Price = 160 });
            ret.Add(new Asset() { Id = 5, Category = "Inventory5", Name = "ECable5", Price = 75 });
            ret.Add(new Asset() { Id = 6, Category = "Inventory6", Name = "FCable6", Price = 15 });
            return ret;
        }

        // GET api/values
        public IEnumerable<Asset> Get()
        {
            return assets;
        }

        // GET api/values/5
        public Asset Get(int id)
        {
            return assets.Where(x=>x.Id == id).SingleOrDefault();
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
            data.Add(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
            data[id] = value;
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            assets.RemoveAt(id);
        }
    }
}