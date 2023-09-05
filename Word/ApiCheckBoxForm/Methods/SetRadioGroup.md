# SetRadioGroup

Sets the radio group key to the current radio button.

## Syntax

expression.SetRadioGroup(sKey);

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sKey | Required | String | Radio group key. |

## Returns

This method doesn't return any data.

## Example

This example sets the radio group key to the radio button.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oCheckBoxForm.SetRadioGroup("Marital status");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oCheckBoxForm.SetRadioGroup("Marital status");
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var sRadioGroup = oCheckBoxForm.GetRadioGroup();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Radio group name of the radio buttons in this document: " + sRadioGroup);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetRadioGroup.docx");
builder.CloseFile();
```