// Insert a clickable hyperlink into a paragraph in a document.

// How do I attach an external URL to text inside a paragraph in a document?

// Make a word or phrase navigate to a web page by embedding a link directly in paragraph content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");