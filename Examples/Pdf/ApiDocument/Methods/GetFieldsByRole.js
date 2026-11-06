// Retrieve all fields assigned to a specific role in a PDF.

// How do I filter form fields by their assigned role in a PDF?

// Separate employee and manager fields by querying each role independently in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Employee");
roles.Add("Manager");

let firstNameField = Api.CreateTextField([10, 10, 160, 30]);
let lastNameField = Api.CreateTextField([10, 40, 160, 60]);
let approvalField = Api.CreateTextField([10, 70, 160, 90]);
page.AddObject(firstNameField);
page.AddObject(lastNameField);
page.AddObject(approvalField);

firstNameField.SetFullName("Employee first name");
lastNameField.SetFullName("Employee last name");
approvalField.SetFullName("Manager approval");

firstNameField.SetRole("Employee");
lastNameField.SetRole("Employee");
approvalField.SetRole("Manager");

let employeeFields = doc.GetFieldsByRole("Employee");
employeeFields.forEach(function(field) {
    field.SetValue("Employee field");
});
approvalField.SetValue("Manager fields: " + doc.GetFieldsByRole("Manager").length);