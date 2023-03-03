///install event 
self.addEventListener("install",()=>{
    console.log("installed");
})

///activate event
self.addEventListener("activate",()=>{
    console.log("activated");
})

///fetch event 
self.addEventListener("fetch",()=>{
    console.log("fetched");
})