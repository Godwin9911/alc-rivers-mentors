fetch('mentors.json')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const profile = data.map((userprofile) => {
         return `<div class="profile ${userprofile.stack}">
                    <div class="profileImg">
                        <img src="images/profilepics/${userprofile.twitterusername}.png" alt="alc mentor image"/>
                    </div>
                    <div class="name">
                        <p><strong>${userprofile.twittername}</strong><br>${userprofile.twitterusername}</p>
                        <p class="secondaryText">${userprofile.stack}</p>
                    </div>
                    <div class="social">
                        <a href="https://twitter.com/${userprofile.twitternameuser}" >
                          <img src="images/icons/twitter.png" alt="twitter"/>
                        <a/>
                    </div>
                </div>`
        }).join('');

    document.getElementById("mentorsDiv").innerHTML = profile;
  });

  /* let desktop = window.matchMedia("(min-width:960px)");

  if(!desktop.matches){
    //false
    console.log(desktop.matches)

  }else{
    //true
    console.log(desktop.matches);

  } */

//get link name
function query(id){

  let header = document.getElementById("header");
  header.scrollIntoView();

  //change queryStatus
  document.getElementById("queryStatus").innerHTML = `${id} Mentors`;
  let profileClass = document.getElementsByClassName("profile");

  if(id !== "All"){
    // console.log(id + " false")

    //go back to page begining //Disable button when clicked

    //Add hide class to all profiles
    for (let i = 0; i < profileClass.length; i++) {
      profileClass[i].classList.add("hide");
    }
    //Remove Hide from elements with needed id
    let getID = document.getElementsByClassName(id);
    for (let i = 0; i < getID.length; i++) {
      getID[i].classList.remove("hide");
    }

  }else{

    for (let i = 0; i < profileClass.length; i++) {
      profileClass[i].classList.remove("hide");
    }
  }

}
