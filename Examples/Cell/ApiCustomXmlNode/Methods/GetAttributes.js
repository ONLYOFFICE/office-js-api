// This example shows how to get all attributes of a custom XML node.

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
