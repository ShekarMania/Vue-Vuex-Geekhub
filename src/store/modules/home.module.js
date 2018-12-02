import APIService from '../../common/api.service'
import JwtService from '../../common/jwt.service'

import {
  FETCH_DATA_GITHUB
} from '../action.types'
import { getField, updateField } from 'vuex-map-fields'

const state = {
  infiniteId: +new Date(),
  next: 0,
  list: []
}

const getters = {
  getField
}

const actions = {
  [FETCH_DATA_GITHUB] (context, $state) {
    return new Promise(resolve => {
      APIService.get(`github/top-stories/next/`, this.next)
        .then(({ data }) => {
          if (data.docs.length) {
            this.next += 50
            let docs = null
            docs = data.docs.map(doc => ({
              ...doc,
              bookmark: false,
              href: `https://github.com/${doc.tags_url
                .split('/')
                .slice(4, -1)
                .join('/')}`
            }))
            this.list = this.list.concat(docs)
            $state.loaded()
          } else {
            $state.complete()
          }
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  }
}

const mutations = {
  updateField
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
