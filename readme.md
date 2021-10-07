# 台灣代駕 派對餐廳

## 2021/10/07 更新
- style.min.css 更新。
- 解決手機版橫式時選單樣式跑版的問題。
- 背景設為滿版(之前限制最寛為1920px)

---

## 2021/4/13 更新
- data.json 新增 `sm_hide` 參數, 請參考以下參數說明
- bug fixed: 修正店家點擊無反應問題
- 未上架店家點擊後，顯示更多餐廳敬請期待圖示
- 游標移至無餐廳資料的餐廳上顯示分類的中英文
- 餐廳列表：右下角「更多餐廳 即將登場」文字改由程式押上

---

## 店家資料說明文件
### 包含活動網站相關連結及各店家資料

`檔案位置` api/data.json

### 參數說明

>`url`: 首頁裡所有的連結
>
> - `fb`: 台灣代駕 facebook
> - `ig`: 台灣代駕 ig
> - `bank`: 永豐銀行連結
> - `web`: 台灣代駕官網
> - `app`: 台灣代駕 app 下載連結
> - `video`: 台灣代駕影片連結
>
>`stores`: 所有店家資訊
>
> - `chineseName `: 店家種類中文名
> - `englishName `: 店家種類英文名
> - `list`: 該種類的店家清單
>  -  `name`: 店家名稱
>  -  `intro`: 店家介紹
>  -  `addr`: 店家地址
>  -  `tel`: 店家電話
>  -  `time`: 店家地址
>  -  `fb`: 店家地址
>  -  `map`: 店家地址
>  -  `note`: 店家優惠說明
>  -  `pic`: 首頁店家選單的照片路徑(正方形：480x480)，請放在 "assets/img/" 資料夾內
>  -  `img`: 內頁店家的照片路徑，可以多張(尺寸680x456)，請放在 "assets/img/" 資料夾內
>  -  `sm_hide`: 手機版是否隱藏, 要隱藏請加這個參數( `"sm_hide":true` ) , 不需要隱藏的則不用加


```
{
    "url":{
        "fb":"https://www.facebook.com/twdd5209/",
        "ig":"https://www.instagram.com/twdd.tw/",
        "bank":"https://google.com",
        "web":"https://twdd.tw",
        "app":"https://goo.gl/kIoR15",
        "video":"https://youtu.be/q6mjYe-rPt0"
    },
    "stores":[
    {
        "chineseName":"台菜",
        "englishName":"Stir-Fries",
        "list"[
            {
                "name":"台菜-1",
                "intro": "店家介紹店家介紹店家介紹店家介紹店家介紹店家介紹店家介紹店家介紹店家介紹",
                "addr":"106台北市大安區敦化南路一段270巷6號",
                "tel": "02-81818181",
                "time": "週一至週五、週日 11:30-22:30",
                "fb":"https://www.facebook.com/twdd5209/",
                "map":"https://g.page/twdd5209?share",
                "pic":"./assets/img/bar-1.png",
                "note":"TWDD 台灣代駕驚喜優惠：65 折",
                "images":[
                    "http://placehold.it/680x456/cdd/fff.png",
                    "http://placehold.it/680x456/568/fff.png"
                ],
                "sm_hide":true
            },
            ...
        ]
    },
    ...
    ]
}

```

## 相關資訊

### GoShare Select
https://www.gq.com.tw/event/2020/goshare_select

### 派對餐廳 樣板網頁
https://www.elegantthemes.com/layouts/business/coffee-shop-landing-page/live-demo

### 切版說明 (參考附件 首頁.png)

1. Party Time 享樂派對 主視覺
1. 優惠大綱 (向量icons)
1. 餐廳目錄
1. 俯拍3種類型美食 (不代表任何餐廳，純裝飾)
1. 有8~10種類型，需有頁籤分類顯示，每個分類3間 (餐廳照片+店名 方形x3) (滑鼠移動有動態效果)

 - 台菜 
 - 川菜 
 - 鍋物 
 - 酒吧   
 - 餐酒館    
 - 居酒屋 
 - 日式燒肉      
 - 韓式燒肉 
 - 異國料理      
 - 精釀酒吧

1.  餐廳內頁
 - (參考附件 內頁.png)
 - (參考GoShare餐廳內頁截圖，多張照片、店家介紹、優惠內容、社群連結)
 - (內頁文字編排風格則參考下方連結，與首頁版型比較有一致性)
https://www.elegantthemes.com/layouts/food-drink/coffee-shop-guide-page/live-demo

1. 活動說明 + 付款流程  (參考GoShare，純文字活動說明，有完整內容縮放按鈕。) (APP下載)

1. 影片+台灣代駕服務簡介 (參考截圖版面，左邊內嵌影片，右邊簡略文字介紹代駕)



