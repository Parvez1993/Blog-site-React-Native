import React, {useContext, useReducer, useState} from 'react';
import uuid from 'react-uuid';
import {LoremIpsum} from 'lorem-ipsum';

export const BlogContext = React.createContext();

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: uuid(),
          title: `Blog Post ${state.length + 1}`,
          content: lorem.generateParagraphs(1),
        },
      ];
    case 'delete_blogpost':
      let tempdata = state.filter(i => i.id !== action.payload);
      return tempdata;

    case 'create_blog':
      let newData = {
        id: uuid(),
        title: action.payload.title,
        content: action.payload.content,
      };
      return [...state, newData];

    case 'update_blog':
      const {id, title, content} = action.payload;
      const index = state.findIndex(element => element.id === id);

      console.log(state[index]);

      console.log(index);
      if (index >= 0) {
        state[index] = {
          id: id,
          title: title,
          content: content,
        };
      }
      return [...state];
    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  const [blogs, dispatch] = useReducer(blogReducer, []);

  const addBlogPosts = () => {
    dispatch({type: 'add_blogpost'});
  };

  const createBlog = (title, content) => {
    dispatch({type: 'create_blog', payload: {title, content}});
  };

  const handleDelete = id => {
    dispatch({type: 'delete_blogpost', payload: id});
  };

  const handleEdit = (id, title, content) => {
    dispatch({type: 'update_blog', payload: {id, title, content}});
  };
  return (
    <>
      <BlogContext.Provider
        value={{blogs, addBlogPosts, handleDelete, createBlog, handleEdit}}>
        {children}
      </BlogContext.Provider>
    </>
  );
};

export function useBlogStore() {
  return useContext(BlogContext);
}
