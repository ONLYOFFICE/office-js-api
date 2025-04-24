// This example sets rotate for first page in document.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotate(90);