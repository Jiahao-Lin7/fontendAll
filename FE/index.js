var line = '2 4'
var arr = line.split(' ')
let l = parseInt(arr[0]),r = parseInt(arr[1])
console.log(l,r);
let res = l
for(let i =  l + 1; i <= r; i++){
    res = res ^ i
}
console.log(res)

var a = 0 || 1 || 2
console.log(a)

let b = {
    value: 0,
    valueOf() {
      this.value++
      return this.value
    }
  }
  console.log(b.valueOf())
  console.log(b==1&&b==2&&b==3)

  function objectFactory() {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);
    if(typeof constructor !== "function"){
      console.log("error");
      return;
    }
    newObject = Object.create(constructor.prototype);
    result = constructor.apply(newObject, arguments);
    let flag = result && (typeof result === "object" || typeof result === "function");
    return flag ? result : newObject;
  }

  function getJson(){
    let promise  = new Promise((resolve, reject) => {
      let xml = new XMLHttpRequest();
      xml.open("GET", url, true);
      xml.onreadystatechange = function(){
        if(this.readyState !== 4) return;
        if(this.status === 200){
          resolve(this.response);
        }else{
          reject(new Error(this.statusText));
        }
      }
      xml.onerror = function(){
        reject(new Error(this.statusText));
      }
      xml.responseType = "json";
      xml.setRequestHeader("Accept", "application/json");
      xml.send(null);
    });
    return promise;
  }