function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open')
    }
}


fetch('http://127.0.0.1:3000/index.html/ListaProdutos?limit=5')
            .then(res=>res.json())
            .then((json) => {
                console.log(json);
                const ul = document.getElementById('ListaProdutos');
                json.forEach((item) => {
                    const li = document.createElement("li");
                    li.innerHTML= `
                    <a href="#">
                    <img width="50"
                    src="${item.image}">
                    <span class="item-name">${item.title}</span>
                    </a>
                    `;
                    ul.appendChild(li);

                })

            })


            function filtrar (){
                var input,
                    filter,
                    ul,
                    li,
                    a,
                i,
                span,
                txtValue,
                count = 0



                input = document.getElementById('inputBusca');
                ul = document.getElementById ('ListaProdutos');

                

                filter = input.value.toUpperCase();



                li = ul.getElementsByTagName("li");


                for (i = 0; i < li.length; i++){

                    a = li[i].getElementsByTagName("a")[0];

                    txtValue = a.textContent || a.innerText;

                    if(txtValue.toUpperCase().indexOf(filter) > -1){

                        li[i].style.display="";

                        count++


                        span = li[i].querySelector(".item-name");

                        if(span){
                            span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match)=>{
                                return "<strong>" + match + "</strong>";

                            })
                        }


                    }else{

                        li[i].style.display="none";
                    }

                }

                if(count === 0) {

                    ul.style.display = "none";

                } else {
                    ul.style.display ="block";
                }

            }

    

            