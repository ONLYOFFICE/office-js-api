// This example shows how to get an attribute value from a custom XML node.

// How to get an attribute from an XML node.

// Get an XML node attribute.

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