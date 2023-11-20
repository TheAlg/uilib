<template lang="">
  <div>
    <pre>
      <code v-html="formattedCode"></code>
    </pre>
  </div>
</template>
<script>
export default {
  props: {
    componentName: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedCode() {
      const tag = "&lt;";
      const whiteSpace = "&nbsp;&nbsp;&nbsp;&nbsp;";
      const backToLine = "\n";
      const stringBuilder = [];
      stringBuilder.push(tag + this.componentName + backToLine);

      Object.keys(this.data).forEach((key, index, keys) => {
        var line = "";
        if (typeof this.data[key] === "object") {
          line +=
            '"' + JSON.stringify(this.data[key]).replaceAll('"', "'") + '"';
        } else if (typeof this.data[key] === "string") {
          line += "\"'" + this.data[key] + "'\"";
        } else if (typeof this.data[key] === "boolean") {
          line += '"' + this.data[key] + '"';
        }
        stringBuilder.push(
          `${whiteSpace}:${key}=${line}${
            index < keys.length - 1 ? backToLine : ""
          }`
        );
      });

      stringBuilder.push("&gt; \n");
      stringBuilder.push("&lt;/" + this.componentName + "&gt;");

      return stringBuilder.join("").replace(/\n/g, "<br>").trim();
    },
  },
};
</script>
<style scoped>
pre {
  white-space: pre-line;
}
</style>
