// Update the value of an attribute in a custom XML part element in a spreadsheet.

// How can I update attribute using a custom XML part in a spreadsheet?

// Update attribute for a custom XML part in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://api.onlyoffice.com' />";
const xml = xmlManager.Add(xmlString);

xml.UpdateAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());