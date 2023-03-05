This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev

```

* Developing a date picker feature to pass the selected date value to other components

* Multiple components are connected to the store to handle different results

* Component1.js and Component2.js will display the selected date

* Component3.js will display the selected date and make an API call to fetch related data
The API response time will be slowed down to simulate a delay of 2 seconds

* The slow response time will be handled using a side-effect of displaying a loading indicator
The sample code will demonstrate how to use Zustand.js to handle the side-effect of a slow API response.