//your code here
const pics = document.querySelectorAll("img");
const selectedX = []
const selectedDog = []
pics.forEach((pic) =>{
	pic.addEventListener("click", () =>{
		if(pic.classList[1] == "selected"){
			if(pic.id == "x"){
				selectedX.pop();
			}
			if(pic.id == "dog"){
				selectedDog.pop();
			}
			pic.classList.remove("selected");
		}else{
			pic.classList.add("selected");
			if(pic.id == "x"){
				selectedX.push(pic.id)
			}else if(pic.id == "dog"){
				selectedDog.push(pic.id)
			}
		}
	})
})