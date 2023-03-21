const contactForm = document.getElementById("contact-form"),
  contactFullName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  contactCheck = document.getElementById("contact-check");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactFullName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    // Add and remove color
    contactCheck.classList.remove("--dark-color");
    contactCheck.classList.add("--red-alert-color");

    // Show Email Check
    contactCheck.textContent = "Write all the input fields!";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_a0sy2ue",
        "template_b58pbsc",
        "#contact-form",
        "-gibQe4nWeAiUZ3BR"
      )
      .then(
        () => {
          // Show Email Check and Add Color
          contactCheck.classList.add("--dark-color");
          contactCheck.textContent = "Message has been sent ✅";

          // Remove Message after Five Seconds
          setTimeout(() => {
            contactCheck.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("Oops! Something has failed...", error);
        }
      );

    // Clear input fields
    contactFullName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);
