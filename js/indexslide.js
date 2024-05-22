function prevSlide() {
            const slider = document.querySelector('.slider');
            slider.scrollBy({
                left: -500, // Adjust this value as needed to scroll to the previous slide
                behavior: 'smooth'
            });
        }

        function nextSlide() {
            const slider = document.querySelector('.slider');
            slider.scrollBy({
                left: 500, // Adjust this value as needed to scroll to the next slide
                behavior: 'smooth'
            });
        }