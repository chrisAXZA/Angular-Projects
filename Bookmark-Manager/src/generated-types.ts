import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  _id: Scalars['String'];
  links: Array<Scalars['String']>;
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateBookmarkInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmark: Bookmark;
  createUser: User;
};


export type MutationCreateBookmarkArgs = {
  createBookmarkData: CreateBookmarkInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, email: string } };

export type CreateBookmarkMutationVariables = Exact<{
  createBookmarkData: CreateBookmarkInput;
}>;


export type CreateBookmarkMutation = { __typename?: 'Mutation', createBookmark: { __typename?: 'Bookmark', _id: string, name: string, userId: string } };

export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(createUserData: $createUserData) {
    _id
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateBookmarkDocument = gql`
    mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {
  createBookmark(createBookmarkData: $createBookmarkData) {
    _id
    name
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBookmarkGQL extends Apollo.Mutation<CreateBookmarkMutation, CreateBookmarkMutationVariables> {
    document = CreateBookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }