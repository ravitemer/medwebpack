import {writable} from 'svelte/store'
export const temp = writable({title : "Bad Network",desc : "Oops ! Please check your connection"})
export const tempObj = writable({})
export const tempTest = writable({})
export const ltests = writable([
  
])
export const tabs = writable([{"title":"Listening","props":{"title":"Listening"},"children":{"Slides":{"Over":{" html":{"para":" The Listening sub-test consists of 42 questions divided across three parts : Part A , Part B and Part C. The audio extracts are from healthcare workplaces which are accessible across all professions. The total length of the listening audio is about 40 minutes.  You will  hear each recording once only and are expected to write answers while you listen. You will be given 2 minutes at the end of test to check your answers."},"para":""},"Part C":{"para":"{\"html\" : \"Purpose : To assess your ability to follow a recorded presentation or interview on a range of accessible healthcare topics.Structure : Audio 1 : A five-minute recorded interview.Q 31 - Q 36 Type → Multiple choice question (A or B or C)Audio 2 : A five-minute recorded interview.Q 37 - Q 42Type → Multiple choice question (A or B or C) \",\"caption\": \"Two presentation extracts\",}"},"para":""},"Tests":{tests : {},types:{}},"para":""}},{"title":"Reading","props":{"title":"Reading"},"children":{"Slides":{"Overview":{"para":"{\"name\": \"Raviteja\",\"age\" : {\"years\" : 25,\"months\" : 1           }} "},"Part A":{"para":"{}"},"Part B":{"para":"{}"},"Part C":{"para":"{}"},"para":""},"Tests": {tests : {},types:{}},"para":""}},{"title":"Writing","props":{"title":"Writing"},"children":{"Slides":{"WOverview":{"para":"{\"name\": \"Raviteja\",\"age\" : {\"years\" : 25,\"months\" : 1           }} "},"Part A":{"para":"{}"},"Part B":{"para":"{}"},"Part C":{"para":"{}"},"para":""} ,"Tests": {tests : {},types:{}},"para":""}},{"title":"Speaking","props":{"title":"Speaking"},"children":{"Tests": {tests : {},types:{}},"Slides":{"SOverview":{"para":"{\"name\": \"Raviteja\",\"age\" : {\"years\" : 25,\"months\" : 1           }} "},"Part A":{"para":"{}"},"Part B":{"para":"{}"},"Part C":{"para":"{}"},"para":""},"para":""}}])