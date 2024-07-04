import { createStore } from 'vuex'

export default createStore({
  state: {
  aboutMe :null,
    projects :null,
    :null,
    :null,
    :null,
    :null,
    :null,

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
  },
  actions: {
    async getAboutMe ({commit}) {
      let fetchInfo = await fetch('https://zubayrlatief.github.io/JsonFileForPortfolio/Data/data.json')
      let data = await fetchInfo.json()
      let (aboutMe, projects ,eductaion,) = data
      console.log(data)
      commit('setAboutMe', aboutMe)
      commit('setProjects', projects)
    },
  },
  modules: {
  }
})
