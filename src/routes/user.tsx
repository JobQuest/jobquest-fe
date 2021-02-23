import Quest from '../modules/Quest'
import Profile from '../modules/User'
import UserQuestLog from '../modules/UserQuestLog'
import QuestsList from '../modules/QuestsList'

export default {
  profile: {
    path: "/profile",
    component: Profile,
  },

  userQuestLog: {
    path: "/quests-log",
    component: UserQuestLog,
  },

  availableQuests: {
    path: "/quests",
    component: QuestsList,
  },

  currentQuest: {
    path: "/quests/:id",
    component: Quest,
  }
}