let listText = document.querySelector("#listText");

let dpURL = "https://api.thecatapi.com/v1/images/search";
async function getImage() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        method: "GET",
        headers: {
            "x-api-key": "YOUR_REAL_API_KEY",
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    console.log("Cat API response:", data); // Check what’s returned
    if (data && data[0]?.url) {
            return data[0].url;
        } else {
            return "images/image.png"; // fallback image
        }
}


async function createUserList() {

    let mydata = [

  ["Aisha", "Feb 22"],
  ["Zayan", "Mar 5"],
  ["Nora", "Apr 17"],
  ["Ibrahim", "May 29"],
  ["Sana", "Jun 14"],
  ["Omar", "Jul 9"],
  ["Lina", "Aug 3"],
  ["Yusuf", "Sep 26"],
 
];

    for (let i = 0; i < mydata.length; i++) {
        let Uname = document.createElement("p");
        Uname.classList = "name";
        Uname.innerHTML = mydata[i][0];

        // Await the actual image URL
        let imageData = await getImage();
        let Uimg = document.createElement("img");
        Uimg.src = imageData;
        console.log(Uimg.src);

        let Ubday = document.createElement("p");
        Ubday.classList = "bday";
        Ubday.innerHTML = mydata[i][1];

        let myDiv = document.createElement("div");
        myDiv.classList = "data";
        myDiv.appendChild(Uname);
        myDiv.appendChild(Ubday);

        let listItem = document.createElement("li");
        listItem.appendChild(Uimg);
        listItem.appendChild(myDiv);

        listText.appendChild(listItem);
    }
}


createUserList();
