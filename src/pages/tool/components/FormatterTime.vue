<template>
    <el-container>
        <el-header>
            <h1 style="font-weight: normal;">当前时间: {{ currTime }}</h1>
        </el-header>
        <el-main>
            <el-form ref="form" label-width="0px" :model="form" :rules="rules">
                <el-form-item label="" prop="time">
                    <el-input v-model="form.time" placeholder="需要格式化的时间" type="textarea" :rows="8" resize="none"></el-input>
                </el-form-item>

                <el-form-item label="" prop="rule">
                    <el-input v-model="form.rule" placeholder="格式化规则,具体规则查看下方表格,例如 YYYY:MM:DD HH:MM:SS" type="textarea"
                        :rows="4" resize="none"></el-input>
                </el-form-item>

                <el-form-item label="" prop="formatterTime">
                    <el-input v-model="form.formatterTime" placeholder="格式化之后的时间(只读)" readonly type="textarea" :rows="8"
                        resize="none"></el-input>
                </el-form-item>

                <el-form-item style="text-align: center;">
                    <el-button icon="el-icon-document" type="primary" @click="handleClick">格式化</el-button>
                    <el-button icon="el-icon-refresh" @click="handleReset(false)">清空</el-button>
                </el-form-item>
            </el-form>
        </el-main>
        <el-divider content-position="center">格式化规则</el-divider>
        <el-footer>
            <ExplainTable></ExplainTable>
        </el-footer>
    </el-container>
</template>

<script>
import { isDateValid } from "@/utils";
import dayjs from "dayjs";
import ExplainTable from "./ExplainTable.vue";
const regNum = /^\d+$/;
const initRule = "YYYY-MM-DD HH:mm:ss";


export default {
    components: {
        ExplainTable
    },
    data() {
        return {
            form: {},
            rules: {
                time: [
                    {
                        validator: (rule, value, callback) => {
                            if (isDateValid(value)) {
                                callback()
                            } else {
                                callback(new Error('请输入有效的可格式化时间'))
                            }
                        },
                    }
                ],
                rule: [
                    {
                        message: "请完善格式化规则,如果配置的规则不符合下方要求则格式化失败",
                        required: true,
                        trigger: ['change']
                    }
                ]
            },
            currTime: "",
            timeout: null
        }
    },
    mounted() {
        this.$set(this.form, "rule", initRule);
        this.$set(this.form, "time", dayjs(new Date()).format(initRule));
        this.createTimeout()
    },
    methods: {
        createTimeout() {
            this.timeout = setTimeout(() => {
                this.currTime = dayjs().format(initRule)
                this.createTimeout()
            }, 1000);
        },
        handleClick() {
            this.$refs.form.validate(valid => {
                if (!valid) return
                let { time, rule } = this.form;
                let dateStr = dayjs(regNum.test(time) ? +time : time).format(rule);
                this.$set(this.form, "formatterTime", dateStr);
            })
        },
        handleReset() {
            this.$refs.form.resetFields()
        }
    },
}
</script>

<style lang="scss" scoped>
.el-form {
    &-item {
        text-align: left;
    }
}
</style>