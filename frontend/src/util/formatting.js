// Turn string sentences into spans
export const textToSpans = () => {
  let words = document.querySelector("[data-split-text]");

  // Check if the element exists before proceeding
  if (words) {
    let text = words.textContent.split("");
    let result = "";

    text.forEach(function (char) {
      // Append a new span only if the current char is not a space
      result +=
        char.trim() === ""
          ? ""
          : "<span data-letter>" + char + "</span>";
    });
    words.innerHTML = result;
  }
};

export const animation = () => {
  document.querySelectorAll("[data-animation]").forEach((el, index) => {
    el.addEventListener("mouseover", function () {
      if (
        !el.classList.contains("animating") &&
        !el.classList.contains("mouseover")
      ) {
        el.classList.add("animating", "mouseover");
        var letters = el.querySelectorAll("[data-letter]");

        setTimeout(function () {
          el.classList.remove("animating");
        }, (letters.length + 1) * 500);

        var animationName = el.dataset.animation;
        if (!animationName) {
          animationName = "jump";
        }


        letters.forEach(function (letter, i) {
          setTimeout(function () {
            letter.classList.add(animationName);
          }, 50 * i);
        });
      }
    });

    el.addEventListener("mouseout", function () {
      el.classList.remove("mouseover");
    });
  });
};
