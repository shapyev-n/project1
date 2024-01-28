var modal = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let in_chat = document.querySelector(".in_chat");
// let close_ = document.querySelector(".close_");
// close_.addEventListener("click", () => {
//   in_chat.style.display = "flex";
// });

let close_ = document.querySelector(".close_");
close_.addEventListener("click", () => {
  in_chat.style.display = "none";
});
