<template>
  <div class="post-meta">
    {{ post.date }}
    <template v-if="post.cjkWordCount">
      <font-awesome :icon="['fa', 'file-word']" />
      {{ post.cjkWordCount }} 字
      <font-awesome :icon="['fa', 'history']" />
      <strong> {{ post.cjkReadTime }} 分钟 </strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="stylus">
.post-meta {
  font-size: 0.8em;
}
</style>
