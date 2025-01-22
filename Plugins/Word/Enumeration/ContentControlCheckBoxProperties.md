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
var oControlCkeckBoxPr = &#123;
    "Checked" : false,
    "CheckedSymbol" : 9756,
    "UncheckedSymbol" : 9744
&#125;;
window.Asc.plugin.executeMethod ("AddContentControlCheckBox", [oControlCkeckBoxPr, &#123;"Id" : 7, "Tag" : "&#123;tag&#125;", "Lock" : 0&#125;]);
