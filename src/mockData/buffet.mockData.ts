import type { BuffetDayMenu } from "@/types";

export const buffetMenuMockData: BuffetDayMenu[] = [
  {
    date: "02/02",
    weekday: "一",
    meals: [],
    notice: "尚未公布菜色。",
  },
  {
    date: "02/03",
    weekday: "二",
    meals: [
      {
        period: "午餐",
        description: "炒麵、蔥爆牛肉、炒空心菜、茶碗蒸、西瓜",
        colorScheme: "yellow",
      },
      {
        period: "晚餐",
        description: "炒麵、蔥爆牛肉、炒空心菜、茶碗蒸、西瓜",
        colorScheme: "blue",
      },
    ],
  },
  {
    date: "02/04",
    weekday: "三",
    meals: [
      {
        period: "午餐",
        description: "炒麵、蔥爆牛肉、炒空心菜、茶碗蒸、西瓜",
        colorScheme: "yellow",
      },
      {
        period: "下午茶",
        description: "薯條、杯子蛋糕",
        colorScheme: "green",
      },
      {
        period: "晚餐",
        description: "炒麵、蔥爆牛肉、炒空心菜、茶碗蒸、西瓜",
        colorScheme: "blue",
      },
    ],
  },
  {
    date: "02/05",
    weekday: "四",
    meals: [],
    notice: "午餐:總部股東會，暫停供餐。| 晚餐:總部股東會，暫停供餐。",
  },
  {
    date: "02/06",
    weekday: "五",
    meals: [
      {
        period: "晚餐",
        description: "炒麵、蔥爆牛肉、炒空心菜、茶碗蒸、西瓜",
        colorScheme: "blue",
      },
    ],
    notice: "午餐:總部股東會，暫停供餐。",
  },
];
