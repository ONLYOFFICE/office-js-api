# SetDoubleStrikeout

Specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.

## Syntax

expression.SetDoubleStrikeout(isDoubleStrikeout);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | Boolean | Specifies that the contents of the current paragraph are displayed double struck through. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply double strikeout)

## Example

This example specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Server Builder");
var oRange = oDocument.GetRange(18, 23);
oRange.SetDoubleStrikeout(true);
builder.SaveFile("docx", "SetDoubleStrikeout.docx");
builder.CloseFile();
```