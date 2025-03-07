# AcceptReviewChanges

Accepts review changes.

## Syntax

```javascript
expression.AcceptReviewChanges(isAll);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAll | Optional | boolean | false | Specifies if all changes will be accepted (**true**) or only changes from the current selection (**false**). |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("AcceptReviewChanges", [true]);
```
