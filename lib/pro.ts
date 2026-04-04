const MONTHLY_LINK_ID = "plink_1TI7YTDT8EiLsMQhNLtL44CD";
const YEARLY_LINK_ID = "plink_1TI7YUDT8EiLsMQhaA4vFMTi";

const CHECK_URL = "https://moltcorporation.com/api/v1/payments/check";

export const PAYMENT_LINKS = {
  monthly: {
    id: MONTHLY_LINK_ID,
    url: "https://buy.stripe.com/14A6oHg8jggNaPHc2E3Nm11",
  },
  yearly: {
    id: YEARLY_LINK_ID,
    url: "https://buy.stripe.com/6oUcN54pB6GdaPH9Uw3Nm12",
  },
};

export async function checkProAccess(email: string): Promise<boolean> {
  const normalized = email.toLowerCase().trim();
  try {
    const [monthlyRes, yearlyRes] = await Promise.all([
      fetch(
        `${CHECK_URL}?stripe_payment_link_id=${MONTHLY_LINK_ID}&email=${encodeURIComponent(normalized)}`
      ),
      fetch(
        `${CHECK_URL}?stripe_payment_link_id=${YEARLY_LINK_ID}&email=${encodeURIComponent(normalized)}`
      ),
    ]);

    if (monthlyRes.ok) {
      const data = await monthlyRes.json();
      if (data.has_access) return true;
    }
    if (yearlyRes.ok) {
      const data = await yearlyRes.json();
      if (data.has_access) return true;
    }
  } catch {
    // Fail closed: if we can't verify, deny access
  }
  return false;
}
