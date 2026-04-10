# Pich&Go API Documentation ⋆｡🌺°✩

## API summary

| No. | Method             | Endpoint                     | Description                       | Access | 
| --- | ------------------ | ---------------------------- | --------------------------------- | ------ | 
|     | **Landing Page**  |                              |                                   |        | 
| 1   | GET                | `/`                  | หน้าlanding w/searchengine                  | Public/User |   
|     | **Authentication** |                              |                                   |        |
| 2   | POST               | `/auth/register`        | ลงทะเบียนผู้ใช้                  | Public | 
| 3   | POST               | `/auth/login`           | เข้าสู่ระบบผู้ใช้                | Public |
|     | **User Account**  |                              |                                   |        | 
| 4   | GET                | `/account/profile`                  | ดูข้อมูลตัวเอง                    | User   | 
| 5   | PATCH                | `/account/profile`                  | แก้ไขข้อมูลตัวเอง                 | User   | 
| 6   | DELETE                | `/account/profile`                  | ลบUSERนี้ทิ้ง                 | User   | 
| 7   | GET                | `/account/traveler-info`                  | ดูข้อมูลtravelerทั้งหมด                    | User   | 
| 8   | PATCH                | `/account/traveler-info`                  | แก้ไขข้อมูลtraveler                 | User   | 
| 9   | DELETE                | `/account/traveler-info`                  | ลบtravelerนี้ทิ้ง                 | User   | 
| 10   | GET                | `/account/bookings`                  | ดูประวัติการจองโรงแรมที่กำลังจะไป/ไปมาแล้ว/ถูกยกเลิก                    | User   | 
| 11   | GET                | `/account/rewards`                  | ดูคะแนนสะสม               | User   | 
| 12   | GET                | `/account/reviews`                  | ดูประวัติการรีวิว                | User   |
| 13   | POST                | `/account/reviews`                  | add รีวิว                | User   |
| 14   | DELETE                | `/account/reviews/:reviewId`                  | delete รีวิว                | User   |
|     | **City-Hotels**  |                              |                                   |        | 
| 15   | GET                | `/hotels`                  | ดูโรงแรมทั้งหมด                  | User   | 
| 16   | GET                | `/hotels/counts`                  | ดูจำนวนโรงแรมทั้งหมดในแต่ละจังหวัด                  | User   | 
| 17   | GET                | `/hotels/:city`                  | ดูโรงแรมทั้งหมดในจังหวัดนั้น                  | Public/User   | 
| 18   | GET                | `/hotels/:city/:hotelname`                  | ดูโรงแรมที่เราเลือกในจังหวัดนั้น                  | Public/User  | 
|     | **Bookings**  |                              |                                   |        | 
| 19   | POST                | `/book`                  | ทำการจอง ดูรายละเอียด ใส่ประวัติผู้พัก               | User   | 
| 20   | POST                | `/book/payment`                  | จ่ายเงิน                  | User   | 
| 21   | GET                | `/book/confirmed`                  | การจองสำเร็จ                  | User   | 
|     | **My Lists**  |                              |                                   |        | 
| 22   | GET                | `/like`                  | ดูข้อมูลโรงแรมที่favouriteไว้                   | User   | 
| 23   | POST               | `/like/:hotelid`                  | like                  | User   | 
| 24   | DELETE              | `/like/:hotelid`                  | unlike                 | User   | 
|     | **Reviews**  |                              |                                   |        | 
| 25   | GET                | `/reviews`                  | ดูรีวิว อาจไม่ต้องมีapiก้ได้โชวในhotelเลย                 | User   | 
|     | **ADMIN**  |                              |                                   |        | 
| 26   | POST               | `/auth/register/admin`        | ลงทะเบียนแอดมิน                 | Admin | 
| 27   | POST               | `/admin`           | หน้าlanding only for admin                 | Admin |



## เพิ่มเติม
chatbot ai สำหรับคำถามที่ถูกถามบ่อย FAQs
ai สรุปreviewsของโรงแรมนั้น
เปลี่ยนค่าเงิน
เปลี่ยนภาษา

<!-- |     | **Hotels**  |                              |                                   |        | 
| 5   | GET                | `/hotels`                  | ดูโรงแรม                  | User   | 
| 6   | GET                | `/hotels/search?city=---`                | ดูโรงแรมตามจังหวัด                 | User   |  -->

`https://www.trip.com/hotels/list?city=228&provinceId=0&countryId=78&checkIn=2026-03-10&checkOut=2026-03-11&lat=0&lon=0&districtId=0&barCurr=THB&searchType=CT&searchValue=undefined&crn=1&adult=2&children=0&searchBoxArg=t&ctm_ref=ix_sb_dl&travelPurpose=0&domestic=false&locale=en_xx&curr=THB`

`https://www.tablethotels.com/en/paris-hotels?nR=1&nA=1&nC=0&occupancy=1a%2C0c&arrDate=2026-04-12&depDate=2026-04-13&query=Paris&location_id=8397&isMapView=true`
`https://www.tablethotels.com/ja/miami-hotels?nR=1&nA=1&nC=0&occupancy=1a%2C0c&arrDate=2026-04-12&depDate=2026-04-13&query=Miami&location_id=50&isMapView=true`

https://www.trip.com/hotels/booknew?curr=THB&hasAidInUrl=false&fromnewdetail=true&bookMergeVersion=B&bookMergeMod=90&bookMergeExpCode=250613_IBU_TPCbook&isDelayPay=F&sourceTypeForCross=