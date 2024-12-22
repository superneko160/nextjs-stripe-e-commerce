import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY as string)

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || 'http://localhost:3000'
  const referer = request.headers.get('referer') || 'http://localhost:3000'

  if (
    request.headers.get('content-type') === 'application/x-www-form-urlencoded'
  ) {
    const body = await request.formData()
    const priceId = body.get('price_id')?.toString()
    if (!priceId) {
      return NextResponse.json(
        {
          message: 'Cart is empty',
        },
        {
          status: 400,
        },
      )
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      cancel_url: referer,
      success_url: `${origin}?success=true`,
      mode: 'payment',
    })

    if (session.url) {
      return NextResponse.redirect(new URL(session.url), 303)
    } else {
      return NextResponse.json(
        {
          message:
            'Failed to create a new checkout session. Please check your Stripe Dashboard.',
        },
        {
          status: 400,
        },
      )
    }
  } else if (request.headers.get('content-type') === 'application/json') {
    // If you want to add cart feature, use this section
  }
  return NextResponse.json(
    {
      message: 'Invalid request',
    },
    {
      status: 400,
    },
  )
}
