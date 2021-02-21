import Quest from '../modules/Quest'
import Profile from '../modules/User'
// import UserQuestLog from '../modules/UserQuestLog'

export default {
  profile: {
    path: "/user/profile",
    component: Profile,
  },

  currentQuest: {
    path: "/user/current-quest",
    component: Quest,
  },

  // userQuestLog: {
  //   path: "/user/quests-log",
  //   component: UserQuestLog,
  // },

  // availableQuests: {
  //   path: "/user/quests",
  //   component: QuestsList,
  // },
}