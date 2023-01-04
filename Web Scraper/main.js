
function runStuff() {
//variables
const repsonseData = document.getElementById('responeData');
const toFetch = prompt('Give me the url of the website to scrape!');
var text = ` `;
const fetchPromise = fetch(toFetch);

console.log(fetchPromise);
text += '...';
text += fetchPromise;
text += JSON.fetchPromise;
fetchPromise.then((response) => {
   if (Response) {
      console.log(`ran if statement the statement returned true.`);   
    } 
    else if (!Response) {
      console.log("fetch failed, we'll get em next time");
    }
 
  console.log(`Received response: ${response.status}`);
  text += `<u>Received response: ${response.status}</u>`;
  repsonseData.innerHTML = text;
});

console.log("Started request"); 
text += 'Started request...';
repsonseData.innerHTML = text;
}
runStuff();
