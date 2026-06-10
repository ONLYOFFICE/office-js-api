// Get the document that owns the tables of figures collection.

// Obtain the tables of figures collection from the current document.

// Return the parent document that the collection belongs to.

let doc = Api.GetDocument();
let tablesOfFigures = doc.GetTablesOfFigures();
let parent = tablesOfFigures.GetParent();
