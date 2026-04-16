// How to add a shading to the table background in a PDF document.

// Create a table, set its shading color and add it to the page.

// Set shd for a table in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetShd("clear", 255, 111, 61);

page.AddObject(table);