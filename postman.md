# How to Test the API with Postman
1. Create an admin and non admin user at POST `/api/v1/users`
- Admin:
```json
{
    "username":"john_d",
    "fullname" : "John Doe",
    "email" : "johnd@gmail.com",
    "isAdmin" : true,
    "password" : "johnd"
}
- Non Admin:
{
    "username":"harry",
    "fullname" : "Harry Potter",
    "email" : "harry@gmail.com",
    "isAdmin" : false,
    "password" : "harryp"
}
```
2. Login with the Admin User Credentials at POST `api/v1/users/login`
```json
{
    "username": "john_d",
    "password": "johnd"
}
```
3. Create Categories at POST `api/v1/categories`
```json
{
    "name": "Luggage",
    "description": "All types of bags, laptop bags, travel bags, etc"
}
```
4. Create Products at POST `api/v1/products`
```json
{
    "name": "Laptop Bag",
    "description": "Sleek beautiful laptop bag",
    "price": 45,
    "quantityInStock": 10,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "categoryId": "<:luggageId>"
}
```