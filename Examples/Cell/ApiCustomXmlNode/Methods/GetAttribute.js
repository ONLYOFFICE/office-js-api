// Read a single named attribute from an XML node embedded in a spreadsheet.

// How do I extract the value of a specific attribute from a custom XML element in a spreadsheet?

// Pull individual attribute values out of stored XML data and display them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<product id='123' name='Laptop' price='999'></product>");
let productNode = xml.GetNodes('/product')[0];
let id = productNode.GetAttribute("id");
let name = productNode.GetAttribute("name");
let price = productNode.GetAttribute("price");
worksheet.GetRange("A1").SetValue("Product ID: " + id);
worksheet.GetRange("A2").SetValue("Product Name: " + name);
worksheet.GetRange("A3").SetValue("Product Price: " + price);