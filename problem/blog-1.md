The significance of union and intersection types in Typescript.

Union: In union types there are two values assign in condition and output will be either first value or 2nd value. In the java script we used || for union but in type script the union symbol is |.
Whenever a value can have multiple possible types (like string or number), consider using union types to provide flexibility while maintaining type safety.

example: type frontEndDeveloper = 'fakibaj developer' | 'junior developer';

const newDeveloper : frontEndDeveloper = 'junior developer';


Intersection: In intersection type there are two are more values are having as a assigned value and every value must be true for intersection type.
In the java script we use && symbol for intersection and in type script we use only & .
Use intersection types when combining properties from multiple types is necessary. They are useful for building types that represent a combination of roles or capabilities.



example: 
type fullStackDeveloper = 'frontend developer' & 'backend developer';

const newDeveloper : fullStackDeveloper = 'frontend developer', backend developer; both value have to true;