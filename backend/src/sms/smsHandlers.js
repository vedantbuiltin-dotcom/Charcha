import { twilioClient } from "../lib/twilio.js";
import { ENV } from "../lib/env.js";

const verifyServiceSid = ENV.TWILIO_VERIFY_SERVICE_SID || "VA00000000000000000000000000000000";

export const sendOTP = async (phoneNumber) => {
  try {
    const verification = await twilioClient.verify.v2
      .services(verifyServiceSid)
      .verifications.create({ to: phoneNumber, channel: "sms" });
    console.log("OTP sent successfully", verification.sid);
    return verification.status;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP");
  }
};

export const verifyOTP = async (phoneNumber, code) => {
  try {
    const verificationCheck = await twilioClient.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({ to: phoneNumber, code: code });
    console.log("OTP verification status:", verificationCheck.status);
    return verificationCheck.status === "approved";
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return false;
  }
};
