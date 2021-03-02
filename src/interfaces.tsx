export interface UserProfile {
  username: string;
  email: string;
  xp: number;
}

export interface CurrentProfile {
  name?: string 
  email?: string
  picture?: string
}

export interface CurrentProfileObject {
  currentUser: CurrentProfile;
}
export interface ProfileObject {
  currentUser: UserProfile;
}

export interface idObject {
  id: number;
}

export interface Quest extends idObject {
  name: string;
  xp: number;
  encounter_req: number;
  type: string;
  progress: number;
}

export interface CompletedQuests {
  completedQuests?: Array<Quest>;
}

export interface QuestInProgress extends Quest {
  level: number;
}

export interface CurrentQuests {
  quests: Array<QuestInProgress>;
}

export interface ComponentPath {
  match: Match;
}

export interface Match {
  path: string;
  url: string;
  params: Params;
}

export interface Params {
  id: string;
}

export interface Encounter {
  monster_image: string;
  actions: Array<Action>;
  progress: number;
}

export interface Action extends idObject {
  encounter_id: number;
  description: string;
}

export interface QuestEncounterFunctoinality {
  completeEncounter: (quest_id: number, progress: number) => void;
  getQuest: (quest_id: string) => void;
  getEncounter: (questId: string, propgressLevel: number) => void;
  getQuestDetails: () => Promise<any>;
  updateMonsterHealth: (newquest: QuestInProgress) => void;
  helperFunction: () => void;
  setActivePage: (newActive: string) => void;
  getCompletedQuests: () => void;
}

// export interface HomePageProps {
//   children?: object;
// }

export interface CardTypeObj {
  active: string[];
  passive: string[];
  supportive: string[];
}

export interface ActionCards {
  cardOne: string[];
  cardTwo: string[];
}

export interface MenuProps {
  children?: object;
}

export interface MenuItemProps {
  path: string;
}

export interface Heart {
  image: object;
  id: number;
}

export interface ActionCardsCheck {
  cardOne: boolean;
  cardTwo: boolean;
}

export interface SpriteImg {
  path: string;
}

export interface AnimationStep {
  step: number;
}

export interface LastFrame {
  lastFrame: number;
}

export interface AnimationSpeed {
  speed: number;
}

export interface SpriteW {
  width: number;
}

export interface SpriteH {
  height: number;
}

export interface StyleClass {
  styleClass: string;
}
