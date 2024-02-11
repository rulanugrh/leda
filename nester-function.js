/*
tidak ada batasan dalam membuat function
yang bisa diakses adalah function luar bukan inner
*/
function outer(){
    function inner(){
        console.log('Inner');
    };
    inner();
    inner();
};

outer();