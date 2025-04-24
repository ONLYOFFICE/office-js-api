// This example gets first page and sets rotate.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotate(90);