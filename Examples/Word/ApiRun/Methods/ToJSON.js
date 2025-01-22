// This example converts the ApiRun object into the JSON object.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
let json = run.ToJSON(true);
let runFromJSON = Api.FromJSON(json);
runFromJSON.SetBold(true);
paragraph.AddElement(runFromJSON);