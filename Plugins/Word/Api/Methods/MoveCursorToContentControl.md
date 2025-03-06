# MoveCursorToContentControl

Moves a cursor to the specified content control.

## Syntax

```javascript
expression.MoveCursorToContentControl(id, isBegin);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | A unique internal identifier of the content control. |
| isBegin | Optional | boolean | false | Defines if the cursor position changes in the content control. By default, a cursor will be placed to the content control begin (**false**). |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("MoveCursorToContentControl", ["2_839", false]);
```
