# AddListItem

Adds an item to a combobox list or dropdown list.

## Syntax

```javascript
expression.AddListItem(name, value, pos);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the item to add to the list. |
| name | Required | string |  | The value of the item to add to the list. |
| name | Optional | number |  | The optional position at which to insert the new item in the list. If not provided, the item is added at the end of the list. |

## Returns

boolean

## Example

This example shows how to add an item to a combobox or dropdown list content control.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```