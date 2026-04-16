// Convert the table object into the JSON object in a document.

// How to get a JSON from the table object in a document.

// Convert the table to json and add it to the document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
let json = table.ToJSON(false, true);
let tableFromJSON = Api.FromJSON(json);
tableFromJSON.SetTableBorderTop("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderRight("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderInsideV("single", 32, 0, 255, 111, 6);
tableFromJSON.SetTableBorderInsideH("single", 32, 0, 255, 111, 6);
tableFromJSON.SetWidth("percent", 100);
doc.Push(tableFromJSON);