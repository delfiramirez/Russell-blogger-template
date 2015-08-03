(function () {
    var URL=document.URL,
            reg=/\.blogspot\.(com\...|..)\//
    if ( URL.match (reg) ) {
        window.location=URL.replace (reg, ".blogspot.com\/ncr\/")
    }
}) ()
document.documentElement.className=document.documentElement.className.replace ('no-js', 'js');
