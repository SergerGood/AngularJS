using System.IO;
using System.Web.Hosting;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
    public class EventController : ApiController
    {
        private readonly string eventPath = @"../app/data/event";
        private readonly string rootPath = HostingEnvironment.MapPath("/");

        public JToken Get(string id = null)
        {
            return id == null 
                ? GetAllJsonEventsAsArray() 
                : GetSingleJsonFile(id);
        }

        public void Post(string id, JObject eventData)
        {
            var fullPath = Path.Combine(rootPath, eventPath, id + ".json");

            File.WriteAllText(fullPath, eventData.ToString(Formatting.None));
        }

        private JArray GetAllJsonEventsAsArray()
        {
            var contents = string.Empty;
            foreach (var file in Directory.GetFiles(Path.Combine(rootPath, eventPath)))
            {
                contents += File.ReadAllText(file) + ",";
            }

            var result = JArray.Parse("[" + contents.Substring(0, contents.Length - 1) + "]");

            return result;
        }

        private JToken GetSingleJsonFile(string id)
        {
            var fullPath = Path.Combine(rootPath, eventPath, id + ".json");
            var text = File.ReadAllText(fullPath);

            return JObject.Parse(text);
        }
    }
}