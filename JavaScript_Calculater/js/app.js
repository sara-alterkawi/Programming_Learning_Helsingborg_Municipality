function insert(num) {
    document.form.textview.value = document.form.textview.value + num
};

function equal() {
    var sara = document.form.textview.value;
    if (sara){
        document.form.textview.value = eval(sara)
    }
    document.form.textview.value = eval(document.form.textview.value)
};

function c() {
    document.form.textview.value = "";
};
