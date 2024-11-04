import { NextResponse } from "next/server";
import { 
  compileBusinessrFailTemplate,
  compileBusinessSuccessTemplate,
  sendMail } from "../../../../../lib/mail";

export async function POST(request:Request) {
  const data = await request.json();
  
  if (data.mailType === "businessMissMatch"){

    try {
      await sendMail({
        to: data.to,
        name: data.name,
        subject: "Action Required: Mismatch of Business Details in Submitted Documents",
        body: compileBusinessrFailTemplate(data.name, data.to)
      })
      return NextResponse.json({ success: true })
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err.message }, { status: err.status })
    }

  } else if (data.mailType === "businessVerified"){

    try {
      await sendMail({
        to: data.to,
        name: data.name,
        subject: "Your Business Verification is Complete!",
        body: compileBusinessSuccessTemplate(data.name, data.to)
      })
      return NextResponse.json({ success: true })
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err.message }, { status: err.status })
    }

  } 

}