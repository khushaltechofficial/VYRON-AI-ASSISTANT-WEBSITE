import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_compilation_build', {
  apiVersion: '2025-02-24.acacia' as any,
});

export async function POST(req: Request) {
  try {
    const { planName, billingCycle } = await req.json();

    // Standard redirect urls matching local or deployed vercel origin
    const origin = req.headers.get('origin') || 'https://vyron-nu.vercel.app';

    // Select Stripe price ID based on billing cycle (falling back to placeholder price IDs if not set)
    const priceId = billingCycle === 'yearly' 
      ? process.env.STRIPE_YEARLY_PRICE_ID || 'price_1HP2vA2eZvKYlo2C88888888'
      : process.env.STRIPE_MONTHLY_PRICE_ID || 'price_1HP2vA2eZvKYlo2C99999999';

    if (!process.env.STRIPE_SECRET_KEY) {
      // Simulate real Stripe redirect locally if credentials are not filled yet (super useful for testing!)
      return NextResponse.json({ 
        url: `${origin}/download?session_id=mock_session_success` 
      });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/download?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: {
        planName,
        billingCycle,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe Checkout Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
