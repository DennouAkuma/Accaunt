var form_id = "create_accaunt_form";
var append_id = document.getElementById("create_accaunt_form");

var select_content = [
    1,  //1.name
    1,  //2.full_name
    1,  //3.mail
    1,  //4.password
    1,  //5.password_con
    1,  //6.user_name
    1,  //7.b_year
    1,  //8.b_mon
    1,  //9.b_day
    1,  //10.past_code
    1,  //11.pref
    1,  //12.city
    1   //13.addres
];

var submit_string = "送信";
var min_year = 1900;
var start_birth = "now";
//now = その日 - default
//year = その年の元日
//mon = その年の月
//yyyy-mm-dd 指定日
var addres_search_flag = true;

window.onload = function(){
    page_load();
}

function page_load(){
    for(var i = 0;i < select_content.length;i++){
        if(select_content[i] == 1 && i == 0){
            //create_name
            append_name();
        }else if(select_content[i] == 1 && i == 1){
            //create_full_name
            append_full_name();
        }else if(select_content[i] == 1 && i == 2){
            //create_mail
            append_mail();
        }else if(select_content[i] == 1 && i == 3){
            //create_password
            append_password();
        }else if(select_content[i] == 1 && i == 4){
            //create_password_con
            append_password_con();
        }else if(select_content[i] == 1 && i == 5){
            //create_user_name
        }else if(select_content[i] == 1 && i == 6){
            //create_b_year
        }else if(select_content[i] == 1 && i == 7){
            //create_b_mon
        }else if(select_content[i] == 1 && i == 8){
            //create_b_day
        }else if(select_content[i] == 1 && i == 9){
            //create_post_code
        }else if(select_content[i] == 1 && i == 10){
            //create_pref
        }else if(select_content[i] == 1 && i == 11){
            //create_city
        }else if(select_content[i] == 1 && i == 12){
            //create_addres
        }
    }

    submit_button();
}

function append_enter(){
    var chas_enter = document.createElement("br");

    document.getElementById(form_id).append(chas_enter);
}

function submit_button(){
    var chas_submit_button = document.createElement("Button");

    chas_submit_button.setAttribute("type","Button");
    chas_submit_button.setAttribute("id","form_submit_button");
    chas_submit_button.setAttribute("class","input_button_A");

    document.getElementById(form_id).append(chas_submit_button);
    document.getElementById("form_submit_button").append(submit_string);
}

function append_name(){
    var chas_name_input = document.createElement("input");
    
    chas_name_input.setAttribute("type","Text");
    chas_name_input.setAttribute("id","form_input_name");
    chas_name_input.setAttribute("class","input_text");
    chas_name_input.setAttribute("placeholder","ユーザー名");
    
    document.getElementById(form_id).append(chas_name_input);
    append_enter()
}

function append_full_name(){
    var chas_top_name_input = document.createElement("input");
    var chas_down_name_input = document.createElement("input");
    
    chas_top_name_input.setAttribute("type","Text");
    chas_top_name_input.setAttribute("id","form_input_top_name");
    chas_top_name_input.setAttribute("class","input_text");
    chas_top_name_input.setAttribute("placeholder","姓");

    chas_down_name_input.setAttribute("type","Text");
    chas_down_name_input.setAttribute("id","form_input_down_name");
    chas_down_name_input.setAttribute("class","input_text");
    chas_down_name_input.setAttribute("placeholder","名");
    
    document.getElementById(form_id).append(chas_top_name_input);
    document.getElementById(form_id).append(chas_down_name_input);
    append_enter()
}

function append_mail(){
    var chas_mail_input = document.createElement("input");

    chas_mail_input.setAttribute("type","Text");
    chas_mail_input.setAttribute("id","form_input_mail");
    chas_mail_input.setAttribute("class","input_text");
    chas_mail_input.setAttribute("placeholder","メールアドレス");

    document.getElementById(form_id).append(chas_mail_input);
}

function append_password(){
    var chas_password_input = document.createElement("input");

    chas_password_input.setAttribute("type","Text");
    chas_password_input.setAttribute("id","form_input_password");
    chas_password_input.setAttribute("class","input_text");
    chas_password_input.setAttribute("placeholder","パスワード");

    document.getElementById(form_id).append(chas_password_input);
}

function append_password_con(){
    var chas_password_con_input = document.createElement("input");

    chas_password_con_input.setAttribute("type","Text");
    chas_password_con_input.setAttribute("id","form_input_password_con");
    chas_password_con_input.setAttribute("class","input_text");
    chas_password_con_input.setAttribute("placeholder","パスワード確認");

    document.getElementById(form_id).append(chas_password_con_input);
}

function append_b_year(){
    var chas_b_year_select = document.createElement("select");

    chas_b_year_select.setAttribute("id","form_select_b_year");
    chas_b_year_select.setAttribute("class","select_class");
    
    if(start_birth){
        
    }
}

function append_b_mon(){

}

function append_b_day(){

}

function append_postcode(){

}

function append_pref(){

}

function append_city(){

}

function append_addres(){

}