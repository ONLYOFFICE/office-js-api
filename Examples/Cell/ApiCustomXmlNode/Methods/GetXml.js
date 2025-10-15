// This example shows how to get the XML string representation of a custom XML node.

// How to retrieve XML string representation from custom XML node elements.

// Get XML string from book node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<book><title>JavaScript Guide</title><author>John Smith</author></book>");
let bookNode = xml.GetNodes('/book')[0];
let xmlString = bookNode.GetXml();
worksheet.GetRange("A1").SetValue("XML content:");
worksheet.GetRange("A2").SetValue(xmlString);