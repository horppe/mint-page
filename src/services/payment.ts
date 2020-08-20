import { Payment } from "../types/Payment";

export default class PaymentService {
    getAll(length: number): Payment[] {

        const payments: Payment[] = [

        ];

        for (let i = 0; i < length; i++) {
            payments.push({
                id: `abc${i}`,
                name: `Apple Mac Book 15" 25${i} SSD ${i}`,
                price: "19.99",
                type: "VW",
                transactionNumber: i,
                time: Date.now(),
                status: i % 2 == 0 ? "reconciled" : i < 15 ? "pending" : "unreconciled",

            });
        }

        return payments;
    }
}


