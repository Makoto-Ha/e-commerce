<template>
  <div class="spec-preview" ref="container">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
    name: "Zoom",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: ['skuImageList'],
    computed: {
      imgObj() {
        return this.skuImageList[this.currentIndex] || {}
      }
    },
    methods: {
      handler(e) {
        let mask = this.$refs.mask;
        let big = this.$refs.big;
        let container = this.$refs.container;
        let left = e.offsetX - mask.offsetWidth/2;
        let top = e.offsetY - mask.offsetHeight/2
        mask.style.left = left + 'px';
        mask.style.top = top + 'px';
        if(e.offsetX < mask.offsetWidth/2) mask.style.left = 0;
        if(e.offsetY < mask.offsetHeight/2) mask.style.top = 0;
        if(e.offsetX > container.offsetWidth - mask.offsetWidth/2) mask.style.left = container.offsetWidth - mask.offsetWidth + 'px';
        if(e.offsetY > container.offsetHeight - mask.offsetHeight/2) mask.style.top = container.offsetHeight - mask.offsetHeight + 'px';

        big.style.left = -2*left+'px';
        big.style.top = -2*top+'px';
      }
    },
    mounted() {
      this.$bus.$on('getIndex', index => {
        this.currentIndex = index;
      });
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>