window.addEventListener("orientationchange", function() {
    if (window.orientation === 90 || window.orientation === -90) {
        alert("Kérlek, függőlegesen tartsd a telefont!");
    }
    }, false);

/* window.scrollTo(0, document.body.scrollHeight);  /* A dokumentum aljara visz betolteskor */