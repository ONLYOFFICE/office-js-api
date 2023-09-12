# SetCaps

Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

## Syntax

expression.SetCaps(isCaps);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | Boolean | Specifies that the contents of the current paragraph are displayed capitalized. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply caps)

## Example

This example specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(10, 17);
oRange.SetCaps(true);
builder.SaveFile("docx", "SetCaps.docx");
builder.CloseFile();
```