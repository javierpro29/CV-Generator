const inputname = document.getElementById("name");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const webSite = document.getElementById("webSite");
const summary = document.getElementById("summary");
const knowledge = document.getElementById("knowledge");
const lenguages = document.getElementById("lenguages");
const academies = document.getElementById("academies");
const certificates = document.getElementById("certificates");
const experiences = document.getElementById("experiences");



/* for(var i = 0; i < s.length; i++){
    ar.push(s[i])
}

ar.forEach(element => {
    console.log(element)
});
 */


function generateCV(){

    if(validate()){
        Swal.fire(
            'Good job!',
            'Your Curiculum haver created!',
            'success'
          )
        
        const container_cv = document.getElementById("container-cv");
        const fc = document.getElementById("firstchild");

        container_cv.removeChild(fc);

            const firstchild = document.createElement("div");
            firstchild.setAttribute("class", "col-10 offset-1 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2");
            firstchild.setAttribute("id", "firstchild");

                const title = document.createElement("h2");
                title.setAttribute("class", "my-5");
                title.innerText = "Curiculum Vitae";

                const sheet = document.createElement("div");
                sheet.setAttribute("class", "row text-dark p-0")

                    const col1 = document.createElement("div");
                    col1.setAttribute("class", "col col-sm-4 col-lg-4 bg-light p-0");

                        const emptyContainer1 = document.createElement("div");
                        emptyContainer1.setAttribute("class", "col-4 container-empty bg-primary p-0");

                        const name_container = document.createElement("div");
                        name_container.setAttribute("class", "name pt-3 px-2 mb-4");

                            const user_name = document.createElement("h2");
                            user_name.innerText = `${inputname.value}`;

                            const user_lastName = document.createElement("h2");
                            user_lastName.innerText = `${lastName.value}`;

                        name_container.appendChild(user_name);
                        name_container.appendChild(user_lastName);


                        const image_container = document.createElement("div");
                        image_container.setAttribute("class", "image d-flex justify-content-center mb-5 mx-2");

                            const image = document.createElement("img");
                            image.setAttribute("class", "img-fluid");
                            image.setAttribute("src", "./assents/img/user-6.webp");
                        
                        image_container.appendChild(image);


                        const contact = document.createElement("div");
                        contact.setAttribute("class", "contact mb-3 px-5 mb-5");

                            const  contact_title = document.createElement("h4");
                            contact_title.setAttribute("class", "border-bottom border-3");


                            const address_container = document.createElement("div");
                            address_container.setAttribute("class", "address mt-4 mb-3");

                                const address_title = document.createElement("h6");
                                address_title.innerText = "Address:";

                                const cvaddress = document.createElement("p");
                                cvaddress.innerText = `${address.value}`;
                            
                            address_container.appendChild(address_title);
                            address_container.appendChild(cvaddress);


                            const phone_container = document.createElement("div");
                            phone_container.setAttribute("class", "phone mb-3");

                                const phone_title = document.createElement("h6");
                                phone_title.innerText = "Phone:";

                                const phone = document.createElement("p");
                                phone.innerText = `${phoneNumber.value}`;
                                
                            phone_container.appendChild(phone_title);
                            phone_container.appendChild(phone);


                            const email_container = document.createElement("div");
                            email_container.setAttribute("class", "email mb-3");

                                const email_title = document.createElement("h6");
                                email_title.innerText = "Email:";

                                const cvemail = document.createElement("p");
                                cvemail.setAttribute("class", "text text-break")
                                cvemail.innerText = `${email.value}`;
                                
                            email_container.appendChild(email_title);
                            email_container.appendChild(cvemail);


                            const lenguages_container = document.createElement("div");
                            lenguages_container.setAttribute("class", "lenguages");

                                const lenguages_title = document.createElement("h6");
                                lenguages_title.innerText = "Lenguages:";

                                const lenguages_list = document.createElement("ul");

                                m =  lenguages.value.split(",");
                                for(let i = 0 ;  i < m.length ; i++ ){
                                    
                                    const lenguages_item = document.createElement("li")
                                    lenguages_item.innerText = `${m[i]}`; 

                                    lenguages_list.appendChild(lenguages_item);
                                }
                                

                                
                            lenguages_container.appendChild(lenguages_title);
                            lenguages_container.appendChild(lenguages_list);



                        contact.appendChild(contact_title);
                        contact.appendChild(address_container);
                        contact.appendChild(phone_container);
                        contact.appendChild(email_container);
                        contact.appendChild(lenguages_container);

                    col1.appendChild(emptyContainer1);
                    col1.appendChild(name_container);
                    col1.appendChild(image_container);
                    col1.appendChild(contact);


                    const col2 = document.createElement("div");
                    col2.setAttribute("class", "col col-sm-8 col-lg-8  p-0 bg-light");

                        const summary_container = document.createElement("div");
                        summary_container.setAttribute("class", "summary pt-5 mb-3 px-5");

                            const summary_title = document.createElement("h4");
                            summary_title.setAttribute("class", "border-bottom border-3");
                            summary_title.innerText = "Summary";

                            const cvsummary = document.createElement("p");
                            cvsummary.innerText = `${summary.value}`;

                        summary_container.appendChild(summary_title);
                        summary_container.appendChild(cvsummary);

                    
                        const skills_container = document.createElement("div");
                        skills_container.setAttribute("class", "Skill-Highlights mb-3 px-5");

                            const skills_title = document.createElement("h4");
                            skills_title.setAttribute("class", "border-bottom border-3");
                            skills_title.innerText = "Skill Highlights";


                            const skills_list = document.createElement("ul");
                            skills_list.setAttribute("class", "row");

                            m =  knowledge.value.split(",");
                            for(let i = 0 ;  i < m.length ; i++ ){
                                
                                const skills_item = document.createElement("li");
                                skills_item.setAttribute("class", "col col-sm-6 col-lg-6 mb-3");
                                skills_item.innerText = `${m[i]}`; 

                                skills_list.appendChild(skills_item);
                            }      

                        skills_container.appendChild(skills_title);
                        skills_container.appendChild(skills_list);


                        const experience_container = document.createElement("div");
                        experience_container.setAttribute("class", "work-experience mb-3 px-5");

                            const experience_title = document.createElement("h4");
                            experience_title.setAttribute("class", "border-bottom border-3");
                            experience_title.innerText = "Experince";


                            const experience_list = document.createElement("ul");

                            m =  experiences.value.split(",");
                            for(let i = 0 ;  i < m.length ; i++ ){
                                
                                const experience_item = document.createElement("li")
                                experience_item.innerText = `${m[i]}`; 

                                experience_list.appendChild(experience_item);
                            }

                        
                        experience_container.appendChild(experience_title);
                        experience_container.appendChild(experience_list);

                        
                        const education_container = document.createElement("div");
                        education_container.setAttribute("class", "education mb-5 px-5");

                            const education_title = document.createElement("h4");
                            education_title.setAttribute("class", "border-bottom border-3");
                            education_title.innerText = "Education";


                            const education_list = document.createElement("ul");
                            education_list.setAttribute("class", "row");

                            m =  academies.value.split(",");
                            for(let i = 0 ;  i < m.length ; i++ ){
                                
                                const education_item = document.createElement("li")
                                education_item.innerText = `${m[i]}`; 

                                education_list.appendChild(education_item);
                            }

                        education_container.appendChild(education_title);
                        education_container.appendChild(education_list)

                
                        const certificate_container = document.createElement("div");
                        certificate_container.setAttribute("class", "work-experience mb-3 px-5");

                            const certificate_title = document.createElement("h4");
                            certificate_title.setAttribute("class", "border-bottom border-3");
                            certificate_title.innerText = "Certificates";


                            const certificate_list = document.createElement("ul");

                                m = certificates.value.split(",");
                                for(let i = 0 ; i < m.length ; i++ ){
                                    const certificate_item = document.createElement("li")
                                    certificate_item.innerText = `${m[i]}`;

                                    certificate_list.appendChild(certificate_item);
                                }
        
                        
                        certificate_container.appendChild(certificate_title);
                        certificate_container.appendChild(certificate_list);

                        
                        const emptyContainer2 = document.createElement("div");
                        emptyContainer2.setAttribute("class", "container-empty bg-primary");



                    col2.appendChild(summary_container);
                    col2.appendChild(skills_container);
                    col2.appendChild(experience_container);
                    col2.appendChild(education_container);
                    col2.appendChild(certificate_container);
                    
                    sheet.appendChild(col1);
                    sheet.appendChild(col2);
                    sheet.appendChild(emptyContainer2);
                
            firstchild.appendChild(title);
            firstchild.appendChild(sheet);


        container_cv.appendChild(firstchild);


    }else{
        noCompleteInfo();
    }
}

function noCompleteInfo(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to complete all information!'
    })
}


function ValidateEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }else{
        return (false)
    }
}



function validate() {
    let isvalid = true;

    if(inputname.value == "" || inputname.value == null || inputname.value == undefined){
        isvalid = false;

        inputname.classList.remove("success");
        inputname.classList.add("error");
    }else{
        inputname.classList.add("success");
        inputname.classList.remove("error");
    }

    if(lastName.value == "" || lastName.value == null || lastName.value == undefined){
        isvalid = false;
        
        lastName.classList.remove("success");
        lastName.classList.add("error");
    }else{
        lastName.classList.add("success");
        lastName.classList.remove("error");
    }

    if(address.value == "" || address.value == null || address.value == undefined){
        isvalid = false;
        
        address.classList.remove("success");
        address.classList.add("error");
    }else{
        address.classList.add("success");
        address.classList.remove("error");
    }

    if(email.value == "" || email.value == null || email.value == undefined){
        isvalid = false;
        

        email.classList.remove("success");
        email.classList.add("error");
    }else{

        const emailErrorMessage = document.getElementById("emailErrorMessage");

        if(ValidateEmail(email.value)){
            email.classList.add("success");
            email.classList.remove("error");
            emailErrorMessage.classList.add("error-input");
        }else{
            isvalid = false;
            email.classList.remove("success");
            email.classList.add("error");
            emailErrorMessage.classList.remove("error-input");
        }

        
    }

    if(phoneNumber.value == "" || phoneNumber.value == null || phoneNumber.value == undefined){
        isvalid = false;

        phoneNumber.classList.remove("success");
        phoneNumber.classList.add("error");
    }else{

        try {
            let phoneNumbercv = parseInt(phoneNumber.value);

            
            if(phoneNumbercv != phoneNumber.value){
                isvalid = false;
                
                const phoneErrorMessage = document.getElementById("phoneErrorMessage");
                phoneErrorMessage.classList.remove("error-input");
                
                phoneNumber.classList.remove("success");
                phoneNumber.classList.add("error");
            }else{
                
                phoneErrorMessage.classList.add("error-input");
                phoneNumber.classList.add("success");
                phoneNumber.classList.remove("error");
            }

        } catch (error) {
            isvalid = false;
            phoneNumber.classList.remove("success");
            phoneNumber.classList.add("error");
        }

        

    }


    if(webSite.value == "" || webSite.value == null || webSite.value == undefined){
        isvalid = false;

        webSite.classList.remove("success");
        webSite.classList.add("error");
    }else{
        webSite.classList.add("success");
        webSite.classList.remove("error");
    }


    if(summary.value == "" || summary.value == null || summary.value == undefined){
        isvalid = false;
        
        summary.classList.remove("success");
        summary.classList.add("error");
    }else{
        summary.classList.add("success");
        summary.classList.remove("error");
    }


    if(knowledge.value == "" || knowledge.value == null || knowledge.value == undefined){
        isvalid = false;

        knowledge.classList.remove("success");
        knowledge.classList.add("error");
    }else{
        knowledge.classList.add("success");
        knowledge.classList.remove("error");
    }

    if(lenguages.value == "" || lenguages.value == null || lenguages.value == undefined){
        isvalid = false;

        lenguages.classList.remove("success");
        lenguages.classList.add("error");
    }else{
        lenguages.classList.add("success");
        lenguages.classList.remove("error");
    }


    if(academies.value == "" || academies.value == null || academies.value == undefined){
        isvalid = false;
        

        academies.classList.remove("success");
        academies.classList.add("error");
    }else{
        academies.classList.add("success");
        academies.classList.remove("error");
    }

    if(certificates.value == "" || certificates.value == null || certificates.value == undefined){
        isvalid = false;

        certificates.classList.remove("success");
        certificates.classList.add("error");
    }else{
        certificates.classList.add("success");
        certificates.classList.remove("error");
    }

    if(experiences.value == "" || experiences.value == null || experiences.value == undefined){
        isvalid = false;

        experiences.classList.remove("success");
        experiences.classList.add("error");
    }else{
        experiences.classList.add("success");
        experiences.classList.remove("error");
    }



    return isvalid

}
