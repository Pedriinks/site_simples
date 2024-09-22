function change_header_backgroundcolor(){
    document.getElementById("header").style.backgroundColor ="grey"
    document.getElementById("header").style.color = "white"
    // if(document.getElementById("header").style.backgroundColor =="grey"){
    //     document.getElementById("header").style.backgroundColor = "greenyellow" 
    //     document.getElementById("header").style.color = "black"
    }




function anotherIMG(){
    if (document.getElementById("image").src == "https://cdn.getyourguide.com/img/location/543f9dfed524d.jpeg/88.jpg")
    {
        document.getElementById("image").src = "https://www.comboiguassu.com.br/wp-content/uploads/2020/03/1807175314-cataratas-do-iguacu-06-scaled.jpg"
    }
    else if (document.getElementById("image").src == "https://www.comboiguassu.com.br/wp-content/uploads/2020/03/1807175314-cataratas-do-iguacu-06-scaled.jpg")
    {
        document.getElementById("image").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ab/40/3a/cataratas-do-iguacu.jpg?w=1200&h=1200&s=1"
    }
    else{
        document.getElementById("image").src = "https://cdn.getyourguide.com/img/location/543f9dfed524d.jpeg/88.jpg"
    }
}

function changeGIF(){
    if (document.getElementById("image2").src == "https://i.pinimg.com/originals/dc/28/5b/dc285bb445f409ec53f59569efc0672b.gif")
        {
            document.getElementById("image2").src = "https://media.tenor.com/images/4720c0923ef150fb492aca0ba3dfc55c/tenor.gif"
        } else if (document.getElementById("image2").src =="https://media.tenor.com/images/4720c0923ef150fb492aca0ba3dfc55c/tenor.gif"){
            try {
                document.getElementById("image2").src ="https://i.pinimg.com/originals/f8/6c/33/f86c338d68281608f9be38e094c6dc30.gif"
            } catch (error) {
                document.getElementById("image2").src = "https://serverdo.in/wp-content/uploads/2020/06/erros-em-sites.jpg"
            }
        } else {
            document.getElementById("image2").src = "https://i.pinimg.com/originals/dc/28/5b/dc285bb445f409ec53f59569efc0672b.gif"
        } 
}
