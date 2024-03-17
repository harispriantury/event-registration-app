Event Registration app with express typescript prisma

{
"info": {
"\_postman_id": "31199429-fba3-43b4-ba50-fc378f45ef84",
"name": "registration",
"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
"\_exporter_id": "24597913"
},
"item": [
{
"name": "auth-register",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"username\": \"haris2\",\n \"password\" : \"haris2\",\n \"email\" : \"haris@gmail.com\"\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3000/auth/register",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["auth", "register"]
}
},
"response": []
},
{
"name": "auth-login",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"username\": \"haris\",\n \"password\" : \"haris\",\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3000/auth/login",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["auth", "login"]
}
},
"response": []
},
{
"name": "users get",
"request": {
"auth": {
"type": "bearer",
"bearer": [
{
"key": "token",
"value": "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmlzMiIsImVtYWlsIjoiaGFyaXNAZ21haWwuY29tIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQwMkVlVHBpdmh6aThRRmQ4UU82SzdldmtHSUV6RzZFd1M5VjVobGJ0RUFyT2xaREtsUkhzUyIsImNyZWF0ZWRBdCI6IjIwMjQtMDMtMTZUMTA6NTY6MzguMjc5WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDMtMTZUMTA6NTY6MzguMjc5WiIsImlhdCI6MTcxMDYwNjI2NiwiZXhwIjoxNzEwNjQyMjY2fQ.JYNvOSU-yEWlKFA1lkpHTII-XTUDzHJzhSYUT9Sr1DE",
"type": "string"
}
]
},
"method": "GET",
"header": [],
"url": {
"raw": "http://localhost:3000/users",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["users"]
}
},
"response": []
},
{
"name": "event get",
"request": {
"method": "GET",
"header": [],
"url": {
"raw": "http://localhost:3000/events",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["events"]
}
},
"response": []
},
{
"name": "event get by id",
"request": {
"method": "GET",
"header": [],
"url": {
"raw": "http://localhost:3000/events/1",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["events", "1"]
}
},
"response": []
},
{
"name": "event edit",
"request": {
"auth": {
"type": "bearer",
"bearer": [
{
"key": "token",
"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmlzMyIsImVtYWlsIjoiaGFyaXMzQGdtYWlsLmNvbSIsInBhc3N3b3JkX2hhc2giOiIkMmEkMTAkQkJoQnRkU1NPMVk1ZEdJWDJPMC9ST0NIZzNXNUZVdE4xZzNRRHY5VnM2d2JMVHhhcXpwRTYiLCJjcmVhdGVkQXQiOiIyMDI0LTAzLTE2VDE2OjQ2OjI1LjUwNloiLCJ1cGRhdGVkQXQiOiIyMDI0LTAzLTE2VDE2OjQ2OjI1LjUwNloiLCJpYXQiOjE3MTA2NDczNDUsImV4cCI6MTcxMDY4MzM0NX0.huJT0suqinA3DTWQ85wsbLfD4tuKq5swFYUzx4VSc5o",
"type": "string"
}
]
},
"method": "PATCH",
"header": [],
"url": {
"raw": "http://localhost:3000/events/99",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["events", "99"]
}
},
"response": []
},
{
"name": "event create",
"request": {
"auth": {
"type": "bearer",
"bearer": [
{
"key": "token",
"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmlzMyIsImVtYWlsIjoiaGFyaXMzQGdtYWlsLmNvbSIsInBhc3N3b3JkX2hhc2giOiIkMmEkMTAkQkJoQnRkU1NPMVk1ZEdJWDJPMC9ST0NIZzNXNUZVdE4xZzNRRHY5VnM2d2JMVHhhcXpwRTYiLCJjcmVhdGVkQXQiOiIyMDI0LTAzLTE2VDE2OjQ2OjI1LjUwNloiLCJ1cGRhdGVkQXQiOiIyMDI0LTAzLTE2VDE2OjQ2OjI1LjUwNloiLCJpYXQiOjE3MTA2MDc2MDIsImV4cCI6MTcxMDY0MzYwMn0.JHI5rr2Tosa8mRaKFAzAenf1taBw4YbVLKUwgo7AMk8",
"type": "string"
}
]
},
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"name\": \"rajaban\",\n \"description\": \"acara rajaban\",\n \"location\": \"kebumen\"\n}",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3000/events",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["events"]
}
},
"response": []
},
{
"name": "event delete",
"request": {
"method": "GET",
"header": []
},
"response": []
},
{
"name": "registration create",
"request": {
"method": "POST",
"header": [],
"body": {
"mode": "raw",
"raw": "{\n \"eventId\": 2,\n \"name\": \"jono\",\n \"email\": \"jono@gmail.com\",\n \"phoneNumber\": \"089584983\",\n \"status\": \"masuk\"\n }",
"options": {
"raw": {
"language": "json"
}
}
},
"url": {
"raw": "http://localhost:3000/registrations",
"protocol": "http",
"host": ["localhost"],
"port": "3000",
"path": ["registrations"]
}
},
"response": []
},
{
"name": "registration get",
"request": {
"method": "GET",
"header": []
},
"response": []
}
]
}
