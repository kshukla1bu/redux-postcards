

export const GET_POSTS = 'GET_POSTS'

export const getContactsAction = (posts) => {
    return {
      type : GET_POSTS,
      posts
    }
}

  export const handleGetData = () => {
    return function(dispatch) {
      return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            throw new Error("No such user found!!");
          } else {
            dispatch(getContactsAction(data));}
        })
        .catch(err => console.error(err));
    };
  }

  

