// Count how many custom XML parts are stored in a document.

// How do I find the total number of custom XML parts in a document?

// Verify that all expected XML data blocks were added by checking the part count in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("There are " + count + " custom XML parts in the document.");
doc.Push(infoParagraph);