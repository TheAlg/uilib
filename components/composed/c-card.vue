<template lang="">
  <wrapper
    :direction="computedDirection"
    :position="computedImg?.position"
    :align="computedAlign"
    :variant="computedVariant"
  >
    <template #header>
      <div
        v-if="header"
        class="card-header"
        :class="inline ? computedVariant : ''"
      >
        {{ header }}
      </div>
    </template>
    <template #img v-if="computedImg">
      <CImg :class="computedImg.style" :src="computedImg.src" />
    </template>

    <template #body>
      <div
        :class="
          computedImg?.position === 'overlay' ? 'card-img-overlay' : 'card-body'
        "
      >
        <h5 v-if="title" class="card-title">{{ title }}</h5>
        <h6 v-if="subTitle" class="card-subtitle mb-2 text-muted">
          {{ subTitle }}
        </h6>
        <div class="card-text">
          <slot></slot>
          <p v-if="label" class="card-text">
            <small class="text-body-secondary">{{ label }}</small>
          </p>
        </div>
        <!--a href="#" class="card-link">Card link</-a-->
        <!--a href="#" class="card-link">Another link</a-->
      </div>
    </template>
    <template #footer>
      <div
        v-if="footer"
        class="card-footer"
        :class="inline ? computedVariant : ''"
      >
        {{ footer }}
      </div>
    </template>
  </wrapper>
</template>

<script setup lang="ts">
import wrapper from "wrappers/c-card.vue";

export interface Props {
  img?: Object | string;
  title?: string;
  subTitle?: string;
  header?: string;
  footer?: string;
  label?: string;
  direction?: string;
  align?: string;
  variant?: string;
  outline?: boolean;
  inline?: boolean;

  playground?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  img: undefined,
  title: undefined,
  subTitle: undefined,
  header: undefined,
  footer: undefined,
  label: undefined,
  direction: "vertical",
  align: "left",
  variant: "none",
  outline: false,
  inline: false,

  playground: false,
});

const emit = defineEmits<{
  (e: "init", value: object): void;
}>();

onBeforeMount(() => {
  if (props.playground) {
    emit("init", {
      img_position: Object.values(position_img),
      direction,
      align: Object.values(align_card),
      variant: Object.values(variant),
    });
    console.log("playground for card component initialized");
  }
});

const isHorizontal = computed(() => {
  return props.direction === "horizontal";
});
const computedDirection = computed(() => {
  return getBootValue(`direction.${props.direction}`);
});
const computedImg = computed(() => {
  return bootstrapCardImg(props.img);
});
const computedAlign = computed(() => {
  return getBootValue(`align.card.${props.align}`);
});
const computedVariant = computed(() => {
  return bootstrapCardVariant(props.variant, props.outline);
});
</script>
<style lang="css">
.c-hover:hover {
  background-color: #f5f5f5;
}
</style>
