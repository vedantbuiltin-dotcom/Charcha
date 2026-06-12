import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, ShieldCheckIcon, LoaderIcon } from "lucide-react";
import { Navigate } from "react-router";

function OtpPage() {
  const [otp, setOtp] = useState("");
  const { verifyOtp, isVerifyingOtp, pendingVerification } = useAuthStore();

  if (!pendingVerification) {
    return <Navigate to="/login" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOtp({ phoneNumber: pendingVerification, otp });
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900 z-10">
      <div className="relative w-full max-w-md h-auto">
        <BorderAnimatedContainer>
          <div className="w-full p-8 flex items-center justify-center">
            <div className="w-full">
              <div className="text-center mb-8">
                <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                <h2 className="text-2xl font-bold text-slate-200 mb-2">Verify Your Number</h2>
                <p className="text-slate-400">
                  We've sent a code to <br />
                  <span className="font-semibold text-slate-300">{pendingVerification}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="auth-input-label">Verification Code</label>
                  <div className="relative">
                    <ShieldCheckIcon className="auth-input-icon" />
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                      className="input tracking-widest text-center"
                      placeholder="000000"
                      required
                    />
                  </div>
                </div>

                <button className="auth-btn" type="submit" disabled={isVerifyingOtp || otp.length < 4}>
                  {isVerifyingOtp ? (
                    <LoaderIcon className="w-full h-5 animate-spin text-center" />
                  ) : (
                    "Verify OTP"
                  )}
                </button>
              </form>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default OtpPage;
