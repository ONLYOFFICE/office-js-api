# AddText

Adds a text to the current content control.

## Syntax

expression.AddText(sText);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text which will be added to the content control. |

## Returns

Boolean (returns false if param is invalid)

## Example

This example adds a text to the content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
builder.SaveFile("docx", "AddText.docx");
builder.CloseFile();
```