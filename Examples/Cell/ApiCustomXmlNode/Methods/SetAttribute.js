// This example shows how to set an attribute value on a custom XML node.

// How to set attributes on custom XML node elements.

// Set attributes on product node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<product></product>");
let productNode = xml.GetNodes('/product')[0];
productNode.SetAttribute("id", "456");
productNode.SetAttribute("name", "Desktop Computer");
productNode.SetAttribute("price", "1299");
let updatedXml = xml.GetXml();
worksheet.GetRange("A1").SetValue("Updated XML:");
worksheet.GetRange("A2").SetValue(updatedXml);