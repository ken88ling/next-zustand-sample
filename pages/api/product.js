// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { date } = req.query;

  // you can use the date to filter return value
  const groceryItems = [
    { id: 1, name: "Apples", price: 2.99, dateAdded: "2022-01-01" },
    { id: 2, name: "Bananas", price: 1.49, dateAdded: "2022-01-02" },
    { id: 3, name: "Bread", price: 3.49, dateAdded: "2022-01-03" },
    { id: 4, name: "Butter", price: 2.99, dateAdded: "2022-01-04" },
    { id: 5, name: "Cheese", price: 5.99, dateAdded: "2022-01-05" },
    { id: 6, name: "Eggs", price: 4.49, dateAdded: "2022-01-06" },
    { id: 7, name: "Milk", price: 2.29, dateAdded: "2022-01-07" },
    { id: 8, name: "Salmon", price: 9.99, dateAdded: "2022-01-08" },
    { id: 9, name: "Spinach", price: 1.99, dateAdded: "2022-01-09" },
    { id: 10, name: "Tomatoes", price: 3.49, dateAdded: "2022-01-10" },
  ];

  // similar 2 second and get back data
  setTimeout(() => {
    res.status(200).json({ items: groceryItems, date });
  }, 2000);
}
