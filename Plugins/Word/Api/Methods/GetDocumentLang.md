# GetDocumentLang

Returns the document language.

## Syntax

expression.GetDocumentLang();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

```javascript
window.Asc.plugin.executeMethod("GetDocumentLang", [], function(lang) &#123;
	let documentLang = lang || defaultLang;

	let aOptions = Array.from($('#custom_menu option'));
	let oDefaultOption = aOptions.find(function(item) &#123;
		if (item.value == defaultLang)
			return item;
	&#125;);

	let oMatchOption = undefined;
	oMatchOption = aOptions.find(function(item) &#123;
		if (item.value == documentLang)
			return true;
	&#125;);
	if (!oMatchOption) &#123;
		oMatchOption = aOptions.find(function(item) &#123;
			if (item.value.search(documentLang.split('-')[0]) != -1)
				return true;
		&#125;);
	&#125;

	if (!oMatchOption)
		oMatchOption = oDefaultOption;

	if (oMatchOption) &#123;
		$('#custom_menu').val(oMatchOption.value);
		$('#custom_menu').trigger('change');
	&#125;
&#125;);
