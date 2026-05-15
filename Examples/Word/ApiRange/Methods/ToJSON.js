// Save a text range as a reusable data snapshot in a document.

// How do I preserve a formatted text range for later reuse in a document?

// Capture a portion of text so it can be restored or duplicated elsewhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = Api.CreateRange(paragraph, 0, 9);
range.SetBold(true);
let json = range.ToJSON(false, true);
let rangeFromJSON = Api.FromJSON(json);
doc.Push(rangeFromJSON[0]);