const buttonModal = document.querySelectorAll("[data-modal-control]")

buttonModal.forEach((element) => {
    element.addEventListener('click', () => {
        let valueModal = element.getAttribute("data-modal-control")
        document.getElementById(valueModal).classList.toggle("show-modal")
    })
});
