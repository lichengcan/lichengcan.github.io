(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{569:function(t,e,n){"use strict";n.r(e);var i=n(2),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[t._v("人生苦短，我用python")])]),t._v(" "),e("p",[t._v("下面就先给大家举一些详细的例子来说说如何解决动态规划问题")]),t._v(" "),e("p",[t._v("    首先，你要知道什么才能算动态规划问题，这里，推荐《算法图解》这本书，是基于python写的一本算法讲解书，内容非常简单，没未接触过算法的人也能看懂:"),e("a",{attrs:{href:"https://www.aliyundrive.com/s/ebCdC5n1qX5",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法图解阿里云"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"动态规划练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态规划练习"}},[t._v("#")]),t._v(" 动态规划练习")]),t._v(" "),e("p",[t._v("这是算法图解里面的题目，感觉很不错")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/image-20231019113810338.png",alt:""}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package com.wy.guihua;\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\n/**\n * @author: lichengcan\n * @date: 2023-10-18 18:52\n * @description\n **/\npublic class back {\n    public static int[][] findOptimalItems(Item[] items, int capacity) {\n\n        //如果是暴力破解：不考虑容量，每个商品有两种情况，放入、不放入，进行穷举，时间复杂度是 2的n次方\n        //动态规划将大问题划分成一小块、最后将小块的答案合并以此解决大问题，时间复杂度是 n*m (物品数量*容量大小)\n        //两层for，第一层遍历行，就是 水、书、食物。。。。\n        //第二层遍历大小，将capacity分成1，2，3，4，5，6....小份的\n        //每次判断当前二维数组应该放什么值，和 (hang - 1, lie) 进行比较，如果加入当前行更大则替换\n        final int rowLength = items.length;\n        int[][] res = new int[rowLength][capacity + 1];\n        for (int row = 0; row < items.length; row++) {\n            for (int col = 0; col <= capacity; col++) {\n                // 判断当前物品是否能放入\n                final Item item = items[row];\n                if (item.getWeight() <= col) {\n                    if (row == 0) {\n                        // 第一行，没有之前的物品，所以直接是当前物品的价值\n                        res[row][col] = item.getValue();\n                    } else {\n                        // 当前物品价值 + 剩余空间的价值 与 上一行（不包括当前物品）的价值进行比较\n                        int currentValue = item.getValue() + res[row - 1][col - item.getWeight()];\n                        int lastValue = res[row - 1][col];\n                        if (currentValue > lastValue) {\n                            res[row][col] = currentValue;\n                        } else {\n                            res[row][col] = lastValue;\n                        }\n                    }\n                } else {\n                    if (row == 0) {\n                        // 第一行，且当前物品放不进去，价值为0\n                        res[row][col] = 0;\n                    } else {\n                        // 当前物品放不进去，继承之前物品在相同容量下的价值\n                        res[row][col] = res[row - 1][col];\n                    }\n                }\n\n            }\n        }\n        return res;\n    }\n\n    public static void main(String[] args) {\n        Item[] items = {\n                new Item("水", 3, 10),\n                new Item("书", 1, 3),\n                new Item("食物", 2, 9),\n                new Item("夹克", 2, 5),\n                new Item("相机", 1, 6)\n        };\n        int capacity = 6;\n        int[][] optimalItems = findOptimalItems(items, capacity);\n        System.out.println("6========================" + optimalItems[items.length - 1][capacity]);\n\n        Item[] items1 = {\n                new Item("帐篷", 20, 100),\n                new Item("水壶", 10, 60),\n                new Item("食品", 30, 120),\n                new Item("雨衣", 15, 70),\n                new Item("灯笼", 10, 50),\n                new Item("睡袋", 25, 80),\n                new Item("地图", 1, 150),\n                new Item("刀具", 5, 60),\n                new Item("防熊喷雾", 3, 40),\n                new Item("医疗包", 10, 100),\n                new Item("烹饪用具", 15, 60),\n                new Item("爬山绳索", 12, 80),\n                new Item("望远镜", 8, 100)\n        };\n        int maxWeight = 150;\n        int[][] optimalItems1 = findOptimalItems(items1, maxWeight);\n        System.out.println("150==============" + optimalItems1[items1.length - 1][maxWeight]);\n\n        List<Item> selectedItems = maximizeValue(items1, maxWeight);\n        System.out.println("Selected items:");\n        int sum = 0;\n        for (Item item : selectedItems) {\n            sum += item.getValue();\n            System.out.println(item.getName() + " - Weight: " + item.getWeight() + ", Value: " + item.getValue());\n        }\n        System.out.println("150Max==============" + sum);\n    }\n\n\n    public static List<Item> maximizeValue(Item[] items, int maxWeight) {\n        int[][] dp = new int[items.length + 1][maxWeight + 1];\n\n        for (int i = 1; i <= items.length; i++) {\n            Item item = items[i - 1];\n            for (int j = 1; j <= maxWeight; j++) {\n                if (item.getWeight() > j) {\n                    dp[i][j] = dp[i - 1][j];\n                } else {\n                    dp[i][j] = Math.max(dp[i - 1][j], item.getValue() + dp[i - 1][j - item.getWeight()]);\n                }\n            }\n        }\n\n        // Backtracking to find the items included\n        List<Item> selectedItems = new ArrayList<>();\n        int remainingWeight = maxWeight;\n        for (int i = items.length; i > 0; i--) {\n            if (dp[i][remainingWeight] != dp[i - 1][remainingWeight]) {\n                Item item = items[i - 1];\n                selectedItems.add(item);\n                remainingWeight -= item.getWeight();\n            }\n        }\n\n        Collections.reverse(selectedItems);\n        return selectedItems;\n    }\n\n}\n\n')])])]),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/2c7cb5cd8e7f7f0522a4a94f6f26201.jpg",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);