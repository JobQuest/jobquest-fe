export interface Profile {
  username: string 
  email: string
  xp: number
}

export interface idObject {
  id: number
}

export interface Quest extends idObject {
  name: string 
  xp: number
  encounters_req: number
  type: string
}

export interface QuestInProgress extends Quest {
  level: string
}

export interface CurrentQuests {
  quests: Array<Quest>
}

export interface ComponentPath {
  match: object
}

export interface Encounters extends idObject {
  encounters: Array<Encounter>
}

export interface Encounter {
  monsterImage: string
  actions: Array<Action>
  progres: number
}

export interface Action extends idObject {
  encounter_id: number
  description: string
}

export interface completeEncounterFunctoinality {
  completeEncounter: (quest_id: number, progress: number) => void
  
}