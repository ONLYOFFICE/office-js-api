// Change the value of an existing attribute on an XML element in a spreadsheet.

// How do I overwrite the current value of a named property on an XML node in a spreadsheet?

// Revise stored XML metadata by updating a specific attribute to a new value in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://api.onlyoffice.com' />";
const xml = xmlManager.Add(xmlString);

xml.UpdateAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());