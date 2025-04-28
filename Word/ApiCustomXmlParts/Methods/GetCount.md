# GetCount

Returns the count of custom XML parts in the XML manager.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the count of custom XML parts in the XML manager.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = '<content><text>Sample XML part</text></content>';
let xml = xmlManager.Add(xmlText);
let count = xmlManager.GetCount();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("There are " + count + " custom XML parts in the document.");
doc.Push(infoParagraph);
```
