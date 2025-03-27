    // Like बटन का फंक्शन
    function toggleLike(button) {
        const card = button.closest('.image-card');    // बटन वाले कार्ड को ढूंढें
        const countElement = card.querySelector('.like-count');  // काउंट को सिलेक्ट करें
        let count = parseInt(countElement.textContent);

        // लाइक और अनलाइक लॉजिक
        if (button.classList.contains('liked')) {
            button.classList.remove('liked');
            button.textContent = 'Like';
            count--;
        } else {
            button.classList.add('liked');
            button.textContent = 'Liked';
            count++;
        }

        countElement.textContent = `${count} Likes`;
    }

     // इमेज पर क्लिक करने पर स्लाइड ओपन/हाइड करने का फंक्शन
     function toggleSlides() {
        const iframe = document.getElementById("slidesFrame");

        // स्लाइड को दिखाएं/छुपाएं
        if (iframe.style.display === "none" || iframe.style.display === "") {
            iframe.style.display = "block";   // स्लाइड ओपन
        } else {
            iframe.style.display = "none";    // स्लाइड हाइड
        }
    }