# What is TypeScript?

* Developed by Microsoft and Released in October 2012
* Superset of JavaScript
* Known for imposing strict typing in JavaScript
* All TS code transpiles into JS code for the browser
* ECMASCript support TypeScript was formalized in 2015.
* Version 5.0.4 is now availble
* typescriptlang.org is the main source of documentation for TS

# Introduction to TypeScript
## Features
* Interfaces
* Namespaces
* Generics
* Abstract Classes
* Data modifiers
* Decorators*
* Readonly keyword
* Type utuls
* Optionals
* Functional overloading

# Advantages of using Typescript
* With a good IDE you can capture certain errors at compile time before they run time level
* Support for static typing (string typing)
* TypeScript, once trans-piled down to JS can runs on any browser or JavaScript engine like NodeJS
* Using a good IDE, the developer can have IntelliSense with TypeScript
* Namespaces if used properly can be a great tool for modular development.

# TypeScript Types
* Primitve (built-in types based on JavaScript)
* User-defined types (basucally objects)
* Any type
* Others are unknown, tuple, array, union, interface and null
* never

# TypeScript Generics
* Genrics is somewhat related to concepts like lazy loading, polymorphism and abstract classes and functions.
* There is a time component involved.
* It makes code more flexible, reusable and may even lessen duplication of code.
* TS Generics improve Type safety.
* Genertics can be used wherever passing a parameter is involved.

# TypeScript Decorators
NOTE  Decorators are an experimental feature that may change in future releases.
* Functions that are called by adding an annotation (@) to the member of a class.
* Not yet fully implemented in TypeScript although extensively used in Angular.
* Used to add metadata to a class (but can also have use in the DOM).
* Cannot be used in inherited classes.
* Changes may be necessary to the config file, so target must be ES5 or above and experimentalDecorators key must be set to true

Command Line:
    tsc --target ES5 --experimentalDecorators

tsconfig.json:
    {
        "compilerOptions": {
            "target": "ES5",
            "experimentalDecorators": true
        }
    }