const { gql } = require('apollo-server'); // A template literal tag for wrapping GraphQL strings,-
//-  such as schema definitions. This converts GraphQL strings into the format that Apollo libraries- 
//- expect when working with operations and schemas. It also helps tools identify when a string contains-
//- GraphQL language (such as to enable syntax highlighting).

// Creating type definitions, with Template Literals
// The gql tag parses the string as a GrapQL schema, so the typeDefs variable now contains a DocumentNode  
const typeDefs = gql`
    type query{
        greeting: String
    }
`
// typeDefs is a JS Object, with some properties, of which the definiiton prop is an array of objects,-
//- representing an abstract syntax tree of the GraphQL code => the written string would be parsed as an Obj

