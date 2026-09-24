// Update an attribute of an element found by path in a custom XML part in a spreadsheet.

// Overwrite the current value of a named property on an XML node in a spreadsheet.

// Revise stored XML metadata by updating a specific attribute to a new value in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://example.com' />";
const xml = xmlManager.Add(xmlString);

xml.UpdateAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());