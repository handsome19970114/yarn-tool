<template>
    <div>
        <el-input v-model="title" @keyup.enter.native="onAdd" style="width:200px" />
        <el-button @click="onAdd">Add</el-button>
        <slot name="operate" :data="time"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            time: Date.now(),
        };
    },

    methods: {
        onAdd() {
            if (this.title.trim() === "") return;
            this.$emit("addTodo", this.title);
            this.title = "";
        },
    },
};
</script>