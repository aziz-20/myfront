import { createStore } from 'vuex'
import app from './modules/app'
import getters from './getters'
import settings from './modules/settings'
import tagsView from './modules/tagsView'
import permission from './modules/permission'


export default createStore({
 
  getters,
  modules: {
    app,
    tagsView,
    permission,
    settings
  }
})
