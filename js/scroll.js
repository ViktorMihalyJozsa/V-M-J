window.addEventListener("orientationchange", function() {
    if (window.orientation === 90 || window.orientation === -90) {
        alert("Please turn the phone back to portrait view.");
    }
    }, false);

/* window.scrollTo(0, document.body.scrollHeight);  /* A dokumentum aljara visz betolteskor */