<template>
    <el-container>
        <el-main>
            <el-form label-width="100px" :model="form">
                <el-form-item label="输入" prop="md5Input">
                    <el-input v-model="form.md5Input" placeholder="输入想要生成MD5的字符" type="textarea" :rows="8"
                        resize="none"></el-input>
                </el-form-item>
                <el-form-item label="输出" prop="md5Output">
                    <el-input v-model="form.md5Output" placeholder="点击生成md5(只读)" readonly type="textarea" :rows="8"
                        resize="none"></el-input>
                </el-form-item>

                <el-form-item style="text-align: center;">
                    <el-button icon="el-icon-document" type="primary" @click="handleClickGenerateMd5">生成</el-button>
                    <el-button icon="el-icon-refresh" @click="handleReset">重置清空</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>
<script>
import md5 from "md5"
import { copyText } from "@/utils"
export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        handleClickGenerateMd5() {
            const { md5Input } = this.form
            if (!md5Input) return this.$message.info("请输入字符");
            const md5Value = md5(md5Input)
            this.$set(this.form, 'md5Output', md5Value)
            copyText(md5Value)
            this.$emit('input', this.form)
            this.$message.success('生成并复制到剪切板成功!!!')
        },

        handleReset() {
            this.form = {}
            this.$emit('input', this.form)
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/ .el-form-item__content {
    text-align: left;
}
</style>