<template>
  <div class="p-3">
    <ul class="list-unstyled">
      <li class="mb-1" v-for="(element, index) in content" :key="index">
        <div>
          <button
            class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            :data-bs-target="'#' + generateUid(index)"
            aria-expanded="true"
          >
            {{ element.label }}
          </button>
          <div
            :class="['collapse', { show: element.expanded }]"
            :id="generateUid(index)"
          >
            <ul class="ms-4 btn-toggle-nav list-unstyled pb-1 small">
              <li v-for="(value, idx) in element.items" :key="idx">
                <template v-if="typeof value === 'object' && !value.path">
                  <c-tree :content="[values]" :expanded="element.expanded" />
                </template>
                <NuxtLink
                  v-else
                  class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  :to="{ path: value.path, query: value.query }"
                  >{{ value.label }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "c-tree",
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  methods: {
    generateUid(index) {
      return "uuid-" + index;
    },
  },
};
</script>

<style lang=""></style>
