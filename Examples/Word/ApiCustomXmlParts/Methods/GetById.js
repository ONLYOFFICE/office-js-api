// Get a custom XML part by its ID in a document.

// Find a custom XML part using its unique ID in a document.

// Display the retrieved XML part's content in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory xmlns='http://example.com'><item>Book</item></inventory>");
let id = xml.GetId();
let retrievedXml = xmlManager.GetById(id);
let paragraph = Api.CreateParagraph();
if (retrievedXml) {
    paragraph.AddText("Found XML part: " + retrievedXml.GetXml());
} else {
    paragraph.AddText("XML part not found");
}
doc.Push(paragraph);