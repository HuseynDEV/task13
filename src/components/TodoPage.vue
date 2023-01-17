<template>
  <div
    class="w-[414px] h-[600px] pb-[20px] bg-gradient-to-b from-[#d4d7f5] to-[#9395D3] relative"
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

      <div class="flex items-center justify-center mt-[20px] w-full">
        <div
          class="w-1/2 text-center border-r-[1px] border-[#CBCBCB] border-solid"
        >
          <router-link
            to="/"
            tag="h1"
            class="cursor-pointer text-white w-[80px] mx-auto font-normal text-3xl relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-[100%] after:bg-[#CBCBCB]"
          >
            TODO
          </router-link>
        </div>
        <div class="w-1/2 text-center">
          <router-link
            to="/done"
            tag="h1"
            class="text-white text-3xl font-thin cursor-pointer"
          >
            DONE
          </router-link>
        </div>
      </div>
    </div>

    <div class='mb-[50px]'>
      <div
        v-for="data in getData"
        :key="data.id"
        class="px-2 py-3 text-white bg-[#B3B7EE] rounded-2xl mx-2 my-3 flex items-center justify-between shadow-shadow-item"
      >
        <div>
          <h1 class="text-xl font-semibold uppercase">{{ data.title }}</h1>
          <h3 class="text-xs font-normal uppercase">{{ data.subtitle }}</h3>
        </div>
        <div
          class="btn w-[35px] h-[35px] border-white border-4 border-solid z-[999] relative block text-center leading-[35px] text-2xl"
          @click="doneItem"
        >{{ data.active ? "V" : "" }}</div>
      </div>
    </div>
    <router-link
      to="/add"
      tag="div"
      class="absolute bottom-1 right-1 w-[60px] cursor-pointer h-[60px] rounded-[50%] bg-[#B3B7EE] flex items-center justify-center shadow-shadow-item"
    >
      <img src="../images/add.png" />
    </router-link>
  </div>
</template>

<script>
export default {

  computed: {
    getData() {
      return this.$store.getters.getData;
    },

    checkData(item) {
      return item;
    }
  },

  methods: {
    doneItem(event) {
  
      let element = event.target;
      let parent = element.parentElement;
      let checked = parent.querySelector("h1").innerText;

      console.log(element)


      if (element.innerHTML === "") {
        element.innerHTML = "V";
        this.$store.commit("addCheckedTodo", checked);
      } else if (element.innerHTML === "V") {
        element.innerHTML = "";
        this.$store.commit("deleteCheckedTodo", checked);
      }
    },
  },


};
</script>

<style></style>
