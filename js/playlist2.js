// get the cursor
const cursor = document.getElementById("customCursor");

// track the cursor's position and follow it
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
}); 
