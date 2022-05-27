const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    title: String
    about: String
    website: String
    profilePic: String
    coverPhoto: String
    resume: String
    isJobSeeker: Boolean
  }

  type Jobpost {
    _id: ID
    title: String!
    link: String!
    company: String!
    location: String
    timePosted: String
    isSaved: Boolean
    createdAt: String
  }

  type Query {
    users: [User]
    user(email: String!): User
    jobposts: [Jobpost]
    jobpost(_id: ID!): Jobpost
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, isJobSeeker: Boolean!): Auth
    addJobs(title: String!, link: String!, company: String!, location: String, timePosted: String): [Jobpost]
    updateJob(_id: ID!, isSaved: Boolean!): Jobpost
    deleteJobpost(_id: ID!): Jobpost
    deleteJobposts: [Jobpost]
  }
`;

module.exports = typeDefs;
