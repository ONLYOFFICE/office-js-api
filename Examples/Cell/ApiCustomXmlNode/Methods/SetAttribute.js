// Attach a named property with a value to an XML element in a spreadsheet.

// How do I add an attribute to an XML node in a spreadsheet?

// Annotate an XML element with descriptive metadata fields in a spreadsheet.

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