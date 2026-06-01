// Replace the content of a stored XML element with new data in a spreadsheet.

// How do I change the value inside a saved XML structure in a spreadsheet?

// Overwrite an existing XML node to keep embedded data current in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<content><text>Old value</text></content>';
const xml = xmlManager.Add(xmlString);

xml.UpdateElement('/content/text', '<text>New value</text>');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());