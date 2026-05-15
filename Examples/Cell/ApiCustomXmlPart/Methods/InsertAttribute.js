// Add a new named property to an XML element stored in a spreadsheet.

// How do I attach extra metadata to an existing XML node in a spreadsheet?

// Enrich an XML element with an additional attribute to carry more structured data in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<config />';
const xml = xmlManager.Add(xmlString);

xml.InsertAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());