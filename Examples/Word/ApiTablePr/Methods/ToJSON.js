// This example converts the table object into the JSON object.

// How to get a JSON from the table properties.

// Convert the table property to json and add it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let json = tablePr.ToJSON();
let tablePrFromJSON = Api.FromJSON(json);
let type = tablePrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);