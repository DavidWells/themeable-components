# Components

```bash
# run
npm start
```

# Goal
Create reusable components to be used by all my projects. No more recreating the wheel

# Features

* Themable
* Platform agnostic
* configurable
* Custom renderer
* Component hooks
* Event orchestration
* CSS global rules

# Rules
* Must follow jsStandard and Airbnb rules
* Components must be ES6
* styles must be localized
* All components must be composed of primatives

# Agnostic
Components are target agnostic. They can be rendered in:
- Dom
- native
- Canvas

This is done using webpack aliases and primitive components that map to correct targets.

Example: the <Div> component maps to <div> in Dom and to <view> in native

# themable

Custom styles can be overridden via componentrc config by providing path

*Todo*
- figure out how postCSS can map to inline
- remove classes creation from component creation
* .componentrc must be read from consumers project
* Component stamper + test stamper yeoman
* Theme stamper - generate empty style sheets automatically. Work on alias to ignore empties
*
