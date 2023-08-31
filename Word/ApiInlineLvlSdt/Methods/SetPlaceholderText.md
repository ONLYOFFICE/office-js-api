# SetPlaceholderText

Sets the placeholder text to the current inline content control. Can't be set to checkbox or radio button

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text that will be set to the current content control. |

## Returns

Boolean

## Example

This example sets the placeholder text to the inline content control.

```javascript
builder.CreateFile("docxf");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a combo box to the next line (Forms -> Combo Box), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aForms = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
var sText = aForms[0].SetPlaceholderText("Name");
builder.SaveFile("docxf", "SetPlaceholderText.docxf");
builder.CloseFile();
```