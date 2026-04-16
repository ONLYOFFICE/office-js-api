// Get nodes from a custom XML part using XPath in a spreadsheet.

// How to get nodes from an XML part using XPath in a spreadsheet.

// Get the nodes for a custom XML part in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<products><item>Laptop</item><item>Mouse</item><item>Keyboard</item></products>");
let itemNodes = xml.GetNodes('/products/item');
worksheet.GetRange("A1").SetValue("Found " + itemNodes.length + " products:");
for (let i = 0; i < itemNodes.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue((i + 1) + ". " + itemNodes[i].GetText());
}