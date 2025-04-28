# GetDataFromContentControl

Gets XML data from the content control bound to custom XML.

## Syntax

```javascript
expression.GetDataFromContentControl(sdt);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
sdt | Required | [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) |  | The content control (inline-level or block-level) for which to retrieve the XML data.

## Returns

string

## Example

This example shows how to get XML data from a content control.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is a inline text content control.");
let inlineText = xmlManager.GetDataFromContentControl(inlineLvlSdt);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
let blockText = xmlManager.GetDataFromContentControl(blockLvlSdt);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Text form inlineLevelSdt: " + inlineText + "\r\n\n\n");
infoParagraph.AddText("Text form blockLevelSdt: " + blockText + "\r\n");
doc.Push(infoParagraph);
```
