// Export a style to a portable data format and restore it as a new style in a document.

// How do I serialize a style so it can be stored, transferred, and recreated in a document?

// Duplicate an existing style under a different name by converting it to data and back in a document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let json = tableStyle.ToJSON(false);
let styleFromJSON = Api.FromJSON(json);
styleFromJSON.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(styleFromJSON);
doc.Push(table);