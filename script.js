// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Button
const btn = document.querySelector(".contact button");

if(btn){
    btn.addEventListener("click", function(){
        alert("ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।");
    });
}

// Header Shadow
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.2)";
    }else{
        header.style.boxShadow = "none";
    }

});