
(function () {
    var box = document.getElementById("introOverlay");
    if (!box) return;

    var line1 = box.querySelector(".intro-en");
    var line2 = box.querySelector(".intro-zh");
    if (!line1 || !line2) return;

    var t1 = line1.textContent || "";
    var t2 = line2.textContent || "";
    line1.textContent = "";
    line2.textContent = "";

    document.body.classList.add("is-locked");
    box.classList.add("is-ready");

    function closeIntro() {
        box.classList.add("is-hidden");
        document.body.classList.remove("is-locked");
    }

    var n = 0;
    function type1() {
        if (n < t1.length) {
            line1.textContent += t1.charAt(n);
            n += 1;
            setTimeout(type1, 55);
        } else {
            n = 0;
            setTimeout(type2, 150);
        }
    }

    function type2() {
        if (n < t2.length) {
            line2.textContent += t2.charAt(n);
            n += 1;
            setTimeout(type2, 45);
        } else {
            setTimeout(closeIntro, 700);
        }
    }

    box.onclick = closeIntro;
    type1();
})();
