import Button from "components/native/c-button.vue";
import Card from "components/composed/c-card.vue";
import Tree from "components/native/c-tree.vue";
import input from "components/form/f-input.vue";
import select from "components/form/select.vue";

export const routes = {
  input: {
    component: input,
    path: "/library",
    tag: "form",
    query: { component: "input" },
  },
  select: {
    component: select,
    path: "/library",
    tag: "form",
    query: { component: "select" },
  },
  button: {
    component: Button,
    path: "/library",
    tag: "native",
    query: { component: "button" },
  },
  card: {
    component: Card,
    path: "/library",
    tag: "composed",
    query: { component: "card" },
  },
  tree: {
    component: Tree,
    path: "/library",
    tag: "native",
    query: { component: "tree" },
  },
};
