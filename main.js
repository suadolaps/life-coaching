function findOutMore() {
  let firstName = prompt("What is your name?");
  let age = prompt("How old are you?");

  if (age < 16) {
    alert(
      "Hi " +
        firstName +
        "! I love your enthusiasm 🙌🏾but come back when you're 16 😬"
    );
  } else {
    if (age >= 60) {
      alert(
        "Hola " +
          firstName +
          ". My friend, I love you, but what have you been doing all your life? 😢"
      );
    } else {
      alert(
        "YASSS " +
          firstName +
          "👏🏾! Now is the time, my friend. May the force be with you as you embark on this journey. 🙏🏾"
      );
    }
  }
}

let findOutMoreButton = document.querySelector("button");
findOutMoreButton.addEventListener("click", findOutMore);
