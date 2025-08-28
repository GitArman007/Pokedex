function useDebounce( cb , delay = 2000 ){
    let timerId;
        return ( ...args) =>{
          clearTimeout(timerId)
          timerId =   setTimeout(()=>{
                    cb(...args)
            } , delay )
        }
}
export default useDebounce;
//debounce take original callback and returns a modified callback 
//this modified callback is always call with some delay 
//it did not imigiate call 
/**
 function fun(...args){
  conssole.log(args)
 }
  fun(10) , fun(10,20,30) , fun(10,20,30)
  when we use ...args we can pass any number of argument 
  does'nt matter how many callbacks we have pass 
  varaiale arguments 
 */