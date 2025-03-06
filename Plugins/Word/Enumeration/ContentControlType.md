# ContentControlType

A numeric value that specifies the content control type:\n-**1** - block content control\n-**2** - inline content control\n-**3** - row content control\n-**4** - cell content control

## Type

Enumeration

## Values

- 1
- 2
- 3
- 4


## Example

```javascript
let contentControlType = 1;
window.Asc.plugin.executeMethod ("AddContentControl", [contentControlType, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
