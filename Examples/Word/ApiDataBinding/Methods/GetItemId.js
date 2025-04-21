// This example gets a class type and inserts it into the document.
let dataBinding = Api.CreateDataBinding('xmlns:pic="http://example.com/picture"', id, '/pic:documentData/pic:text');
let classType = dataBinding.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);