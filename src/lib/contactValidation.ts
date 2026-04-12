export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MOBILE_PATTERN = /^\+?[0-9\s\-()]{10,20}$/;

export function validateEmail(value: string): string | null {
  const email = value.trim();

  if (!email) {
    return "Email is required.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Enter a valid email address.";
  }

  return null;
}

export function validateMobileNumber(value: string): string | null {
  const mobileNumber = value.trim();
  const digitsOnly = mobileNumber.replace(/\D/g, "");

  if (!mobileNumber) {
    return "Mobile number is required.";
  }

  if (!MOBILE_PATTERN.test(mobileNumber) || digitsOnly.length < 10 || digitsOnly.length > 15) {
    return "Enter a valid mobile number.";
  }

  return null;
}
