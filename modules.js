export {EMath, Edom};
class EMath {
    static rand(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static gcd(x, y){if(x % y){
            return gcd(y, x % y);
              }else{
                  return y;
    }}
    static lcm(x, y){return (a * b) / gcd(a, b);}
    static sin(deg){return Math.sin(deg * (Math.PI() / 180))}
    static cos(deg){return Math.cos(deg * (Math.PI() / 180))}
    static tan(deg){return Math.tan(deg * (Math.PI() / 180))}
}
class Edom {
    static elem(id){return document.getElementById(id);}
}