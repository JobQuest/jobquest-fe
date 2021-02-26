const getData = (path: string) => {
  return fetch(path).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        "Sorry we are having difficulty loading this page, please try again later!"
      );
    }
  });
};

const updateData = (path: string, action: string, data: object) => {
  console.log(data);
  return fetch(path, {
    method: action,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        "Sorry we are having difficulty loading this page, please try again later!"
      );
    }
  });
};

const baseUrl = "http://job-quest-be.herokuapp.com/api/v1";

export const apiCalls = {
  getUser: (email: object) => {
    return updateData(`${baseUrl}/users`, "POST", email);
  },

  getQuests: (userId: string) => {
    return getData(
      `${baseUrl}/api/v1/users/${userId}/quests/completion_status=true`
    );
  },

  // getCurrentQuest: (questId) => {
  //   return getData(`${baseUrl}/events/${id}`);
  // },

  // getQuestEncounter: (questId) => {
  //   return getData(`${baseUrl}/events/${id}`);
  // },

  // patchUserQuest: () => {
  //   return updateData(`${baseUrl}`);
  // }
};
