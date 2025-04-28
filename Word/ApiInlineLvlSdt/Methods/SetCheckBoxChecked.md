# SetCheckBoxChecked

Sets the checkbox value of the content control.

## Syntax

```javascript
expression.SetCheckBoxChecked(isChecked);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isChecked | Required | boolean |  | The state to set for the checkbox. true for checked, false for unchecked. |

## Returns

boolean

## Example

This example shows how to set the checkbox value of an inline content control.

```javascript editor-docx
let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
inlineControl.SetCheckBoxChecked(true);
```