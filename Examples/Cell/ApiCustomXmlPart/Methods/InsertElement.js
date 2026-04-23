// Add a child element to an existing XML structure stored in a spreadsheet.

// How do I nest a new node inside an XML block already saved in a spreadsheet?

// Expand stored XML data by appending a new element at a chosen location in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<content version='9.4' />";
const xml = xmlManager.Add(xmlString);

xml.InsertElement('/content', '<text>lorem</text>');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());