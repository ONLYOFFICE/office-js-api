// This example creates a run and inserts it into the document.

// Creates a run, adds a text to it, and inserts it into the first paragraph of the document.

// How to create the ApiRun object and adds it to the ApiParagraph class.

// How to add a text to the paragraph.

// How to add a text to the ApiRun object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);