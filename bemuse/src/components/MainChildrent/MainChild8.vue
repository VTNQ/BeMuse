<script>
export default {
  mounted() {
    const video = this.$refs.video;

    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin
      threshold: 0.5, // 50% of the video must be in the viewport
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    if (video) {
      observer.observe(video);
    }
  },
  methods: {
    handleIntersection(entries) {
      const video = this.$refs.video;

      if (entries[0].isIntersecting) {
        // Video is in the viewport, play it
        video.play();
      } else {
        // Video is out of the viewport, pause it
        video.pause();
      }
    },
  },
};
</script>

<template>
  <div>
    
    <iframe ref="video" class="w-[100%] h-[74vh]" src="https://www.youtube.com/embed/WBwNw4WjV7g?si=fJCl8y0FZYQnd1su" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
  </div>
</template>
