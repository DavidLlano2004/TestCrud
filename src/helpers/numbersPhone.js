export const  generateRandomPhoneNumber = ()=> {
    const countryCode = '+34'; 
    const areaCode = Math.floor(Math.random() * 900) + 600; 
    const numberPart1 = Math.floor(Math.random() * 900) + 100; 
    const numberPart2 = Math.floor(Math.random() * 9000) + 1000; 

    return `${countryCode} ${areaCode} ${numberPart1} ${numberPart2}`;
}


