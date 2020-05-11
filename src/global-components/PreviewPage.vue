<template>
  <div id="top" class="page" role="document">
    <header role="banner">
      <select v-model="urlLoad" @change="loadURL" name="style" id="style">
        <option value="">Browser Styles</option>
        <option value="https://cdn.jsdelivr.net/npm/milligram@1.3.0/dist/milligram.min.css">milligram</option>
        <option value="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">materialize</option>
        <option value="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">normalize</option>
        <option value="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap-reboot.min.css">bootstrap-reboot</option>
        <option value="https://cdn.jsdelivr.net/npm/codyhouse-framework@2.6.2/main/assets/css/style.css">codyhouse-framework</option>
        <option value="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.min.css">bulma</option>
        <option value="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css">tailwind</option>
        <option value="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap.min.css">bootstrap</option>
      </select>

      <label for="edit-page"> Edit page </label>
      <input v-model="isEdit" type="checkbox"  id="edit-page">

      <input v-model="urlLoad" @change="loadURL" type="text" id="css-url" placeholder="URL style" />

      <select v-model="pagePreview" name="pagePreview" id="page-preview">
        <option value="PageRebootPreview">PageRebootPreview</option>
        <option value="PageTestHtml">PageTestHTML</option>
      </select>
      <!-- <textarea placeholder="css inject" name="css" id="css-inject"></textarea> -->
    </header>

    <div>
      <div :is="pagePreview"></div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: function() {
    return {
      urlLoad: '',
      cssInject: '',
      isEdit: false,
      pagePreview: 'PageRebootPreview'
    }
  },
  methods: {
    loadURL: function() {
      console.log('loadURL', this.urlLoad)
      if (!document.getElementById('css-link')) {
        var link = document.createElement('link')
        link.id = 'css-link'
        link.rel = 'stylesheet'
        link.href = this.urlLoad || ''
        document.head.appendChild(link)
      } else {
        document.getElementById('css-link').remove()
        return this.loadURL()
      }
    },
  },
}
</script>

<style></style>
