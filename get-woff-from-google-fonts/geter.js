function getURLs(text) {
var urlRegex = /(https?:\/\/[^\s]+\.woff2)/g;
let arr = [];
 text.replace(urlRegex, function(url) {
    arr.push(url)
  return url;
})
return arr;
}

function linksToFont(css){
    var urlRegex = /(https?:\/\/[^\s]+\.woff2)/g;
    let res= css.replace(urlRegex, function(url) {
        let l="../fonts/" + url.match(/[^\s\/]+\.woff2/)[0];
        return l;
    })
    return res;
}


async function downloadArray(urls, filenames,css) {

let blobs=[];
for(let t=0;t<urls.length;t++){
    let blob = await fetch(urls[t]).then(function(t) {
        // console.log(t)
        return t.blob();
    }).catch(e=>alert(e));
    blobs.push(blob);

}

var zip = new JSZip();
blobs.forEach((element,i) => {
        zip.file(filenames[i], element);
});

zip.file('google-fonts.css', linksToFont(css));
zip.generateAsync({type:"blob"})
.then(function(content) {
    saveAs(content, "fonts.zip");
});
}


$('#get').on('click', function () {
    
    try{

        if(!$('#link').val()){
            alert('Put link to font css')
            return false
        }

        $.get($('#link').val(), null,
        function (data, textStatus, jqXHR) {
            // console.log(textStatus)
        
           let res= getURLs(data) ;
            // console.log(res)
            let fileNames = res.map(e=>{
                return e.match(/[^\s\/]+\.woff2/)[0]
            });
            downloadArray(res,fileNames,data)
        },
        "text"
        ).catch(e=>alert(e.status+" "+e.statusText));
    }
    catch(err){
        console.log(err)
    }
});
