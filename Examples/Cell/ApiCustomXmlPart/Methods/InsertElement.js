// This example shows how to insert a new XML element into a custom XML part.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<content version='9.4' />";
const xml = xmlManager.Add(xmlString);

xml.InsertElement('/content', '<text>lorem</text>');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());
