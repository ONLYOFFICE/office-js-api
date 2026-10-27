// This example gets the calculation order of fields in the document.
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let priceField = Api.CreateTextField([10, 10, 160, 30]);
priceField.SetPartialName("Price");
priceField.SetValue("100");
page.AddObject(priceField);

let taxField = Api.CreateTextField([10, 40, 160, 60]);
taxField.SetPartialName("Tax");
page.AddObject(taxField);

let totalField = Api.CreateTextField([10, 70, 160, 90]);
totalField.SetPartialName("Total");
page.AddObject(totalField);

let taxCalc = Api.CreateJsAction("event.value = this.getField('Price').value * 0.2;");
let taxWidgets = taxField.GetAllWidgets();
taxWidgets[0].GetActions().SetCalculate(taxCalc);

let totalCalc = Api.CreateJsAction("event.value = this.getField('Price').value + this.getField('Tax').value;");
let totalWidgets = totalField.GetAllWidgets();
totalWidgets[0].GetActions().SetCalculate(totalCalc);

let order = doc.GetCalculateOrder();
console.log('Calculate order: ' + order);
