# InputHelperItem

Defines the input helper item.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | string | The item index. |
| text | string | The item text. |
## Type

Object



## Example

```javascript
var items = [
    &#123; text: "Name1.Family1", id : "0" &#125;,
    &#123; text: "Name2.Family2", id : "1" &#125;,
    &#123; text: "Name3.Family3", id : "2" &#125;,
    &#123; text: "Name4.Family4", id : "3" &#125;,
    &#123; text: "Name5.Family5", id : "4" &#125;,
    &#123; text: "Name6.Family6", id : "5" &#125;,
    &#123; text: "Name7.Family7", id : "6" &#125;,
    &#123; text: "Name8.Family8", id : "7" &#125;,
    &#123; text: "Name9.Family9", id : "8" &#125;,
    &#123; text: "Name10.Family10", id : "9" &#125;,
    &#123; text: "Name11.Family11", id : "10" &#125;,
    &#123; text: "Name12.Family12", id : "11" &#125;,
    &#123; text: "Name13.Family13", id : "12" &#125;
];
window.Asc.plugin.getInputHelper().setItems(items);
var _sizes = getInputHelperSize();
window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, true);
