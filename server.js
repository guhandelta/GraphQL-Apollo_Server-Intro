const { ApolloServer, gql } = require('apollo-server'); // A template literal tag for wrapping GraphQL strings,-
//-  such as schema definitions. This converts GraphQL strings into the format that Apollo libraries- 
//- expect when working with operations and schemas. It also helps tools identify when a string contains-
//- GraphQL language (such as to enable syntax highlighting).

// ApolloServer Class allows to create a server

// ------------------------------------------------------------------------------------------------------------
// ----------> TypeDefs => Interface of the API's | Resolvers => Implementation of the API Endpoint <----------
// ------------------------------------------------------------------------------------------------------------

// Creating type definitions, with Template Literals
// The gql tag parses the string as a GrapQL schema, so the typeDefs variable now contains a DocumentNode  
const typeDefs = gql`
    type Query{
        greeting: String
    }
`
// typeDefs is a JS Object, with some properties, of which the definiiton prop is an array of objects,-
//- representing an abstract syntax tree of the GraphQL code => the written string would be parsed as an Obj

// Resolvers are Object Literals that define how a server/endpoint returns a/expected value
// The Resolver/ResolverObject should mirror the TypeDef precisely, else things won't work properly
const resolvers = {
    Query:{ // It will be a nested value, as it represents a type
        // The types hold the props, as defined in the TypeDefs
        greeting: () => 'Hello World!!'
    }
}

const server = new ApolloServer({ typeDefs, resolvers }); // ({typeDefs: typeDefs, resolvers: resolvers})
server.listen({port: 9000})
      .then(({url}) => console.log(`Server running on port: ${url}`)); //serverInfo.url => {url}
