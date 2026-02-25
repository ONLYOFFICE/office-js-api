// This example selects the text on the page and returns it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log(`The selected text is: ${page.GetSelectedText()}`);