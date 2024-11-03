

// document.addEventListener('DOMContentLoaded', () => {
//     const orderForm = document.getElementById('order-form');

//     orderForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // Voorkom standaard formulierverzending

//         // Verzamel de formuliergegevens
//         const formData = new FormData(orderForm);
//         const data = Object.fromEntries(formData.entries());

//         // Toon de verzamelde gegevens in de console
//         console.log('Bestellingsgegevens:', data);

//         // Simuleer een succesvolle bestelling
//         alert('Bestelling succesvol geplaatst! (Simulatie)');
//         orderForm.reset(); // Reset het formulier
//     });
// });

// form.js

// Haal de elementen op uit de HTML
const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Voorkom standaard formulierverzending

    // Gebruik Formspree om formulier te verzenden
    fetch(orderForm.action, {
        method: 'POST',
        body: new FormData(orderForm),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                title: "Bestelling geplaatst!",
                icon: "success"
            });
            orderForm.reset(); // Reset het formulier na verzending
        } else {
            Swal.fire({
                title: "Er is iets misgegaan...",
                icon: "error"
            });
        }
    }).catch(error => {
        Swal.fire({
            title: "Er is iets misgegaan...",
            text: error.message,
            icon: "error"
        });
    });
});
