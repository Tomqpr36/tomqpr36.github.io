const getBtn = document.getElementById("get-btn")
getBtn.addEventListener("click", function(){
fetch('https://apis.scrimba.com/bored/api/activity')
  .then(Response => Response.json())
  .then(data => {
    console.log(data)
    document.getElementById("activity").innerText = data.activity
    document.getElementById("participants").innerText = data.participants
    document.getElementById("type").innerText = data.type
    document.getElementById("price").innerText = data.price
  })
})