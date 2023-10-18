<template>
    <el-container>
        <el-header>
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button :label="labels['ENCRYPT']">加密</el-radio-button>
                <el-radio-button :label="labels['DECRYPT']">解密</el-radio-button>
            </el-radio-group>
        </el-header>
        <template>
            <el-main v-show="tabPosition == labels['ENCRYPT']">
                <el-form label-width="100px" :model="form">
                    <el-form-item label="输入" prop="input">
                        <el-input v-model="form.input" placeholder="输入想要生成Aes的字符" type="textarea" :rows="8"
                            resize="none"></el-input>
                    </el-form-item>

                    <el-form-item label="秘钥" prop="secret">
                        <el-input v-model="form.secret" placeholder="请输入秘钥(必须)"></el-input>
                    </el-form-item>

                    <el-form-item label="输出" prop="output">
                        <el-input v-model="form.output" placeholder="点击生成Aes(只读)" readonly type="textarea" :rows="8"
                            resize="none"></el-input>
                    </el-form-item>

                    <el-form-item style="text-align: center;">
                        <el-button icon="el-icon-document" type="primary" @click="handleClickGenerate">加密</el-button>
                        <el-button icon="el-icon-refresh" @click="handleReset(false)">重置清空</el-button>
                    </el-form-item>
                </el-form>
            </el-main>

            <el-main v-show="tabPosition == labels['DECRYPT']">
                <el-form label-width="100px" :model="form">
                    <el-form-item label="加密数据" prop="en_input">
                        <el-input v-model="form.en_input" placeholder="请输入或者粘贴加密过的数据" type="textarea" :rows="8"
                            resize="none"></el-input>
                    </el-form-item>

                    <el-form-item label="秘钥" prop="secret">
                        <el-input v-model="form.secret" placeholder="请输入秘钥(必须)"></el-input>
                    </el-form-item>

                    <el-form-item label="解密数据" prop="de_output">
                        <el-input v-model="form.de_output" placeholder="解密之后的数据(只读)" readonly type="textarea" :rows="8"
                            resize="none"></el-input>
                    </el-form-item>

                    <el-form-item style="text-align: center;">
                        <el-button icon="el-icon-unlock" type="primary" @click="handleDecrypt">解密</el-button>
                        <el-button icon="el-icon-refresh" @click="handleReset(false)">重置清空</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </template>

    </el-container>
</template>
<script>
import md5 from "md5";
import AESEncryption from "@/utils/class/aes";
const aes = new AESEncryption();
const labels = {
    ENCRYPT: "encrypt",
    DECRYPT: "decrypt",
};
export default {
    data() {
        return {
            form: {},
            tabPosition: labels['ENCRYPT'],
            labels,
        }
    },
    mounted() {
        this.$set(this.form, 'secret', md5(new Date().getTime()))
    },
    methods: {
        handleClickGenerate() {
            const { input, secret } = this.form
            const fn = () => {
                this.$set(this.form, 'output', '')
            }
            if (!input) {
                fn()
                return this.$message.warning("请输入需要加密的字符");
            }
            if (!secret) {
                fn()
                return this.$message.warning("请输入加密所需要的秘钥");
            }
            aes.generateOption(this.form.secret)
            const data = aes.encrypt(this.form.input)
            this.$set(this.form, 'output', data)
        },

        handleDecrypt() {
            const { en_input, secret } = this.form
            const fn = () => {
                this.$set(this.form, 'de_output', '')
            }
            if (!en_input) {
                fn()
                return this.$message.warning("请输入加密过的数据");
            }
            if (!secret) {
                fn()
                return this.$message.warning("请输入解密所需要的秘钥");
            }
            aes.generateOption(this.form.secret)
            const data = aes.decrypt(this.form.en_input)
            if (!data) {
                return this.$message.error('请检查加密数据和秘钥是否对应')
            }

            this.$set(this.form, 'de_output', data)
        },

        handleReset(isSend) {
            let arr = ['input', 'output'].map(item => (this.labels['ENCRYPT'] == this.tabPosition ? '' : 'en_') + item);
            arr.forEach(item => {
                this.$set(this.form, item, "")
            })
            isSend && this.$emit('input', this.form)
        },
    }
}
</script>
<style lang="scss" scoped>
/deep/ .el-form-item__content {
    text-align: left;
}
</style>