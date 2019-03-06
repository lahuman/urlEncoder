
//base regex

const re = /((?:http(?:s)?:\/\/)(?:[a-z0-9\w\-]+\.*)+[a-z0-9]{2,4})(.*)/gi;
const urlEncoding = (url) => {
  try{ 
    const results = re.exec(url);
    re.lastIndex = 0;
    const domain = results[1];
    const urls = results[2].substr(1).split('/');
    const convertUrls = urls.map(u=>encodeURIComponent(decodeURIComponent(u))).reduce((url, u)=> `${url}/${u}`, '');
    return `${domain}${convertUrls}`
  }catch(e) {
    return url;
  };
}

module.exports = urlEncoding;
