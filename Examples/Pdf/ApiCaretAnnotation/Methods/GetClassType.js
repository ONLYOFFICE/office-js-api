// Get the class type of a caret annotation in a PDF document.

// Retrieve the class type from an annotation object.

// Display the annotation class type in the console.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);