// Delete an attribute from a custom XML node in a spreadsheet.

// How to delete the attribute for a custom XML node in a spreadsheet?

// Delete the attribute and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book category='fiction' status='available'>
		<title>The Odyssey</title>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);
const bookNode = xml.GetNodes('/bookstore/book')[0];

bookNode.DeleteAttribute('category');

const attributes = bookNode.GetAttributes();
worksheet.GetRange('A1').SetValue('Remaining attributes count: ' + attributes.length);
worksheet.GetRange('A2').SetValue('XML after deletion: ' + xml.GetXml());