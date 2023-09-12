# SetStrikeout

Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

## Syntax

expression.SetStrikeout(isStrikeout);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | Boolean | Specifies if the contents of the current Range are displayed struck through or not. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply strikeout)

## Example

This example specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Server Builder");
var oRange = oDocument.GetRange(18, 23);
oRange.SetStrikeout(true);
builder.SaveFile("docx", "SetStrikeout.docx");
builder.CloseFile();
```