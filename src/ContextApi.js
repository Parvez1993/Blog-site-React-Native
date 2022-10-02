import React, {useContext, useReducer, useState} from 'react';
import uuid from 'react-uuid';
export const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {id: uuid(), title: `Blog Post ${state.length + 1}`}];
    case 'delete_blogpost':
      let tempdata = state.filter(i => i.id !== action.payload);
      return tempdata;
    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  const [blogs, dispatch] = useReducer(blogReducer, []);

  const addBlogPosts = () => {
    dispatch({type: 'add_blogpost'});
  };

  const handleDelete = id => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
  return (
    <>
      <BlogContext.Provider value={{blogs, addBlogPosts, handleDelete}}>
        {children}
      </BlogContext.Provider>
    </>
  );
};

export function useBlogStore() {
  return useContext(BlogContext);
}
