// This example gets the ID of a data binding and inserts it into the document.
let doc = Api.GetDocument();
let dataBinding = Api.CreateDataBinding("prefix", "{1672F99A-FD52-48B8-68E0-377D78AE6886}", "/content/text");
let id = dataBinding.GetItemId();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Id of data binding: " + id);
doc.Push(infoParagraph);