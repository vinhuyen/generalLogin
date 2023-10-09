import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "base-menu",
        title: "Quản lý bản đánh giá",
        subMenu: [
          {
            icon: "ListIcon",
            pageName: "base-menu",
            title: "Danh sách bản đánh giá"
          },
          {
            icon: "BarChart2Icon",
            pageName: "tracking-status",
            title: "Trạng thái đánh giá"
          },
        ],
      },
    ],
  }),
});
