


<template>
  <div
    class="w-[414px] h-[600px] bg-gradient-to-b from-[#d4d7f5] to-[#9395D3] relative"
  >
    <div class="w-full h-[121px] bg-[#9395D3] rounded-b-[30px] p-[12px]">
      <div class="flex items-center justify-between">
        <div class="text-white">9:41</div>
        <div class="flex items-center gap-x-2">
          <img src="../images/wifi-connect.png" />
          <img src="../images/wifi.png" />
          <img src="../images/battery.png" />
        </div>
      </div>

      <div class="flex items-center mt-[20px] w-full relative">
        <router-link to="/">
          <i class="fa-solid fa-left-long text-white text-2xl"></i
        ></router-link>
        <h1
          class="uppercase font-bold absolute left-[50%] -translate-x-[50%] text-4xl text-white"
        >
          Add Todo
        </h1>
      </div>
    </div>

    <div class="absolute top-[60%] -translate-y-[50%] w-full px-2">
      <div
        class="py-[10px] px-[20px] mb-[30px] bg-[#B3B7EE] shadow-shadow-item w-full rounded-2xl"
      >
        <input
          placeholder="TODO TITLE"
          v-model="data.title"
          class="w-full bg-transparent placeholder:text-white placeholder:text-[20px] outline-none text-white text-xl border-solid border-white border-b-2 py-2"
        />
      </div>
      <div
        class="py-[10px] px-[20px] bg-[#B3B7EE] shadow-shadow-item w-full rounded-2xl"
      >
        <input
          placeholder="TODO TITLE"
          v-model="data.subtitle"
          class="w-full bg-transparent placeholder:text-white placeholder:text-[20px] outline-none text-white text-xl border-solid border-white border-b-2 py-2"
        />
      </div>
      <button
        @click="addTodo()"
        class="uppercase w-full h-[60px] leading-[60px] text-[#8B8787] text-xl text-center rounded-[15px] mt-[30px] bg-white"
      >
        Add Todo
      </button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';


export default {
  data() {
    return {
      data: {
        title: "",
        subtitle: "",
        active: false,
      },
    };
  },


      computed: {
        ...mapState(['todo'])
    }
,

  methods: {
    addTodo() {

 if (this.data.title != "" && this.data.subtitle != "") {
    console.log('todo', this.todo);
    if(this.todo.length === 0) return this.$store.commit("addTodo", { ...this.data, id: new Date() });
    if(this.todo.filter(r => r.title === this.data.title).length === 0) {
      return this.$store.commit("addTodo", { ...this.data, id: new Date() });

    } else {
         alert('bu to do var')
    }
 } 
     else{
            alert('fill the blanks')
     }


    
    },
  },
};
</script>

<style></style>
