# vibrant-form
A react form component made with react js, typescript, jest (CRA template)

![Demo 1](/public/vibrant1.jpg)

![Demo 2](/public/vibrant2.jpg)
## [Live Secret Demo](https://epic-chandrasekhar-89f3f8.netlify.app/) 🔥

To install the required dependencies:
---
- npm i

To run the application:
---
- npm start

To run the test suite 
---
- npm run test



Consideration
---

1. 🏗 The \<Form\/\> component.
I decided to follow an approach guided by data, so that the building of the form is related to the given props (which could also point to a rest endpoint in case). 
A different approach could be on receving children markup code, but this should imply more type check enforcement and less control.
I want to highlight that all the library/packages in the market are usually more oriented to create a form context and apply it to a specific case.
I kept the ./src project folder structure pretty simple:
	- components for react components
	- containers for wrapper of sub component 
	- helpers for utils
	- __mocks__ for testing 
	- dictionary for all the strings used in the UI
	- settings for default settings
2. 🧬 The component is pretty generic, all the logic (onChange event, validation and onSubmit) are managed by the \<Form\/\> component.
3. ✅ ⚠️ Basic validation is implemented as described in the API

📦 The API
---
import Form from "./containers/Form";

Props
---
- fieldsData: optional property (a form can also be empty)
- component: optional property that can be used to customize the form content with an external component. 
Default is the Input component in the "./components/Input" folder.
- action?: form action url,  default "" which is enabling the test mode for submitting data
- method?: form method, default "POST"


Data Model and Data Types 
---

The main data type is... DataType!

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


🚨 Resilience to changes
---

There are different aspects to take in consideration: 
- new data, more types and more validation rules
- extensions of the form with new components 
- considering the above two points, how the form, intended as a container in the page, should behave with more and more data.


Thanks to the datatype is possible to add more validation and input type, as well as is possible to customize by input type with a different component.

The UI is a basic glassmorphism prototype, based on CSS flexbox and some css variables (no external libraries or pre processor were used).
