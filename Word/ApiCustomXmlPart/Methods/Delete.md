# Delete

Deletes the entire custom XML part.

## Syntax

```javascript
expression.DeleteElement(xPath)
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method does not have any parameters.

## Returns

boolean

## Example

This example demonstrates how to delete a custom XML part.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example">1</content>');
let xml2 = xmlManager.Add('<content xmlms="http://example">1</content>');
xml.Delete();
let xmls = xmlManager.GetAll();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Count of xml: " + xmls.length);
doc.Push(infoParagraph);
```
