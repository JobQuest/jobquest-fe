import cookieMonster from './test_monster.png'

export default {
  "user": {
    "email": "whatever@example.com",
    "username": "NihilisticWaffle",
    "xp": 10000
  },
  "quests": [ 
        { "id": 1,
          "type": "active",
          "name": "Slay the Wildabeast", 
          "xp": 200, 
          "encounter_req": 3,
          "level": 1,
          "progress": 1
        }, 
        { "id": 2,
          "type": "passive", 
          "name": "Brew a Potion of Confidence", 
          "xp": 200, 
          "encounter_req": 3,
          "level": 1,
          "progress": 2
        }, 
        { "id": 3,
          "type": "supportive",
          "name": "Mend A Wizard's Spellbook", 
          "xp": 200, 
          "encounter_req": 3,
          "level": 1,
          "progress": 1
        }, 
      ],
      "encounters": { 
        "progress": 1,
        "monster_image": cookieMonster,  
        "actions": [
              { "id": 1,
                 "description": "Apply to 1 Job" 
              }, 
              { "id": 2, 
                 "description": "Attend A Networking Event" 
              }     
         ]      
      },
      "completedQuests": [ 
        { "id": 1,
          "type": "active",
          "name": "Slay the Wildabeast", 
          "xp": "200", 
          "encounter_req": "3",
          "progress": "1" 
         }, 
        { "id": "2",
          "type": "passive", 
          "name": "Brew a Potion of Confidence", 
          "xp": "200", 
          "encounter_req": "3",
          "progress": "1" 
         }, 
         { "id": "3",
          "type": "supportive",
          "name": "Mend A Wizard's Spellbook", 
          "xp": "200", 
          "encounter_req": "3",
          "progress": "1"
         }, 
         { "id": "4",
          "type": "passive", 
          "name": "Unlock the Tome of Job Readiness", 
          "xp": "200", 
          "encounter_req": "3",
          "progress": "1"
         }, 
         { "id": "5",
          "type": "supportive",
          "name": "Write A Sonnet For Inspiration", 
          "xp": "200", 
          "encounter_req": "3",
          "progress": "1"
         }, 
      ]

  }
