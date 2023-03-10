import React, {useEffect, useState} from "react";
import save from '../../assets/invoices_save.svg'
import send from '../../assets/invoices_send.svg'
import SideBar from "./SideBar";
import Stripe from "stripe"
import {BeatLoader} from "react-spinners"

function Invoices() {
    const [subscription, setSubscription] = useState(null);
    const [pdfData, setPdfData] = useState(null);

    useEffect(() => {
      async function fetchSubscription() {
        const stripe = new Stripe('sk_test_51MjskOSDZCyHubXDZPTJuybvpbP4yXvpZbm7sxTGFcV2jn6TgRplRnLxsBP7tkjrc9H4zUfiz9FEFLuGJS75bMax00b2mkoGju');
    
        const subscriptions  = await stripe.subscriptions.retrieve('sub_1Mk0z2SDZCyHubXDjMqkUTVP', {
            expand: ['latest_invoice.payment_intent'],
          });

          console.log(subscriptions)
    
        setSubscription(subscriptions)
      }

      fetchSubscription();
    }, []);

    return (
        <div className="bg-agencyGrey text-white h-full fixed w-full justify-start">
            <div className="bg-agencyGrey text-white h-20 flex w-full flex-wrap items-center justify-between px-4 mb-10 border-b border-agencyOutline ">
                <h1 className="font-bold text-4xl ml-8 top-5"> Invoices </h1>
            </div>
            <div className="rounded-2xl bg-agencyDark block text-white mt-10 ml-32 p-8 h-full w-11/12 outline outline-1 outline-slate-500">
            {subscription ? (
                    <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-agencyGrey">
                        <th className="px-4 py-2">Client</th>
                        <th className="px-4 py-2">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="bg-agencyGrey">
                        <td className="border px-4 py-2">{subscription.latest_invoice.customer_email}</td>
                        <td className="border px-4 py-2"><a href={subscription.latest_invoice.hosted_invoice_url} target="_blank" className="underline hover:text-blue-500">View Invoice</a></td>
                        <div>
                    </div>
                        </tr>
                    </tbody>
                    <a href={subscription.latest_invoice.invoice_pdf}>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Download Invoice</button>
                    </a>
                    </table>
                ) : (
                    <p className="text-center"><BeatLoader color="white"/></p>
                )}
                </div>
            <SideBar/>
        </div>
    )
}

export default Invoices