<template>
    <li>
        <el-checkbox v-model="checked" @change="onToggle"></el-checkbox>
        <span :class="{ completed: todo.completed }">
            {{ todo.title }}
        </span>
        <button @click="onRemove">X</button>
    </li>
</template>

<script>
export default {
    props: ["todo"],

    methods: {
        onToggle() {
            this.$emit("toggle", this.todo.id);
        },

        onRemove() {
            this.$emit("remove", this.todo.id);
        },
    },
    computed: {
        checked: {
            get() {
                return this.todo.completed;
            },
            set(value) {
                // console.log(value);
            },
        },
    },
};
</script>