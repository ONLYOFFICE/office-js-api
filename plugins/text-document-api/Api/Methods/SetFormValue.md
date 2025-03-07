# SetFormValue

Sets a value to the specified form.

## Syntax

```javascript
expression.SetFormValue(internalId, value);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| internalId | Required | string |  | A unique internal identifier of the form. |
| value | Required | string \| boolean |  | Form value to be set. Its type depends on the form type. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("SetFormValue", ["1_713", true]);
```
