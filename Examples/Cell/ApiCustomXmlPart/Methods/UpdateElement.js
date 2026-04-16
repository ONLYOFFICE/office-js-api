// Update an XML element in a custom XML part in a spreadsheet.

// How do I update element in a spreadsheet?

// Update element using a custom XML part object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<content><text>Old value</text></content>';
const xml = xmlManager.Add(xmlString);

xml.UpdateElement('/content/text', '<text>New value</text>');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());