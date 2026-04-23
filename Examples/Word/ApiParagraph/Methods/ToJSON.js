// Serialize a paragraph into a portable data format for storage or transfer in a document.

// How do I export a paragraph's structure and content as a JSON object in a document?

// Save a paragraph's formatting and text as structured data so it can be reconstructed later in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
doc.AddElement(0, paragraphFromJSON);