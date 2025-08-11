// This example shows how to get child nodes of a custom XML node using XPath.

// How to retrieve child nodes from custom XML node elements using XPath.

// Get book nodes from library.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<library><book>Book 1</book><book>Book 2</book><book>Book 3</book></library>");
let libraryNode = xml.GetNodes('/library')[0];
let bookNodes = libraryNode.GetNodes('/book');
worksheet.GetRange("A1").SetValue("Number of books: " + bookNodes.length);
for (let i = 0; i < bookNodes.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Book" + ": " + bookNodes[i].GetText());
}