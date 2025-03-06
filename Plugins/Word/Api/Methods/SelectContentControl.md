# SelectContentControl

Selects the specified content control.

## Syntax

```javascript
expression.SelectContentControl(id);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | A unique internal identifier of the content control. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("SelectContentControl", ["5_665"]);
```
