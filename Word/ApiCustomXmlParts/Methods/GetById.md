# GetById

Retrieves a custom XML part by its ID from the XML manager.

## Syntax

```javascript
expression.GetById(id);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
id | Required | string |  | The ID of the custom XML part to retrieve.

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md) \| null

## Example

This example shows how to retrieve a custom XML part by its ID.

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
