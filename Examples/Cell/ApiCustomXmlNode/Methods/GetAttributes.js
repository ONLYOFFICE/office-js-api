// Retrieve every attribute attached to an XML node in a spreadsheet.

// How do I list all attributes of a custom XML element in a spreadsheet?

// Loop through the complete set of attributes on an embedded XML node and display them in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion' id='101'>
		<name>Leo</name>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);
const animalNode = xml.GetNodes('/zoo/animal')[0];

const attributes = animalNode.GetAttributes();

worksheet.GetRange('A1').SetValue('Attribute');
worksheet.GetRange('B1').SetValue('Value');
for (let i = 0; i < attributes.length; i++) {
	worksheet.GetRange('A' + (i + 2)).SetValue(attributes[i].name);
	worksheet.GetRange('B' + (i + 2)).SetValue(attributes[i].value);
}