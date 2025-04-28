// This example gets a class type of the data binding and inserts it into the document.
let doc = Api.GetDocument();
let dataBinding = Api.CreateDataBinding("prefix", "{1672F99A-FD52-48B8-68E0-377D78AE6886}", "/content/text");
let classType = dataBinding.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);