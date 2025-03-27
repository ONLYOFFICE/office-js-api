# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

```javascript
expression.SetSpacing(nSpacing);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | Required | [twips](../../Enumeration/twips.md) |  | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text spacing measured in twentieths of a point.

```javascript editor-docx
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSpacing(80);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");
```
