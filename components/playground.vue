<template>
  <CSnippet>
    <slot />
  </CSnippet>
  <CSnippet>
    <CCard header="Live update">
      <div v-for="key in Object.keys(options)">
        <div class="row">
          <div class="col-4">{{ key }}</div>
          <div class="col-8 align-items-left">
            <template v-if="options[key].type === 'enum'">
              <PanelEnum
                :k="key"
                :value="options[key].value"
                :options="dataSelectRefactor(options[key].options)"
                :setProperty="setProperty"
              />
            </template>
            <template v-else-if="options[key].type === 'boolean'">
              <PanelBoolean
                :k="key"
                :value="options[key].value"
                :setProperty="setProperty"
              />
            </template>
            <template v-else-if="options[key].type === 'icon'">
              <PannelIcon
                :icon="options[key]"
                :options="dataSelectRefactor(options[key].position.options)"
                :setProperty="setProperty"
              />
            </template>
            <template v-else-if="options[key].type === 'img'">
              <PanelImg
                :img="options[key]"
                :options="dataSelectRefactor(options[key].position.options)"
                :setProperty="setProperty"
              />
            </template>
            <template v-else-if="options[key].type === 'select'">
              <PanelArray
                :options="options[key].value"
                :k="key"
                :setProperty="setProperty"
              />
            </template>
            <template v-else>
              <PanelString
                :k="key"
                :value="options[key].value"
                :setProperty="setProperty"
              />
            </template>
          </div>
        </div>
      </div>
    </CCard>
  </CSnippet>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    setProperty: {
      type: Function,
      required: true,
    },
  },
  methods: {
    dataSelectRefactor(object) {
      return Object.keys(object).map((key) => {
        return {
          label: capitalize(object[key]),
          value: object[key].toLowerCase(),
        };
      });
    },
  },
};
</script>
