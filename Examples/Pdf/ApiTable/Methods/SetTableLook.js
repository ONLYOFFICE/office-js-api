// How to set a table look with options.

// Create the ApiTable object and set its look.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetTableLook(true, false, false, false, false, true);

page.AddObject(table);