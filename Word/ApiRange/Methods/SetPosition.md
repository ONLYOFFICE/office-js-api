# SetPosition

Specifies the amount by which text is raised or lowered for the current Range in relation to the default baseline of the surrounding non-positioned text.

## Syntax

expression.SetPosition(nPosition);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../../Enumerations/hps.md) | Specifies a positive (raised text) or negative (lowered text) measurement in half-points (1/144 of an inch). |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't set position)

## Example

This example specifies the amount by which text is raised or lowered for the Range in relation to the default baseline of the surrounding non-positioned text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. ");
oParagraph.AddText("This is a text run with the text raised 5 points (10 half-points).");
var oRange = oDocument.GetRange(22, 75);
oRange.SetPosition(10);
builder.SaveFile("docx", "SetPosition.docx");
builder.CloseFile();
```