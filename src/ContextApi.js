import React, {useContext, useReducer, useState} from 'react';

export const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {title: `Blog Post ${state.length + 1}`}];
    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  const [blogs, dispatch] = useReducer(blogReducer, []);

  const addBlogPosts = () => {
    dispatch({type: 'add_blogpost'});
  };
  return (
    <>
      <BlogContext.Provider value={{blogs, addBlogPosts}}>
        {children}
      </BlogContext.Provider>
    </>
  );
};

export function useBlogStore() {
  return useContext(BlogContext);
}
