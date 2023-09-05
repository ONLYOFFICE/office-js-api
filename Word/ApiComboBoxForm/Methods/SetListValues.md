# SetListValues

Sets the list values to the current combo box.

## Syntax

expression.SetListValues(aListString);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| aListString | Required | Array<String> | The combo box list values. |

## Returns

Boolean

## Example

This example sets the list values to the current combo box.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
builder.SaveFile("docx", "SetListValues.docx");
builder.CloseFile();
```