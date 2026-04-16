// Delete an XML element from a custom XML part in a spreadsheet.

// How do I delete the element in a spreadsheet?

// Delete the element using a custom XML part object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<content>
	<text>example_text</text>
	<extra>remove me</extra>
</content>`;
const xml = xmlManager.Add(xmlString);

xml.DeleteElement('/content/extra');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());