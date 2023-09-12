# SetBold

Sets the bold property to the text character.

## Syntax

expression.SetBold(isBold);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isBold | Required | Boolean | Specifies that the contents of this paragraph are displayed bold. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply bold)

## Example

This example sets the bold property to the text character.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetBold(true);
builder.SaveFile("docx", "SetBold.docx");
builder.CloseFile();
```