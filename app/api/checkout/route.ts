import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      packageId,
      packageName,
      priceLabel,
      currency,
      serviceSlug,
      paymentProductId,
      paymentPriceId,
    } = body

    if (!packageId || !packageName || !priceLabel) {
      return NextResponse.json({ success: false, error: 'Brak wymaganych danych pakietu.' }, { status: 400 })
    }

    // TODO: Tutaj podłącz rzeczywistą bramkę płatności (Stripe, PayU, itp.).
    // Obecnie zwracamy przykładowy redirectUrl, który może zostać zastąpiony
    // przez adres sesji płatności w przyszłej integracji.
    const checkoutUrl = `/thank-you?package=${encodeURIComponent(packageId)}&service=${encodeURIComponent(serviceSlug)}`

    return NextResponse.json({
      success: true,
      message: 'Przekierowujemy do strony płatności...',
      redirectUrl: checkoutUrl,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Błąd serwera. Spróbuj ponownie.' }, { status: 500 })
  }
}
