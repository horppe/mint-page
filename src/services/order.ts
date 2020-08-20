import { Order } from "../types/Order";

export default class OrderService {
    getAll(length: number): Order[] {

        const orders: Order[] = [

        ];

        for (let i = 0; i < length; i++) {
            orders.push({
                id: `abc${i}`,
                location: `${i % 2 == 0 ? "Sabo Street, " : "Bodija"} ${i % 2 == 0 ? "Lagos State" : "Ibadan, Oyo State"}`,
                price: "19.99",
                type: "VW",
                transactionNumber: i,
                time: Date.now(),
                status: i % 2 == 0 ? "reconciled" : i < 15 ? "pending" : "unreconciled",

            });
        }

        return orders;
    }
}


