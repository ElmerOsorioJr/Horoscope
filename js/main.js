document.getElementById('getDate').addEventListener("click", function(){
  document.getElementById("month").value, document.getElementById("day").value
  var month =  document.getElementById("month").value
  var day = document.getElementById("day").value
  getHoroscope(month, day)
  showLink()
});

function showLink() {
    console.log(document.getElementsByClassName("linkClass"));
  let links = document.getElementsByClassName("linkClass")
  for(var i = 0; i < links.length; i++ ){
    links[i].style.display = "block"
  }
}

function getHoroscope(month, day){
  console.log(month, day);
  if ((month == "1" && day >= "20") || (month == "2" && day <= "18"))
  {
    document.getElementById('insertSign').innerHTML = "Aquarius, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "J.Cole - January 28th"
    document.getElementById('insertIMG').src = "../img/jcole.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=UZwyUC4gloM"

    document.getElementById('insertHere2').innerHTML = "Gucci Mane - Met Gala"
    document.getElementById('insertIMG2').src = "../img/guccimane.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=3QzUSSKfEeA"

    document.getElementById('insertHere3').innerHTML = "The Weeknd - Die For You"
    document.getElementById('insertIMG3').src = "../img/theweeknd.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=QLCpqdqeoII"
    console.log("Aquarius")
  }else if ((month == "2" && day >= "19") || (month == "3" && day <= "20"))
  {
    document.getElementById('insertSign').innerHTML = "Pisces, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Rihanna - Love On The Brain"
    document.getElementById('insertIMG').src = "../img/rihanna.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=NsW5uu_w1A0"

    document.getElementById('insertHere2').innerHTML = "Jhene Aiko - Sativa"
    document.getElementById('insertIMG2').src = "../img/jhene.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=Y8eis1pfsls"

    document.getElementById('insertHere3').innerHTML = "Bad Bunny - La Romana"
    document.getElementById('insertIMG3').src = "../img/badbunny.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=kPg3M4C9N9w"
    console.log("Pisces")
  }else if ((month == "3" && day >= "21") || (month == "4" && day <= "19"))
  {
    document.getElementById('insertSign').innerHTML = "Aries, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Quavo - Workin Me"
    document.getElementById('insertIMG').src = "../img/quavo.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=RiHPh2XLF8I"

    document.getElementById('insertHere2').innerHTML = "Selena - Como La Flor"
    document.getElementById('insertIMG2').src = "../img/selena.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=v2F66BoVHR0"

    document.getElementById('insertHere3').innerHTML = "Chance The Rapper - Sunday Candy"
    document.getElementById('insertIMG3').src = "../img/chance.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=R1h9bcrC6Q8"
    console.log("Aries")
  }else if ((month == "4" && day >= "20") || (month == "5" && day <= "20"))
  {
    document.getElementById('insertSign').innerHTML = "Tuarus, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Travis Scott - Sweet Sweet"
    document.getElementById('insertIMG').src = "../img/travis.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=EqXAV2UcYjU"

    document.getElementById('insertHere2').innerHTML = "Chris Brown - With You"
    document.getElementById('insertIMG2').src = "../img/chrisbrown.png"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=nmjdaBaZe8Y"

    document.getElementById('insertHere3').innerHTML = "Meek Mill - 1942 Flows"
    document.getElementById('insertIMG3').src = "../img/meek.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=pHlo_rZHufo"
    console.log("Tuarus")
  }else if ((month == "5" && day >= "21") || (month == "6" && day <= "20"))
  {
    document.getElementById('insertSign').innerHTML = "Gemini, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Kanye West - Devil In a New Dress"
    document.getElementById('insertIMG').src = "../img/kanye.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=sk3rpYkiHe8"

    document.getElementById('insertHere2').innerHTML = "Lauryn Hill - Doo Wop"
    document.getElementById('insertIMG2').src = "../img/lauryn.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=T6QKqFPRZSA"

    document.getElementById('insertHere3').innerHTML = "2Pac - I Get Around"
    document.getElementById('insertIMG3').src = "../img/tupac.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=YqJAnQTwmJs"
    console.log("Gemini")
  }else if ((month == "6" && day >= "21") || (month == "7" && day <= "22"))
  {
    document.getElementById('insertSign').innerHTML = "Cancer, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "50 Cent - Many Men"
    document.getElementById('insertIMG').src = "../img/fifty.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=7CVGDPqnZj8"

    document.getElementById('insertHere2').innerHTML = "Romeo Santos - La Diabla"
    document.getElementById('insertIMG2').src = "../img/romeo.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=tYUD9zpSTgw"

    document.getElementById('insertHere3').innerHTML = "6lack - Pretty Little Fears"
    document.getElementById('insertIMG3').src = "../img/6lack.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=iSgUMPHQEWw"
    console.log("Cancer")
  }else if ((month == "7" && day >= "23") || (month == "8" && day <= "22"))
  {
    document.getElementById('insertSign').innerHTML = "Leo, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Lil Uzi Vert - Sideline Watching"
    document.getElementById('insertIMG').src = "../img/uzi.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=kIwU-nOueWw"

    document.getElementById('insertHere2').innerHTML = "Chief Keef - Kobe"
    document.getElementById('insertIMG2').src = "../img/sosa.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=GLV07jcZ7hY"

    document.getElementById('insertHere3').innerHTML = "Young Thug - Climax"
    document.getElementById('insertIMG3').src = "../img/thug.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=t5O4lLUSJL4"
    console.log("Leo")
  }else if ((month == "8" && day >= "23") || (month == "9" && day <= "22"))
  {
    document.getElementById('insertSign').innerHTML = "Virgo, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Beyonce - Dangerously In Love"
    document.getElementById('insertIMG').src = "../img/bey.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=4Xemq4xCSEA"

    document.getElementById('insertHere2').innerHTML = "Wiz Khalifa - Talent Show"
    document.getElementById('insertIMG2').src = "../img/wiz.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=GWUQUu79OY4"

    document.getElementById('insertHere3').innerHTML = "Nas - The World Is Yours"
    document.getElementById('insertIMG3').src = "../img/nas.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=_srvHOu75vM"
    console.log("Virgo")
  }else if ((month == "9" && day >= "23") || (month == "10" && day <= "22"))
  {
    document.getElementById('insertSign').innerHTML = "Libra, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Lil Wayne - Mr Carter"
    document.getElementById('insertIMG').src = "../img/wayne.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=-9MIEuMpm44"

    document.getElementById('insertHere2').innerHTML = "G Herbo - Focused"
    document.getElementById('insertIMG2').src = "../img/herbo.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=YwtPnJHQrUQ"

    document.getElementById('insertHere3').innerHTML = "21 Savage - A lot"
    document.getElementById('insertIMG3').src = "../img/savage.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=VbrEsOLu75c"
    console.log("Libra")
  }else if ((month == "10" && day >= "23") || (month == "11" && day <= "21"))
  {
    document.getElementById('insertSign').innerHTML = "Scorpio, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Future - My Collection"
    document.getElementById('insertIMG').src = "../img/future.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=aM0C03JcVgs"

    document.getElementById('insertHere2').innerHTML = "SZA - Love Galore"
    document.getElementById('insertIMG2').src = "../img/sza.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=hHXfCOjb3fk"

    document.getElementById('insertHere3').innerHTML = "Drake - Childs Play"
    document.getElementById('insertIMG3').src = "../img/drake.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=a_uhfFNeldI"
    console.log("Scorpio")
  }else if ((month == "11" && day >= "22") || (month == "12" && day <= "21"))
  {
    document.getElementById('insertSign').innerHTML = "Sagittarius, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Juice WRLD - Lean Wit Me"
    document.getElementById('insertIMG').src = "../img/juice.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=5SejM_hBvMM"

    document.getElementById('insertHere2').innerHTML = "Jay Z - Big Pimpin"
    document.getElementById('insertIMG2').src = "../img/hov.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=Cgoqrgc_0cM"

    document.getElementById('insertHere3').innerHTML = "Lil Baby - Never Needed No Help"
    document.getElementById('insertIMG3').src = "../img/baby.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=AENNYjT1Lfs"
    console.log("Sagittarius")
  }else if ((month == "12" && day >= "22") || (month == "1" && day <= "19"))
  {
    document.getElementById('insertSign').innerHTML = "Capricorn, These Artist Share Your Sign"
    document.getElementById('insertHere').innerHTML = "Mac Miller - Cinderella"
    document.getElementById('insertIMG').src = "../img/mac.jpg"
    document.getElementById('insertLink').href= "https://www.youtube.com/watch?v=0fcsGS1dEro"

    document.getElementById('insertHere2').innerHTML = "Bryson Tiller - Right My Wrongs"
    document.getElementById('insertIMG2').src = "../img/tiller.jpg"
    document.getElementById('insertLink2').href= "https://www.youtube.com/watch?v=1lQDPOfMUIA"

    document.getElementById('insertHere3').innerHTML = "Polo G - Through Da Storm"
    document.getElementById('insertIMG3').src = "../img/polo.jpg"
    document.getElementById('insertLink3').href= "https://www.youtube.com/watch?v=cgMgoUmHqiw"
    console.log("Capricorn")
  }
}
