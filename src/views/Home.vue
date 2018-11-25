<template>
    <div id="home">
        <app-toolbar :tabs="tabs">
            <v-tabs-items
                slot="tabitems">
                <v-tab-item v-if="active === 'GITHUB'">
                    <h1>Github</h1>
                </v-tab-item>
                <v-tab-item v-if="active === 'MEDIUM'">
                    <h1>MEDUIM</h1>
                </v-tab-item>
                <v-tab-item v-if="active === 'NOTES'">
                        <v-card-title primary-title>
                            <div style="width: 100%">
                                <h3 class="headline mb-3 text-xs-left editor-title" contenteditable="true">Untitled</h3>
                                <div class="wi"><froala :tag="'textarea'" :config="config" v-model="model"></froala></div>
                            </div>
                        </v-card-title>
                        <v-card-actions class="right mb-4">
                            <div class="text-xs-center">
                                <v-btn round color="black indigo accent-2" class="mr-4" dark>
                                    <v-icon left class="mr-2">save</v-icon>
                                    Save
                                </v-btn>
                            </div>
                            <div class="text-xs-center">
                                <v-btn round color="black indigo accent-2" class="mr-4" dark>
                                    <v-icon left class="mr-2">delete_sweep</v-icon>
                                    Cancel
                                </v-btn>
                            </div>
                        </v-card-actions>
                </v-tab-item>
                <v-tab-item v-if="active === 'BOOKMARKS'">
                    <v-container fluid grid-list-sm>
                        <v-layout row wrap>
                            <v-flex v-for="i in 4" :key="i" xs6 md4 ld4 class="mx-0 my-2">
                                <v-card>
                                    <v-card-title primary-title class="pa-0">
                                        <v-flex>
                                        <v-toolbar color="indigo accent-2" dark>
                                            <v-toolbar-title>Untitled</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-btn icon>
                                                <v-icon>edit</v-icon>
                                            </v-btn>
                                        </v-toolbar>
                                        </v-flex>
                                        <div class="pa-2" style="min-height: 100px">Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
                                    </v-card-title>
                                    <v-card-actions class="pb-2 note-action">
                                        <v-spacer></v-spacer>
                                        <v-btn class="indigo accent-2" style="color: white" @click="dialog = true">
                                            <v-icon left class="mr-2">share</v-icon>
                                            Share
                                        </v-btn>
                                        <v-btn class="indigo accent-2" style="color: white">
                                            <v-icon left class="mr-2">markunread</v-icon>
                                            View
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
        </app-toolbar>
    </div>
</template>
<script>
import Toolbar from '@/components/Toolbar'

export default {
  name: 'Home',
  components: {
    'app-toolbar': Toolbar
  },
  data () {
    return {
      tabs: [
        'GITHUB',
        'MEDIUM',
        'NOTES',
        'BOOKMARKS',
        'SHARED WITH ME'
      ],
      active: 'NOTES',
      config: {
        placeholder: 'Edit Me',
        editorClass: 'vue-editor',
        events: {
          'froalaEditor.focus': function (e, editor) {
            console.log(editor.selection.get())
          }
        }
      },
      model: null
    }
  }
}
</script>
