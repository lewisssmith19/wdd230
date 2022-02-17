const targets = document.querySelectorAll('img');

const lazyload = target => {
    const io = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            console.log('test');

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('fade');

                observer.disconnect();
            }
        });
    });

    io.observe(target);
};

targets.forEach(lazyload);



// const images = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//     const src = img.getAttribute("data-src");
//     if(!src) {
//         return;
        
//     }

//     img.src = src;
// }

// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px 300px 0px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     })
// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// });
