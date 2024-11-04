import { NextResponse } from "next/server";
import { 
  compileVechicleSuccessTemplate, 
  compileDriverSuccessTemplate, 
  compileVechicleFailTemplate, 
  compileDriverFailTemplate, 
  sendMail } from "../../../../../lib/mail";

export async function POST(request:Request) {
  const data = await request.json();
  
  if (data.mailType === "driverMissMatch"){

    try {
      await sendMail({
        to: data.to,
        name: data.name,
        subject: "Action Required: Mismatch of Driver Details in Submitted Documents",
        body: compileDriverFailTemplate(data.name, data.to)
      })
      return NextResponse.json({ success: true })
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err.message }, { status: err.status })
    }

  } else if (data.mailType === "driverVerified"){

    try {
      await sendMail({
        to: data.to,
        name: data.name,
        subject: "Your Verification is Complete!",
        body: compileDriverSuccessTemplate(data.name, data.to)
      })
      return NextResponse.json({ success: true })
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err.message }, { status: err.status })
    }

  } else if (data.mailType === "vehicleMissMatch"){

    try {
      await sendMail({
        to: data.to,
        name: data.name,
        subject: "Action Required: Mismatch of Vehicle Details in Submitted Documents",
        body: compileVechicleFailTemplate(data.name, data.to)
      })
      return NextResponse.json({ success: true })
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err.message }, { status: err.status })
    }

  } else if (data.mailType === "vehicleVerified"){

    try {
      await sendMail({
        to: data.to,
        name: data.name,
        subject: "Vehicle Verification Successful!",
        body: compileVechicleSuccessTemplate(data.name, data.to)
      })
      return NextResponse.json({ success: true })
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err.message }, { status: err.status })
    }

  }

}