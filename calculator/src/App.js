
import './App.css';

function add(a,b) {
let c = a+b;
  return c ; 
}
function sub(a,b) {
  
  let c = a-b;
    return c ; 
  }
  function div(a,b) {
    let c = a/b;
    c= c.toFixed(2);
      return c ; 
    }
    function mul(a,b) {
      let c = a*b;
        return c ; 
      }
      
      

export default add;
export {sub,div,mul};
