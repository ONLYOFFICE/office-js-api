# GetXml

Returns the XML string representation of the current custom XML part.

## Syntax

```javascript
expression.GetXml();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the XML string representation of a custom XML part.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text attribute1="attribute1 value">node text</text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let xmlString = xml.GetXml();

let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xmlString);
doc.Push(paragraph);
```
