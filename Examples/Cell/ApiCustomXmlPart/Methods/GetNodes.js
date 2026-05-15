// Select matching elements from stored XML data by path in a spreadsheet.

// How do I pull out specific nodes from a custom XML block saved in a spreadsheet?

// Navigate an XML structure to collect all elements at a given location in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<products><item>Laptop</item><item>Mouse</item><item>Keyboard</item></products>");
let itemNodes = xml.GetNodes('/products/item');
worksheet.GetRange("A1").SetValue("Found " + itemNodes.length + " products:");
for (let i = 0; i < itemNodes.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue((i + 1) + ". " + itemNodes[i].GetText());
}