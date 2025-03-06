# ContentControlCheckBoxProperties

The content control checkbox properties.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Checked | boolean | Defines if the content control checkbox is checked or not. |
| CheckedSymbol | number | A symbol in the HTML code format that is used when the checkbox is checked. |
| UncheckedSymbol | number | A symbol in the HTML code format that is used when the checkbox is not checked. |
## Type

Object



## Example

```javascript
let controlCheckBoxPr = {
    "Checked" : false,
    "CheckedSymbol" : 9756,
    "UncheckedSymbol" : 9744
};
window.Asc.plugin.executeMethod ("AddContentControlCheckBox", [controlCheckBoxPr, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
