
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const sampleOrderData = [
  {
    orderNumber: "123456",
    customerName: "John Doe",
    customerEmail: "john.doe@example.com",
    items: [
      {
        id: "1",
        name: "Chirpy Wall Light",
        quantity: 2,
        price: 100,
        imageUrl: "",
        status: "Delivered"
      },
      {
        id: "2",
        name: "Product 2",
        quantity: 1,
        price: 200,
        imageUrl: "",
        status: "Shipping"
      }
    ],
    totalAmount: 400,
    orderDate: "2023-11-21T07:57:09.351Z"
  },
  {
    orderNumber: "789012",
    customerName: "Jane Smith",
    customerEmail: "jane.smith@example.com",
    items: [
      {
        id: "3",
        name: "Product 3",
        quantity: 1,
        price: 300,
        imageUrl: "",
        status: "Cancelled"
      },
      {
        id: "4",
        name: "Product 4",
        quantity: 3,
        price: 150,
        imageUrl: "",
        status: "Delivered"
      }
    ],
    totalAmount: 750,
    orderDate: "2023-11-20T10:30:00.000Z"
  }
];

const OrderPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Order History</h1>
      {sampleOrderData.map((order) => (
        <div key={order.orderNumber} className="mb-8 p-4 border rounded-lg shadow-md">
          <div className="mb-4">
            <strong>Order Number:</strong> {order.orderNumber}
          </div>
          <div className="mb-4">
            <strong>Customer Name:</strong> {order.customerName}
          </div>
          <div className="mb-4">
            <strong>Customer Email:</strong> {order.customerEmail}
          </div>
          <div className="mb-4">
            <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleString()}
          </div>
          <div className="mb-4">
            <strong>Total Amount:</strong> ₹{order.totalAmount}
          </div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Items</h2>
          <div>
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div>Quantity: {item.quantity}</div>
                  <div>Price: ₹{item.price}</div>
                  <div>Status: <span className={`font-bold ${item.status === 'Delivered' ? 'text-green-600' : item.status === 'Shipping' ? 'text-yellow-600' : 'text-red-600'}`}>{item.status}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link href="/">
        <Button className="mt-4 bg-blue-600 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default OrderPage;