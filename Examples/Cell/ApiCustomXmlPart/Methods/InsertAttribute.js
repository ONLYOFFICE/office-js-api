// Insert an attribute into a custom XML part element in a spreadsheet.

// How do I insert the attribute in a spreadsheet?

// Insert the attribute using a custom XML part object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<config />';
const xml = xmlManager.Add(xmlString);

xml.InsertAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());