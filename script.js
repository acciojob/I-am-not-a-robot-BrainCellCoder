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
			pic.classList.add("selected");
			if(pic.id == "x"){
				selectedX.push(pic.id)
			}else if(pic.id == "dog"){
				selectedDog.push(pic.id)
			}
		}
	const selectedDogLength = selectedDog.length;
	const selectedXLength = selectedX.length;
		const totalLength = selectedDog.length + selectedX.length;
	const resetBtn = document.querySelector(".reset")
	const verifyBtn = document.querySelector(".verify")
	if(selectedDogLength ==1 || selectedXLength==1 ){
		resetBtn.removeAttribute('id');
	}if(selectedDogLength >1 || selectedXLength>1){
		verifyBtn.removeAttribute('id');
	}if(totalLength == 1){
		verifyBtn.id="verify"
	}if(totalLength == 0){
		resetBtn.id = "reset"
	}
	});
})

const resetBtn = document.querySelector(".reset")
const verifyBtn = document.querySelector(".verify")

resetBtn.addEventListener("click", () =>{
	selectedDog.length=0
	selectedX.length=0
	pics.forEach((pic) =>{
		pic.classList.remove("selected");
	})
	resetBtn.id="btn"
	verifyBtn.id="btn"
	msg.innerText=""
})

verifyBtn.addEventListener("click", () =>{
	if(selectedX.length == 0 && selectedDog.length == 2){
		msg.innerText = "You are a human. Congratulations!"
	}else{
		msg.innerText = "We can't verify you as a human. You selected the non-identical tiles."
	}
})