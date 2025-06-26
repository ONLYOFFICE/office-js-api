# MoveToNextReviewChange

Navigates through the review changes.

## Syntax

```javascript
expression.MoveToNextReviewChange(isForward);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isForward | Optional | boolean | true | Specifies whether to navigate to the next (**true**) or previous (**false**) review change. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("MoveToNextReviewChange", [true]);
```
