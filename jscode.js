

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
    input2.setAttribute("onclick","step2()")
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

    var form=document.createElement("form")
    document.body.appendChild(form)

    var label1=document.createElement("label")
    label1.innerHTML="Keep running"
    var input1=document.createElement("input")
    input1.setAttribute("onclick","step1a()")
    input1.type='radio'
    input1.name='keeprunning'

    var label2=document.createElement("label")
    label2.innerHTML="Stop and Fight"
    var input2=document.createElement("input")
    input2.setAttribute("onclick","step1b()")
    input2.type='radio'
    input2.name='stopAndFight'

    label1.appendChild(input1)
    label2.appendChild(input2)
    form.appendChild(label1)
    form.appendChild(label2)

    input1.removeAttribute("onclick")
    input2.removeAttribute("onclick")
}

var step1a=function()
{

var a=document.getElementsByName("keeprunning")
var b=document.createElement("p");
    b.innerText="You are so slow! You died after 40 seconds! Shame on you!";
    document.body.appendChild(b)
}



var step1b=function()
{

var a=document.getElementsByName("stopAndFight")
var b=document.createElement("p");
    b.innerText="You stop and find speed way. You find some weapons to buy! You by a/an...";
    document.body.appendChild(b)

    var form=document.createElement("form")
    document.body.appendChild(form)

    var label1=document.createElement("label")
    label1.innerHTML="Axe"
    var input1=document.createElement("input")
    input1.setAttribute("onclick","step1a_1()")
    input1.type='radio'
    input1.name='axe'

    var label2=document.createElement("label")
    label2.innerHTML="Gun"
    var input2=document.createElement("input")
    input2.setAttribute("onclick","step1b_1()")
    input2.type='radio'
    input2.name='gun'

    label1.appendChild(input1)
    label2.appendChild(input2)
    form.appendChild(label1)
    form.appendChild(label2)

    input1.removeAttribute("onclick")
    input2.removeAttribute("onclick")

}


var step1a_1=function()
{

var a=document.getElementsByName("axe")
var b=document.createElement("p");
    b.innerText="I'm proud,you should be too. Because you just killed a ZOMBIE. Danville is saved. Thank you!";
    document.body.appendChild(b)

    var form=document.createElement("form")
    document.body.appendChild(form)

    var label1=document.createElement("label")
    label1.innerHTML="Axe"
    var input1=document.createElement("input")
    input1.setAttribute("onclick","step1a_1()")
    input1.type='radio'
    input1.name='axe'

    var label2=document.createElement("label")
    label2.innerHTML="Gun"
    var input2=document.createElement("input")
    input2.setAttribute("onclick","step1b_1()")
    input2.type='radio'
    input2.name='gun'

    label1.appendChild(input1)
    label2.appendChild(input2)
    form.appendChild(label1)
    form.appendChild(label2)

    input1.removeAttribute("onclick")
    input2.removeAttribute("onclick")

}

var step1b_1=function()
{

var a=document.getElementsByName("gun")
var b=document.createElement("p");
    b.innerText="Gun is not efficient at all...You died soon..."";
    document.body.appendChild(b)
}
