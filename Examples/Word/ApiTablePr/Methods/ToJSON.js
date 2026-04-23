// Save table formatting settings as a portable data structure in a document.

// How do I export table style properties so they can be stored or reused in a document?

// Serialize the table property configuration into a transferable format in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let json = tablePr.ToJSON();
let tablePrFromJSON = Api.FromJSON(json);
let type = tablePrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);