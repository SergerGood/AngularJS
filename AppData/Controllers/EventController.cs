using System;
using System.IO;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
    public class EventController : ApiController
    {
        public JToken Get(string id = null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            var fullPath = Path.Combine(path, @"../app/data/event", id + ".json");
            var text = System.IO.File.ReadAllText(fullPath);

            return JObject.Parse(text);
        }

        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            var fullPath = Path.Combine(path, @"../app/data/event", id + ".json");

            System.IO.File.WriteAllText(fullPath, eventData.ToString(Formatting.None));
        }
    }
}
