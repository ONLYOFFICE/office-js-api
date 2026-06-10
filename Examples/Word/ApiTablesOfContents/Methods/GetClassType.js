// Get the class type of the tables of contents collection.

// Obtain the tables of contents collection from the current document.

// Read the class type string that identifies the collection.

let doc = Api.GetDocument();
let tablesOfContents = doc.GetTablesOfContents();
let classType = tablesOfContents.GetClassType();
