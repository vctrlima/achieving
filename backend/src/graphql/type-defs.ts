export const typeDefs = `
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Query {
        user(id: ID!): User
        users: [User!]!
    }

    type Mutation {
        createUser(username: String!, email: String!): User
    }
`;
