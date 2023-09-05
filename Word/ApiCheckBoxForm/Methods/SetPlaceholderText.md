# SetPlaceholderText

Sets the placeholder text to the current form. Can't be set to checkbox or radio button.<br>Inherited From: [ApiFormBase#SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the placeholder text to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 1");
oCheckBoxForm.SetPlaceholderText("Form 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
oCheckBoxForm.SetFormKey("Marital status 2");
oCheckBoxForm.SetPlaceholderText("Form 2");
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var sKey = oCheckBoxForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();
```