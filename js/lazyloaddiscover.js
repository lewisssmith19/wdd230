const targets = Array.from(document.querySelectorAll('img'));

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
console.log(targets)
targets.forEach(lazyload);
