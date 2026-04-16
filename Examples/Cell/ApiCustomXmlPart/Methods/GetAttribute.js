// Get an attribute from the root element of a custom XML part in a spreadsheet.

// How to get an attribute from an XML part element in a spreadsheet.

// Get an XML attribute using the custom XML part API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<config version='1.0' xmlns='http://example'><setting>value</setting></config>");
let rootNodes = xml.GetNodes('/config');
if (rootNodes.length > 0) {
    let version = rootNodes[0].GetAttribute('version');
    worksheet.GetRange("A1").SetValue("Config version: " + version);
} else {
    worksheet.GetRange("A1").SetValue("No root node found");
}