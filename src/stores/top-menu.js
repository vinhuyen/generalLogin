import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("topMenu", {
  state: () => ({
    menu: [
      {
        icon: "UserIcon",
        pageName: "list-evaluation-user",
        title: "Bản đánh giá của bạn",
      },
      {
        icon: "PlusIcon",
        pageName: "create-judgement",
        title: "Tạo đánh giá",
      },
        ]
  }),
});
