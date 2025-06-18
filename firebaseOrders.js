import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

function OrderComponent() {
  async function saveOrder(order) {
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        ...order,
        orderDate: serverTimestamp(),
      });
      console.log("Order saved with ID:", docRef.id);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to place order.");
    }
  }

  const handlePlaceOrder = () => {
    const order = {
      customerName: "John Doe",
      items: [{ name: "Tomato", quantity: 2, price: 30 }],
      totalAmount: 60,
    };
    saveOrder(order);
  };

  return <button onClick={handlePlaceOrder}>Place Order</button>;
}
