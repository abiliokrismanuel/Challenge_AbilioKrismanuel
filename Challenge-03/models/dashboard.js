const dashboards = [
    {
        id: 1,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 2,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 3,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 4,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 5,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 6,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 7,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 8,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 9,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 10,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 11,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 12,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 13,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 14,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 15,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
    {
        id: 16,
        email:"user email",
        car: "car name",
        start_rent: "start rent",
        end_rent: "end rent",
        price : "price",
        status: "status",
    },
];

module.exports = {
    findAll:() => Promise.resolve(dashboards),
    create: ({email, car, start_rent, end_rent, price, status}) => {
        const id = dashboards[dashboards.length - 1].id + 1;
        const dashboard = {id, email, car, start_rent, end_rent, price, status};
        dashboards.push(dashboard);
        return Promise.resolve(dashboard);
    }
};
