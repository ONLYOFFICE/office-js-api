// Strip an attribute from an XML element stored in a spreadsheet.

// How do I remove a named property from an XML element in a spreadsheet?

// Trim unwanted metadata from an XML node and confirm the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://example' />";
const xml = xmlManager.Add(xmlString);

xml.DeleteAttribute('/config', 'namespace');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());