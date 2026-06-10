// Get the class type of the tables of figures collection.

// Obtain the tables of figures collection from the current document.

// Read the class type string that identifies the collection.

let doc = Api.GetDocument();
let tablesOfFigures = doc.GetTablesOfFigures();
let classType = tablesOfFigures.GetClassType();
