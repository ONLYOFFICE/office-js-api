// Serialize a text run into a transferable data format in a document.

// How do I save a text run's content and formatting as structured data in a document?

// Capture a text run as a portable object that can be restored later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
let json = run.ToJSON(true);
let runFromJSON = Api.FromJSON(json);
runFromJSON.SetBold(true);
paragraph.AddElement(runFromJSON);