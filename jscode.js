var change=function ()
{
  var t=document.getElementById("hh");
    t.innerText = "Fine...";
  var ddd=document.createElement("p");
    ddd.innerText="good job";
    hh.after(ddd)
    t.removeAttribute("onclick")

}

var story=function()
{
    var a=document.getElementById("storybegin");
    var b=document.createElement("p");
    b.innerText="Story begins...";
    storybegin.after(b)

    var c=document.createElement("p");
    c.innerText="Walking in Danville at 1 am, you see a person sleeping/dying in the street. You... ";
    b.after(c)

    var form1=document.createElement("form")
    document.body.appendChild(form1)

    var label1=document.createElement("label")
    label1.innerHTML="Ignore"
    var input1=document.createElement("input")
    input1.setAttribute("onclick","step1()")
    input1.type='radio'
    input1.name='part1'
    var label2=document.createElement("label")
    label2.innerHTML="Help"
    var input2=document.createElement("input")
    input2.type='radio'
    input2.name='story2'

    label1.appendChild(input1)
    label2.appendChild(input2)
    form1.appendChild(label1)
    form1.appendChild(label2)

 a.removeAttribute("onclick")

}

var step1=function () {

var a=document.getElementsByName("part1")
 var b=document.createElement("p");
    b.innerText="Suddenly, he wakes up. Turns out, he is a zombie. Now, he's running after you" +
        ". You... ";
    document.body.appendChild(b)

}
