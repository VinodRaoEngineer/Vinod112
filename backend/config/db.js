import mongoose from "mongoose"

export const connectDB = async () => {
   await mongoose.connect('{mongodb+srv://mohitevinod55:1234566@cluster0.vrmd5.mongodb.net/?}/food-del')
   .then(()=>console.log("DB Connected"));

}

// password = 1234566
// username = mohitevinod55
