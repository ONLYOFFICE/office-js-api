// This example shows how to get data binding from a content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book1 category="ancient">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book1>
    <book2 category="">
        <title lang="en">Alice's Adventures in Wonderland</title>
        <author>Lewis Carroll</author>
        <year>1865</year>
        <price>30.00</price>
    </book2>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let dataBinding = Api.CreateDataBinding('xmlns:pic="http://example.com/picture"', xml.id, '/pic:documentData/pic:text');
inlineLvlSdt.SetDataBinding(dataBinding);
dataBinding = null;
dataBinding = inlineLvlSdt.GetDataBinding();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(dataBinding.GetItemId());
doc.AddElement(1, paragraph1);