// This example converts the ApiInlineLvlSdt object into the JSON object.

// How to get a JSON from the inline text control.

// Convert the inline text control to json and add it to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.SetAlias("№1");
let json = inlineLvlSdt.ToJSON(true);
let inlineLvlSdtFromJSON = Api.FromJSON(json);
paragraph.AddInlineLvlSdt(inlineLvlSdtFromJSON);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdtFromJSON.AddElement(run, 0);