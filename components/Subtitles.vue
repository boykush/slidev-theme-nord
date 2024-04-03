<!--
Subtitles at the bottom of slides.

Usage:

<Subtitles
  content="これは日本語の字幕です。折りたたみはしません。二行分のスペースを設けています。"
  >
</Subtitles>
-->

<script setup lang="ts">

defineProps<{
  content: string
}>()

</script>

<template>
    <footer class="slidev-subtitles">
        <span class="content">
            {{ content }}
        </span>
    </footer>
</template>