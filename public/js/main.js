// (function ($) {
//     "use strict";

//     // Spinner
//     let spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner();
    
    
//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });


//     // Sidebar Toggler
//     $('.sidebar-toggler').click(function () {
//         $('.sidebar, .content').toggleClass("open");
//         return false;
//     });


//     // Progress Bar
//     $('.pg-bar').waypoint(function () {
//         $('.progress .progress-bar').each(function () {
//             $(this).css("width", $(this).attr("aria-valuenow") + '%');
//         });
//     }, {offset: '80%'});


//     // Calender
//     $('#calender').datetimepicker({
//         inline: true,
//         format: 'L'
//     });


//     // Testimonials carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1000,
//         items: 1,
//         dots: true,
//         loop: true,
//         nav : false
//     });


//     // Chart Global Color
//     Chart.defaults.color = "#6C7293";
//     Chart.defaults.borderColor = "#000000";


//     // Worldwide Sales Chart
//     let ctx1 = $("#worldwide-sales").get(0).getContext("2d");
//     let myChart1 = new Chart(ctx1, {
//         type: "bar",
//         data: {
//             labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//             datasets: [{
//                     label: "USA",
//                     data: [15, 30, 55, 65, 60, 80, 95],
//                     backgroundColor: "rgba(235, 22, 22, .7)"
//                 },
//                 {
//                     label: "UK",
//                     data: [8, 35, 40, 60, 70, 55, 75],
//                     backgroundColor: "rgba(235, 22, 22, .5)"
//                 },
//                 {
//                     label: "AU",
//                     data: [12, 25, 45, 55, 65, 70, 60],
//                     backgroundColor: "rgba(235, 22, 22, .3)"
//                 }
//             ]
//             },
//         options: {
//             responsive: true
//         }
//     });


//     // Salse & Revenue Chart
//     let ctx2 = $("#salse-revenue").get(0).getContext("2d");
//     let myChart2 = new Chart(ctx2, {
//         type: "line",
//         data: {
//             labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
//             datasets: [{
//                     label: "Salse",
//                     data: [15, 30, 55, 45, 70, 65, 85],
//                     backgroundColor: "rgba(235, 22, 22, .7)",
//                     fill: true
//                 },
//                 {
//                     label: "Revenue",
//                     data: [99, 135, 170, 130, 190, 180, 270],
//                     backgroundColor: "rgba(235, 22, 22, .5)",
//                     fill: true
//                 }
//             ]
//             },
//         options: {
//             responsive: true
//         }
//     });
    


//     // Single Line Chart
//     let ctx3 = $("#line-chart").get(0).getContext("2d");
//     let myChart3 = new Chart(ctx3, {
//         type: "line",
//         data: {
//             labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
//             datasets: [{
//                 label: "Salse",
//                 fill: false,
//                 backgroundColor: "rgba(235, 22, 22, .7)",
//                 data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
//             }]
//         },
//         options: {
//             responsive: true
//         }
//     });


//     // Single Bar Chart
//     let ctx4 = $("#bar-chart").get(0).getContext("2d");
//     let myChart4 = new Chart(ctx4, {
//         type: "bar",
//         data: {
//             labels: ["Italy", "France", "Spain", "USA", "Argentina"],
//             datasets: [{
//                 backgroundColor: [
//                     "rgba(235, 22, 22, .7)",
//                     "rgba(235, 22, 22, .6)",
//                     "rgba(235, 22, 22, .5)",
//                     "rgba(235, 22, 22, .4)",
//                     "rgba(235, 22, 22, .3)"
//                 ],
//                 data: [55, 49, 44, 24, 15]
//             }]
//         },
//         options: {
//             responsive: true
//         }
//     });


//     // Pie Chart
//     let ctx5 = $("#pie-chart").get(0).getContext("2d");
//     let myChart5 = new Chart(ctx5, {
//         type: "pie",
//         data: {
//             labels: ["Italy", "France", "Spain", "USA", "Argentina"],
//             datasets: [{
//                 backgroundColor: [
//                     "rgba(235, 22, 22, .7)",
//                     "rgba(235, 22, 22, .6)",
//                     "rgba(235, 22, 22, .5)",
//                     "rgba(235, 22, 22, .4)",
//                     "rgba(235, 22, 22, .3)"
//                 ],
//                 data: [55, 49, 44, 24, 15]
//             }]
//         },
//         options: {
//             responsive: true
//         }
//     });


//     // Doughnut Chart
//     let ctx6 = $("#doughnut-chart").get(0).getContext("2d");
//     let myChart6 = new Chart(ctx6, {
//         type: "doughnut",
//         data: {
//             labels: ["Italy", "France", "Spain", "USA", "Argentina"],
//             datasets: [{
//                 backgroundColor: [
//                     "rgba(235, 22, 22, .7)",
//                     "rgba(235, 22, 22, .6)",
//                     "rgba(235, 22, 22, .5)",
//                     "rgba(235, 22, 22, .4)",
//                     "rgba(235, 22, 22, .3)"
//                 ],
//                 data: [55, 49, 44, 24, 15]
//             }]
//         },
//         options: {
//             responsive: true
//         }
//     });
    
// })(jQuery);

// ตั้งแต่ตรงนี้คือฟังก์ชั่นที่สร้างขึ้นมาเอง

// function openEditModal(productId) {
//     $('#editModal').modal('show');

//     $('#editModal').on('hidden.bs.modal', function () {
//         $('#editModal input[type="text"]').val('');
//         $('#editModal input[type="number"]').val('');
//     });
// }

// function openDeleteModal(productId) {
//     $('#deleteModal').modal('show');

//     $('#deleteModal').on('hidden.bs.modal', function () {
//         $('#deleteModal input[type="text"]').val('');
//         $('#deleteModal input[type="number"]').val('');
//     });
// }

// function openEditModal2() {
//     $('#editModal2').modal('show');

//     $('#editModal2').on('hidden.bs.modal', function () {
//         $('#editModal2 input[type="text"]').val('');
//         $('#editModal2 input[type="number"]').val('');
//     });
// }

// function openDeleteModal2() {
//     $('#deleteModal2').modal('show');

//     $('#deleteModal2').on('hidden.bs.modal', function () {
//         $('#deleteModal2 input[type="text"]').val('');
//         $('#deleteModal2 input[type="number"]').val('');
//     });
// }

// function openEditModal3() {
//     $('#editModal3').modal('show');

//     $('#editModal3').on('hidden.bs.modal', function () {
//         $('#editModal3 input[type="text"]').val('');
//         $('#editModal3 input[type="number"]').val('');
//     });
// }

// function openDeleteModal3() {
//     $('#deleteModal3').modal('show');

//     $('#deleteModal3').on('hidden.bs.modal', function () {
//         $('#deleteModal3 input[type="text"]').val('');
//         $('#deleteModal3 input[type="number"]').val('');
//     });
// }

// function openEditModal4() {
//     $('#editModal4').modal('show');

//     $('#editModal4').on('hidden.bs.modal', function () {
//         $('#editModal4 input[type="text"]').val('');
//         $('#editModal4 input[type="number"]').val('');
//     });
// }

// function openDeleteModal4() {
//     $('#deleteModal4').modal('show');

//     $('#deleteModal4').on('hidden.bs.modal', function () {
//         $('#deleteModal4 input[type="text"]').val('');
//         $('#deleteModal4 input[type="number"]').val('');
//     });
// }

// function openEditModal5() {
//     $('#editModal5').modal('show');

//     $('#editModal5').on('hidden.bs.modal', function () {
//         $('#editModal5 input[type="text"]').val('');
//         $('#editModal5 input[type="number"]').val('');
//     });
// }

// function openDeleteModal5() {
//     $('#deleteModal5').modal('show');

//     $('#deleteModal5').on('hidden.bs.modal', function () {
//         $('#deleteModal5 input[type="text"]').val('');
//         $('#deleteModal5 input[type="number"]').val('');
//     });
// }

// function openEditModal6() {
//     $('#editModal6').modal('show');

//     $('#editModal6').on('hidden.bs.modal', function () {
//         $('#editModal6 input[type="text"]').val('');
//         $('#editModal6 input[type="number"]').val('');
//     });
// }

// function openDeleteModal6() {
//     $('#deleteModal6').modal('show');

//     $('#deleteModal6').on('hidden.bs.modal', function () {
//         $('#deleteModal6 input[type="text"]').val('');
//         $('#deleteModal6 input[type="number"]').val('');
//     });
// }

// function openEditModal7() {
//     $('#editModal7').modal('show');

//     $('#editModal7').on('hidden.bs.modal', function () {
//         $('#editModal7 input[type="text"]').val('');
//         $('#editModal7 input[type="number"]').val('');
//     });
// }

// function openDeleteModal7() {
//     $('#deleteModal7').modal('show');

//     $('#deleteModal7').on('hidden.bs.modal', function () {
//         $('#deleteModal7 input[type="text"]').val('');
//         $('#deleteModal7 input[type="number"]').val('');
//     });
// }

// function openEditModal8() {
//     $('#editModal8').modal('show');

//     $('#editModal8').on('hidden.bs.modal', function () {
//         $('#editModal8 input[type="text"]').val('');
//         $('#editModal8 input[type="number"]').val('');
//     });
// }

// function confirmEdit() {
//     // ดึงข้อมูลที่แก้ไขจาก Popup
//     let updatedStockValue1 = parseInt($('#editModal input[type="number"]').eq(0).val()) || 0;
//     let updatedStockValue2 = parseInt($('#editModal input[type="number"]').eq(1).val()) || 0;

//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH100').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH101').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH102').text()) || 0;

//     // บวกกับจำนวนที่แก้ไขแล้ว
//     let newStockValueTD = currentStockValueTD + updatedStockValue1 + updatedStockValue2;
//     let newBRValue1 = currentBRValue1 + updatedStockValue1;
//     let newBRValue2 = currentBRValue2 + updatedStockValue2;

//     // อัปเดตข้อมูลที่ถูกแก้ไข
//     $('#span_SH100').text(newStockValueTD);
//     $('#span_SH101').text(newBRValue1);
//     $('#span_SH102').text(newBRValue2);

//     // ปิด Popup
//     $('#editModal').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("updatedStockValue1:", updatedStockValue1);
//     console.log("updatedStockValue2:", updatedStockValue2);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
// }

// function confirmDelete() {
//     // ดึงข้อมูลที่ลบจาก Popup
//     let deletedStockValue1 = parseInt($('#deleteModal input[type="number"]').eq(0).val()) || 0;
//     let deletedStockValue2 = parseInt($('#deleteModal input[type="number"]').eq(1).val()) || 0;
    
//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH100').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH101').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH102').text()) || 0;
    
//     // ลบกับจำนวนที่ลบแล้ว
//     let newStockValueTD = Math.max(currentStockValueTD - deletedStockValue1 - deletedStockValue2, 0);
//     let newBRValue1 = Math.max(currentBRValue1 - deletedStockValue1, 0);
//     let newBRValue2 = Math.max(currentBRValue2 - deletedStockValue2, 0);
    
//     // อัปเดตข้อมูลที่ถูกลบ
//     $('#span_SH100').text(newStockValueTD);
//     $('#span_SH101').text(newBRValue1);
//     $('#span_SH102').text(newBRValue2);

//     // ปิด Popup หลังจากดำเนินการแล้ว
//     $('#deleteModal').modal('hide');
    
//     console.log("การลบสต็อก");
//     console.log("deletedStockValue1:", deletedStockValue1);
//     console.log("deletedStockValue2:", deletedStockValue2);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
// }

// function confirmEdit2() {
//     // ดึงข้อมูลที่แก้ไขจาก Popup
//     let updatedStockValue1 = parseInt($('#editModal5 input[type="number"]').eq(0).val()) || 0;
//     let updatedStockValue2 = parseInt($('#editModal5 input[type="number"]').eq(1).val()) || 0;

//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH110').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH111').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH112').text()) || 0;

//     // บวกกับจำนวนที่แก้ไขแล้ว
//     let newStockValueTD =currentStockValueTD + updatedStockValue1 + updatedStockValue2;
//     let newBRValue1 =currentBRValue1 + updatedStockValue1;
//     let newBRValue2 =currentBRValue2 + updatedStockValue2;

//     // อัปเดตข้อมูลที่ถูกแก้ไข
//     $('#span_SH110').text(newStockValueTD);
//     $('#span_SH111').text(newBRValue1);
//     $('#span_SH112').text(newBRValue2);

//     // ปิด Popup
//     $('#editModal5').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("updatedStockValue1:", updatedStockValue2);
//     console.log("updatedStockValue2:", updatedStockValue2);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue2:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
// }

// function confirmDelete2() {
//     // ดึงข้อมูลที่ลบจาก Popup
//     let deletedStockValue1 = parseInt($('#deleteModal5 input[type="number"]').eq(0).val()) || 0;
//     let deletedStockValue2 = parseInt($('#deleteModal5 input[type="number"]').eq(1).val()) || 0;
    
//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH110').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH111').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH112').text()) || 0;
    
//     // ลบกับจำนวนที่ลบแล้ว
//     let newStockValueTD = Math.max(currentStockValueTD - deletedStockValue1 - deletedStockValue2, 0);
//     let newBRValue1 = Math.max(currentBRValue1 - deletedStockValue1, 0);
//     let newBRValue2 = Math.max(currentBRValue2 - deletedStockValue2, 0);
    
//     // อัปเดตข้อมูลที่ถูกลบ
//     $('#span_SH110').text(newStockValueTD);
//     $('#span_SH111').text(newBRValue1);
//     $('#span_SH112').text(newBRValue2);

//     // ปิด Popup หลังจากดำเนินการแล้ว
//     $('#deleteModal5').modal('hide');
    
//     console.log("การลบสต็อก");
//     console.log("deletedStockValue1:", deletedStockValue1);
//     console.log("deletedStockValue2:", deletedStockValue2);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
// }

// function confirmEdit3() {
//     // ดึงข้อมูลที่แก้ไขจาก Popup
//     let updatedStockValue1 = parseInt($('#editModal2 input[type="text"]').eq(0).val()) || 0;
//     let updatedStockValue2 = parseInt($('#editModal2 input[type="text"]').eq(1).val()) || 0;
//     let updatedStockValue3 = parseInt($('#editModal2 input[type="text"]').eq(2).val()) || 0;
//     let updatedStockValue4 = parseInt($('#editModal2 input[type="text"]').eq(3).val()) || 0;

//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH120').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH121').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH122').text()) || 0;
//     let currentBRValue3 = parseInt($('#span_SH123').text()) || 0;
//     let currentBRValue4 = parseInt($('#span_SH124').text()) || 0;

//     // บวกกับจำนวนที่แก้ไขแล้ว
//     let newStockValueTD = currentStockValueTD + updatedStockValue1 + updatedStockValue2 + updatedStockValue3 + updatedStockValue4;
//     let newBRValue1 = currentBRValue1 + updatedStockValue1;
//     let newBRValue2 = currentBRValue2 + updatedStockValue2;
//     let newBRValue3 = currentBRValue3 + updatedStockValue3;
//     let newBRValue4 = currentBRValue4 + updatedStockValue4;

//     // อัปเดตข้อมูลที่ถูกแก้ไข
//     $('#span_SH120').text(newStockValueTD);
//     $('#span_SH121').text(newBRValue1);
//     $('#span_SH122').text(newBRValue2);
//     $('#span_SH123').text(newBRValue3);
//     $('#span_SH124').text(newBRValue4);

//     // ปิด Popup
//     $('#editModal2').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("updatedStockValue1:", updatedStockValue1);
//     console.log("updatedStockValue2:", updatedStockValue2);
//     console.log("updatedStockValue3:", updatedStockValue3);
//     console.log("updatedStockValue4:", updatedStockValue4);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
//     console.log("newBRValue3:", newBRValue3);
//     console.log("newBRValue4:", newBRValue4);
// }

// function confirmDelete3() {
//     // ดึงข้อมูลที่ลบจาก Popup
//     let deletedStockValue1 = parseInt($('#deleteModal2 input[type="text"]').eq(0).val()) || 0;
//     let deletedStockValue2 = parseInt($('#deleteModal2 input[type="text"]').eq(1).val()) || 0;
//     let deletedStockValue3 = parseInt($('#deleteModal2 input[type="text"]').eq(2).val()) || 0;
//     let deletedStockValue4 = parseInt($('#deleteModal2 input[type="text"]').eq(3).val()) || 0;

//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH120').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH121').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH122').text()) || 0;
//     let currentBRValue3 = parseInt($('#span_SH123').text()) || 0;
//     let currentBRValue4 = parseInt($('#span_SH124').text()) || 0;
    
//     // ลบกับจำนวนที่ลบแล้ว
//     let newStockValueTD = currentStockValueTD - deletedStockValue1 - deletedStockValue2 - deletedStockValue3 - deletedStockValue4;
//     let newBRValue1 = currentBRValue1 - deletedStockValue1;
//     let newBRValue2 = currentBRValue2 - deletedStockValue2;
//     let newBRValue3 = currentBRValue3 - deletedStockValue3;
//     let newBRValue4 = currentBRValue4 - deletedStockValue4;

//     // อัปเดตข้อมูลที่ถูกแก้ไข
//     $('#span_SH120').text(newStockValueTD);
//     $('#span_SH121').text(newBRValue1);
//     $('#span_SH122').text(newBRValue2);
//     $('#span_SH123').text(newBRValue3);
//     $('#span_SH124').text(newBRValue4);

//     // นำรหัสการลบมาดำเนินการต่อ
//     console.log("การลดสต็อก");
//     // ปิด Popup หลังจากดำเนินการแล้ว
//     $('#deleteModal2').modal('hide');

//     console.log("การลบสต็อก");
//     console.log("deletedStockValue1:", deletedStockValue1);
//     console.log("deletedStockValue2:", deletedStockValue2);
//     console.log("deletedStockValue3:", deletedStockValue3);
//     console.log("deletedStockValue4:", deletedStockValue4);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
//     console.log("newBRValue3:", newBRValue3);
//     console.log("newBRValue4:", newBRValue4);
// }

// function confirmEdit4() {
//     // ดึงข้อมูลที่แก้ไขจาก Popup
//     let updatedStockValue1 = parseInt($('#editModal3 input[type="text"]').eq(0).val()) || 0; 
//     let updatedStockValue2 = parseInt($('#editModal3 input[type="text"]').eq(1).val()) || 0; 
//     let updatedStockValue3 = parseInt($('#editModal3 input[type="text"]').eq(2).val()) || 0; 
//     let updatedStockValue4 = parseInt($('#editModal3 input[type="text"]').eq(3).val()) || 0; 
//     let updatedStockValue5 = parseInt($('#editModal3 input[type="text"]').eq(4).val()) || 0; 
//     let updatedStockValue6 = parseInt($('#editModal3 input[type="text"]').eq(5).val()) || 0; 

//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH130').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH131').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH132').text()) || 0;
//     let currentBRValue3 = parseInt($('#span_SH133').text()) || 0;
//     let currentBRValue4 = parseInt($('#span_SH134').text()) || 0;
//     let currentBRValue5 = parseInt($('#span_SH135').text()) || 0;
//     let currentBRValue6 = parseInt($('#span_SH136').text()) || 0;

//     // บวกกับจำนวนที่แก้ไขแล้ว
//     let newStockValueTD = currentStockValueTD + updatedStockValue1 + updatedStockValue2 + updatedStockValue3 + updatedStockValue4 + updatedStockValue5 + updatedStockValue6;
//     let newBRValue1 = currentBRValue1 + updatedStockValue1;
//     let newBRValue2 = currentBRValue2 + updatedStockValue2;
//     let newBRValue3 = currentBRValue3 + updatedStockValue3;
//     let newBRValue4 = currentBRValue4 + updatedStockValue4;
//     let newBRValue5 = currentBRValue5 + updatedStockValue5;
//     let newBRValue6 = currentBRValue6 + updatedStockValue6;

//     // อัปเดตข้อมูลที่ถูกแก้ไข
//     $('#span_SH130').text(newStockValueTD);
//     $('#span_SH131').text(newBRValue1);
//     $('#span_SH132').text(newBRValue2);
//     $('#span_SH133').text(newBRValue3);
//     $('#span_SH134').text(newBRValue4);
//     $('#span_SH135').text(newBRValue5);
//     $('#span_SH136').text(newBRValue6);

//     // ปิด Popup
//     $('#editModal3').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("updatedStockValue1:", updatedStockValue1);
//     console.log("updatedStockValue2:", updatedStockValue2);
//     console.log("updatedStockValue3:", updatedStockValue3);
//     console.log("updatedStockValue4:", updatedStockValue4);
//     console.log("updatedStockValue5:", updatedStockValue5);
//     console.log("updatedStockValue5:", updatedStockValue5);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
//     console.log("newBRValue3:", newBRValue3);
//     console.log("newBRValue4:", newBRValue4);
//     console.log("newBRValue5:", newBRValue5);
//     console.log("newBRValue6:", newBRValue6);
// }

// function confirmDelete4() {
//     // ดึงข้อมูลที่ลบจาก Popup
//     let deletedStockValue1 = parseInt($('#deleteModal3 input[type="text"]').eq(0).val()) || 0;
//     let deletedStockValue2 = parseInt($('#deleteModal3 input[type="text"]').eq(1).val()) || 0;
//     let deletedStockValue3 = parseInt($('#deleteModal3 input[type="text"]').eq(2).val()) || 0;
//     let deletedStockValue4 = parseInt($('#deleteModal3 input[type="text"]').eq(3).val()) || 0;
//     let deletedStockValue5 = parseInt($('#deleteModal3 input[type="text"]').eq(4).val()) || 0;
//     let deletedStockValue6 = parseInt($('#deleteModal3 input[type="text"]').eq(5).val()) || 0;

//     // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
//     let currentStockValueTD = parseInt($('#span_SH130').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH131').text()) || 0;
//     let currentBRValue2 = parseInt($('#span_SH132').text()) || 0;
//     let currentBRValue3 = parseInt($('#span_SH133').text()) || 0;
//     let currentBRValue4 = parseInt($('#span_SH134').text()) || 0;
//     let currentBRValue5 = parseInt($('#span_SH135').text()) || 0;
//     let currentBRValue6 = parseInt($('#span_SH136').text()) || 0;

//     // ลบกับจำนวนที่ลบแล้ว
//     let newStockValueTD = currentStockValueTD - deletedStockValue1 - deletedStockValue2 - deletedStockValue3 - deletedStockValue4 - deletedStockValue5 - deletedStockValue6;
//     let newBRValue1 = currentBRValue1 - deletedStockValue1;
//     let newBRValue2 = currentBRValue2 - deletedStockValue2;
//     let newBRValue3 = currentBRValue3 - deletedStockValue3;
//     let newBRValue4 = currentBRValue4 - deletedStockValue4;
//     let newBRValue5 = currentBRValue5 - deletedStockValue5;
//     let newBRValue6 = currentBRValue6 - deletedStockValue6;

//     // อัปเดตข้อมูลที่ถูกแก้ไข
//     $('#span_SH130').text(newStockValueTD);
//     $('#span_SH131').text(newBRValue1);
//     $('#span_SH132').text(newBRValue2);
//     $('#span_SH133').text(newBRValue3);
//     $('#span_SH134').text(newBRValue4);
//     $('#span_SH135').text(newBRValue5);
//     $('#span_SH136').text(newBRValue6);

//     // นำรหัสการลบมาดำเนินการต่อ
//     console.log("การลดสต็อก");
//     // ปิด Popup หลังจากดำเนินการแล้ว
//     $('#deleteModal3').modal('hide');

//     console.log("การลบสต็อก");
//     console.log("deletedStockValue1:", deletedStockValue1);
//     console.log("deletedStockValue2:", deletedStockValue2);
//     console.log("deletedStockValue3:", deletedStockValue3);
//     console.log("deletedStockValue4:", deletedStockValue4);
//     console.log("deletedStockValue5:", deletedStockValue5);
//     console.log("deletedStockValue6:", deletedStockValue6);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
//     console.log("newBRValue2:", newBRValue2);
//     console.log("newBRValue3:", newBRValue3);
//     console.log("newBRValue4:", newBRValue4);
//     console.log("newBRValue5:", newBRValue5);
//     console.log("newBRValue6:", newBRValue6);
// }

// function confirmEdit5() {
//     let updatedStockValue1 = parseInt($('#editModal4 input[type="text"]').eq(0).val()) || 0;
    
//     let currentStockValueTD = parseInt($('#span_SH140').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH141').text()) || 0;
    
//     let newStockValueTD = currentStockValueTD + updatedStockValue1;
//     let newBRValue1 = currentBRValue1 + updatedStockValue1;
    
//     $('#span_SH140').text(newStockValueTD);
//     $('#span_SH141').text(newBRValue1);

//     // ปิด Popup
//     $('#editModal4').modal('hide');
    
//     console.log("การแก้ไขสต็อก");
//     console.log("updatedStockValue1:", updatedStockValue1);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
// }

// function confirmDelete5() {
//     let deletedStockValue1 = parseInt($('#deleteModal4 input[type="text"]').eq(0).val()) || 0;

//     let currentStockValueTD = parseInt($('#span_SH140').text()) || 0;
//     let currentBRValue1 = parseInt($('#span_SH141').text()) || 0;

//     let newStockValueTD = currentStockValueTD - deletedStockValue1;
//     let newBRValue1 = currentBRValue1 - deletedStockValue1;

//     $('#span_SH140').text(newStockValueTD);
//     $('#span_SH141').text(newBRValue1);

//     // นำรหัสการลบมาดำเนินการต่อ
//     console.log("การลดสต็อก");
//     // ปิด Popup หลังจากดำเนินการแล้ว
//     $('#deleteModal4').modal('hide');

//     console.log("การลบสต็อก");
//     console.log("deletedStockValue1:", deletedStockValue1);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
// }

// function confirmEdit6() {
//     let updatedStockValue1 = parseInt($('#editModal6 input[type="number"]').eq(0).val()) || 0;

//     let currentStockValueTD = parseInt($('#h_SH101').text()) || 0;
//     let currentBRValue1 = parseInt($('#SH101').text()) || 0;

//     let newStockValueTD = currentStockValueTD + updatedStockValue1;
//     let newBRValue1 = currentBRValue1 + updatedStockValue1;

//     $('#h_SH101').text(newStockValueTD);
//     $('#SH101').text(newBRValue1);

//     // ปิด Popup
//     $('#editModal6').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("updatedStockValue1:", updatedStockValue1);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
// }

// function confirmDelete6() {
//     let deletedStockValue1 = parseInt($('#deleteModal6 input[type="number"]').eq(0).val()) || 0;

//     let currentStockValueTD = parseInt($('#h_SH101').text()) || 0;
//     let currentBRValue1 = parseInt($('#SH101').text()) || 0;

//     let newStockValueTD = Math.max(currentStockValueTD - deletedStockValue1, 0);
//     let newBRValue1 = Math.max(currentBRValue1 - deletedStockValue1, 0);

//     $('#h_SH101').text(newStockValueTD);
//     $('#SH101').text(newBRValue1);

//     // ปิด Popup
//     $('#deleteModal6').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("deleteStockValue1:", deleteStockValue1);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
// }

// function confirmEdit7() {
//     let updatedStockValue1 = parseInt($('#editModal7 input[type="number"]').eq(0).val()) || 0;

//     let currentStockValueTD = parseInt($('#h_SH102').text()) || 0;
//     let currentBRValue1 = parseInt($('#SH102').text()) || 0;

//     let newStockValueTD = currentStockValueTD + updatedStockValue1;
//     let newBRValue1 = currentBRValue1 + updatedStockValue1;

//     $('#h_SH102').text(newStockValueTD);
//     $('#SH102').text(newBRValue1);

//     // ปิด Popup
//     $('#editModal7').modal('hide');
//     $('#deleteModal7').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("updatedStockValue1:", updatedStockValue1);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
// }

// function confirmDelete7() {
//     let deletedStockValue1 = parseInt($('#deleteModal7 input[type="number"]').eq(0).val()) || 0;

//     let currentStockValueTD = parseInt($('#h_SH102').text()) || 0;
//     let currentBRValue1 = parseInt($('#SH102').text()) || 0;

//     let newStockValueTD = currentStockValueTD - deletedStockValue1;
//     let newBRValue1 = Math.max(currentBRValue1 - deletedStockValue1, 0);

//     $('#h_SH102').text(newStockValueTD);
//     $('#SH102').text(newBRValue1);

//     // ปิด Popup
//     $('#editModal7').modal('hide');
//     $('#deleteModal7').modal('hide');

//     console.log("การแก้ไขสต็อก");
//     console.log("deleteStockValue1:", deleteStockValue1);
//     console.log("newStockValueTD:", newStockValueTD);
//     console.log("newBRValue1:", newBRValue1);
// }

// // signin for member
// function signinmember() {
//     let Email = document.getElementById('txtEmail').value;
//     let Password = document.getElementById("txtPassword").value;

//     if (Email.trim() === '' || Password.trim() === '') {
//         alert('กรุณากรอกข้อมูล');
//     } else if (Email === 'member' && Password === '0000') {
//         sessionStorage.setItem('stdNo', '65072713');
//         localStorage.setItem('stdName', 'Nawarat Patnantaporn');
//         window.location.href = 'member.html';
//     } else {
//         alert('กรุณากรอกข้อมูลให้ถูกต้อง');
//     }
// }



// // signup for member
// function signup() {
//     let Username = document.getElementById('txtUsername').value;
//     let Email = document.getElementById('txtEmail').value;
//     let Password = document.getElementById("txtPassword").value;

//     if (Username.trim() === '' || Email.trim() === '' || Password.trim() === '') {
//         alert('กรุณากรอกข้อมูล');
//     } else if (Username === 'member' && Email === 'member@gmail.com' && Password === '0000') {
//         localStorage.setItem('stdName', 'member');
//         localStorage.setItem('stdEmail', 'member@gmail.com');
//         localStorage.setItem('stdNo', '65072713');
//         window.location.href = 'index.html';
//     } else {
//         alert('กรุณากรอกข้อมูลให้ถูกต้อง');
//     }
// }

// // signin for admin
// function signin() {
//     let Password = document.getElementById("txtPassword").value;

//     if (Password.trim() === '') {
//         alert('กรุณากรอกข้อมูล');
//     } else if (Password === '0000') {
//         sessionStorage.setItem('stdNo', '65072713');
//         localStorage.setItem('stdName', 'แมว เมี๊ยว');
//         window.location.href = 'dashboard.html';
//     } else {
//         alert('กรุณากรอกข้อมูลให้ถูกต้อง');
//     }
// }

// //  ForgotPass Back To Signin
// function backtoSignin() {
//     window.location.href = "index.html";
// }

// // showHidden Box
// function showHiddenBox() {

//     let hiddenBox = document.getElementById('hiddenBox');
//     let Pass = document.getElementById("txtPass").value;

//     if (Pass.trim() === ''){
//         alert('โปรดกรอกรหัสพัสดุ');
//     } else if (Pass === 'SH-0123' || Pass === 'sh-0123'){
//         hiddenBox.style.display = 'block';
//     } else {
//         alert('โปรดกรอกรหัสพัสดุให้ถูกต้อง')
//     }
// }

// // calculateProfitRate
// function calculateProfitRate() {
//     // ดึงค่าจาก id ly และ id ly2
//     var lyValue = parseFloat(document.getElementById('ly').innerText.replace(',', '').replace(' &#3647;', ''));
//     var ly2Value = parseFloat(document.getElementById('ly2').innerText.replace(',', '').replace(' &#3647;', ''));
//     var ly3Value = parseFloat(document.getElementById('ly3').innerText.replace(',', '').replace(' &#3647;', ''));
//     var ly4Value = parseFloat(document.getElementById('ly4').innerText.replace(',', '').replace(' &#3647;', ''));
//     var ly5Value = parseFloat(document.getElementById('ly5').innerText.replace(',', '').replace(' &#3647;', ''));
//     var ly6Value = parseFloat(document.getElementById('ly6').innerText.replace(',', '').replace(' &#3647;', ''));
//     var ly7Value = parseFloat(document.getElementById('ly7').innerText.replace(',', '').replace(' &#3647;', ''));
//     var ly8Value = parseFloat(document.getElementById('ly8').innerText.replace(',', '').replace(' &#3647;', ''));
    
//     // คำนวณอัตรากำไรเป็นเปอร์เซ็นต์
//     var profitRate = ((ly2Value - lyValue) / lyValue) * 100;
//     var profitRate2 = ((ly3Value - ly2Value) / ly2Value) * 100;
//     var profitRate3 = ((ly4Value - ly3Value) / ly3Value) * 100;
//     var profitRate4 = ((ly5Value - ly4Value) / ly4Value) * 100;
//     var profitRate5 = ((ly6Value - ly5Value) / ly5Value) * 100;
//     var profitRate6 = ((ly7Value - ly6Value) / ly6Value) * 100;
//     var profitRate7 = ((ly8Value - ly7Value) / ly7Value) * 100;
    
//     var lyValueText = document.getElementById('ly').innerText;
//     var lyValueCleaned = parseFloat(lyValueText.replace(/,/g, '').replace(/ &#3647;/g, ''));

//     if (!isNaN(lyValueCleaned)) {
//         var profitRate8 = ((lyValueCleaned - 5000000) / 5000000) * 100;
//     } else {
//         console.error("Error: Invalid value for 'ly'");
//     }

//     // แสดงผลที่ id ty
//     document.getElementById('ty2').innerText = profitRate.toFixed(2) + '%';
//     document.getElementById('ty3').innerText = profitRate2.toFixed(2) + '%';
//     document.getElementById('ty4').innerText = profitRate3.toFixed(2) + '%';
//     document.getElementById('ty5').innerText = profitRate4.toFixed(2) + '%';
//     document.getElementById('ty6').innerText = profitRate5.toFixed(2) + '%';
//     document.getElementById('ty7').innerText = profitRate6.toFixed(2) + '%';
//     document.getElementById('ty8').innerText = profitRate7.toFixed(2) + '% (ปัจจุบัน)';
//     document.getElementById('ty9').innerText = profitRate8.toFixed(2) + '%';
// }

// // ลบข้อมูลพนักงาน
// function deleteRow(rowId) {
//     var row = document.getElementById(rowId);
//     row.parentNode.removeChild(row);
// }

// // เพิ่มพนักงาน
// function addEmployee() {
//     // สร้างแถวใหม่
//     var table = document.getElementById("employeeTable");
//     var newRow = table.insertRow(table.rows.length);

//     // สร้างตารางในแถวใหม่
//     var cells = [];
//     for (var i = 0; i < 7; i++) {
//         cells[i] = newRow.insertCell(i);
//         cells[i].style.color = 'white';
//     }

//     // กำหนดข้อมูลในตาราง
//     cells[0].innerHTML = '<a class="btn btn-sm btn-primary" href="#">จัดการ</a>';
//     cells[1].innerHTML = '65045285';
//     cells[2].innerHTML = 'ชินวัตร บุญสมยา';
//     cells[3].innerHTML = 'หัวหน้าคลัง';
//     cells[4].innerHTML = 'สรุปจำนวนสินค้าภายในคลัง';
//     cells[5].innerHTML = '085-xxx-xx38';
//     cells[6].innerHTML = '<a class="btn btn-sm btn-primary" href="">Detail</a>';
// }

// // function ตั้งแต่ตรงนี้ คือ ส่วนของ member

// // barcode
// function editValue() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH100').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue + 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH100').innerText = newValue;
// }

// function deleteValue() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH100').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue - 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH100').innerText = newValue;
// }

// function editValue2() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH110').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue + 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH110').innerText = newValue;
// }

// function deleteValue2() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH110').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue - 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH110').innerText = newValue;
// }

// function editValue3() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH120').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue + 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH120').innerText = newValue;
// }

// function deleteValue3() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH120').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue - 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH120').innerText = newValue;
// }

// function editValue4() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH130').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue + 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH130').innerText = newValue;
// }

// function deleteValue4() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH130').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue - 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH130').innerText = newValue;
// }

// function editValue5() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH140').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue + 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH140').innerText = newValue;
// }

// function deleteValue5() {
//     // ดึงค่าที่มีอยู่ในคอลัมน์ที่ต้องการเพิ่ม
//     var currentValue = parseInt(document.getElementById('SH140').innerText);

//     // เพิ่มค่าที่ดึงได้มาจากตาราง
//     var newValue = currentValue - 1;

//     // อัปเดตค่าในตาราง
//     document.getElementById('SH140').innerText = newValue;
// }

// // เปลี่ยนค่า id ที่หน้า morder
// function processOrder() {
//     // เก็บค่าใน localStorage
//     localStorage.setItem('SH101Status', 'รับออเดอร์แล้ว');
//     window.location.href = 'morder.html';
// }