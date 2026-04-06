/*
19.  URL Validation  [2 Marks] 

Write a function isValidURL(url: string): boolean that returns true only if the URL starts with http:// or https:// AND contains .com. 

Example:  isValidURL("https://google.com")  →  true 

          isValidURL("ftp://google.com")   →  false 

          isValidURL("https://google.org")  →  false 
            isValidURL("http://example.com")  →  true*/

function isValidURL(url: string): boolean {
    // Convert to lowercase to handle case-insensitive URLs
    url = url.toLowerCase();

    // Check if starts with http:// or https://
    let startsCorrectly:boolean = url.startsWith("http://") || url.startsWith("https://");

    // Check if it contains .com
    let containsCom = url.includes(".com");

    return startsCorrectly && containsCom; //true && true = true otherwise false
}
//test cases
console.log(isValidURL("https://google.com")); 
console.log(isValidURL("ftp://google.com"));
console.log(isValidURL("https://google.org"));
console.log(isValidURL("http://example.com"));
console.log(isValidURL("HTTPS://EXAMPLE.COM"));
//negative test cases
console.log(isValidURL("http://example.org"));
console.log(isValidURL("example.com"));
console.log(isValidURL("http://example"));
console.log(isValidURL("https://example.net"));
