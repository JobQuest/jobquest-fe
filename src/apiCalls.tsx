const getData = (path) => {
  return fetch(path).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        'Sorry we are having difficulty loading this page, please try again later!'
      );
    }
  });
};

const updateData = (path, action, data) => {
  return fetch(path, {
    method: action,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error(
        'Sorry we are having difficulty loading this page, please try again later!'
      );
    }
  });
};

const baseUrl = '';

export const apiCalls = {
  getUser: (email) => {
    return getData(`${baseUrl}/users/1`);
  },

  getQuests: (userId) => {
    return getData(`${baseUrl}/events`);
  },

  getCurrentQuest: (questId) => {
    return getData(`${baseUrl}/events/${id}`);
  },

  getQuestEncounter: (questId) => {
    return getData(`${baseUrl}/events/${id}`);
  },

  patchUserQuest: () => {
    return updateData(`${baseUrl}`);
  }
};
