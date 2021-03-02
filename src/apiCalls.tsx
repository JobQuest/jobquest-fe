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

const baseUrl = "https://job-quest-be.herokuapp.com/api/v1";

interface UserInfo {
  "email": string
  "username"?: string
}

export const apiCalls = {
  // getUser: (email: object) => {
  //   return updateData(`${baseUrl}/users`, "POST", email);
  // },

  getUser: (userinfo: UserInfo) => {
    return updateData(`${baseUrl}/users`, "POST", userinfo);
  },

  getQuests: (userId: number, questState: boolean) => {
    return getData(
      `${baseUrl}/users/${userId}/quests?completion_status=${questState}`
    );
  },

  getQuestEncounter: (questId: number, progressLevel: number) => {
    return getData(
      `${baseUrl}/quests/${questId}/encounters?progress=${progressLevel}`
    );
  },

  patchUserQuest: (userId: number, userProgress: object) => {
    return updateData(`${baseUrl}/users/${userId}/quests`, "PATCH", userProgress);
  }
};
