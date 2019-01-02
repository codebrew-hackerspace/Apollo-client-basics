import React, { Component } from 'react'
import ApolloClient from "apollo-boost";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const MyName = () => (
  <Query
    query={gql`
      {
        me {
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        {console.log(data.me.name)}
      return <p> {data.me.name}</p>
    }}
  </Query>
);
export default MyName