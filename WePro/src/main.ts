function output(n: number) {
    var k = 0;
    var j = 0;
    var n = 3;
    var line = 0;
    var a = "";
    var b = "";
    var c = "";
    var d = "*";
    line = getLine(n);
    hua(line);
    function hua(n) {
        for (k = 0; k < n; k++) {
            for (j = 0; j < n - k; j++) {
                a = a + c;
            }
            for (j = 0; j < 2 * k + 1; j++) {
                b = b + d;
            }
            console.log(a + b);
            a = "";
            b = "";
        }
    }
    function getLine(line) {
        return line;


    }

};


window.onload = function () {
    output(5);

}