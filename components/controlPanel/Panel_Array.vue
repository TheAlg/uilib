<template>
  <div class="row align-items-center justify-content-end">
    <div v-if="isObject" class="col-4">
      <FInput
        size="small"
        placeholder="key"
        :value="tempKey"
        @updated="(e) => (tempKey = e)"
      />
    </div>
    <div :class="isObject ? 'col-4' : 'col-8'">
      <FInput
        size="small"
        placeholder="value"
        :value="tempValue"
        @updated="(e) => (tempValue = e)"
      />
    </div>
    <div class="btn-group col-2" role="group">
      <CButton
        variant="light"
        outline
        :innerClass="['p-0 m-0', { active: isObject }]"
        icon="data_object"
        @click="type = 'object'"
      />
      <CButton
        variant="light"
        outline
        :innerClass="['p-0 m-0', { active: isString }]"
        icon="text_format"
        @click="type = 'string'"
      />
    </div>

    <div class="col-2">
      <CButton position="full" icon="add_circle" @click="addProperty()" />
    </div>
  </div>

  <code>
    <template v-for="(element, index) in sum">
      <template v-if="sum.length > 0 && index === 0"> [ </template>
      <div
        class="d-flex align-items-center justify-content-between"
        :class="{ 'row col-13': typeof element === 'object' }"
        style="text-indent: 20px"
      >
        <template v-if="typeof element === 'object'">
          <div>
            <template v-for="(subKey, subIndex) in Object.keys(element)">
              <div class="d-flex align-items-center" v-if="subIndex === 0">
                {
                <CButton
                  position="full"
                  icon="add_circle"
                  :innerClass="[
                    'p-0 px-2 m-0',
                    { 'active border-0': newKeyValue.id === index },
                  ]"
                  @click="
                    (e) => {
                      newKeyValue.active = !newKeyValue.active;
                      newKeyValue.id = newKeyValue.active ? index : '';
                    }
                  "
                />
              </div>
              <div
                class="d-flex align-items-center col-13 justify-content-between"
                style="margin-left: 20px"
                v-if="
                  newKeyValue.active &&
                  newKeyValue.id === index &&
                  subIndex === 0
                "
              >
                <div class="d-flex">
                  <FInput
                    class="col-4"
                    size="small"
                    :value="newKeyValue.key"
                    @updated="(e) => (newKeyValue.key = e)"
                  />:
                  <FInput
                    class="col-4"
                    size="small"
                    :value="newKeyValue.value"
                    @updated="(e) => (newKeyValue.value = e)"
                  />
                </div>
                <div>
                  <CButton
                    icon="done"
                    innerClass="p-0 m-0 col-2"
                    @click="insertObject(index)"
                  />
                </div>
              </div>
              <div style="text-indent: 30px">
                <template v-if="edit[0] === index && edit[1] === subKey">
                  <div
                    class="d-flex align-items-center col-13 justify-content-between"
                    style="margin-left: 20px"
                  >
                    <div class="d-flex">
                      <FInput
                        class="col-4"
                        size="small"
                        :value="updatedKey"
                        @blur="(e) => updateKey(index, subKey, true)"
                        @updated="(e) => (updatedKey = e)"
                      />:
                      <FInput
                        class="col-4"
                        size="small"
                        :value="sum[index][subKey]"
                        @blur="(e) => (edit = false)"
                        @updated="(e) => updateValue(e, index, subKey)"
                      />
                    </div>
                    <div>
                      <CButton
                        icon="done"
                        innerClass="p-0 m-0 col-2"
                        @click="edit = false"
                      />
                    </div>
                  </div>
                </template>

                <template v-else>
                  <div class="d-flex justify-content-between">
                    <div>
                      "{{ subKey }}" : "{{ element[subKey] }}"
                      <span v-if="subIndex !== Object.keys(element).length - 1">
                        ,</span
                      >
                    </div>
                    <div class="d-flex flex-nowrap">
                      <CButton
                        class="p-0"
                        icon="edit"
                        innerClass="p-0 m-0"
                        @click="edit = [index, subKey]"
                      />
                      <CButton
                        class="p-0"
                        icon="remove"
                        innerClass="p-0 m-0"
                        @click="removeElement(index, subKey)"
                      />
                    </div>
                  </div>
                </template>
              </div>
              <div v-if="subIndex === Object.keys(element).length - 1">
                <span>}</span>
                <span v-if="index !== sum.length - 1">, </span>
              </div>
            </template>
          </div>
        </template>
        <template v-else-if="typeof element === 'string'">
          <template v-if="edit[0] === index">
            <FInput
              size="small"
              :value="element"
              @updated="(e) => updateValue(e, index)"
            />
            <CButton
              class="p-0"
              icon="done"
              innerClass="p-0 m-0"
              @click="edit = false"
            />
          </template>
          <template v-else>
            <div>
              "{{ element }}"
              <span v-if="index !== sum.length - 1">, </span>
            </div>
            <div class="d-flex flex-nowrap">
              <CButton
                class="p-0"
                icon="edit"
                innerClass="p-0 m-0"
                @click="edit = [index]"
              />
              <CButton
                class="p-0"
                icon="remove"
                innerClass="p-0 m-0"
                @click="removeElement(index)"
              />
            </div>
          </template>
        </template>
      </div>
      <template v-if="sum.length > 0 && index === sum.length - 1"> ] </template>
    </template>
    <div class="mb-2"></div>
  </code>
</template>

<script>
export default {
  name: "f-input",
  props: {
    k: {
      type: String,
      required: true,
    },
    setProperty: {
      type: Function,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      type: "string",
      tempKey: "",
      tempValue: "",
      updatedKey: "",
      sum: this.options,
      newKeyValue: {
        id: "",
        active: false,
        key: "",
        value: "",
      },

      edit: false, // could be the index to edit or false
    };
  },
  mounted() {
    console.log(this.options);
  },
  methods: {
    addProperty() {
      switch (this.type) {
        case "object":
          if (!this.tempKey || !this.tempValue) {
            alert("key and value pair must not be empty");
          } else {
            const obj = { [this.tempKey]: this.tempValue };
            this.sum.push(obj);
          }
          break;
        case "string":
          if (!this.tempValue) {
            alert("string must not be empty");
          } else {
            this.sum.push(this.tempValue);
          }
          break;
      }
      this.setProperty(this.k, { ...this.sum });
    },
    updateKey(index, oldKey, newKey = false) {
      let renameKeys = (keysMap, object) =>
        Object.keys(object).reduce(
          (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: object[key] },
          }),
          {}
        );
      var keyString = newKey ? this.updatedKey : this.tempKey;
      this.sum[index] = renameKeys({ [oldKey]: keyString }, this.sum[index]);
      console.log(this.sum[index]);
      this.setProperty(this.k, { ...this.sum });
    },
    updateValue(newVal, index, subKey = undefined) {
      if (subKey) {
        this.sum[index][subKey] = newVal;
      } else {
        this.sum[index] = newVal;
      }
      this.setProperty(this.k, { ...this.sum });
    },
    insertObject(index) {
      this.sum[index][this.newKeyValue.key] = this.newKeyValue.value;
      this.newKeyValue.active = false;
      this.newKeyValue.id = "";
    },
    removeElement(index, key = null) {
      if (key) {
        delete this.sum[index][key];
      } else {
        this.sum.splice(index, 1);
      }
      this.setProperty(this.k, { ...this.sum });
    },
  },
  computed: {
    isString() {
      return this.type === "string";
    },
    isObject() {
      return this.type === "object";
    },
  },
  watch: {
    edit(val) {
      if (val[1]) {
        this.updatedKey = val[1];
      }
    },
  },
};
</script>
<style scoped>
pre {
  white-space: pre-line;
}
</style>
