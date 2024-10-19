/*  ========================================================================  *\

    V M J  ~  S C R O L L . J S

    * C O M E N T
    
    This JavaScript feature may prevent the website from being rotated,
    when viewing on a mobile or tablet.

\*  ========================================================================  */


window.addEventListener("orientationchange", function() {
    if (window.orientation === 90 || window.orientation === -90) {
        alert("Please turn the phone back to portrait view.");
    }
    }, false);