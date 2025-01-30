import React from 'react'

const info = () => {
	return (
		<div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae quibusdam ducimus doloribus omnis, soluta quasi possimus consequuntur in eius quo, reprehenderit, ex maiores? Sapiente dicta commodi unde eaque voluptatem!</p>
		</div>
	)
}

export default info

// Nazariy imtihon uchun savollar.

// 1. React JS nima ?
// 2. React Component ?
// 3. Reactda folder (papka) qanday ochiladi ?
// 4. export va import haqida malumot bering.
// 5. Reactda arraydagi malumotlarni chiqarishda qaysi methoddan foydalaniladi. forEach yoki map. va nima uchun ?
// 6. unique key ning vazifasi nimadan iborat ?
// 7. Reactda css file qanday ulanadi ?
// 8. Reactda inline style qanday yoziladi. misol qilib, bitta div oching va shu divga width 400 px, background color esa aqua rangini bering.
// 9. props nima ?
// 10. useState hookining vazifasi ?
// 11. useRef hooki haqida malumot bering.
// 12. useEffect hooki haqida malumot bering.
// 13. JavaScriptda setTimeout va setInterval qanday ishlaydi? Ularning farqlarini tushuntiring va kod misoli keltiring.
// 14. Promise qanday ishlaydi va ularning asosiy farqlari nimada?
// 15. Array.filter(), Array.map(), va Array.forEach() metodlarining farqlarini tushuntiring.

///////// Nazariy imtihon uchun savollar.

// 1. React JS nima ?
// 1-Bu javascript kutubxonasi bulib,componentlar yordamida ishlaydi va virtual DOM orqali tez ishga tushadi va saytni interaktiv qilish qulaylik yaratadi

// 2. React Component ?
// 2-bu UI elementlarni mustaqil yaratishda ishlaydigon va ishlaydigon blok bu funksiyalar yoki klasslar yordamida yoziladi va props,state lar bilan interaktivlikni taminlaydi

// 3. Reactda folder (papka) qanday ochiladi ?
// 3-Reactda asosan terminal orqali yaratiladi vite misolida: npm init vite va song papkanomi yoki ./

// 4. export va import haqida malumot bering.
// 4-Bu javascript hususiyati bulib: export orqali funksiyalar yoki componentlar yuboramiz va import orqali tayyor komponent chaqirib ishlata olamiz

// 5. Reactda arraydagi malumotlarni chiqarishda qaysi methoddan foydalaniladi. forEach yoki map. va nima uchun ?
// 5- Reactda arraydagi malumotlarni chiqarishda map() methoddan foydalanadi chunki hari bir elementga yurib chiqib jsx elementga ugirib qaytaradi va bu render jarayoni ga juda mos keladi

// 6. unique key ning vazifasi nimadan iborat ?
// 6-Key ni vazifasi reactda har bir elementni unikal qilish va bu orqali DOM da va ozgargan element qayta render boladi

// 7. Reactda css file qanday ulanadi ?
// 7- Agar siz hamma componentlar aro ulamoqchi bolsaingiz import './style.css' agar faqat malum bir component ichida bolsa esa .module.css qushimchasi boladi

 // 8. Reactda inline style qanday yoziladi. misol qilib, bitta div oching va shu divga width 400 px, background color esa aqua rangini bering.
// 8-<div style={{width: '400px', backgroundColor: 'aqua'}}>

// 9. props nima ?
// 9-Props orqali reactda Parent elementdan child elementga (componentlar aro) malumot yuborish mexanizm

// 10. useState hookining vazifasi ?
// 10-UseState hooki react componentlarida state(holat) yaratish va uni qiymatini yangilash (render) uchun ishlatiladi. U boshlangich qiymatni olib va holatni ozgartirish uchun funksiya qaytaradi

// 11. useRef hooki haqida malumot bering.
// 11-UseRef hooki componentlarda qiymatni saqlash uchun ishlatiladi va useState dan farqi bu qayta render qilib bermaydi

// 12. useEffect hooki haqida malumot bering.
// 12-

// 13. JavaScriptda setTimeout va setInterval qanday ishlaydi? Ularning farqlarini tushuntiring va kod misoli keltiring.
// 13-SetTimeout(() => {	
// },vaqt dan song ishga tushadi func)
// SetInterval(()=> {
	// },vaqt oraligida func qayta-qayta ishga tushadi)

	// 14. Promise qanday ishlaydi?
	// 14-Promise bu asinsxron operatsiyalarni boshqarish uchun ishlatiladigon object bo'lib u 3 holatga ega:
	// pending(kutish holati),fulfilled(jarayon muofaqatli bajarilgan),rejected(hatolik jarayonda) va
	// bu larni tutib olish uchun then(jarayon muofaqatli bajarilgan bolsa),catch(hatolikni olish uchun) va finally(jarayon tugashi)

	// 15. Array.filter(), Array.map(), va Array.forEach() metodlarining farqlarini tushuntiring.
	// Array.filter()-massivdagi har bir elementni shartga qarab filtirlash va faqat kerakligini olish uchun
	// Array.map()-massivdagi har bir elementga funksiya qollash va yangi massiv olish return orqali
	// Array.forEach()-bu ham map ga oxshab elementga funksiya qollaydi lekin bu yangi array emas eski array boylab va bu return qaytarmaydi va shuning uchun reactda unchalik foydalik emas (render cycle) da muammo tug'diradi







