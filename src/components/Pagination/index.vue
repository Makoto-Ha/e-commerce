<template>
  <div class="pagination">
    <button @click="changePage(pageNo - 1)" :disabled="pageNo <= 1">上一页</button>
    <button v-if="pageNo > 3" @click="changePage(1)">1</button>
    <button v-if="pageNo > 4">···</button>

    <button @click="changePage(number)" v-for="(number, index) in pageNumber.end" v-if="number >= pageNumber.start" :key="index" :class="{active: pageNo === number}">{{ number }}</button>
    
    <button v-if="pageNo < totalPage - 3">···</button>
    <button v-if="pageNo < totalPage - 2" @click="changePage(totalPage)">{{ totalPage }}</button>
    <button @click="changePage(pageNo + 1)" :disabled="pageNo >= totalPage">下一页</button>
    
    <button style="margin-left: 30px">共 60 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['pageNo', 'pageSize', 'total', 'continues'],
    computed: {
      totalPage() {
        return Math.ceil(this.total/this.pageSize);
      },
      pageNumber() {
        let {pageNo, continues, totalPage} = this;
        let start = 0, end = 0;
        // 1 2 3 4 5
        if(totalPage < continues) {
          // 不正常情況
          start = 1;
          end = totalPage;
        }else {
          // 正常情況
          start = pageNo - (continues - 1) / 2;
          end = pageNo + (continues - 1) / 2;
          // 小於2代表end只會是3個以下，會不符合continues要展示的個數，所以把end就要是continues
          if(start < 2) {
            end = continues;
          }

          if(end > totalPage) {
            start = totalPage - continues + 1;
            end = totalPage;
          }
        }

        return {start, end};
      }
    },
    methods: {
      changePage(switchPageNum) {
        this.$emit('changePage', switchPageNum);
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
