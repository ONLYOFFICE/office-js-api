# AddContentControlDatePicker

Adds an empty content control datepicker to the document.

## Syntax

```javascript
expression.AddContentControlDatePicker(datePickerPr, commonPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| datePickerPr | Optional | [ContentControlDatePickerProperties](../../Enumeration/ContentControlDatePickerProperties.md) | &#123;&#125; | The content control datepicker properties. |
| commonPr | Optional | [ContentControlProperties](../../Enumeration/ContentControlProperties.md) | &#123;&#125; | The common content control properties. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [
    {
        "DateFormat" : "DD\ MMMM\ YYYY",
        "Date" : new window.Date()
    },
    {
        "Id" : 7,
        "Tag" : "{tag}",
        "Lock" : 0
    }
]);
```
