# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

expression.SetSpacing(nSpacing);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSpacing | Required | [twips](../../../Enumerations/twips.md) | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply spacing)

## Example

This example sets the text spacing measured in twentieths of a point.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetSpacing(2);
builder.SaveFile("docx", "SetSpacing.docx");
builder.CloseFile();
```