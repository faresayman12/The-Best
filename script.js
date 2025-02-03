// حفظ مكان التمرير السابق
let prevScrollpos = window.pageYOffset; 

// استرجاع العنصر الذي يمثل الـ navbar
let navbar = document.getElementById("navbar"); 

// تحديد حدث التمرير (scroll)
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset; // الحصول على مكان التمرير الحالي

    // التحقق إذا كان التمرير للأسفل أو للأعلى
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0"; // إظهار الـ navbar عند التمرير للأعلى
    } else {
        navbar.style.top = "-80px"; // إخفاء الـ navbar عند التمرير للأسفل
    }
    prevScrollpos = currentScrollPos; // تحديث مكان التمرير السابق
}
