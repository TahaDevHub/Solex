// ======= Script Section 1 =======
// volume 
            let vBtndiv=document.getElementById("volume");
            let vBtn=document.querySelector(".volumei");
            let v=document.getElementById("mainvid");
            vBtndiv.addEventListener("click", ()=>{
                v.muted=!v.muted; //“Set muted to the opposite of what it is right now.”
                vBtn.classList.toggle("fa-volume-high");
                vBtn.classList.toggle("fa-volume-xmark");
            });

// pause/play
            let pausediv=document.querySelector(".pause");
            let pause=document.querySelector(".pausei");
            
            pausediv.addEventListener("click", () => {
                if(v.play()){
                    v.pause();
                }
                else{
                    v.play();
                }
                pause.classList.toggle("fa-circle-pause");
                    pause.classList.toggle("fa-circle-play");
            
            })


// ======= Script Section 2 =======

//Select Elements
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const prev = document.querySelector('.control-left');
        const next = document.querySelector('.control-right');
        const dotsContainer = document.querySelector('.dots');

        let index = 0;

// Create dots dynamically & Add Event Listener
        slides.forEach((slide, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        });
        const dots = Array.from(dotsContainer.children);

// Update slide and active dot
        function update() {
        track.style.transform = `translateX(-${index * 100}vw)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === index)); // toggle = have class → remove it , not have class → add it;;; means → .toggle(className, condition)
        }

// Go to a specific slide
        function goToSlide(i) {
        index = (i + slides.length) % slides.length;
        update();
        }

// Next / Prev controls
        next.addEventListener('click', () => goToSlide(index + 1));
        prev.addEventListener('click', () => goToSlide(index - 1));

// Autoplay
        setInterval(() => goToSlide(index + 1), 5000);

// Initialize first active dot
        update();



// ======= Script Section 5 =======
    document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Subscribed successfully!");
});