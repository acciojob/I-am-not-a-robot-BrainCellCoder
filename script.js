//your code here
const pics = document.querySelectorAll("img")
const msg = document.querySelector("p")
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
			pic.classList.add("selected")
			if(pic.id == "x"){
				selectedX.push(pic.id)
			}else if(pic.id == "dog"){
				selectedDog.push(pic.id)
			}
		}
	const selectedDogLength = selectedDog.length;
	const selectedXLength = selectedX.length;
		const totalLength = selectedDog.length + selectedX.length;
	const resetBtn = document.querySelector("#reset")
	const verifyBtn = document.querySelector("#verify")
	if(selectedDogLength ==1 || selectedXLength==1 ){
		// resetBtn.removeAttribute('id');
		resetBtn.classList.remove("hide");
	}if(selectedDogLength >1 || selectedXLength>1){
		// verifyBtn.removeAttribute('id');
		verifyBtn.classList.remove("hide");
	}if(totalLength == 1){
		verifyBtn.classList.add("hide");
	}if(totalLength == 0){
		resetBtn.classList.add("hide");
	}
	});
})

const resetBtn = document.querySelector("#reset")
const verifyBtn = document.querySelector("#verify")

resetBtn.addEventListener("click", () =>{
	selectedDog.length=0
	selectedX.length=0
	pics.forEach((pic) =>{
		pic.classList.remove("selected");
	})
	resetBtn.classList.add("hide");
	verifyBtn.classList.add("hide");
	msg.innerText=""
})

verifyBtn.addEventListener("click", () =>{
	if(selectedX.length == 0 && selectedDog.length == 2){
		msg.innerText = "You are a human. Congratulations!"
	}else{
		msg.innerText = "We can't verify you as a human. You selected the non-identical tiles."
	}
	verifyBtn.classList.add("hide");
})