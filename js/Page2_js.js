function MyFuncyion(){

    let input1 = document.getElementById("name").value;
    let input2 = document.getElementById("phone").value;
    let input3 = document.getElementById("cars_type").value;
    let input4 = document.getElementById("file").value;

    let text;

    if (!input1  ){
        text = "Input not valid";
        document.getElementById("input1_txt").innerHTML = text;
        return false;

    }else if(input2 ){
        var phoneno = /[0-9]{10}/;
        if(input2.match(phoneno)){
            return true;

        }else {
            text = "Input not valid";
            document.getElementById("input2_txt").innerHTML = text;
            return false;
        }


    } if( input3 == "-1" ) {
        alert( "Please provide type of car" );
        return false;
    }if(!input4){
        alert( "Please include file" );
        return false;
    }

    else {

        confirm("Done")

    }

}