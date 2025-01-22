// This example converts the ApiStyle object into the JSON object.
let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let json = tableStyle.ToJSON(false);
let styleFromJSON = Api.FromJSON(json);
styleFromJSON.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(styleFromJSON);
doc.Push(table);