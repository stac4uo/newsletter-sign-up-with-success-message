console.log("siema ");
const email = document.querySelector("input");
const form = document.querySelector("form");
const btn1 = document.querySelector("button[name=btn1]");
const btn2 = document.querySelector("button[name=btn2]");
const success = document.querySelector("[name=success");
const main = document.querySelector("main");
const error = document.querySelector("h4");
const imgMobile = document.querySelector("img[name=imgMobile");

btn2.addEventListener("click", () => {
	main.classList.toggle("hidden");
	success.classList.toggle("hidden");
	email.value = "";
	location.reload();
});

form.setAttribute("novalidate", true);

form.addEventListener("submit", e => {
	e.preventDefault();

	const reg =
		/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
	if (!reg.test(email.value)) {
		error.classList.remove("hidden");
		// email.classList.remove("");
		email.classList.add("border-Tomato");
		email.classList.add("text-Tomato");
		email.classList.add("bg-ErrorBg");
		email.classList.remove("focus:border-black");
		email.classList.add("focus:border-Tomato");
	} else {
		imgMobile.classList.add("hidden");
		main.classList.toggle("hidden");
		main.classList.toggle("md:hidden");
		success.classList.toggle("hidden");
	}
});
