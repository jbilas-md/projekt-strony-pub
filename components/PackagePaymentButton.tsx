'use client'

import { useState } from 'react'

interface PackagePaymentButtonProps {
  packageId: string
  packageName: string
  priceLabel: string
  serviceSlug: string
  currency?: string
  paymentProductId?: string
  paymentPriceId?: string
}

export default function PackagePaymentButton({
  packageId,
  packageName,
  priceLabel,
  serviceSlug,
  currency = 'PLN',
  paymentProductId,
  paymentPriceId,
}: PackagePaymentButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  async function handleCheckout() {
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageId,
          packageName,
          priceLabel,
          currency,
          serviceSlug,
          paymentProductId,
          paymentPriceId,
        }),
      })

      const result = await response.json()
      if (!response.ok || !result.success) {
        setStatus('error')
        setMessage(result.error || 'Nie udało się rozpocząć płatności. Spróbuj ponownie później.')
        return
      }

      if (result.redirectUrl) {
        window.location.href = result.redirectUrl
        return
      }

      setStatus('success')
      setMessage(result.message || 'Zlecenie pakietu zostało przyjęte. Skontaktujemy się z Tobą wkrótce.')
    } catch (error) {
      setStatus('error')
      setMessage('Wystąpił błąd sieci. Spróbuj ponownie.')
    }
  }

  return (
    <div className="mt-auto">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={status === 'loading'}
        className={`w-full py-4 font-black rounded-xl text-sm uppercase tracking-widest transition-all ${
          status === 'loading'
            ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
            : 'bg-nova-blue text-white hover:bg-nova-dark'
        }`}
      >
        {status === 'loading' ? 'Przetwarzanie...' : 'Wybierz pakiet'}
      </button>
      {message && (
        <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
