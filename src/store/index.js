import { createStore } from 'vuex'

export default createStore({
  state: {
  aboutMe :null,
  projects :null,
  education :null,
  experience :null,
  codingSkills :null,
  softSkills :null,
  testimonials :null
   },
  getters: {
    getItemsByIndex: (state) => (index) => {
      return state.items[index];
    }
  },
  mutations: {
    setAboutMe (state,payload){
      state.aboutMe = payload
    },
    setProjects (state,payload){
      state.projects = payload
    },
     setEducation (state,payload){
       state.education = payload
    },
    setExperience (state,payload){
       state.experience = payload
    },
    setCodingSkills (state,payload){
       state.codingSkills = payload
    },
    setSoftSkills (state,payload){
        state.softSkills = payload
    },
    setTestimonials (state,payload){
        state.testimonials = payload
     },
  },
  actions: {
    async getAboutMe ({commit}) {
      let fetchInfo = await fetch('https://zubayrlatief.github.io/JsonFileForPortfolio/Data/data.json')
      let data = await fetchInfo.json()
      let {aboutMe, projects ,education, experience, codingSkills, softSkills, testimonials} = data
      console.log(data)
      commit('setAboutMe', aboutMe)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setExperience', experience)
      commit('setCodingSkills', codingSkills)
      commit('setsoftSkills', softSkills)
      commit('setTestimonials', testimonials)
    },
  },
  modules: {
  }
})
