const users = [
    { id: 1, username: 'johndoe', email: 'email@email.com' },
    { id: 2, username: 'victor', email: 'email@email.com' },
];

export const resolvers = {
    Query: {
        users: () => users,
        user: () => users[0],
    },

    Mutation: {
        createUser: () => users[0],
    },
}
