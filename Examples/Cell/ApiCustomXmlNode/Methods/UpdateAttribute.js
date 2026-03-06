// This example shows how to update the value of an existing attribute in a custom XML node.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book category='fiction'>
		<title>The Odyssey</title>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);
const bookNode = xml.GetNodes('/bookstore/book')[0];

bookNode.UpdateAttribute('category', 'ancient');

const attributes = bookNode.GetAttributes();
worksheet.GetRange('A1').SetValue('Updated attribute: ' + attributes[0].name + '=' + attributes[0].value);
