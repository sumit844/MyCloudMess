import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import mongoose from "mongoose";

export async function connectToDatabase() {
  
    if (mongoose?.connection?.readyState === 0) {
      await mongoose.connect(
        "mongodb+srv://aquaeasy786:I1yMdsPJq9eVSaWD@cluster0.vllphxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
    }
  
}

export const middleware = async(request: NextRequest) => {
  console.log("Request to:", request.nextUrl.pathname);

  // You can modify the response or just continue
  return NextResponse.next();
};
