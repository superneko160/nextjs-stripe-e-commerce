import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left md:gap-10">
            <h1 className='text-4xl font-extrabold'>Products</h1>
            <script async src="https://js.stripe.com/v3/buy-button.js">
            </script>

            <stripe-buy-button
                buy-button-id="buy_btn_1QYQL6CyN2VpjsXbFB1Cd7Hd"
                publishable-key="pk_test_51QYNqsCyN2VpjsXbqITwbIj7QiJBGDzS4m10N9vN1nWXEUDU9kwawFlYoOVgfKQafN3Y9bSvVMkInFKISTD03uyJ005hmE5kAH"
            >
            </stripe-buy-button>

            <stripe-buy-button
                buy-button-id="buy_btn_1QYSN4CyN2VpjsXb10xAzwF0"
                publishable-key="pk_test_51QYNqsCyN2VpjsXbqITwbIj7QiJBGDzS4m10N9vN1nWXEUDU9kwawFlYoOVgfKQafN3Y9bSvVMkInFKISTD03uyJ005hmE5kAH"
            >
            </stripe-buy-button>

            <stripe-buy-button
                buy-button-id="buy_btn_1QYSQXCyN2VpjsXbGHf4OwOn"
                publishable-key="pk_test_51QYNqsCyN2VpjsXbqITwbIj7QiJBGDzS4m10N9vN1nWXEUDU9kwawFlYoOVgfKQafN3Y9bSvVMkInFKISTD03uyJ005hmE5kAH"
            >
            </stripe-buy-button>

            <stripe-buy-button
                buy-button-id="buy_btn_1QYSRoCyN2VpjsXbBFJA2oRO"
                publishable-key="pk_test_51QYNqsCyN2VpjsXbqITwbIj7QiJBGDzS4m10N9vN1nWXEUDU9kwawFlYoOVgfKQafN3Y9bSvVMkInFKISTD03uyJ005hmE5kAH"
            >
            </stripe-buy-button>
         </div>
    </main>
  )
}
