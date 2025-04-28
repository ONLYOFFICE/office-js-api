# GetCustomXmlParts

Retrieves the collection of custom XML parts attached to the document.

## Syntax

```javascript
expression.GetCustomXmlParts();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method does not take any parameters.

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlParts/ApiCustomXmlParts.md)[] \| null

## Example

This example shows how to get the custom XML manager, add a new XML part, and retrieve it by its ID.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = '<content><text>Example XML</text></content>';
let xml = xmlManager.Add(xmlText);
let xmlId = xml.id;
let retrievedXml = xmlManager.GetById(xmlId);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Retrieved XML: " + retrievedXml.GetXml());
doc.Push(infoParagraph);
```