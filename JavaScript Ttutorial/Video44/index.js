console.log("This JS is for Drag and Drop");

const imgBox = document.querySelector(".imgBox");
const khakhiBoxes = document.getElementsByClassName("khakhiBox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart has been Triggered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("DragEnd has been Triggered");
  e.target.className = "imgBox";
});

for (khakhiBox of khakhiBoxes) {
  //1
  khakhiBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("DragOver has been Triggered");
  });

  //2
  khakhiBox.addEventListener("dragenter", () => {
    console.log("DragEnter has been Triggered");
  });

  //3
  khakhiBox.addEventListener("dragleave", () => {
    console.log("DragLeave has been Triggered");
  });

  //4
  khakhiBox.addEventListener("drop", (e) => {
    console.log("Drop has been Triggered");
    e.target.append(imgBox);
  });
}
