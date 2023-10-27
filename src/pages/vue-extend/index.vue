<template>
    <div style="position: fixed;bottom:20px;right:20px">
        <el-button type="primary" @click="handleClick">点击</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seed: 1
        }
    },
    methods: {
        handleClick() {
            // this.$message.info({
            //     message: "1111",
            //     showClose: true,
            //     duration: 10000000,
            //     onClose: () => { }
            // })
            // return
            this.$customMsg({
                message: `中华人民共和国-${this.seed++}`,
                showClose: true,
                duration: 10000000,
                onClose: (vm) => {
                    // console.log(vm);
                }
            })
        }
    }
}
</script>