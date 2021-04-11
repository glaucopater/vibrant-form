# vibrant-form
A react typescript form component



Consideration
---

1. 🏗 The \<Form\/\> component. I decided to follow an approach guided by data, so that the building of the form is related to the given props (which could also point to a rest endpoint in case). 
A different approach could be on receving children markup code, but this should imply more type check enforcement and less control.
I want to highlight that all the library/packages in the market are usually more oriented to create a form context and apply it to a specific case. 
2. 🧬 The component is pretty generic, all the logic (onChange event, validation and onSubmit) are managed by the \<Form\/\> component.
3. ✅ 🚫 Basic validation is implemented as described in the API
4. 📦 The API

---

import Form from "./containers/Form";

Props
---
- fieldsData: optional property (a form can also be empty)
- component: optional property that can be used to customize the form content with an external component. 
Default is the Input component in the "./components/Input" folder.
- action?: form action url,  default "/"
- method?: form method, default "POST"


Data Model 
---

DataType 
---

- name: string;
- value?: string | number;
- type: string;
- isRequired?: boolean;
- pattern?: string;
- nativeValidation?: boolean;
- minValue?: number;
- maxValue?: number; 

ValidationErrorType
---
- name: string
- message: string

Used for the validation phase

- Name and value are the basic information to create all the input fields. 
- Type is a string at the moment considering "text" as by requirement, adding other types this allows already to extend the form (password, email, tel...).
- isRequired, pattern, minValue and maxValue are used for validation
- nativeValidation (default : false) is to enable/disable the native browser validation of input field. 
This can be adjusted as the native validation changes for each browser (not only from style persepective).


Helpers
---

- validateFormField: basic validation for a single field. No external library for schema validation (i.e YUP)
- transformDataIntoFormField: adapt the data to the more friendly HTML form shape (key: value).
- isNullOrEmpty: simple checker of values
- validateForm: parse the whole form for fields validations


5. *Resilience to changes* topic. There are different aspects to consider: 
- new data, more types and more validation rules
- extensions of the form with new components 
- considering the above two points, how the form, intended as a container in the page, should behave with more and more data.


Thanks to the datatype is possible to add more validation and input type, as well as is possible to customize by input type with a different component.

The UI is a basic glassmorphism prototype, based on CSS flexbox and some css variables (no external libraries or pre processor were used).
