# ShowButton

Shows or hides buttons in the header.

## Syntax

```javascript
expression.ShowButton(id, bShow, align);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | The button ID. |
| bShow | Required | boolean |  | The flag specifies whether the button is shown (**true**) or hidden (**false**). |
| align | Required | string |  | The parameter indicates whether the button will be displayed on the right side of the window or on the left. The default value is "left". |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("ShowButton", ["back", false, "right"]);
```
