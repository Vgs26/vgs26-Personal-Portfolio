//-------------------about tabs
    var tablinks =document.getElementsByClassName("tab-links");
    var tabcontents =document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

//----------------------theme-----------
    var icon=document.getElementById("sun-moon");
    icon.onclick =function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src="images/sun.png";
        }
        else{
            icon.src="images/moon.png";
        }
    }   
//smallscreen-navbar-------------------------
    const header=document.getElementById('header');
    const toggle =document.getElementById('toggle');
    const navbar =document.getElementById('navbar');
    document.onclick = function(e){
        if(e.target.id!='header' && e.target.id != 'toggle' && e.target.id != 'navbar'){
            toggle.classList.remove('active');
            navbar.classList.remove('active');
        }
    }
    toggle.onclick=function(){
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');

    }

