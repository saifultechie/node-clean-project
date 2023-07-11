import CryptoJS from "crypto-js"
export const  sha256Encription = (password : string) => {
    return CryptoJS.SHA3(password).toString()
}