import twilio from "twilio";
import { ENV } from "./env.js";

// Initialize twilio client.
const accountSid = ENV.TWILIO_ACCOUNT_SID || "AC00000000000000000000000000000000";
const authToken = ENV.TWILIO_AUTH_TOKEN || "dummy_token";
export const twilioClient = twilio(accountSid, authToken);

export const senderPhoneNumber = "+1234567890"; // Placeholder, replace with your actual Twilio phone number
