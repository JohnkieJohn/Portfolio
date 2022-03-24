var btn = document.getElementsByTagName("button");
var titre = document.getElementsByTagName("span");
var prevScrollpos = window.pageYOffset;

Array.from(btn).forEach(el =>
{
    el.addEventListener("click", function(e)
    {
        for (i=0; i < btn.length; i++)
        {
            if (e.target == btn[i])
            {
                titre[i].scrollIntoView({behavior: "smooth"});            }
        }
    });
});

function navbarScroll ()
{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) 
    {
      document.getElementById("navbar").style.transform = "translateY(0px)";
    } 
    else 
    {
      document.getElementById("navbar").style.transform = "translateY(-130px)";
    }
    prevScrollpos = currentScrollPos;
}

function headerTop()
{
    if(document.documentElement.scrollTop !== 0)
    {
        document.getElementById("titre").style.width = "0";
        document.getElementById("i").style.fontSize = "0%";
        document.getElementById("i").style.transform = "rotate(360deg)";
    }
    else
    {
        document.getElementById("titre").style.width = "2.55em";
        document.getElementById("i").style.fontSize = "80%";
        document.getElementById("i").style.transform = "rotate(0deg)";
    }
}
 

window.addEventListener("scroll", function()
{
    navbarScroll();
    headerTop();  
    console.log(vscroll);
});