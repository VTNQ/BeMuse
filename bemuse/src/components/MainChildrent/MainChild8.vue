<script>
export default {
  mounted() {
    const video = this.$refs.video;

    // Thêm sự kiện khi video kết thúc
    video.addEventListener('ended', () => {
      video.play(); // Replay video khi kết thúc
    });
  },
};
</script>

<template>
  <div class="relative">
    <iframe ref="video" class="frame w-[100%] h-[74vh]" src="https://www.youtube.com/embed/WBwNw4WjV7g?si=fJCl8y0FZYQnd1su" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
  </div>
</template>
<style scoped>
@media (max-width: 793px){
.frame{
    height: 60vh;
}
}
@media (max-width: 633px){
.frame{
    height:50vh;
}
}
@media (max-width: 505px){
.frame{
    width: 100vw;
    height:40vh;
}
}
@media (max-width: 411px){
.frame{
    width: 100vw;
    height:30vh;
}
}

</style>