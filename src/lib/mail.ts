import nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import { driverVerificationSuccessTemplate } from './templates/driverVerficationSuccess';
import { vechicleVerificationSuccessTemplate } from './templates/vechicleVerficationSuccess';
import { vechicleMissmatchTemplate } from './templates/vechicleMissMatch';
import { driverMissMatchTemplate } from './templates/missMatchDetails';
import { businessRegistrationSuccessTemplate } from './templates/successBusinessRegistartion';
import { invalidBusinessRegistrartionNumberTemplate } from './templates/InvalidBusinessRegistartion';


export async function sendMail({to, name, subject, body}:{to: string, name: string, subject: string, body: string}){
  const {SMTP_PASSWORD, SMTP_EMAIL} = process.env

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    },
  })

  try {
    const testResult = await transport.verify()
    console.log(testResult)
  } catch (err) {
    console.error(err)
    return
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL, to, subject, html: body 
    })
    console.log(sendResult)
  } catch (err) {
    console.log(err)
  }
}

// Vechicle Registration Success
export function compileVechicleSuccessTemplate(name: string, url: string){
  const template = handlebars.compile(vechicleVerificationSuccessTemplate)
  const htmlBody = template({
    driverName: name,
    driverMail: url
  })
  return htmlBody
}

export function compileVechicleFailTemplate(name: string, url: string){
  const template = handlebars.compile(vechicleMissmatchTemplate)
  const htmlBody = template({
    driverName: name,
    driverMail: url
  })
  return htmlBody
}


// Driver Registration Success
export function compileDriverSuccessTemplate(name: string, url: string){
  const template = handlebars.compile(driverVerificationSuccessTemplate)
  const htmlBody = template({
    driverName: name,
    driverMail: url
  })
  return htmlBody
}

export function compileDriverFailTemplate(name: string, url: string){
  const template = handlebars.compile(driverMissMatchTemplate)
  const htmlBody = template({
    driverName: name,
    driverMail: url
  })
  return htmlBody
}

// Business Registration Success
export function compileBusinessSuccessTemplate(name: string, url: string){
  const template = handlebars.compile(businessRegistrationSuccessTemplate)
  const htmlBody = template({
    consignerName: name,
    consignerMail: url
  })
  return htmlBody
}

export function compileBusinessrFailTemplate(name: string, url: string){
  const template = handlebars.compile(invalidBusinessRegistrartionNumberTemplate)
  const htmlBody = template({
    consignerName: name,
    consignerMail: url
  })
  return htmlBody
}