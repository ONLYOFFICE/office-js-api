# ShowInputHelper

Shows the input helper.

## Syntax

```javascript
expression.ShowInputHelper(guid, w, h, isKeyboardTake);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | Required | string |  | A string value which specifies a plugin identifier which must be of the *asc.&#123;UUID&#125;* type. |
| w | Required | number |  | A number which specifies the window width measured in millimeters. |
| h | Required | number |  | A number which specifies the window height measured in millimeters. |
| isKeyboardTake | Required | boolean |  | Defines if the keyboard is caught (**true**) or not (**alse**). |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.executeMethod ("ShowInputHelper", ["asc.{UUID}", 70, 70, true]);
```
