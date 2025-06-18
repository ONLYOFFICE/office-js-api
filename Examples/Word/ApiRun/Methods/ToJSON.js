// This example converts the ApiRun object into the JSON object.

// How to convert a slide object to a JSON object.

// Get a slide by its index and convert it to JSON.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
let json = run.ToJSON(true);
let runFromJSON = Api.FromJSON(json);
runFromJSON.SetBold(true);
paragraph.AddElement(runFromJSON);