/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  const url = new URL(`/${id}`, apiUrl);
  const options = {
    headers: {
      'content-type': 'application/json',
    },
    method: 'DELETE',
  };
  
  await fetch(url.href, options);
}

export async function addTodo(title, due) {
  // const url = new URL(`/${$id}`, apiUrl);
  // GET þarf ekki const options
  const options = {
    body: JSON.stringify({
      title,
      due,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  const url = new URL('/', apiUrl);
  const response = await fetch(url.href, options);

  const result = await response.json();
  return {
    success: response.ok,
    result
  }
}

export async function updateTodo(id, title, due, completed) {
  const options = {
    body: JSON.stringify({
      title,
      completed,
      due,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'PATCH',
  };

  const url = new URL(`/${id}`, apiUrl);
  const response = await fetch(url.href, options);

  const result = await response.json();
  return {
    success: response.ok,
    result
  }
}

export async function getTodos(hideCompleted) {
  let url;
  if (hideCompleted){
    url = new URL(`/?completed=${false}`, apiUrl);
  } else {
    url = new URL('/', apiUrl);
  }

  const response = await fetch(url.href);
  
  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  
  return result;
}

export async function getTodo(id) {
  const url = new URL(`/${id}`, apiUrl);

  const response = await fetch(url.href);
  
  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  
  return result;
}
