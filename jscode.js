

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
    input1.name='ignore'

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

var a=document.getElementsByName("ignore")
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
}

  var step1a=function () {

  var a=document.getElementsByName("keeprunning")
   var b=document.createElement("p");
      b.innerText="You are so slow. Died after 40 seconds! Shame on you"
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


}


var step1a_1=function()
{

var a=document.getElementsByName("axe")
var b=document.createElement("p");
    b.innerText="I'm proud,you should be too. Because you just killed a ZOMBIE. Danville is saved. Thank you!";
    document.body.appendChild(b)


}

var step1b_1=function()
{

var a=document.getElementsByName("gun")
var b=document.createElement("p");
    b.innerText="The gun is not efficient at all! You die soon...";
    document.body.appendChild(b)
}


var step2=function () {

var a=document.getElementsByName("part2")
 var b=document.createElement("p");
    b.innerText="Suddenly, he wakes up. Turns out, he is a zombie. The zombie wants ice cream !!"
    document.body.appendChild(b)

    var form=document.createElement("form")
    document.body.appendChild(form)
    var label1=document.createElement("label")
    label1.innerHTML="Buy him ice cream"
    var input1=document.createElement("input")
    input1.setAttribute("onclick","step2b_1()")
    input1.type='radio'
    input1.name='ice_cream'


    var label2=document.createElement("label")
    label2.innerHTML="Leave"
    var input2=document.createElement("input")
    input2.setAttribute("onclick", "step2b_2()")
    input2.type='radio'
    input2.name='leave'

    label1.appendChild(input1)
    label2.appendChild(input2)
    form.appendChild(label1)
    form.appendChild(label2)
}

var step2b_1=function () {

var a=document.getElementsByName("ice_cream")
 var b=document.createElement("p");
    b.innerText="You go to speedway. Now you have to choose..."
    document.body.appendChild(b)

    var form=document.createElement("form")
    document.body.appendChild(form)
    var label1=document.createElement("label")
    label1.innerHTML="Chocolate"
    var input1=document.createElement("input")
    input1.setAttribute("onclick","step2c_1()")
    input1.type='radio'
    input1.name='chocolate'

    var label2=document.createElement("label")
    label2.innerHTML="Vanilla"
    var input2=document.createElement("input")
    input2.setAttribute("onclick", "step2c_2()")
    input2.type='radio'
    input2.name='vanilla'

    label1.appendChild(input1)
    label2.appendChild(input2)
    form.appendChild(label1)
    form.appendChild(label2)
}

var step2b_2=function () {

var a=document.getElementsByName("leave")
 var b=document.createElement("p");
    b.innerText="He gets mad and starts running after you. He is way faster ! YOU DEAD..."
    document.body.appendChild(b)
  }

var step2c_1=function () {

  var a=document.getElementsByName("part1")
   var b=document.createElement("p");
      b.innerText="Good choice. He's a happy zombie now. Looks like he is enojoying the ice cream but now he offers you some. So you,"
      document.body.appendChild(b)

      var form=document.createElement("form")
      document.body.appendChild(form)
      var label1=document.createElement("label")
      label1.innerHTML="Accept and eat some"
      var input1=document.createElement("input")
      input1.setAttribute("onclick","step2d_1()")
      input1.type='radio'
      input1.name='part1'

      var label2=document.createElement("label")
      label2.innerHTML="Refuse politely"
      var input2=document.createElement("input")
      input2.setAttribute("onclick", "step2d_2()")
      input2.type='radio'
      input2.name='part2'

      label1.appendChild(input1)
      label2.appendChild(input2)
      form.appendChild(label1)
      form.appendChild(label2)
  }

var step2c_2=function () {

  var a=document.getElementsByName("part1")
   var b=document.createElement("p");
      b.innerText="You give him the ice cream but he does not show any emotions. After the first spoon, he gets angry. Turns out, he does not like vanilla. Bad choice ! YOU DEAD !!"
      document.body.appendChild(b)
  }


var step2d_1=function () {

  var a=document.getElementsByName("part1")
   var b=document.createElement("p");
      b.innerText="People make friendships eating ice cream together. Cograts:  You saved Danville and you have a zombie friend now! I am proud :'( Don't make me cry, just leave. Nice job..)'"
      document.body.appendChild(b)
  }

  var step2d_2=function () {

  var a=document.getElementsByName("part1")
   var b=document.createElement("p");
      b.innerText="Mad zombie just killed you. Don't be mean and accept some ice cream next time..."
      document.body.appendChild(b)
  }
