const changeImage=document.querySelectorAll(".changeThisImage");if(changeImage.length>0)for(let e=0;e<changeImage.length;e++){let t=document.createElement("label"),a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("name","img"),console.log("byswelam"),a.setAttribute("accept","image/*"),t.setAttribute("for",`imgUploade${e}`),a.setAttribute("id",`imgUploade${e}`),changeImage[e].appendChild(t),changeImage[e].appendChild(a),a.addEventListener("change",()=>{changeImage[e].querySelector("img").setAttribute("src",`images/${a.files[0].name}`)})}